import { IsArray, IsDefined, IsEnum, IsIn, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { AuthenticityResultType, CheckResult } from '@/consts'
import { AuthenticityCheckResultAbstract } from '../../authenticity-check-result.abstract'
import { ISecurityFeatureResult, SecurityFeatureResult } from './children'


export interface IAuthenticitySecurityFeatureCheckResult extends AuthenticityCheckResultAbstract {
  Type:
    AuthenticityResultType.UV_LUMINESCENCE |
    AuthenticityResultType.IR_B900 |
    AuthenticityResultType.AXIAL_PROTECTION |
    AuthenticityResultType.PHOTO_EMBED_TYPE |
    AuthenticityResultType.HOLOGRAMS |
    AuthenticityResultType.PHOTO_AREA |
    AuthenticityResultType.BARCODE_FORMAT_CHECK |
    AuthenticityResultType.EXTENDED_OCR_CHECK |
    AuthenticityResultType.EXTENDED_MRZ_CHECK |
    AuthenticityResultType.STATUS_ONLY
  Result: CheckResult
  List: ISecurityFeatureResult[]
}

export class AuthenticitySecurityFeatureCheckResult extends AuthenticityCheckResultAbstract implements IAuthenticitySecurityFeatureCheckResult {
  @Expose()
  @IsDefined()
  @IsIn([
    AuthenticityResultType.UV_LUMINESCENCE,
    AuthenticityResultType.IR_B900,
    AuthenticityResultType.AXIAL_PROTECTION,
    AuthenticityResultType.PHOTO_EMBED_TYPE,
    AuthenticityResultType.HOLOGRAMS,
    AuthenticityResultType.PHOTO_AREA,
    AuthenticityResultType.BARCODE_FORMAT_CHECK,
    AuthenticityResultType.EXTENDED_OCR_CHECK,
    AuthenticityResultType.EXTENDED_MRZ_CHECK,
    AuthenticityResultType.STATUS_ONLY
  ])
  @IsEnum(AuthenticityResultType)
  Type:
    AuthenticityResultType.UV_LUMINESCENCE |
    AuthenticityResultType.IR_B900 |
    AuthenticityResultType.AXIAL_PROTECTION |
    AuthenticityResultType.PHOTO_EMBED_TYPE |
    AuthenticityResultType.HOLOGRAMS |
    AuthenticityResultType.PHOTO_AREA |
    AuthenticityResultType.BARCODE_FORMAT_CHECK |
    AuthenticityResultType.EXTENDED_OCR_CHECK |
    AuthenticityResultType.EXTENDED_MRZ_CHECK |
    AuthenticityResultType.STATUS_ONLY

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
