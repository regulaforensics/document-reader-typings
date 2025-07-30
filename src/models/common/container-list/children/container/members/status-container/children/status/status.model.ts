import { IsDefined, IsEnum, IsOptional, ValidateNested } from 'class-validator'
import { Status as cStatus } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { eCheckResult } from '@/consts'
import { DetailsRFID, DetailsOptical } from './children'

/**
 * Status of the document check.
 */
export class Status implements cStatus {
  /**
   * The summary of all checks, one of the CheckResult enumeration values.
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  overallStatus: eCheckResult

  /**
   * The summary of all optical checks.
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  optical: eCheckResult

  /**
   * The comparison status for portrait in the document against the live or external image.
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  portrait: eCheckResult

  /**
   * The summary of all RFID checks.
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  rfid: eCheckResult

  /**
   * The verification status for the document data against the database.
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  stopList: eCheckResult

  /**
   * Details of RFID check.
   * @type {DetailsRFID|undefined}
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => DetailsRFID)
  detailsRFID?: DetailsRFID

  /**
   * Details of optical check.
   * @type {DetailsOptical}
   */
  @IsDefined()
  @ValidateNested()
  @Type(() => DetailsOptical)
  detailsOptical: DetailsOptical
}

export type { Status as iStatus }
