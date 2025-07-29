import { Light } from '@regulaforensics/document-reader-webclient'

/**
 * Get lights array from value
 * @param {number} value - value
 * @returns {Light[]}
 */
export const getLightsArray = (value: number): Light[] => {
  const result: Light[] = []

  if (value === 0) {
    result.push(Light.OFF)
    return result
  }

  for (const key in Light) {
    const enumValue = Light[key as keyof typeof Light]

    if (enumValue !== 0 && (value & enumValue) === enumValue) {
      result.push(enumValue)
    }
  }

  return result
}
