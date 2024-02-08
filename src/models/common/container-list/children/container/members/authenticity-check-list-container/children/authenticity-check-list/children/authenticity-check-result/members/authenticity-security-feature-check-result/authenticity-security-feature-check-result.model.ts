import { IsArray, IsDefined, IsEnum, IsIn, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { eAuthenticity, eCheckResult } from '@/consts'
import { Default } from '@/decorators'
import { aAuthenticityCheckResult } from '../../authenticity-check-result.abstract'
import { iSecurityFeatureResult, SecurityFeatureResult } from './children'


export interface iAuthenticitySecurityFeatureCheckResult extends aAuthenticityCheckResult {
  Type:
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
  Result: eCheckResult
  List: iSecurityFeatureResult[]
}

export class AuthenticitySecurityFeatureCheckResult extends aAuthenticityCheckResult implements iAuthenticitySecurityFeatureCheckResult {
  @Expose()
  @IsDefined()
  @IsIn([
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
  ])
  @IsEnum(eAuthenticity)
  Type:
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
}
