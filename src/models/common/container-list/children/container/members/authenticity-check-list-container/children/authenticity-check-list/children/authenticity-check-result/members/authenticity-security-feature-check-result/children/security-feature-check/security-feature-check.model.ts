import { IsDefined, IsEnum, IsIn, IsInt, ValidateNested, IsOptional } from 'class-validator'
import { Type } from 'class-transformer'

import { iRect, Rect } from '@/models/common/rect'
import {
  eAuthenticity,
  eCheckDiagnose,
  eCheckResult,
  eIRVisibilityFlag,
  eSecurityCriticalFlag,
  eSecurityFeatureType
} from '@/consts'
import { AreaArray } from '@/models'
import { Default } from '@/decorators'


/**
* Structure serves for storing the result of a single security element
*/
export interface iSecurityFeatureCheck {
  /**
  * Type of the performed check
  * @type {eAuthenticity.UV_LUMINESCENCE | eAuthenticity.IR_B900 | eAuthenticity.AXIAL_PROTECTION | eAuthenticity.PHOTO_EMBED_TYPE | eAuthenticity.HOLOGRAMS | eAuthenticity.PHOTO_AREA | eAuthenticity.BARCODE_FORMAT_CHECK | eAuthenticity.EXTENDED_OCR_CHECK | eAuthenticity.EXTENDED_MRZ_CHECK | eAuthenticity.STATUS_ONLY}
  */
  Type:
    eAuthenticity.UV_LUMINESCENCE |
    eAuthenticity.IR_B900 |
    eAuthenticity.AXIAL_PROTECTION |
    eAuthenticity.PHOTO_EMBED_TYPE |
    eAuthenticity.HOLOGRAMS |
    eAuthenticity.PHOTO_AREA |
    eAuthenticity.BARCODE_FORMAT_CHECK |
    eAuthenticity.EXTENDED_OCR_CHECK |
    eAuthenticity.EXTENDED_MRZ_CHECK |
    eAuthenticity.STATUS_ONLY

  /**
  * Element checking result
  * @type {eCheckResult}
  */
  ElementResult: eCheckResult

  /**
  * Element with which errors are checked
  * @type {eCheckDiagnose}
  */
  ElementDiagnose: eCheckDiagnose

  /**
  * Element type
  * @type {eSecurityFeatureType}
  */
  ElementType: eSecurityFeatureType

  /**
  * Element’s area
  * @type {iRect}
  */
  ElementRect: iRect

  /**
  * Element’s visibility
  * @type {eIRVisibilityFlag}
  */
  Visibility: eIRVisibilityFlag

  /**
  * Flag of element’s importance
  * @type {eSecurityCriticalFlag}
  */
  CriticalFlag: eSecurityCriticalFlag

  /**
   * @type {AreaArray|undefined}
   */
  AreaList?: AreaArray

  /**
   * @type {number|undefined}
   */
  Reserved2?: number
}

/**
* Structure serves for storing the result of a single security element
*/
export class SecurityFeatureCheck implements iSecurityFeatureCheck {
  /**
  * Type of the performed check
  * @type {eAuthenticity.UV_LUMINESCENCE | eAuthenticity.IR_B900 | eAuthenticity.AXIAL_PROTECTION | eAuthenticity.PHOTO_EMBED_TYPE | eAuthenticity.HOLOGRAMS | eAuthenticity.PHOTO_AREA | eAuthenticity.BARCODE_FORMAT_CHECK | eAuthenticity.EXTENDED_OCR_CHECK | eAuthenticity.EXTENDED_MRZ_CHECK | eAuthenticity.STATUS_ONLY}
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
    eAuthenticity.STATUS_ONLY
  ])
  @IsEnum(eAuthenticity)
  Type:
    eAuthenticity.UV_LUMINESCENCE |
    eAuthenticity.IR_B900 |
    eAuthenticity.AXIAL_PROTECTION |
    eAuthenticity.PHOTO_EMBED_TYPE |
    eAuthenticity.HOLOGRAMS |
    eAuthenticity.PHOTO_AREA |
    eAuthenticity.BARCODE_FORMAT_CHECK |
    eAuthenticity.EXTENDED_OCR_CHECK |
    eAuthenticity.EXTENDED_MRZ_CHECK |
    eAuthenticity.STATUS_ONLY

  /**
  * Element checking result
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
  * Element type
  * @type {eSecurityFeatureType}
  */
  @IsDefined()
  @IsEnum(eSecurityFeatureType)
  @Default(eSecurityFeatureType.BLANK)
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
  @Default(eSecurityCriticalFlag.NOT_CRITICAL)
  CriticalFlag: eSecurityCriticalFlag

  /**
   * @type {AreaArray}
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => AreaArray)
  AreaList: AreaArray

  /**
   * @type {number|undefined}
   */
  @IsOptional()
  @IsInt()
  Reserved2: number
}
