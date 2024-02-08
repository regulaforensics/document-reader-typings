import { eLights } from '../lights.const'


/**
* Check if value is eLights
* @param {any} lights
* @returns {boolean} isLights
*/
export const isLights = (lights: any): lights is eLights => Object.values(eLights).includes(lights)
