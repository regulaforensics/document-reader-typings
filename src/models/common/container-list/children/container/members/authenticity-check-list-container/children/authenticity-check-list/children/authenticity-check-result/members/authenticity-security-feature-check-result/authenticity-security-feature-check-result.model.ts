import { IsArray, IsDefined, IsEnum, IsIn, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { eAuthenticity } from '@/consts'
import { aAuthenticityCheckResult } from '../../authenticity-check-result.abstract'
import { iSecurityFeatureCheck, SecurityFeatureCheck } from './children'

/**
 * Result type of AuthenticitySecurityFeatureCheckResult
 */
export type tAuthenticitySecurityFeatureCheckResultType =
  | eAuthenticity.UV_LUMINESCENCE
  | eAuthenticity.IR_B900
  | eAuthenticity.AXIAL_PROTECTION
  | eAuthenticity.PHOTO_EMBED_TYPE
  | eAuthenticity.HOLOGRAMS
  | eAuthenticity.PHOTO_AREA
  | eAuthenticity.BARCODE_FORMAT_CHECK
  | eAuthenticity.EXTENDED_OCR_CHECK
  | eAuthenticity.EXTENDED_MRZ_CHECK

/**
 * Result type of AuthenticitySecurityFeatureCheckResult
 */
export const AuthenticitySecurityFeatureCheckResultTypes: tAuthenticitySecurityFeatureCheckResultType[] = [
  eAuthenticity.UV_LUMINESCENCE,
  eAuthenticity.IR_B900,
  eAuthenticity.AXIAL_PROTECTION,
  eAuthenticity.PHOTO_EMBED_TYPE,
  eAuthenticity.HOLOGRAMS,
  eAuthenticity.PHOTO_AREA,
  eAuthenticity.BARCODE_FORMAT_CHECK,
  eAuthenticity.EXTENDED_OCR_CHECK,
  eAuthenticity.EXTENDED_MRZ_CHECK,
]

/**
 * Container for SecurityFeatureCheck
 */
export interface iAuthenticitySecurityFeatureCheckResult extends aAuthenticityCheckResult {
  /**
   * Type of the performed check
   * @type {tAuthenticitySecurityFeatureCheckResultType}
   */
  Type: tAuthenticitySecurityFeatureCheckResultType

  /**
   * Array of results of checks
   * @type {iSecurityFeatureCheck[]}
   */
  List: iSecurityFeatureCheck[]
}

/**
 * Container for SecurityFeatureCheck
 */
@Expose()
export class AuthenticitySecurityFeatureCheckResult
  extends aAuthenticityCheckResult
  implements iAuthenticitySecurityFeatureCheckResult
{
  /**
   * Type of the performed check
   * @type {tAuthenticitySecurityFeatureCheckResultType}
   */
  @IsDefined()
  @IsIn(AuthenticitySecurityFeatureCheckResultTypes)
  @IsEnum(eAuthenticity)
  Type: tAuthenticitySecurityFeatureCheckResultType

  /**
   * Array of results of checks
   * @type {SecurityFeatureCheck[]}
   */
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SecurityFeatureCheck)
  List: SecurityFeatureCheck[]

  /**
   * Create a new instance of AuthenticitySecurityFeatureCheckResult from plain object
   * @param {unknown} plain - plain object
   * @return {AuthenticitySecurityFeatureCheckResult} - new instance
   */
  static fromPlain = (plain: unknown): AuthenticitySecurityFeatureCheckResult =>
    plainToClass(AuthenticitySecurityFeatureCheckResult, plain)

  /**
   * Check if the given type belongs to AuthenticitySecurityFeatureCheckResult
   * @param {unknown} type - type to check
   * @return {type is iAuthenticitySecurityFeatureCheckResult} - result
   */
  static isBelongs = (type: unknown): type is iAuthenticitySecurityFeatureCheckResult =>
    AuthenticitySecurityFeatureCheckResultTypes.includes((type as iAuthenticitySecurityFeatureCheckResult)?.Type)
}
