// Code runners: `{monaco-run}` editors in these languages run here instead of the built-in JavaScript runner.
// `units` converts each line ("12 km", "70 kg", "21 c") to the other system; `csv` adds up the number columns of a table.
const conversions: Record<string, [number | ((n: number) => number), string]> = {
  km: [0.621371, 'mi'],
  mi: [1.609344, 'km'],
  kg: [2.204623, 'lb'],
  lb: [0.453592, 'kg'],
  c: [(n) => (n * 9) / 5 + 32, '°F'],
  f: [(n) => ((n - 32) * 5) / 9, '°C'],
};

export default () => ({
  units: (code: string) => ({
    lines: code
      .split('\n')
      .filter((line) => line.trim())
      .map((line) => {
        const m = /^\s*(-?[\d.]+)\s*([a-z]+)\s*$/i.exec(line);
        const rule = m && conversions[m[2].toLowerCase()];
        if (!m || !rule) return [`${line.trim()}: unknown unit`];
        const n = Number(m[1]);
        const value = typeof rule[0] === 'number' ? n * rule[0] : rule[0](n);
        return [`${line.trim()} = ${Math.round(value * 100) / 100} ${rule[1]}`];
      }),
  }),
  csv: (code: string) => {
    const [header, ...rows] = code.trim().split('\n').map((line) => line.split(',').map((cell) => cell.trim()));
    if (!header || !rows.length) return { lines: [], error: 'Write a header line and at least one row.' };
    const totals = header.map((name, i) => {
      const values = rows.map((row) => Number(row[i]));
      return values.every((v) => Number.isFinite(v)) ? `${name}: total ${values.reduce((a, v) => a + v, 0)}` : null;
    });
    return { lines: [[`${rows.length} rows`], ...totals.filter((t): t is string => t !== null).map((t) => [t])] };
  },
});
