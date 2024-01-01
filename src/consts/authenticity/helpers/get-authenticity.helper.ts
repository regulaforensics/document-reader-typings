import { Authenticity } from '../authenticity.const'
import { isAuthenticity } from './is-authenticity.helper'


/**
* Get Authenticity array from value.
*
* @param {number} value - value
* @returns {Authenticity[]}
*/
export const getAuthenticityArray = (value: number): Authenticity[] => {
  const result: Authenticity[] = []

  for (const authenticity in Authenticity) {
    if (isNaN(Number(authenticity))) {

      const authenticityElement = Authenticity[authenticity]

      if (isAuthenticity(authenticityElement) && (value & authenticityElement) === authenticityElement) {
        result.push(authenticityElement)
      }
    }
  }

  return result
}
