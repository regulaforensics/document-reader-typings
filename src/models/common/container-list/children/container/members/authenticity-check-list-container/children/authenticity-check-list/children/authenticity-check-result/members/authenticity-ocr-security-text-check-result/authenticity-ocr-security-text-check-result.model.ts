import { IsArray, IsDefined, IsEnum, IsIn, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { eAuthenticity } from '@/consts'
import { aAuthenticityCheckResult } from '../../authenticity-check-result.abstract'
import { iOCRSecurityTextResult, OCRSecurityTextResult } from './children'

/**
 * Result type of AuthenticityOCRSecurityTextCheckResult
 */
export type tAuthenticityOCRSecurityTextCheckResultType = eAuthenticity.OCR_SECURITY_TEXT | eAuthenticity.ENCRYPTED_IPI

/**
 * Result type of AuthenticityOCRSecurityTextCheckResult
 */
export const AuthenticityOCRSecurityTextCheckResultTypes: tAuthenticityOCRSecurityTextCheckResultType[] = [
  eAuthenticity.OCR_SECURITY_TEXT,
  eAuthenticity.ENCRYPTED_IPI,
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
   * Array of results of checks
   * @type {iOCRSecurityTextResult[]}
   */
  List: iOCRSecurityTextResult[]
}

/**
 * Container for OCRSecurityTextResult
 */
@Expose()
export class AuthenticityOCRSecurityTextCheckResult
  extends aAuthenticityCheckResult
  implements iAuthenticityOCRSecurityTextCheckResult
{
  /**
   * Type of the performed check
   * @type {tAuthenticityOCRSecurityTextCheckResultType}
   */
  @IsDefined()
  @IsIn(AuthenticityOCRSecurityTextCheckResultTypes)
  @IsEnum(eAuthenticity)
  Type: tAuthenticityOCRSecurityTextCheckResultType

  /**
   * Array of results of checks
   * @type {OCRSecurityTextResult[]}
   */
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OCRSecurityTextResult)
  List: OCRSecurityTextResult[]

  /**
   * Create a AuthenticityOCRSecurityTextCheckResult instance from a plain object
   * @param {unknown} plain - plain object
   * @return {AuthenticityOCRSecurityTextCheckResult} - new instance
   */
  static fromPlain = (plain: unknown): AuthenticityOCRSecurityTextCheckResult =>
    plainToClass(AuthenticityOCRSecurityTextCheckResult, plain)

  /**
   * Check if the given type belongs to AuthenticityOCRSecurityTextCheckResultType
   * @param {unknown} type - type to check
   * @return {type is iAuthenticityOCRSecurityTextCheckResult} - result
   */
  static isBelongs = (type: unknown): type is iAuthenticityOCRSecurityTextCheckResult =>
    AuthenticityOCRSecurityTextCheckResultTypes.includes((type as iAuthenticityOCRSecurityTextCheckResult).Type)
}
