import fromEntries from './from-entries';

/**
 * Modify the values of an object with a mapper function.
 * @param {Object} object - Object to modify.
 * @param {Function} mapper - Mapper function called with params `value` and `key`.
 * @returns {Object} Object with modified values.
 */
export default (object, mapper) =>
  fromEntries(
    Object.entries(object).map(
      ([key, value]) => [key, mapper(value, key)]
    )
  );
