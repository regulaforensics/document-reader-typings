import { IsDefined, IsEnum, IsIn, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { IRectangleCoordinates, RectangleCoordinates } from '@/models/common/rectangle-coordinates'
import { IImageData, ImageData } from '@/models/common/image-data'
import { AreaArray, IAreaArray } from '@/models/common/area-array'
import { Authenticity, CheckDiagnose, CheckResult, Light, SecurityFeatureType } from '@/consts'


export interface IIdentResult {
  Type:
    Authenticity.IMAGE_PATTERN |
    Authenticity.IR_VISIBILITY |
    Authenticity.OVI |
    Authenticity.IR_LUMINESCENCE |
    Authenticity.PORTRAIT_COMPARISON |
    Authenticity.KINEGRAM |
    Authenticity.LETTER_SCREEN |
    Authenticity.HOLOGRAM_DETECTION |
    Authenticity.FINGERPRINT_COMPARISON |
    Authenticity.LIVENESS
  ElementResult?: CheckResult
  ElementDiagnose?: CheckDiagnose
  ElementType?: SecurityFeatureType
  LightIndex?: Light
  Area?: IRectangleCoordinates
  Image?: IImageData
  EtalonImage?: IImageData
  PercentValue?: number
  AreaList?: IAreaArray
}

export class IdentResult implements IIdentResult {
  @Expose()
  @IsDefined()
  @IsIn([
    Authenticity.IMAGE_PATTERN,
    Authenticity.IR_VISIBILITY,
    Authenticity.OVI,
    Authenticity.IR_LUMINESCENCE,
    Authenticity.PORTRAIT_COMPARISON,
    Authenticity.KINEGRAM,
    Authenticity.LETTER_SCREEN,
    Authenticity.HOLOGRAM_DETECTION,
    Authenticity.FINGERPRINT_COMPARISON,
    Authenticity.LIVENESS
  ])
  @IsEnum(Authenticity)
  Type: Authenticity.IMAGE_PATTERN |
    Authenticity.IR_VISIBILITY |
    Authenticity.OVI |
    Authenticity.IR_LUMINESCENCE |
    Authenticity.PORTRAIT_COMPARISON |
    Authenticity.KINEGRAM |
    Authenticity.LETTER_SCREEN |
    Authenticity.HOLOGRAM_DETECTION |
    Authenticity.FINGERPRINT_COMPARISON |
    Authenticity.LIVENESS

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
  @IsEnum(Light)
  LightIndex?: Light

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => RectangleCoordinates)
  Area?: RectangleCoordinates

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => ImageData)
  Image?: ImageData

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => ImageData)
  EtalonImage?: ImageData

  @Expose()
  @IsOptional()
  @IsNumber()
  PercentValue?: number

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => AreaArray)
  AreaList?: AreaArray
}
