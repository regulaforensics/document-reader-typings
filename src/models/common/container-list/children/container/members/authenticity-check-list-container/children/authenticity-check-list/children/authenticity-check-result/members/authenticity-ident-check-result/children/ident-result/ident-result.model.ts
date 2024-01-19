import { IsDefined, IsEnum, IsIn, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { iRect, Rect } from '@/models/common/rect'
import { iImageData, ImageData } from '@/models/common/image-data'
import { AreaArray, iAreaArray } from '@/models/common/area-array'
import { eAuthenticity, eCheckDiagnose, eCheckResult, eLights, eSecurityFeatureType } from '@/consts'


/**
* Structure serves for storing the result of a single security element of following type checking
*/
export interface iIdentResult {
  /**
   * Type of the performed check
   * @type {
   *   eAuthenticity.IMAGE_PATTERN |
   *   eAuthenticity.IR_VISIBILITY |
   *   eAuthenticity.OVI |
   *   eAuthenticity.IR_LUMINESCENCE |
   *   eAuthenticity.PORTRAIT_COMPARISON |
   *   eAuthenticity.KINEGRAM |
   *   eAuthenticity.LETTER_SCREEN |
   *   eAuthenticity.HOLOGRAM_DETECTION |
   *   eAuthenticity.FINGERPRINT_COMPARISON |
   *   eAuthenticity.LIVENESS
   * }
   */
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

  /**
  * Element responsible for the results of the checks
  * @type {eCheckResult}
  */
  ElementResult: eCheckResult

  /**
  * Element with which errors are checked
  * @type {eCheckDiagnose}
  */
  ElementDiagnose: eCheckDiagnose

  /**
  * Lighting scheme identifier
  * @type {eLights}
  */
  LightIndex: eLights

  /**
  * Checked fragment area coordinates
  * @type {iRect}
  */
  Area: iRect

  /**
  * Located image fragment
  * @type {iImageData}
  */
  Image: iImageData

  /**
  * Expected image pattern
  * @type {iImageData}
  */
  EtalonImage: iImageData

  /**
  * Identity percent of the etalon and sample image
  * @type {number}
  */
  PercentValue: number

  /**
   * Element with which errors are checked
   * @type {eSecurityFeatureType}
   */
  ElementType: eSecurityFeatureType

  /**
  * List of located areas
  * @type {iAreaArray}
  */
  AreaList?: iAreaArray
}

/**
* Structure serves for storing the result of a single security element of following type checking
*/
export class IdentResult implements iIdentResult {
  /**
  * Type of the performed check
  * @type {
  *   eAuthenticity.IMAGE_PATTERN |
  *   eAuthenticity.IR_VISIBILITY |
  *   eAuthenticity.OVI |
  *   eAuthenticity.IR_LUMINESCENCE |
  *   eAuthenticity.PORTRAIT_COMPARISON |
  *   eAuthenticity.KINEGRAM |
  *   eAuthenticity.LETTER_SCREEN |
  *   eAuthenticity.HOLOGRAM_DETECTION |
  *   eAuthenticity.FINGERPRINT_COMPARISON |
  *   eAuthenticity.LIVENESS
  * }
  */
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
  @Type(() => Rect)
  Area?: Rect

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
