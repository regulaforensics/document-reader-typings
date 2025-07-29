import { IsDefined, IsEnum, IsIn, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { IdentItem } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { Rect } from '@/models/common/rect'
import { ImageData } from '@/models/common/image-data'
import { AreaArray } from '@/models/common/area-array'
import { eAuthenticity, eLights, eSecurityFeatureType } from '@/consts'
import { aAuthenticityCheckResultItem } from '../../../../authenticity-check-result-item.abstract'

/**
 * Structure serves for storing the result of a single security element of following type checking
 */
export interface iIdentResult extends aAuthenticityCheckResultItem, IdentItem {
  /**
   * Type of the performed check
   * @type {eAuthenticity.IMAGE_PATTERN | eAuthenticity.IR_VISIBILITY | eAuthenticity.OVI | eAuthenticity.PORTRAIT_COMPARISON | eAuthenticity.KINEGRAM | eAuthenticity.LETTER_SCREEN | eAuthenticity.HOLOGRAM_DETECTION | eAuthenticity.FINGERPRINT_COMPARISON | eAuthenticity.LIVENESS}
   */
  Type:
    | eAuthenticity.IMAGE_PATTERN
    | eAuthenticity.IR_VISIBILITY
    | eAuthenticity.OVI
    | eAuthenticity.PORTRAIT_COMPARISON
    | eAuthenticity.KINEGRAM
    | eAuthenticity.LETTER_SCREEN
    | eAuthenticity.HOLOGRAM_DETECTION
    | eAuthenticity.FINGERPRINT_COMPARISON
    | eAuthenticity.LIVENESS
}

/**
 * Structure serves for storing the result of a single security element of following type checking
 */
export class IdentResult extends aAuthenticityCheckResultItem implements iIdentResult {
  /**
   * Element with which errors are checked
   * @type {eSecurityFeatureType}
   */
  @IsDefined()
  @IsEnum(eSecurityFeatureType)
  ElementType: eSecurityFeatureType

  /**
   * Lighting scheme identifier
   * @type {eLights}
   */
  @IsDefined()
  @IsEnum(eLights)
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
   * List of located areas
   * @type {iAreaArray|undefined}
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => AreaArray)
  AreaList?: AreaArray

  /**
   * @type {number}
   */
  @IsOptional()
  @IsNumber()
  ElementID?: number

  /**
   * Type of the performed check
   * @type {eAuthenticity.IMAGE_PATTERN | eAuthenticity.IR_VISIBILITY | eAuthenticity.OVI | eAuthenticity.PORTRAIT_COMPARISON | eAuthenticity.KINEGRAM | eAuthenticity.LETTER_SCREEN | eAuthenticity.HOLOGRAM_DETECTION | eAuthenticity.FINGERPRINT_COMPARISON | eAuthenticity.LIVENESS}
   */
  @IsDefined()
  @IsIn([
    eAuthenticity.IMAGE_PATTERN,
    eAuthenticity.IR_VISIBILITY,
    eAuthenticity.OVI,
    eAuthenticity.PORTRAIT_COMPARISON,
    eAuthenticity.KINEGRAM,
    eAuthenticity.LETTER_SCREEN,
    eAuthenticity.HOLOGRAM_DETECTION,
    eAuthenticity.FINGERPRINT_COMPARISON,
    eAuthenticity.LIVENESS,
  ])
  @IsEnum(eAuthenticity)
  Type:
    | eAuthenticity.IMAGE_PATTERN
    | eAuthenticity.IR_VISIBILITY
    | eAuthenticity.OVI
    | eAuthenticity.PORTRAIT_COMPARISON
    | eAuthenticity.KINEGRAM
    | eAuthenticity.LETTER_SCREEN
    | eAuthenticity.HOLOGRAM_DETECTION
    | eAuthenticity.FINGERPRINT_COMPARISON
    | eAuthenticity.LIVENESS
}
