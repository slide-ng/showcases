// orders-service.ts: the orders API used throughout this deck.
import { randomUUID } from 'node:crypto';

export type Currency = 'EUR' | 'USD' | 'GBP';
export type Status = 'draft' | 'placed' | 'paid' | 'shipped' | 'cancelled';

export interface LineItem {
  sku: string;
  name: string;
  qty: number;
  unitPrice: number;
}

export interface Order {
  id: string;
  customerId: string;
  currency: Currency;
  status: Status;
  items: LineItem[];
  createdAt: Date;
  paidAt?: Date;
}

export interface OrderStore {
  get(id: string): Promise<Order | undefined>;
  put(order: Order): Promise<void>;
  byCustomer(customerId: string): Promise<Order[]>;
}

export class OrderError extends Error {
  constructor(
    message: string,
    readonly code: 'not-found' | 'invalid' | 'conflict',
  ) {
    super(message);
  }
}

const TAX_RATE: Record<Currency, number> = { EUR: 0.2, USD: 0.0, GBP: 0.2 };
const FREE_SHIPPING_FROM = 50;
const SHIPPING = 4.9;

// #region core
export function subtotal(order: Order): number {
  return order.items.reduce((sum, item) => sum + item.qty * item.unitPrice, 0);
}

export function shipping(order: Order): number {
  return subtotal(order) >= FREE_SHIPPING_FROM ? 0 : SHIPPING;
}

export function tax(order: Order): number {
  return round(subtotal(order) * TAX_RATE[order.currency]);
}

export function total(order: Order): number {
  return round(subtotal(order) + shipping(order) + tax(order));
}

function round(value: number): number {
  return Math.round(value * 100) / 100;
}
// #endregion core

export class OrderService {
  constructor(private readonly store: OrderStore) {}

  async create(customerId: string, currency: Currency): Promise<Order> {
    const order: Order = {
      id: randomUUID(),
      customerId,
      currency,
      status: 'draft',
      items: [],
      createdAt: new Date(),
    };
    await this.store.put(order);
    return order;
  }

  async addItem(id: string, item: LineItem): Promise<Order> {
    const order = await this.load(id);
    if (order.status !== 'draft') {
      throw new OrderError(`order ${id} is ${order.status}`, 'conflict');
    }
    if (item.qty <= 0 || item.unitPrice < 0) {
      throw new OrderError('quantity and price must be positive', 'invalid');
    }
    const existing = order.items.find((i) => i.sku === item.sku);
    if (existing) existing.qty += item.qty;
    else order.items.push({ ...item });
    await this.store.put(order);
    return order;
  }

  async place(id: string): Promise<Order> {
    const order = await this.load(id);
    if (order.items.length === 0) {
      throw new OrderError('an empty order cannot be placed', 'invalid');
    }
    return this.move(order, 'draft', 'placed');
  }

  async pay(id: string): Promise<Order> {
    const order = await this.move(await this.load(id), 'placed', 'paid');
    order.paidAt = new Date();
    await this.store.put(order);
    return order;
  }

  async ship(id: string): Promise<Order> {
    return this.move(await this.load(id), 'paid', 'shipped');
  }

  async cancel(id: string): Promise<Order> {
    const order = await this.load(id);
    if (order.status === 'shipped') {
      throw new OrderError('a shipped order cannot be cancelled', 'conflict');
    }
    order.status = 'cancelled';
    await this.store.put(order);
    return order;
  }

  async spentBy(customerId: string): Promise<number> {
    const orders = await this.store.byCustomer(customerId);
    return orders
      .filter((o) => o.status === 'paid' || o.status === 'shipped')
      .reduce((sum, o) => sum + total(o), 0);
  }

  private async load(id: string): Promise<Order> {
    const order = await this.store.get(id);
    if (!order) throw new OrderError(`order ${id} not found`, 'not-found');
    return order;
  }

  private async move(order: Order, from: Status, to: Status): Promise<Order> {
    if (order.status !== from) {
      throw new OrderError(`order ${order.id} is ${order.status}, not ${from}`, 'conflict');
    }
    order.status = to;
    await this.store.put(order);
    return order;
  }
}
