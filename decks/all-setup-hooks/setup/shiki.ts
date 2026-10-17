// Shiki: an extra language (Elixir), GitHub's light and dark colours, and a transformer
// that marks every block and gives its first line a class, which the deck's CSS styles as a header line.
export default () => ({
  langs: ['elixir'],
  themes: { light: 'github-light', dark: 'github-dark' },
  transformers: [
    {
      name: 'deck-mark',
      pre(node: { properties: Record<string, unknown> }) {
        node.properties['data-shiki-hook'] = 'yes';
      },
      line(node: { properties: Record<string, unknown> }, line: number) {
        if (line === 1) this.addClassToHast(node as never, 'first-line');
      },
    },
  ],
});
