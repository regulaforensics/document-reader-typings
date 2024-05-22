import { eIRVisibilityFlag } from '../ir-visibility-flag.const'


/**
* Get eIRVisibilityFlag array from value
* @param {number} value - value
* @returns {eIRVisibilityFlag[]}
*/
export const getIRVisibilityFlagArray = (value: number): eIRVisibilityFlag[] => {
  const result: eIRVisibilityFlag[] = []

  if (value === 0) {
    result.push(eIRVisibilityFlag.INVISIBLE)
    return result
  }

  for (const key in eIRVisibilityFlag) {
    const enumValue = eIRVisibilityFlag[key as keyof typeof eIRVisibilityFlag]

    if (enumValue !== 0 && (value & enumValue) === enumValue) {
      result.push(enumValue)
    }
  }

  return result
}
