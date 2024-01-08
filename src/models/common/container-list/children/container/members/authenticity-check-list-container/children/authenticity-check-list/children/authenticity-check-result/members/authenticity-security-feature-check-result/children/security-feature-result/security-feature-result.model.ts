import { IsDefined, IsEnum, IsIn, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { AreaArray, iAreaArray } from '@/models/common/area-array'
import { iRect, Rect } from '@/models/common/rect'
import {
  eAuthenticity,
  eCheckDiagnose,
  eCheckResult,
  eSecurityCriticalFlag,
  eSecurityFeatureType,
  eIRVisibilityFlag
} from '@/consts'


export interface iSecurityFeatureResult {
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
  ElementResult?: eCheckResult
  ElementDiagnose?: eCheckDiagnose
  ElementType?: eSecurityFeatureType
  ElementRect?: iRect
  Visibility?: eIRVisibilityFlag
  CriticalFlag?: eSecurityCriticalFlag
  AreaList?: iAreaArray
  Reserved2?: number
}

export class SecurityFeatureResult implements iSecurityFeatureResult {
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
  @IsOptional()
  @IsEnum(eCheckResult)
  ElementResult?: eCheckResult

  @Expose()
  @IsOptional()
  @IsEnum(eCheckDiagnose)
  ElementDiagnose?: eCheckDiagnose

  @Expose()
  @IsOptional()
  @IsEnum(eSecurityFeatureType)
  ElementType?: eSecurityFeatureType

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => Rect)
  ElementRect?: Rect

  @Expose()
  @IsOptional()
  @IsEnum(eIRVisibilityFlag)
  Visibility?: eIRVisibilityFlag

  @Expose()
  @IsOptional()
  @IsEnum(eSecurityCriticalFlag)
  CriticalFlag?: eSecurityCriticalFlag

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => AreaArray)
  AreaList?: AreaArray

  @Expose()
  @IsOptional()
  @IsNumber()
  Reserved2?: number
}
