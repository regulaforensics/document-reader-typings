import { IsDefined, IsEnum, IsIn, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { AreaArray, IAreaArray } from '@/models/common/area-array'
import { IRectangleCoordinates, RectangleCoordinates } from '@/models/common/rectangle-coordinates'
import {
  Authenticity,
  CheckDiagnose,
  CheckResult,
  SecurityCriticalFlag,
  SecurityFeatureType,
  Visibility
} from '@/consts'


export interface ISecurityFeatureResult {
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
  ElementResult?: CheckResult
  ElementDiagnose?: CheckDiagnose
  ElementType?: SecurityFeatureType
  ElementRect?: IRectangleCoordinates
  Visibility?: Visibility
  CriticalFlag?: SecurityCriticalFlag
  AreaList?: IAreaArray
  Reserved2?: number
}

export class SecurityFeatureResult implements ISecurityFeatureResult {
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
  @IsOptional()
  @IsEnum(CheckResult)
  ElementResult?: CheckResult

  @Expose()
  @IsOptional()
  @IsEnum(CheckDiagnose)
  ElementDiagnose?: CheckDiagnose

  @Expose()
  @IsOptional()
  @IsEnum(SecurityFeatureType)
  ElementType?: SecurityFeatureType

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => RectangleCoordinates)
  ElementRect?: RectangleCoordinates

  @Expose()
  @IsOptional()
  @IsEnum(Visibility)
  Visibility?: Visibility

  @Expose()
  @IsOptional()
  @IsEnum(SecurityCriticalFlag)
  CriticalFlag?: SecurityCriticalFlag

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
