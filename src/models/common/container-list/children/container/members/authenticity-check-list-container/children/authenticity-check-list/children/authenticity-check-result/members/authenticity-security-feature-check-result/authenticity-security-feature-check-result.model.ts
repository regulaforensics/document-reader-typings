import { IsArray, IsDefined, IsEnum, IsIn, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { eAuthenticity, eCheckResult } from '@/consts'
import { Default } from '@/decorators'
import { aAuthenticityCheckResult } from '../../authenticity-check-result.abstract'
import { iSecurityFeatureResult, SecurityFeatureResult } from './children'


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

export interface iAuthenticitySecurityFeatureCheckResult extends aAuthenticityCheckResult {
  Type: tAuthenticitySecurityFeatureCheckResultType
  Result: eCheckResult
  List: iSecurityFeatureResult[]
}

export class AuthenticitySecurityFeatureCheckResult extends aAuthenticityCheckResult implements iAuthenticitySecurityFeatureCheckResult {
  @Expose()
  @IsDefined()
  @IsIn(AuthenticitySecurityFeatureCheckResultTypes)
  @IsEnum(eAuthenticity)
  Type: tAuthenticitySecurityFeatureCheckResultType

  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  @Default(eCheckResult.WAS_NOT_DONE)
  Result: eCheckResult

  @Expose()
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SecurityFeatureResult)
  @Default([])
  List: SecurityFeatureResult[]

  static fromPlain = (plain: unknown): AuthenticitySecurityFeatureCheckResult => plainToClass(AuthenticitySecurityFeatureCheckResult, plain)

  /**
  * Check if the given type belongs to AuthenticitySecurityFeatureCheckResult
  * @param {unknown} type - type to check
  * @return {type is iAuthenticitySecurityFeatureCheckResult} - result
  */
  static isBelongs = (type: unknown): type is iAuthenticitySecurityFeatureCheckResult =>
    AuthenticitySecurityFeatureCheckResultTypes.includes((type as iAuthenticitySecurityFeatureCheckResult)?.Type)
}
