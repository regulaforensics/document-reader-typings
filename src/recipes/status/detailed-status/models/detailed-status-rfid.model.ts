import { IsDefined, IsEnum } from 'class-validator'

import { eCheckResult } from '@/consts'
import { eRfidStatusField } from './consts'


/**
* Detailed status of RFID checks
*/
export interface iRDetailedStatusRfid {
  /**
  * The Active Authentication status.
  * @type {eCheckResult}
  */
  [eRfidStatusField.AA]: eCheckResult

  /**
  * The Basic Access Control status
  * @type {eCheckResult}
  */
  [eRfidStatusField.BAC]: eCheckResult

  /**
  * The Chip Authentication status.
  * @type {eCheckResult}
  */
  [eRfidStatusField.CA]: eCheckResult

  /**
  * The Password Authenticated Connection Establishment status.
  * @type {eCheckResult}
  */
  [eRfidStatusField.PACE]: eCheckResult

  /**
  * The Passive Authentication status.
  * @type {eCheckResult}
  */
  [eRfidStatusField.PA]: eCheckResult

  /**
  * The Terminal Authentication status.
  * @type {eCheckResult}
  */
  [eRfidStatusField.TA]: eCheckResult
}

/**
* Detailed status of RFID checks
*/
export class RDetailedStatusRfid implements iRDetailedStatusRfid {
  /**
  * The Active Authentication status.
  * @type {eCheckResult}
  */
  @IsDefined()
  @IsEnum(eCheckResult)
  [eRfidStatusField.AA]: eCheckResult

  /**
  * The Basic Access Control status
  * @type {eCheckResult}
  */
  @IsDefined()
  @IsEnum(eCheckResult)
  [eRfidStatusField.BAC]: eCheckResult

  /**
  * The Chip Authentication status.
  * @type {eCheckResult}
  */
  @IsDefined()
  @IsEnum(eCheckResult)
  [eRfidStatusField.CA]: eCheckResult

  /**
  * The Password Authenticated Connection Establishment status.
  * @type {eCheckResult}
  */
  @IsDefined()
  @IsEnum(eCheckResult)
  [eRfidStatusField.PACE]: eCheckResult

  /**
  * The Passive Authentication status.
  * @type {eCheckResult}
  */
  @IsDefined()
  @IsEnum(eCheckResult)
  [eRfidStatusField.PA]: eCheckResult

  /**
  * The Terminal Authentication status.
  * @type {eCheckResult}
  */
  @IsDefined()
  @IsEnum(eCheckResult)
  [eRfidStatusField.TA]: eCheckResult
}
