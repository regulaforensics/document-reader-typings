import { Lights } from '../lights.const'


/**
* Check if value is Lights
*
* @param {any} lights
* @returns {boolean} isLights
*/
export const isLights = (lights: any): lights is Lights => Object.values(Lights).includes(lights)
