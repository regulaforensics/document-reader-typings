import { IsDefined, IsEnum, IsIn, IsInt, ValidateNested, IsOptional } from 'class-validator'
import { SecurityFeatureItem } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { Rect } from '@/models/common/rect'
import { eAuthenticity, eIRVisibilityFlag, eSecurityCriticalFlag, eSecurityFeatureType } from '@/consts'
import { AreaArray } from '@/models'
import { aAuthenticityCheckResultItem } from '../../../../authenticity-check-result-item.abstract'

/**
 * Structure serves for storing the result of a single security element
 */
export interface iSecurityFeatureCheck extends aAuthenticityCheckResultItem, SecurityFeatureItem {
  /**
   * Type of the performed check
   * @type {eAuthenticity.UV_LUMINESCENCE | eAuthenticity.IR_B900 | eAuthenticity.AXIAL_PROTECTION | eAuthenticity.PHOTO_EMBED_TYPE | eAuthenticity.HOLOGRAMS | eAuthenticity.PHOTO_AREA | eAuthenticity.BARCODE_FORMAT_CHECK | eAuthenticity.EXTENDED_OCR_CHECK | eAuthenticity.EXTENDED_MRZ_CHECK}
   */
  Type:
    | eAuthenticity.UV_LUMINESCENCE
    | eAuthenticity.IR_B900
    | eAuthenticity.AXIAL_PROTECTION
    | eAuthenticity.PHOTO_EMBED_TYPE
    | eAuthenticity.HOLOGRAMS
    | eAuthenticity.PHOTO_AREA
    | eAuthenticity.BARCODE_FORMAT_CHECK
    | eAuthenticity.EXTENDED_OCR_CHECK
    | eAuthenticity.EXTENDED_MRZ_CHECK
}

/**
 * Structure serves for storing the result of a single security element
 */
export class SecurityFeatureCheck extends aAuthenticityCheckResultItem implements iSecurityFeatureCheck {
  /**
   * Element type
   * @type {eSecurityFeatureType}
   */
  @IsDefined()
  @IsEnum(eSecurityFeatureType)
  ElementType: eSecurityFeatureType

  /**
   * Element’s area
   * @type {Rect}
   */
  @IsDefined()
  @ValidateNested()
  @Type(() => Rect)
  ElementRect: Rect

  /**
   * Element’s visibility
   * @type {eIRVisibilityFlag}
   */
  @IsDefined()
  @IsEnum(eIRVisibilityFlag)
  Visibility: eIRVisibilityFlag

  /**
   * Flag of element’s importance
   * @type {eSecurityCriticalFlag}
   */
  @IsDefined()
  @IsEnum(eSecurityCriticalFlag)
  CriticalFlag: eSecurityCriticalFlag

  /**
   * @type {AreaArray|undefined}
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => AreaArray)
  AreaList?: AreaArray

  /**
   * @type {number|undefined}
   */
  @IsOptional()
  @IsInt()
  Reserved2?: number

  /**
   * Type of the performed check
   * @type {eAuthenticity.UV_LUMINESCENCE | eAuthenticity.IR_B900 | eAuthenticity.AXIAL_PROTECTION | eAuthenticity.PHOTO_EMBED_TYPE | eAuthenticity.HOLOGRAMS | eAuthenticity.PHOTO_AREA | eAuthenticity.BARCODE_FORMAT_CHECK | eAuthenticity.EXTENDED_OCR_CHECK | eAuthenticity.EXTENDED_MRZ_CHECK}
   */
  @IsDefined()
  @IsIn([
    eAuthenticity.UV_LUMINESCENCE,
    eAuthenticity.IR_B900,
    eAuthenticity.AXIAL_PROTECTION,
    eAuthenticity.PHOTO_EMBED_TYPE,
    eAuthenticity.HOLOGRAMS,
    eAuthenticity.PHOTO_AREA,
    eAuthenticity.BARCODE_FORMAT_CHECK,
    eAuthenticity.EXTENDED_OCR_CHECK,
    eAuthenticity.EXTENDED_MRZ_CHECK,
  ])
  @IsEnum(eAuthenticity)
  Type:
    | eAuthenticity.UV_LUMINESCENCE
    | eAuthenticity.IR_B900
    | eAuthenticity.AXIAL_PROTECTION
    | eAuthenticity.PHOTO_EMBED_TYPE
    | eAuthenticity.HOLOGRAMS
    | eAuthenticity.PHOTO_AREA
    | eAuthenticity.BARCODE_FORMAT_CHECK
    | eAuthenticity.EXTENDED_OCR_CHECK
    | eAuthenticity.EXTENDED_MRZ_CHECK
}
