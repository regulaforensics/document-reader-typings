import { IsDefined, IsEnum, IsInt, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { ImageQualityCheck as cImageQualityCheck } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { eCheckResult, eImageQualityCheckType, eSecurityFeatureType } from '@/consts'
import { AreaArray } from '@/models/common/area-array'

/**
 * Structure is used for storing input image quality check result
 */
export class ImageQualityCheck implements cImageQualityCheck {
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
  result: eCheckResult

  /**
   * Security feature type
   * @type {eSecurityFeatureType}
   */
  @IsDefined()
  @IsEnum(eSecurityFeatureType)
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

export type { ImageQualityCheck as iImageQualityCheck }
