import { IsEnum, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { CheckResult, ImageQualityCheckType, SecurityFeatureType } from '~src/consts'
import { AreaArray, IAreaArray } from './children'


export interface IImageQualityCheck {
  type?: ImageQualityCheckType
  result?: CheckResult
  featureType?: SecurityFeatureType
  areas?: IAreaArray
  mean?: number
  std_dev?: number
  probability?: number
}

export class ImageQualityCheck implements IImageQualityCheck {
  @Expose()
  @IsOptional()
  @IsEnum(ImageQualityCheckType)
  type?: ImageQualityCheckType

  @Expose()
  @IsOptional()
  @IsEnum(CheckResult)
  result?: CheckResult

  @Expose()
  @IsOptional()
  @IsEnum(SecurityFeatureType)
  featureType?: SecurityFeatureType

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => AreaArray)
  areas?: AreaArray

  @Expose()
  @IsOptional()
  @IsNumber()
  mean?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  std_dev?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  probability?: number
}
