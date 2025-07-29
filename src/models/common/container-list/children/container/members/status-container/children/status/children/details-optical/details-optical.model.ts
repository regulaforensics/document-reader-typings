import { IsDefined, IsEnum, IsInt, IsOptional } from 'class-validator'
import { DetailsOptical as iDetailsOptical } from '@regulaforensics/document-reader-webclient'

import { eCheckResult } from '@/consts'

/**
 * The summary of all optical checks.
 */
export class DetailsOptical implements iDetailsOptical {
  /**
   * The summary of all optical checks.
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  overallStatus: eCheckResult

  /**
   * The check status if document type was recognized or not.
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  docType: eCheckResult

  /**
   * The document validity period verification status.
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  expiry: eCheckResult

  /**
   * The input images quality verification status.
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  imageQA: eCheckResult

  /**
   * MRZ verification: values validity, dates, checkdigits verification.
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  mrz: eCheckResult

  /**
   * The number of scanned document pages, integer.
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  pagesCount: number

  /**
   * The authenticity verification status.
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  security: eCheckResult

  /**
   * Text fields valitity: values validity for specific fields, cross-comparison of values from different sources,
   * dates & checkdigits verification.
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  text: eCheckResult

  /**
   * @type {number|undefined}
   */
  @IsOptional()
  @IsInt()
  vds?: number
}
