import { IsArray, IsDefined, IsEnum, IsIn, IsInt, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { eAuthenticity, eCheckResult } from '@/consts'
import { aAuthenticityCheckResult } from '../../authenticity-check-result.abstract'
import { iOCRSecurityTextResult, OCRSecurityTextResult } from './children'


/**
* Container for OCRSecurityTextResult
*/
export interface iAuthenticityOCRSecurityTextCheckResult extends aAuthenticityCheckResult {
  /**
  * Type of the performed check
  * @type {eAuthenticity.OCR_SECURITY_TEXT}
  */
  Type: eAuthenticity.OCR_SECURITY_TEXT

  /**
  * Overall checking result
  * @type {eCheckResult}
  */
  Result: eCheckResult

  /**
  * Array of results of checks
  * @type {iOCRSecurityTextResult[]}
  */
  List: iOCRSecurityTextResult[]

  /**
  * Number of List items
  * @type {number}
  */
  Count: number
}

/**
* Container for OCRSecurityTextResult
*/
export class AuthenticityOCRSecurityTextCheckResult extends aAuthenticityCheckResult implements iAuthenticityOCRSecurityTextCheckResult {
  /**
  * Type of the performed check
  * @type {eAuthenticity.OCR_SECURITY_TEXT}
  */
  @Expose()
  @IsDefined()
  @IsIn([eAuthenticity.OCR_SECURITY_TEXT])
  @IsEnum(eAuthenticity)
  Type: eAuthenticity.OCR_SECURITY_TEXT

  /**
  * Overall checking result
  * @type {eCheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  Result: eCheckResult

  /**
  * Array of results of checks
  * @type {OCRSecurityTextResult[]}
  */
  @Expose()
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OCRSecurityTextResult)
  List: OCRSecurityTextResult[]

  /**
  * Number of List items
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  Count: number

  /**
  * Create a AuthenticityOCRSecurityTextCheckResult instance from a plain object
  * @param {unknown} plain - plain object
  * @return {AuthenticityOCRSecurityTextCheckResult} - new instance
  */
  static fromPlain = (plain: unknown): AuthenticityOCRSecurityTextCheckResult => plainToClass(AuthenticityOCRSecurityTextCheckResult, plain)
}
