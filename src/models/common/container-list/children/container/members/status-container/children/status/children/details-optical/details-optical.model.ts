import { IsDefined, IsEnum, IsInt } from 'class-validator'
import { Expose } from 'class-transformer'

import { eCheckResult } from '@/consts'


/**
* Interface for DetailsOptical model.
* The summary of all optical checks.
*/
export interface iDetailsOptical {
  /**
  * The summary of all optical checks.
  * @type {eCheckResult}
  */
  overallStatus: eCheckResult

  /**
  * The check status if document type was recognized or not.
  * @type {eCheckResult}
  */
  docType: eCheckResult

  /**
  * The document validity period verification status.
  * @type {eCheckResult}
  */
  expiry: eCheckResult

  /**
  * The input images quality verification status.
  * @type {eCheckResult}
  */
  imageQA: eCheckResult

  /**
  * MRZ verification: values validity, dates, checkdigits verification.
  * @type {eCheckResult}
  */
  mrz: eCheckResult

  /**
  * The number of scanned document pages, integer.
  * @type {number}
  */
  pagesCount: number

  /**
  * The authenticity verification status.
  * @type {eCheckResult}
  */
  security: eCheckResult

  /**
  * Text fields valitity: values validity for specific fields, cross-comparison of values from different sources,
  * dates & checkdigits verification.
  * @type {eCheckResult}
  */
  text: eCheckResult
}

/**
* The summary of all optical checks.
*/
export class DetailsOptical implements iDetailsOptical {
  /**
  * The summary of all optical checks.
  * @type {eCheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  overallStatus: eCheckResult

  /**
  * The check status if document type was recognized or not.
  * @type {eCheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  docType: eCheckResult

  /**
  * The document validity period verification status.
  * @type {eCheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  expiry: eCheckResult

  /**
  * The input images quality verification status.
  * @type {eCheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  imageQA: eCheckResult

  /**
  * MRZ verification: values validity, dates, checkdigits verification.
  * @type {eCheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  mrz: eCheckResult

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
  * @type {eCheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  security: eCheckResult

  /**
  * Text fields valitity: values validity for specific fields, cross-comparison of values from different sources,
  * dates & checkdigits verification.
  * @type {eCheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  text: eCheckResult
}
