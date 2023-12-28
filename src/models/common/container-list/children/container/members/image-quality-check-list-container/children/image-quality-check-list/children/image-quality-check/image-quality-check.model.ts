import { IsDefined, IsEnum, IsInt, IsNumber, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { CheckResult, ImageQualityCheckType, SecurityFeatureType } from '@/consts'
import { AreaArray, IAreaArray } from '@/models/common/area-array'
import { Default } from '@/decorators'


export interface IImageQualityCheck {
  /**
  * Check result type
  * @type {ImageQualityCheckType}
  */
  type: ImageQualityCheckType

  /**
  * Check result
  * @type {CheckResult}
  */
  result: CheckResult

  /**
  * Security feature type
  * @type {SecurityFeatureType}
  */
  featureType: SecurityFeatureType

  /**
  * Anomalous image areas
  * @type {IAreaArray}
  */
  areas: IAreaArray

  /**
  * Check mean value
  * @type {number}
  */
  mean: number

  /**
  * Check deviation value
  * @type {number}
  */
  std_dev: number

  /**
  * Check probability value
  * @type {number}
  */
  probability: number
}

export class ImageQualityCheck implements IImageQualityCheck {
  /**
  * Check result type
  * @type {ImageQualityCheckType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(ImageQualityCheckType)
  type: ImageQualityCheckType

  /**
  * Check result
  * @type {CheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  result: CheckResult

  /**
  * Security feature type
  * @type {SecurityFeatureType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(SecurityFeatureType)
  @Default(SecurityFeatureType.BLANK)
  featureType: SecurityFeatureType

  /**
  * Anomalous image areas
  * @type {AreaArray}
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => AreaArray)
  areas: AreaArray

  /**
  * Check mean value
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  mean: number

  /**
  * Check deviation value
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  std_dev: number

  /**
  * Check probability value
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  probability: number
}
