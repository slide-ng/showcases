import type * as Monaco from 'monaco-editor';

// Monaco: teal keywords and rust-coloured strings, a larger font for the back row,
// and two small languages (`units`, `csv`) so the runners in setup/code-runners.ts can claim them.
export default (monaco: typeof Monaco) => {
  monaco.editor.defineTheme('deck-teal', {
    base: 'vs',
    inherit: true,
    rules: [
      { token: 'keyword', foreground: '0f766e', fontStyle: 'bold' },
      { token: 'string', foreground: 'a3501b' },
      { token: 'number', foreground: '0f766e' },
    ],
    colors: {},
  });
  for (const id of ['units', 'csv']) {
    if (!monaco.languages.getLanguages().some((l) => l.id === id)) {
      monaco.languages.register({ id });
      monaco.languages.setMonarchTokensProvider(id, { tokenizer: { root: [[/-?\d+(\.\d+)?/, 'number']] } });
    }
  }
  return { fontSize: 18, theme: 'deck-teal' };
};
