import { eLights } from '../lights.const'
import { isLights } from './is-lights.helper'


/**
* Get lights array from value
* @param {number} value - value
* @returns {eLights[]}
*/
export const getLightsArray = (value: number): eLights[] => {
  const result: eLights[] = []

  for (const light in eLights) {
    const index = Number(light)

    if (!isNaN(index)) {
      const lightValue = eLights[index]

      if (isLights(lightValue) && (value & lightValue) === lightValue) {
        result.push(lightValue)
      }
    }
  }

  return result
}
