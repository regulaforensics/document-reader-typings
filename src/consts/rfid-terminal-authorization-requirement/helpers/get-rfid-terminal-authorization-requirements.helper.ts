import { eRfidTerminalAuthorizationRequirement } from '../rfid-terminal-authorization-requirement.const'
import { isRfidTerminalAuthorizationRequirement } from './is-rfid-terminal-authorization-requirement.helper'


/**
* Get array of eRfidTerminalAuthorizationRequirement from value
* @param {number} value - value
* @returns {eRfidTerminalAuthorizationRequirement[]}
*/
export const getRfidTerminalAuthorizationRequirements = (value: number): eRfidTerminalAuthorizationRequirement[] => {
  const result: eRfidTerminalAuthorizationRequirement[] = []

  for (const requirement in eRfidTerminalAuthorizationRequirement) {
    const index = Number(requirement)

    if (!isNaN(index)) {
      const requirementValue = eRfidTerminalAuthorizationRequirement[index]

      if (isRfidTerminalAuthorizationRequirement(requirementValue) && (value & requirementValue) === requirementValue) {
        result.push(requirementValue)
      }
    }
  }

  return result
}
