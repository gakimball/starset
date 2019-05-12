/**
 * Convert an array of key/value tuples into an object.
 * Adapted from: https://github.com/feross/fromentries/blob/master/index.js
 * @param {Array.<[String, *]>} entries - Entries.
 * @returns {Object} New object.
 */
export default entries => entries
  .reduce((obj, {0: key, 1: val}) =>
    Object.assign(obj, {[key]: val}), {});
