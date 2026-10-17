// Transformers: `[[[text]]]` in the markdown becomes a highlight, and a ```stats block is replaced
// by a short summary of its text.
export default () => ({
  pre: [
    ({ s }: { s: { replace: (re: RegExp, fn: (...a: string[]) => string) => void } }) =>
      s.replace(/\[\[\[(.*?)\]\]\]/g, (_all, text) => `<mark class="hook-pre">${text}</mark>`),
  ],
  codeblocks: [
    ({ lang, code }: { lang: string; code: string }) => {
      if (lang !== 'stats') return undefined;
      const text = code.trim();
      const words = text.split(/\s+/).length;
      const lines = text.split('\n').length;
      return `<p class="hook-count"><strong>${words}</strong> words · <strong>${lines}</strong> lines · <strong>${text.length}</strong> characters</p>`;
    },
  ],
});
