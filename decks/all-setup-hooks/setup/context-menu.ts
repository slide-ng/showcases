import type { ContextMenuItem } from 'slide-ng/setup';

// Context menu: a "Copy link to this slide" entry at the top of the right-click menu.
export default (items: ContextMenuItem[]): ContextMenuItem[] => [
  { icon: 'i-carbon:link', label: 'Copy link to this slide', run: () => void navigator.clipboard?.writeText(location.href) },
  ...items,
];
