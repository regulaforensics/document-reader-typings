import { IsDefined, IsEnum, IsIn, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { iRect, Rect } from '@/models/common/rect'
import { eAuthenticity, eCheckDiagnose, eCheckResult, eSecurityCriticalFlag, eLights, eResultType } from '@/consts'


/**
* Serves for storing the result of a latent text OCR and its
* comparison with an alternative source of corresponding textual data for a single image
* fragment
*/
export interface iOCRSecurityTextResult {
  Type: eAuthenticity.OCR_SECURITY_TEXT

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
  * Flag of element’s importance
  * @type {eSecurityCriticalFlag}
  */
  CriticalFlag: eSecurityCriticalFlag

  /**
  * Light scheme
  * @type {eLights}
  */
  LightType: eLights

  /**
  * Field area’s coordinates
  * @type {iRect}
  */
  FieldRect: iRect

  /**
  * Alternative data source; allowed values from
  * @type {eResultType.MRZ_OCR_EXTENDED | eResultType.VISUAL_OCR_EXTENDED | eResultType.BARCODES_TEXT_DATA}
  */
  EtalonResultType: eResultType.MRZ_OCR_EXTENDED | eResultType.VISUAL_OCR_EXTENDED | eResultType.BARCODES_TEXT_DATA

  /**
  * TODO: eRPRMFieldType
  */
  EtalonFieldType: number

  /**
  * Pattern field light scheme
  * @type {number}
  */
  EtalonLightType: number

  /**
  * Pattern field area’s coordinates
  * @type {iRect}
  */
  EtalonFieldRect: iRect

  /**
  * Field OCR result
  * @type {string}
  */
  SecurityTextResultOCR: string

  /**
  * Pattern field OCR result
  * @type {string}
  */
  EtalonResultOCR: string

  /**
  * @internal
  */
  Reserved1?: unknown

  /**
  * @internal
  */
  Reserved2?: unknown
}

/**
* Serves for storing the result of a latent text OCR and its
* comparison with an alternative source of corresponding textual data for a single image
* fragment
*/
export class OCRSecurityTextResult implements iOCRSecurityTextResult {
  @Expose()
  @IsDefined()
  @IsIn([eAuthenticity.OCR_SECURITY_TEXT])
  @IsEnum(eAuthenticity)
  Type: eAuthenticity.OCR_SECURITY_TEXT

  /**
  * Element responsible for the results of the checks
  * @type {eCheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  ElementResult: eCheckResult

  /**
  * Element with which errors are checked
  * @type {eCheckDiagnose}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckDiagnose)
  ElementDiagnose: eCheckDiagnose

  /**
  * Flag of element’s importance
  * @type {eSecurityCriticalFlag}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eSecurityCriticalFlag)
  CriticalFlag: eSecurityCriticalFlag

  /**
  * Light scheme
  * @type {eLights}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eLights)
  LightType: eLights

  /**
  * Field area’s coordinates
  * @type {Rect}
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => Rect)
  FieldRect: Rect

  /**
  * Alternative data source; allowed values from
  * @type {eResultType.MRZ_OCR_EXTENDED | eResultType.VISUAL_OCR_EXTENDED | eResultType.BARCODES_TEXT_DATA}
  */
  @Expose()
  @IsDefined()
  @IsIn([eResultType.MRZ_OCR_EXTENDED, eResultType.VISUAL_OCR_EXTENDED, eResultType.BARCODES_TEXT_DATA])
  EtalonResultType: eResultType.MRZ_OCR_EXTENDED | eResultType.VISUAL_OCR_EXTENDED | eResultType.BARCODES_TEXT_DATA

  /**
  * TODO: eRPRMFieldType
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  EtalonFieldType: number

  /**
  * Pattern field light scheme
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  EtalonLightType: number

  /**
  * Pattern field area’s coordinates
  * @type {Rect}
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => Rect)
  EtalonFieldRect: Rect

  /**
  * Field OCR result
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  SecurityTextResultOCR: string

  /**
  * Pattern field OCR result
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  EtalonResultOCR: string

  /**
  * @internal
  */
  @Expose()
  Reserved1?: number

  /**
  * @internal
  */
  @Expose()
  Reserved2?: number
}
