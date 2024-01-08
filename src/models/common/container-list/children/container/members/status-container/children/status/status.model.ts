import { IsDefined, IsEnum, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { eCheckResult } from '@/consts'
import { Default } from '@/decorators'
import { DetailsRFID, iDetailsRFID, DetailsOptical, iDetailsOptical } from './children'


/**
* Interface for Status.
* Status of the document check.
*/
export interface iStatus {
  /**
  * The summary of all checks, one of the CheckResult enumeration values.
  * @type {eCheckResult}
  */
  overallStatus: eCheckResult

  /**
  * The summary of all optical checks.
  * @type {eCheckResult}
  */
  optical: eCheckResult

  /**
  * The comparison status for portrait in the document against the live or external image.
  * @type {eCheckResult}
  */
  portrait: eCheckResult

  /**
  * The summary of all RFID checks.
  * @type {eCheckResult}
  */
  rfid: eCheckResult

  /**
  * The verification status for the document data against the database.
  * @type {eCheckResult}
  */
  stopList: eCheckResult

  /**
  * Details of RFID check.
  * @type {iDetailsRFID|undefined}
  */
  detailsRFID?: iDetailsRFID

  /**
  * Details of optical check.
  * @type {iDetailsOptical}
  */
  detailsOptical: iDetailsOptical
}

/**
* Status of the document check.
*/
export class Status implements iStatus {
  /**
  * The summary of all checks, one of the CheckResult enumeration values.
  * @type {eCheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  @Default(eCheckResult.WAS_NOT_DONE)
  overallStatus: eCheckResult

  /**
  * The summary of all optical checks.
  * @type {eCheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  @Default(eCheckResult.WAS_NOT_DONE)
  optical: eCheckResult

  /**
  * The comparison status for portrait in the document against the live or external image.
  * @type {eCheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  @Default(eCheckResult.WAS_NOT_DONE)
  portrait: eCheckResult

  /**
  * The summary of all RFID checks.
  * @type {eCheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  @Default(eCheckResult.WAS_NOT_DONE)
  rfid: eCheckResult

  /**
  * The verification status for the document data against the database.
  * @type {eCheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  @Default(eCheckResult.WAS_NOT_DONE)
  stopList: eCheckResult

  /**
  * Details of RFID check.
  * @type {DetailsRFID|undefined}
  */
  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => DetailsRFID)
  detailsRFID?: DetailsRFID

  /**
  * Details of optical check.
  * @type {DetailsOptical}
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => DetailsOptical)
  detailsOptical: DetailsOptical
}
