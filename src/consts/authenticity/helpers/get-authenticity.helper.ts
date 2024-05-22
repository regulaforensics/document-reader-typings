import { eAuthenticity } from '../authenticity.const'


/**
* Get Authenticity array from value.
*
* @param {number} value - value
* @returns {eAuthenticity[]}
*/
export const getAuthenticityArray = (value: number): eAuthenticity[] => {
  const result: eAuthenticity[] = []

  if (value === 0) {
    result.push(eAuthenticity.NONE)
    return result
  }

  for (const key in eAuthenticity) {
    const enumValue = eAuthenticity[key as keyof typeof eAuthenticity]

    if (enumValue !== 0 && (value & enumValue) === enumValue) {
      result.push(enumValue)
    }
  }

  return result
}
