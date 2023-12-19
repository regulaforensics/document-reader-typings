import { IsDefined, IsEnum, IsInt } from 'class-validator'
import { Expose } from 'class-transformer'

import { CheckResult } from 'consts'


/**
* Interface for DetailsOptical model.
* The summary of all optical checks.
*/
export interface IDetailsOptical {
  /**
  * The summary of all optical checks.
  * @type {CheckResult}
  */
  overallStatus: CheckResult

  /**
  * The check status if document type was recognized or not.
  * @type {CheckResult}
  */
  docType: CheckResult

  /**
  * The document validity period verification status.
  * @type {CheckResult}
  */
  expiry: CheckResult

  /**
  * The input images quality verification status.
  * @type {CheckResult}
  */
  imageQA: CheckResult

  /**
  * MRZ verification: values validity, dates, checkdigits verification.
  * @type {CheckResult}
  */
  mrz: CheckResult

  /**
  * The number of scanned document pages, integer.
  * @type {number}
  */
  pagesCount: number

  /**
  * The authenticity verification status.
  * @type {CheckResult}
  */
  security: CheckResult

  /**
  * Text fields valitity: values validity for specific fields, cross-comparison of values from different sources, dates & checkdigits verification.
  * @type {CheckResult}
  */
  text: CheckResult
}

/**
* The summary of all optical checks.
*/
export class DetailsOptical implements IDetailsOptical {
  /**
  * The summary of all optical checks.
  * @type {CheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  overallStatus: CheckResult

  /**
  * The check status if document type was recognized or not.
  * @type {CheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  docType: CheckResult

  /**
  * The document validity period verification status.
  * @type {CheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  expiry: CheckResult

  /**
  * The input images quality verification status.
  * @type {CheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  imageQA: CheckResult

  /**
  * MRZ verification: values validity, dates, checkdigits verification.
  * @type {CheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  mrz: CheckResult

  /**
  * The number of scanned document pages, integer.
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  pagesCount: number

  /**
  * The authenticity verification status.
  * @type {CheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  security: CheckResult

  /**
  * Text fields valitity: values validity for specific fields, cross-comparison of values from different sources, dates & checkdigits verification.
  * @type {CheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  text: CheckResult
}
