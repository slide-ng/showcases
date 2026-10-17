// Preparser: rewrites the markdown before it is parsed.
// A line starting with "!! " becomes a title in capitals, and "@@author" becomes the author from the headmatter,
// on the slides and in the notes.
export default ({ headmatter }: { filepath: string; headmatter: Record<string, unknown>; mode: string }) => {
  const author = String(headmatter['author'] ?? 'the author');
  return [
    {
      name: 'shout',
      transformRawLines(lines: string[]) {
        lines.forEach((line, i) => {
          if (line.startsWith('!! ')) lines[i] = `# ${line.slice(3).toUpperCase()}`;
        });
      },
      transformSlide(content: string) {
        return content.replaceAll('@@author', author);
      },
      transformNote(note: string | undefined) {
        return note?.replaceAll('@@author', author);
      },
    },
  ];
};
