import { eLights } from '../lights.const'


/**
* Get lights array from value
* @param {number} value - value
* @returns {eLights[]}
*/
export const getLightsArray = (value: number): eLights[] => {
  const result: eLights[] = []

  if (value === 0) {
    result.push(eLights.OFF)
    return result
  }

  for (const key in eLights) {
    const enumValue = eLights[key as keyof typeof eLights]

    if (enumValue !== 0 && (value & enumValue) === enumValue) {
      result.push(enumValue)
    }
  }

  return result
}
