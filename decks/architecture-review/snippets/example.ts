// order-service/handler.ts: the entry point of the order service
import { Queue } from './queue';

// #region handler
export async function handleOrder(order: { id: string; total: number }) {
  if (order.total <= 0) throw new Error('empty order');
  await Queue.publish('orders.created', order);
  return { accepted: true, id: order.id };
}
// #endregion handler

export const VERSION = '2.4.0';
