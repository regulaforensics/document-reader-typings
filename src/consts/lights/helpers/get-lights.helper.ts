import { Lights } from '../lights.const'
import { isLights } from './is-lights.helper'


/**
* Get lights array from value
* @param {number} value - value
* @returns {Lights[]}
*/
export const getLightsArray = (value: number): Lights[] => {
  const result: Lights[] = []

  for (const light in Lights) {
    const index = Number(light)

    if (!isNaN(index)) {
      const lightValue = Lights[index]

      if (isLights(lightValue) && (value & lightValue) === lightValue) {
        result.push(lightValue)
      }
    }
  }

  return result
}
