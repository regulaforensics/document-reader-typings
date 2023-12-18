import { IsDefined, IsEnum, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { CheckResult } from 'consts'
import { Default } from 'decorators'
import { DetailsRFID, IDetailsRFID, DetailsOptical, IDetailsOptical } from './children'


/**
* Interface for Status.
* Status of the document check.
*/
export interface IStatus {
  /**
  * The summary of all checks, one of the CheckResult enumeration values.
  * @type {CheckResult}
  */
  overallStatus: CheckResult

  /**
  * The summary of all optical checks.
  * @type {CheckResult}
  */
  optical: CheckResult

  /**
  * The comparison status for portrait in the document against the live or external image.
  * @type {CheckResult}
  */
  portrait: CheckResult

  /**
  * The summary of all RFID checks.
  * @type {CheckResult}
  */
  rfid: CheckResult

  /**
  * The verification status for the document data against the database.
  * @type {CheckResult}
  */
  stopList: CheckResult

  /**
  * Details of RFID check.
  * @type {IDetailsRFID}
  */
  detailsRFID?: IDetailsRFID

  /**
  * Details of optical check.
  * @type {IDetailsOptical}
  */
  detailsOptical: IDetailsOptical
}

/**
* Status of the document check.
*/
export class Status implements IStatus {
  /**
  * The summary of all checks, one of the CheckResult enumeration values.
  * @type {CheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  @Default(CheckResult.WAS_NOT_DONE)
  overallStatus: CheckResult

  /**
  * The summary of all optical checks.
  * @type {CheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  @Default(CheckResult.WAS_NOT_DONE)
  optical: CheckResult

  /**
  * The comparison status for portrait in the document against the live or external image.
  * @type {CheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  @Default(CheckResult.WAS_NOT_DONE)
  portrait: CheckResult

  /**
  * The summary of all RFID checks.
  * @type {CheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  @Default(CheckResult.WAS_NOT_DONE)
  rfid: CheckResult

  /**
  * The verification status for the document data against the database.
  * @type {CheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  @Default(CheckResult.WAS_NOT_DONE)
  stopList: CheckResult

  /**
  * Details of RFID check.
  * @type {DetailsRFID}
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
