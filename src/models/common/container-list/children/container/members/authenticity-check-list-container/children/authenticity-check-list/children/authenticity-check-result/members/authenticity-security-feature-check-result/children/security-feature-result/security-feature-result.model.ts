import { IsDefined, IsEnum, IsIn, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { AreaContainer, IAreaContainer } from '@/models/common/area-container'
import { IRectangleCoordinates, RectangleCoordinates } from '@/models/common/rectangle-coordinates'
import {
  AuthenticityResultType,
  CheckDiagnose,
  CheckResult,
  Critical,
  SecurityFeatureType,
  Visibility
} from '@/consts'


export interface ISecurityFeatureResult {
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
  ElementResult?: CheckResult
  ElementDiagnose?: CheckDiagnose
  ElementType?: SecurityFeatureType
  ElementRect?: IRectangleCoordinates
  Visibility?: Visibility
  CriticalFlag?: Critical
  AreaList?: IAreaContainer
  Reserved2?: number
}

export class SecurityFeatureResult implements ISecurityFeatureResult {
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
  @IsEnum(Critical)
  CriticalFlag?: Critical

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => AreaContainer)
  AreaList?: AreaContainer

  @Expose()
  @IsOptional()
  @IsNumber()
  Reserved2?: number
}
