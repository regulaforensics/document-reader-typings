import { IsDefined, IsEnum, IsIn, IsNumber, IsString, ValidateNested, IsOptional } from 'class-validator'
import { Type } from 'class-transformer'

import { Default } from '@/decorators'
import { iRect, Rect } from '@/models/common/rect'
import {
  eAuthenticity,
  eCheckDiagnose,
  eCheckResult,
  eLights,
  eResultType,
  eSecurityCriticalFlag,
  eVisualFieldType
} from '@/consts'


/**
* Serves for storing the result of a latent text OCR and its
* comparison with an alternative source of corresponding textual data for a single image
* fragment
*/
export interface iOCRSecurityTextResult {
  /**
  * Type of the performed check
  * @type {eAuthenticity.OCR_SECURITY_TEXT}
  */
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
  * Field type
  * @type {eVisualFieldType}
  */
  EtalonFieldType: eVisualFieldType

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
  /**
  * Type of the performed check
  * @type {eAuthenticity.OCR_SECURITY_TEXT}
  */
  @IsDefined()
  @IsIn([eAuthenticity.OCR_SECURITY_TEXT])
  @IsEnum(eAuthenticity)
  Type: eAuthenticity.OCR_SECURITY_TEXT

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
  * Flag of element’s importance
  * @type {eSecurityCriticalFlag}
  */
  @IsDefined()
  @IsEnum(eSecurityCriticalFlag)
  @Default(eSecurityCriticalFlag.NOT_CRITICAL)
  CriticalFlag: eSecurityCriticalFlag

  /**
  * Light scheme
  * @type {eLights}
  */
  @IsDefined()
  @IsEnum(eLights)
  @Default(eLights.OFF)
  LightType: eLights

  /**
  * Field area’s coordinates
  * @type {Rect}
  */
  @IsDefined()
  @ValidateNested()
  @Type(() => Rect)
  FieldRect: Rect

  /**
  * Alternative data source; allowed values from
  * @type {eResultType.MRZ_OCR_EXTENDED | eResultType.VISUAL_OCR_EXTENDED | eResultType.BARCODES_TEXT_DATA}
  */
  @IsDefined()
  @IsIn([eResultType.MRZ_OCR_EXTENDED, eResultType.VISUAL_OCR_EXTENDED, eResultType.BARCODES_TEXT_DATA])
  EtalonResultType: eResultType.MRZ_OCR_EXTENDED | eResultType.VISUAL_OCR_EXTENDED | eResultType.BARCODES_TEXT_DATA

  /**
  * Field type
  * @type {eVisualFieldType}
  */
  @IsDefined()
  @IsEnum(eVisualFieldType)
  EtalonFieldType: eVisualFieldType

  /**
  * Pattern field light scheme
  * @type {number}
  */
  @IsDefined()
  @IsNumber()
  EtalonLightType: number

  /**
  * Pattern field area’s coordinates
  * @type {Rect}
  */
  @IsDefined()
  @ValidateNested()
  @Type(() => Rect)
  EtalonFieldRect: Rect

  /**
  * Field OCR result
  * @type {string}
  */
  @IsDefined()
  @IsString()
  SecurityTextResultOCR: string

  /**
  * Pattern field OCR result
  * @type {string}
  */
  @IsDefined()
  @IsString()
  EtalonResultOCR: string

  /**
  * @internal
  */
  @IsOptional()
  Reserved1?: number

  /**
  * @internal
  */
  @IsOptional()
  Reserved2?: number
}
