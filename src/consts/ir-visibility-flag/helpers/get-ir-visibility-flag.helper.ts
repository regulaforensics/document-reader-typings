import { eIRVisibilityFlag } from '../ir-visibility-flag.const'
import { isIRVisibilityFlag } from './is-ir-visibility-flag.helper'


/**
* Get eIRVisibilityFlag array from value
* @param {number} value - value
* @returns {eLights[]}
*/
export const getIRVisibilityFlagArray = (value: number): eIRVisibilityFlag[] => {
  const result: eIRVisibilityFlag[] = []

  for (const flag in eIRVisibilityFlag) {
    const index = Number(flag)

    if (!isNaN(index)) {
      const lightValue = eIRVisibilityFlag[index]

      if (isIRVisibilityFlag(lightValue) && (value & lightValue) === lightValue) {
        result.push(lightValue)
      }
    }
  }

  return result
}
