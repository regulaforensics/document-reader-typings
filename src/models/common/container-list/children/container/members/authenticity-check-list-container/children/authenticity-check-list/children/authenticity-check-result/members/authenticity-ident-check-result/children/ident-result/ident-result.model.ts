import { IsDefined, IsEnum, IsIn, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { iRectangleCoordinates, RectangleCoordinates } from '@/models/common/rectangle-coordinates'
import { iImageData, ImageData } from '@/models/common/image-data'
import { AreaArray, iAreaArray } from '@/models/common/area-array'
import { eAuthenticity, eCheckDiagnose, eCheckResult, eLights, eSecurityFeatureType } from '@/consts'


export interface iIdentResult {
  Type:
    eAuthenticity.IMAGE_PATTERN |
    eAuthenticity.IR_VISIBILITY |
    eAuthenticity.OVI |
    eAuthenticity.IR_LUMINESCENCE |
    eAuthenticity.PORTRAIT_COMPARISON |
    eAuthenticity.KINEGRAM |
    eAuthenticity.LETTER_SCREEN |
    eAuthenticity.HOLOGRAM_DETECTION |
    eAuthenticity.FINGERPRINT_COMPARISON |
    eAuthenticity.LIVENESS
  ElementResult?: eCheckResult
  ElementDiagnose?: eCheckDiagnose
  ElementType?: eSecurityFeatureType
  LightIndex?: eLights
  Area?: iRectangleCoordinates
  Image?: iImageData
  EtalonImage?: iImageData
  PercentValue?: number
  AreaList?: iAreaArray
}

export class IdentResult implements iIdentResult {
  @Expose()
  @IsDefined()
  @IsIn([
    eAuthenticity.IMAGE_PATTERN,
    eAuthenticity.IR_VISIBILITY,
    eAuthenticity.OVI,
    eAuthenticity.IR_LUMINESCENCE,
    eAuthenticity.PORTRAIT_COMPARISON,
    eAuthenticity.KINEGRAM,
    eAuthenticity.LETTER_SCREEN,
    eAuthenticity.HOLOGRAM_DETECTION,
    eAuthenticity.FINGERPRINT_COMPARISON,
    eAuthenticity.LIVENESS
  ])
  @IsEnum(eAuthenticity)
  Type: eAuthenticity.IMAGE_PATTERN |
    eAuthenticity.IR_VISIBILITY |
    eAuthenticity.OVI |
    eAuthenticity.IR_LUMINESCENCE |
    eAuthenticity.PORTRAIT_COMPARISON |
    eAuthenticity.KINEGRAM |
    eAuthenticity.LETTER_SCREEN |
    eAuthenticity.HOLOGRAM_DETECTION |
    eAuthenticity.FINGERPRINT_COMPARISON |
    eAuthenticity.LIVENESS

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
  @IsEnum(eLights)
  LightIndex?: eLights

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
