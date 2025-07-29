import { IsDefined, IsEnum, IsIn, IsNumber, IsString, ValidateNested, IsOptional } from 'class-validator'
import { OCRSecurityTextItem } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { Rect } from '@/models/common/rect'
import { eAuthenticity, eLights, eSecurityCriticalFlag, eVisualFieldType } from '@/consts'
import { aAuthenticityCheckResultItem } from '../../../../authenticity-check-result-item.abstract'

/**
 * Serves for storing the result of a latent text OCR and its
 * comparison with an alternative source of corresponding textual data for a single image
 * fragment
 */
export interface iOCRSecurityTextResult extends aAuthenticityCheckResultItem, OCRSecurityTextItem {
  /**
   * Type of the performed check
   * @type {eAuthenticity.OCR_SECURITY_TEXT}
   */
  Type: eAuthenticity.OCR_SECURITY_TEXT | eAuthenticity.ENCRYPTED_IPI
}

/**
 * Serves for storing the result of a latent text OCR and its
 * comparison with an alternative source of corresponding textual data for a single image
 * fragment
 */
export class OCRSecurityTextResult extends aAuthenticityCheckResultItem implements iOCRSecurityTextResult {
  /**
   * Flag of element’s importance
   * @type {eSecurityCriticalFlag}
   */
  @IsDefined()
  @IsEnum(eSecurityCriticalFlag)
  CriticalFlag: eSecurityCriticalFlag

  /**
   * Light scheme
   * @type {eLights}
   */
  @IsDefined()
  @IsEnum(eLights)
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
   * @type {number}
   */
  @IsDefined()
  @IsNumber()
  EtalonResultType: number

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
  @IsEnum(eLights)
  EtalonLightType: eLights

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

  /**
   * Type of the performed check
   * @type {eAuthenticity.OCR_SECURITY_TEXT|eAuthenticity.ENCRYPTED_IPI}
   */
  @IsDefined()
  @IsIn([eAuthenticity.OCR_SECURITY_TEXT, eAuthenticity.ENCRYPTED_IPI])
  @IsEnum(eAuthenticity)
  Type: eAuthenticity.OCR_SECURITY_TEXT | eAuthenticity.ENCRYPTED_IPI
}
