import { IsDefined, IsEnum, IsIn, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { IRectangleCoordinates, RectangleCoordinates } from 'models/common/rectangle-coordinates'
import { IImageData, ImageData } from 'models/common/image-data'
import { AreaContainer, IAreaContainer } from 'models/common/area-container'
import { AuthenticityResultType, CheckDiagnose, CheckResult, Light, SecurityFeatureType } from 'consts'


export interface IIdentResult {
  Type:
    AuthenticityResultType.IMAGE_PATTERN |
    AuthenticityResultType.IR_VISIBILITY |
    AuthenticityResultType.OVI |
    AuthenticityResultType.IR_LUMINESCENCE |
    AuthenticityResultType.PORTRAIT_COMPARISON |
    AuthenticityResultType.KINEGRAM |
    AuthenticityResultType.LETTER_SCREEN |
    AuthenticityResultType.HOLOGRAM_DETECTION |
    AuthenticityResultType.FINGERPRINT_COMPARISON |
    AuthenticityResultType.LIVENESS
  ElementResult?: CheckResult
  ElementDiagnose?: CheckDiagnose
  ElementType?: SecurityFeatureType
  LightIndex?: Light
  Area?: IRectangleCoordinates
  Image?: IImageData
  EtalonImage?: IImageData
  PercentValue?: number
  AreaList?: IAreaContainer
}

export class IdentResult implements IIdentResult {
  @Expose()
  @IsDefined()
  @IsIn([
    AuthenticityResultType.IMAGE_PATTERN,
    AuthenticityResultType.IR_VISIBILITY,
    AuthenticityResultType.OVI,
    AuthenticityResultType.IR_LUMINESCENCE,
    AuthenticityResultType.PORTRAIT_COMPARISON,
    AuthenticityResultType.KINEGRAM,
    AuthenticityResultType.LETTER_SCREEN,
    AuthenticityResultType.HOLOGRAM_DETECTION,
    AuthenticityResultType.FINGERPRINT_COMPARISON,
    AuthenticityResultType.LIVENESS
  ])
  @IsEnum(AuthenticityResultType)
  Type: AuthenticityResultType.IMAGE_PATTERN |
    AuthenticityResultType.IR_VISIBILITY |
    AuthenticityResultType.OVI |
    AuthenticityResultType.IR_LUMINESCENCE |
    AuthenticityResultType.PORTRAIT_COMPARISON |
    AuthenticityResultType.KINEGRAM |
    AuthenticityResultType.LETTER_SCREEN |
    AuthenticityResultType.HOLOGRAM_DETECTION |
    AuthenticityResultType.FINGERPRINT_COMPARISON |
    AuthenticityResultType.LIVENESS

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
  @Type(() => AreaContainer)
  AreaList?: AreaContainer
}
