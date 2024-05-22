import { eRfidTerminalAuthorizationRequirement } from '../rfid-terminal-authorization-requirement.const'


/**
* Get array of eRfidTerminalAuthorizationRequirement from value
* @param {number} value - value
* @returns {eRfidTerminalAuthorizationRequirement[]}
*/
export const getRfidTerminalAuthorizationRequirements = (value: number): eRfidTerminalAuthorizationRequirement[] => {
  const result: eRfidTerminalAuthorizationRequirement[] = []

  for (const key in eRfidTerminalAuthorizationRequirement) {
    const enumValue = eRfidTerminalAuthorizationRequirement[key as keyof typeof eRfidTerminalAuthorizationRequirement]

    if ((value & enumValue) === enumValue) {
      result.push(enumValue)
    }
  }

  return result
}
