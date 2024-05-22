import { eIRVisibilityFlag } from '../ir-visibility-flag.const'


/**
* Check if value is eIRVisibilityFlag
* @param {any} lights
* @returns {boolean}
*/
export const isIRVisibilityFlag = (lights: any): lights is eIRVisibilityFlag => Object.values(eIRVisibilityFlag).includes(lights)
