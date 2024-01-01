import { Authenticity } from '../authenticity.const'


/**
* Check if the given value is a Authenticity.
*
* @param {any} authenticity
* @returns {boolean}
*/
export const isAuthenticity = (authenticity: any): authenticity is Authenticity =>
  Object.values(Authenticity).includes(authenticity)
