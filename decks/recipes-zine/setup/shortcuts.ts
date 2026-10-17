import type { Shortcut, ShortcutActions } from 'slide-ng/lib/shortcuts';

// `n` turns the page, like the space bar: handy on a tablet keyboard propped up in the kitchen.
export default (actions: ShortcutActions, list: Shortcut[]): Shortcut[] => [
  ...list,
  { name: 'zine_next', key: 'n', run: () => actions.next() },
];
