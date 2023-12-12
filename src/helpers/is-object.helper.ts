export const isObject = (value: unknown): value is Object =>
  typeof value === 'object' && value !== null && !Array.isArray(value)
