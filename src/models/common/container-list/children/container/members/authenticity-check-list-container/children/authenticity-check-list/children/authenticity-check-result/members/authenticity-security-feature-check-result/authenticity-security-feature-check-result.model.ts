import { IsArray, IsDefined, IsEnum, IsIn, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { Authenticity, CheckResult } from '@/consts'
import { AuthenticityCheckResultAbstract } from '../../authenticity-check-result.abstract'
import { ISecurityFeatureResult, SecurityFeatureResult } from './children'


export interface IAuthenticitySecurityFeatureCheckResult extends AuthenticityCheckResultAbstract {
  Type:
    Authenticity.UV_LUMINESCENCE |
    Authenticity.IR_B900 |
    Authenticity.AXIAL_PROTECTION |
    Authenticity.PHOTO_EMBED_TYPE |
    Authenticity.HOLOGRAMS |
    Authenticity.PHOTO_AREA |
    Authenticity.BARCODE_FORMAT_CHECK |
    Authenticity.EXTENDED_OCR_CHECK |
    Authenticity.EXTENDED_MRZ_CHECK |
    Authenticity.STATUS_ONLY
  Result: CheckResult
  List: ISecurityFeatureResult[]
}

export class AuthenticitySecurityFeatureCheckResult extends AuthenticityCheckResultAbstract implements IAuthenticitySecurityFeatureCheckResult {
  @Expose()
  @IsDefined()
  @IsIn([
    Authenticity.UV_LUMINESCENCE,
    Authenticity.IR_B900,
    Authenticity.AXIAL_PROTECTION,
    Authenticity.PHOTO_EMBED_TYPE,
    Authenticity.HOLOGRAMS,
    Authenticity.PHOTO_AREA,
    Authenticity.BARCODE_FORMAT_CHECK,
    Authenticity.EXTENDED_OCR_CHECK,
    Authenticity.EXTENDED_MRZ_CHECK,
    Authenticity.STATUS_ONLY
  ])
  @IsEnum(Authenticity)
  Type:
    Authenticity.UV_LUMINESCENCE |
    Authenticity.IR_B900 |
    Authenticity.AXIAL_PROTECTION |
    Authenticity.PHOTO_EMBED_TYPE |
    Authenticity.HOLOGRAMS |
    Authenticity.PHOTO_AREA |
    Authenticity.BARCODE_FORMAT_CHECK |
    Authenticity.EXTENDED_OCR_CHECK |
    Authenticity.EXTENDED_MRZ_CHECK |
    Authenticity.STATUS_ONLY

  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  Result: CheckResult

  @Expose()
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SecurityFeatureResult)
  List: SecurityFeatureResult[]

  static fromPlain = (plain: unknown): AuthenticitySecurityFeatureCheckResult => plainToClass(AuthenticitySecurityFeatureCheckResult, plain)
}
