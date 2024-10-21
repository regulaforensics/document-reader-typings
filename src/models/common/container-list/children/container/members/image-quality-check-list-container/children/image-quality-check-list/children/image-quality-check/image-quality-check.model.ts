import { IsDefined, IsEnum, IsInt, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

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
  * @type {iAreaArray|undefined}
  */
  areas?: iAreaArray

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
  @IsDefined()
  @IsEnum(eImageQualityCheckType)
  type: eImageQualityCheckType

  /**
  * Check result
  * @type {eCheckResult}
  */
  @IsDefined()
  @IsEnum(eCheckResult)
  @Default(eCheckResult.WAS_NOT_DONE)
  result: eCheckResult

  /**
  * Security feature type
  * @type {eSecurityFeatureType}
  */
  @IsDefined()
  @IsEnum(eSecurityFeatureType)
  @Default(eSecurityFeatureType.BLANK)
  featureType: eSecurityFeatureType

  /**
  * Anomalous image areas
  * @type {AreaArray|undefined}
  */
  @IsOptional()
  @ValidateNested()
  @Type(() => AreaArray)
  areas?: AreaArray

  /**
  * Check mean value
  * @type {number}
  */
  @IsDefined()
  @IsNumber()
  mean: number

  /**
  * Check deviation value
  * @type {number}
  */
  @IsDefined()
  @IsNumber()
  std_dev: number

  /**
  * Check probability value
  * @type {number}
  */
  @IsDefined()
  @IsInt()
  probability: number
}
