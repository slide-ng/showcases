import type { Shortcut, ShortcutActions } from 'slide-ng/lib/shortcuts';

// Shortcuts: "x" toggles dark mode, "n" goes to the next step, Shift+K shows or hides the address label,
// and "f" (fullscreen) is taken out of the list.
export default (actions: ShortcutActions, list: Shortcut[]): Shortcut[] => [
  ...list.filter((s) => s.name !== 'fullscreen'),
  { name: 'deck_dark', key: 'x', run: actions.toggleDark },
  { name: 'deck_next', key: 'n', run: () => actions.next() },
  { name: 'deck_label', key: 'shift+K', run: () => void document.documentElement.classList.toggle('hide-path') },
];
