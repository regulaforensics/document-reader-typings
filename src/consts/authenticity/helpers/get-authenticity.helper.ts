import { eAuthenticity } from '../authenticity.const'
import { isAuthenticity } from './is-authenticity.helper'


/**
* Get Authenticity array from value.
*
* @param {number} value - value
* @returns {eAuthenticity[]}
*/
export const getAuthenticityArray = (value: number): eAuthenticity[] => {
  const result: eAuthenticity[] = []

  for (const authenticity in eAuthenticity) {
    if (isNaN(Number(authenticity))) {

      const authenticityElement = eAuthenticity[authenticity]

      if (isAuthenticity(authenticityElement) && (value & authenticityElement) === authenticityElement) {
        result.push(authenticityElement)
      }
    }
  }

  return result
}
