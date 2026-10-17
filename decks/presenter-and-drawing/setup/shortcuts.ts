import type { Shortcut, ShortcutActions } from 'slide-ng/lib/shortcuts';

export default (actions: ShortcutActions, list: Shortcut[]): Shortcut[] => [
  ...list.filter((s) => s.name !== 'fullscreen'),
  { name: 'deck_dark', key: 'x', run: actions.toggleDark },
  { name: 'deck_draw', key: 'p', run: actions.toggleDrawing },
];
