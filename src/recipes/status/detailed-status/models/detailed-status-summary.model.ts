import { IsDefined, IsEnum } from 'class-validator'

import { eCheckResult } from '@/consts'
import { eSummaryStatusField } from './consts'


/**
* Detailed status of RFID checks
*/
export interface iRDetailedStatusSummary {
  /**
  * The summary of all optical checks.
  * @type {eCheckResult}
  */
  [eSummaryStatusField.OPTICAL]: eCheckResult

  /**
  * The comparison status for portrait in the document against the live or external image.
  * @type {eCheckResult}
  */
  [eSummaryStatusField.PORTRAIT]: eCheckResult

  /**
  * The summary of all RFID checks.
  * @type {eCheckResult}
  */
  [eSummaryStatusField.RFID]: eCheckResult

  /**
  * The verification status for the document data against the database.
  * @type {eCheckResult}
  */
  [eSummaryStatusField.STOP_LIST]: eCheckResult
}

/**
* Detailed status of RFID checks
*/
export class RDetailedStatusSummary implements iRDetailedStatusSummary {
  /**
  * The summary of all optical checks.
  * @type {eCheckResult}
  */
  @IsDefined()
  @IsEnum(eCheckResult)
  [eSummaryStatusField.OPTICAL]: eCheckResult

  /**
  * The comparison status for portrait in the document against the live or external image.
  * @type {eCheckResult}
  */
  @IsDefined()
  @IsEnum(eCheckResult)
  [eSummaryStatusField.PORTRAIT]: eCheckResult

  /**
  * The summary of all RFID checks.
  * @type {eCheckResult}
  */
  @IsDefined()
  @IsEnum(eCheckResult)
  [eSummaryStatusField.RFID]: eCheckResult

  /**
  * The verification status for the document data against the database.
  * @type {eCheckResult}
  */
  @IsDefined()
  @IsEnum(eCheckResult)
  [eSummaryStatusField.STOP_LIST]: eCheckResult
}
