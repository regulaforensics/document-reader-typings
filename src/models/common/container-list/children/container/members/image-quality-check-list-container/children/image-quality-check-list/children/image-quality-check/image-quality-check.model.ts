import { IsDefined, IsEnum, IsInt, IsNumber, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { eCheckResult, eImageQualityCheckType, eSecurityFeatureType } from '@/consts'
import { AreaArray, iAreaArray } from '@/models/common/area-array'
import { Default } from '@/decorators'


/**
* Structure is used for storing input image quality check result
*/
export interface iImageQualityCheck {
  /**
  * Check result type
  * @type {eImageQualityCheckType}
  */
  type: eImageQualityCheckType

  /**
  * Check result
  * @type {eCheckResult}
  */
  result: eCheckResult

  /**
  * Security feature type
  * @type {eSecurityFeatureType}
  */
  featureType: eSecurityFeatureType

  /**
  * Anomalous image areas
  * @type {iAreaArray}
  */
  areas: iAreaArray

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

/**
* Structure is used for storing input image quality check result
*/
export class ImageQualityCheck implements iImageQualityCheck {
  /**
  * Check result type
  * @type {eImageQualityCheckType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eImageQualityCheckType)
  type: eImageQualityCheckType

  /**
  * Check result
  * @type {eCheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  result: eCheckResult

  /**
  * Security feature type
  * @type {eSecurityFeatureType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eSecurityFeatureType)
  @Default(eSecurityFeatureType.BLANK)
  featureType: eSecurityFeatureType

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
