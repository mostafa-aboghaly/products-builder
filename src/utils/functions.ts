/**
 *
 * @param {string} text - The input text to be sliced.
 * @param {number} [max=50] - The maximum length before truncation.
 * @returns - The slided text with an ellipsis (...) appended if truncated.
 */
export function textSlicer(text: string, max: number = 60) {
  if (text.length >= max) return `${text.slice(0, max)}...`;
  return text;
}

/**
 *
 * @param {string} x - The numeric string to be formatted.
 * @returns {string} A formatted version of the input numeric string with commas as thousand separators.
 *
 */
export function formatNumberWithCommas(x: string): string {
  return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
