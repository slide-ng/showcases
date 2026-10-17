// KaTeX: macros the whole deck can use, so formulas stay short.
export default () => ({
  macros: { '\\RR': '\\mathbb{R}', '\\deriv': '\\frac{d #1}{d #2}' },
});
