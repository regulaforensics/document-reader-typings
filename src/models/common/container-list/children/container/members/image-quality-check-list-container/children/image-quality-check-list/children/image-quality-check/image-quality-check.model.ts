import { IsDefined, IsEnum, IsInt, IsNumber, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { eCheckResult, eImageQualityCheckType, eSecurityFeatureType } from '@/consts'
import { AreaArray, iAreaArray } from '@/models/common/area-array'
import { Default } from '@/decorators'


export interface iImageQualityCheck {
  /**
  * Check result type
  * @type {eImageQualityCheckType}
  * @memberof iImageQualityCheck
  */
  type: eImageQualityCheckType

  /**
  * Check result
  * @type {eCheckResult}
  * @memberof iImageQualityCheck
  */
  result: eCheckResult

  /**
  * Security feature type
  * @type {eSecurityFeatureType}
  * @memberof iImageQualityCheck
  */
  featureType: eSecurityFeatureType

  /**
  * Anomalous image areas
  * @type {iAreaArray}
  * @memberof iImageQualityCheck
  */
  areas: iAreaArray

  /**
  * Check mean value
  * @type {number}
  * @memberof iImageQualityCheck
  */
  mean: number

  /**
  * Check deviation value
  * @type {number}
  * @memberof iImageQualityCheck
  */
  std_dev: number

  /**
  * Check probability value
  * @type {number}
  * @memberof iImageQualityCheck
  */
  probability: number
}

export class ImageQualityCheck implements iImageQualityCheck {
  /**
  * Check result type
  * @type {eImageQualityCheckType}
  * @memberof ImageQualityCheck
  */
  @Expose()
  @IsDefined()
  @IsEnum(eImageQualityCheckType)
  type: eImageQualityCheckType

  /**
  * Check result
  * @type {eCheckResult}
  * @memberof ImageQualityCheck
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  result: eCheckResult

  /**
  * Security feature type
  * @type {eSecurityFeatureType}
  * @memberof ImageQualityCheck
  */
  @Expose()
  @IsDefined()
  @IsEnum(eSecurityFeatureType)
  @Default(eSecurityFeatureType.BLANK)
  featureType: eSecurityFeatureType

  /**
  * Anomalous image areas
  * @type {AreaArray}
  * @memberof ImageQualityCheck
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => AreaArray)
  areas: AreaArray

  /**
  * Check mean value
  * @type {number}
  * @memberof ImageQualityCheck
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  mean: number

  /**
  * Check deviation value
  * @type {number}
  * @memberof ImageQualityCheck
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  std_dev: number

  /**
  * Check probability value
  * @type {number}
  * @memberof ImageQualityCheck
  */
  @Expose()
  @IsDefined()
  @IsInt()
  probability: number
}
