import { eRfidTerminalAuthorizationRequirement } from '../rfid-terminal-authorization-requirement.const'


/**
* Check if value is eRfidTerminalAuthorizationRequirement
* @param {any} requirements
* @returns {boolean}
*/
export const isRfidTerminalAuthorizationRequirement = (requirements: any): requirements is eRfidTerminalAuthorizationRequirement =>
  Object.values(eRfidTerminalAuthorizationRequirement).includes(requirements)
