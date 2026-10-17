import type * as Monaco from 'monaco-editor';

export default (monaco: typeof Monaco) => {
  monaco.editor.defineTheme('moss', {
    base: 'vs-dark',
    inherit: true,
    rules: [{ token: 'comment', foreground: '8fae7a', fontStyle: 'italic' }],
    colors: { 'editor.background': '#1d2a1f' },
  });
  return { fontSize: 15, minimap: { enabled: false }, theme: 'moss' };
};
