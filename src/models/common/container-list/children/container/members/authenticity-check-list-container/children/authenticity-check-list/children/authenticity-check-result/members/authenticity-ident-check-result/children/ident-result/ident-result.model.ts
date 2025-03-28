import { IsDefined, IsEnum, IsIn, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

import { Default } from '@/decorators'
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
  * Element with which errors are checked
  * @type {eSecurityFeatureType}
  */
  ElementType: eSecurityFeatureType

  /**
  * Lighting scheme identifier
  * @type {eLights}
  */
  LightIndex: eLights

  /**
  * Checked fragment area coordinates
  * @type {iRect}
  */
  Area?: iRect

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

  /**
  * Element responsible for the results of the checks
  * @type {eCheckResult}
  */
  @IsDefined()
  @IsEnum(eCheckResult)
  @Default(eCheckResult.WAS_NOT_DONE)
  ElementResult: eCheckResult

  /**
  * Element with which errors are checked
  * @type {eCheckDiagnose}
  */
  @IsDefined()
  @IsEnum(eCheckDiagnose)
  @Default(eCheckDiagnose.UNKNOWN)
  ElementDiagnose: eCheckDiagnose

  /**
  * Element with which errors are checked
  * @type {eSecurityFeatureType}
  */
  @IsDefined()
  @IsEnum(eSecurityFeatureType)
  @Default(eSecurityFeatureType.BLANK)
  ElementType: eSecurityFeatureType

  /**
  * Lighting scheme identifier
  * @type {eLights}
  */
  @IsDefined()
  @IsEnum(eLights)
  @Default(eLights.OFF)
  LightIndex: eLights

  /**
  * Checked fragment area coordinates
  * @type {Rect}
  */
  @IsOptional()
  @ValidateNested()
  @Type(() => Rect)
  Area?: Rect

  /**
  * Located image fragment
  * @type {ImageData}
  */
  @IsDefined()
  @ValidateNested()
  @Type(() => ImageData)
  Image: ImageData

  /**
  * Expected image pattern
  * @type {ImageData}
  */
  @IsDefined()
  @ValidateNested()
  @Type(() => ImageData)
  EtalonImage: ImageData

  /**
  * Identity percent of the etalon and sample image
  * If type = eAuthenticity.IR_VISIBILITY then this field contains IR visibility flags
  * Use getIRVisibilityFlagArray to get array of eIRVisibilityFlag from this field
  * @type {number}
  */
  @IsOptional()
  @IsNumber()
  PercentValue: number

  /**
  * List of located areas
  * @type {iAreaArray|undefined}
  */
  @IsOptional()
  @ValidateNested()
  @Type(() => AreaArray)
  AreaList?: AreaArray
}
