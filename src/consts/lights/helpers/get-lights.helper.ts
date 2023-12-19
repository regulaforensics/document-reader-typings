import { Lights } from '../lights.const'
import { isLights } from './is-lights.helper'


/**
* Get lights array from value
* @param {number} value
* @returns {Array<Lights>} array
*/
function getLightsArray(value: number): Lights[] {
  const result: Lights[] = []

  for (const light in Lights) {
    if (isNaN(Number(light))) {

      const lightValue = Lights[light]

      if (isLights(lightValue) && (value & lightValue) === lightValue) {
        result.push(lightValue)
      }
    }
  }

  return result
}
