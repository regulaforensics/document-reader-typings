import { IsDefined, IsEnum, IsInt } from 'class-validator'
import { Expose } from 'class-transformer'

import {
  eRfidTerminalAuthorizationRequirement,
  eRfidTerminalType,
  getRfidTerminalAuthorizationRequirements
} from '@/consts'
import { Default } from '@/decorators'

/**
* Structure is used to describe the terminal type within the context of the
* communication session with electronic document
*/
export interface iRfidTerminal {
  /**
  * Terminal type
  * @type {eRfidTerminalType}
  */
  TermType: eRfidTerminalType

  /**
  * Declared (set) combination of flags of access rights to the functionality of the document (combination of
  * eRfidTerminalAuthorizationRequirement values);
  * @type {number}
  */
  AuthReq: number

  /**
  * Declared (set) combination of flags of access rights to the functionality of the document (combination of
  * eRfidTerminalAuthorizationRequirement values);
  * @type {number}
  */
  AuthReq2: number
}

/**
* Structure is used to describe the terminal type within the context of the
* communication session with electronic document
*/
export class RfidTerminal implements iRfidTerminal {
  /**
  * Terminal type
  * @type {eRfidTerminalType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eRfidTerminalType)
  @Default(eRfidTerminalType.UNDEFINED)
  TermType: eRfidTerminalType

  /**
  * Declared (set) combination of flags of access rights to the functionality of the document (combination of
  * eRfidTerminalAuthorizationRequirement values);
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  AuthReq: number

  /**
  * Declared (set) combination of flags of access rights to the functionality of the document (combination of
  * eRfidTerminalAuthorizationRequirement values);
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  AuthReq2: number

  /**
  * Get AuthReq values
  * @param {RfidTerminal|number} input - input
  * @returns {eRfidTerminalAuthorizationRequirement[]}
  */
  static getAuthReq = (input: RfidTerminal | number): eRfidTerminalAuthorizationRequirement[] => {
    if (typeof input === 'number') {
      return getRfidTerminalAuthorizationRequirements(input)
    }

    return getRfidTerminalAuthorizationRequirements(input.AuthReq)
  }

  /**
  * Get AuthReq2 values
  * @param {RfidTerminal|number} input - input
  * @returns {eRfidTerminalAuthorizationRequirement[]}
  */
  static getAuthReq2 = (input: RfidTerminal | number): eRfidTerminalAuthorizationRequirement[] => {
    if (typeof input === 'number') {
      return getRfidTerminalAuthorizationRequirements(input)
    }

    return getRfidTerminalAuthorizationRequirements(input.AuthReq2)
  }
}
