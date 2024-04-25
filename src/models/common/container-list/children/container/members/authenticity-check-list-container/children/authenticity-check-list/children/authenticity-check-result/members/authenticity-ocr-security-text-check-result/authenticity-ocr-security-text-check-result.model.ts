import { IsArray, IsDefined, IsEnum, IsIn, IsInt, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { eAuthenticity, eCheckResult } from '@/consts'
import { Default } from '@/decorators'
import { aAuthenticityCheckResult } from '../../authenticity-check-result.abstract'
import { iOCRSecurityTextResult, OCRSecurityTextResult } from './children'


/**
* Result type of AuthenticityOCRSecurityTextCheckResult
*/
export type tAuthenticityOCRSecurityTextCheckResultType = eAuthenticity.OCR_SECURITY_TEXT

/**
* Result type of AuthenticityOCRSecurityTextCheckResult
*/
export const AuthenticityOCRSecurityTextCheckResultTypes: tAuthenticityOCRSecurityTextCheckResultType[] = [
  eAuthenticity.OCR_SECURITY_TEXT
]

/**
* Container for OCRSecurityTextResult
*/
export interface iAuthenticityOCRSecurityTextCheckResult extends aAuthenticityCheckResult {
  /**
  * Type of the performed check
  * @type {tAuthenticityOCRSecurityTextCheckResultType}
  */
  Type: tAuthenticityOCRSecurityTextCheckResultType

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
  * @type {tAuthenticityOCRSecurityTextCheckResultType}
  */
  @Expose()
  @IsDefined()
  @IsIn(AuthenticityOCRSecurityTextCheckResultTypes)
  @IsEnum(eAuthenticity)
  Type: tAuthenticityOCRSecurityTextCheckResultType

  /**
  * Overall checking result
  * @type {eCheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  @Default(eCheckResult.WAS_NOT_DONE)
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
  @Default([])
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

  /**
  * Check if the given type belongs to AuthenticityOCRSecurityTextCheckResultType
  * @param {unknown} type - type to check
  * @return {type is iAuthenticityOCRSecurityTextCheckResult} - result
  */
  static isBelongs = (type: unknown): type is iAuthenticityOCRSecurityTextCheckResult =>
    AuthenticityOCRSecurityTextCheckResultTypes.includes((type as iAuthenticityOCRSecurityTextCheckResult).Type)
}
