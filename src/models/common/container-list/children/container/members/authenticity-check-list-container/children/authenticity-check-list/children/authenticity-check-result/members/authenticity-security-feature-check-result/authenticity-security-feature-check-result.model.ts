import { IsArray, IsDefined, IsEnum, IsIn, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { eAuthenticity, eCheckResult } from '@/consts'
import { Default } from '@/decorators'
import { aAuthenticityCheckResult } from '../../authenticity-check-result.abstract'
import { iSecurityFeatureCheck, SecurityFeatureCheck } from './children'


/**
* Result type of AuthenticitySecurityFeatureCheckResult
*/
export type tAuthenticitySecurityFeatureCheckResultType =
  eAuthenticity.UV_LUMINESCENCE |
  eAuthenticity.IR_B900 |
  eAuthenticity.AXIAL_PROTECTION |
  eAuthenticity.PHOTO_EMBED_TYPE |
  eAuthenticity.HOLOGRAMS |
  eAuthenticity.PHOTO_AREA |
  eAuthenticity.BARCODE_FORMAT_CHECK |
  eAuthenticity.EXTENDED_OCR_CHECK |
  eAuthenticity.EXTENDED_MRZ_CHECK |
  eAuthenticity.STATUS_ONLY

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
  eAuthenticity.STATUS_ONLY
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
  * Overall checking result
  * @type {eCheckResult}
  */
  Result: eCheckResult

  /**
  * Array of results of checks
  * @type {iSecurityFeatureCheck[]}
  */
  List: iSecurityFeatureCheck[]
}

/**
* Container for SecurityFeatureCheck
*/
export class AuthenticitySecurityFeatureCheckResult extends aAuthenticityCheckResult implements iAuthenticitySecurityFeatureCheckResult {
  /**
  * Type of the performed check
  * @type {tAuthenticitySecurityFeatureCheckResultType}
  */
  @Expose()
  @IsDefined()
  @IsIn(AuthenticitySecurityFeatureCheckResultTypes)
  @IsEnum(eAuthenticity)
  Type: tAuthenticitySecurityFeatureCheckResultType

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
  * @type {iSecurityFeatureCheck[]}
  */
  @Expose()
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SecurityFeatureCheck)
  @Default([])
  List: SecurityFeatureCheck[]

  /**
  * Create a new instance of AuthenticitySecurityFeatureCheckResult from plain object
  * @param {unknown} plain - plain object
  * @return {AuthenticitySecurityFeatureCheckResult} - new instance
  */
  static fromPlain = (plain: unknown): AuthenticitySecurityFeatureCheckResult => plainToClass(AuthenticitySecurityFeatureCheckResult, plain)

  /**
  * Check if the given type belongs to AuthenticitySecurityFeatureCheckResult
  * @param {unknown} type - type to check
  * @return {type is iAuthenticitySecurityFeatureCheckResult} - result
  */
  static isBelongs = (type: unknown): type is iAuthenticitySecurityFeatureCheckResult =>
    AuthenticitySecurityFeatureCheckResultTypes.includes((type as iAuthenticitySecurityFeatureCheckResult)?.Type)
}
