/**
* Check if value is an object
*
* @param {unknown} value - value to check
* @returns {boolean} - true if value is an object, false otherwise
*/
export const isObject = (value: unknown): value is Object =>
  typeof value === 'object' && value !== null && !Array.isArray(value)
