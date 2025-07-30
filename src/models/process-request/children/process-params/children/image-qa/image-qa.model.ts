import { IsArray, IsBoolean, IsEnum, IsInt, IsNumber, IsOptional } from 'class-validator'
import { ImageQA as cImageQA } from '@regulaforensics/document-reader-webclient'

import { eInputImageQualityChecks } from '@/consts'

/**
 * Image QA check parameters
 */
export class ImageQA implements cImageQA {
  /**
   * Set the threshold for an actual document brightness below which the check fails
   * @type {number}
   */
  @IsOptional()
  @IsNumber()
  brightnessThreshold?: number

  /**
   * This parameter sets threshold for Image QA check of the presented document physical dpi. If actual document dpi is
   * below this threshold, check will fail.
   * @type {number|undefined}
   */
  @IsOptional()
  @IsInt()
  dpiThreshold?: number

  /**
   * This parameter sets threshold for Image QA check of the presented document perspective angle in degrees. If actual
   * document perspective angle is above this threshold, check will fail.
   * @type {number|undefined}
   */
  @IsOptional()
  @IsInt()
  angleThreshold?: number

  /**
   * This option enables focus check while performing image quality validation.
   * @type {boolean|undefined}
   */
  @IsBoolean()
  @IsOptional()
  focusCheck?: boolean

  /**
   * This option enables glares check while performing image quality validation.
   * @type {boolean|undefined}
   */
  @IsBoolean()
  @IsOptional()
  glaresCheck?: boolean

  /**
   * This option enables colorness check while performing image quality validation.
   * @type {boolean|undefined}
   */
  @IsBoolean()
  @IsOptional()
  colornessCheck?: boolean

  /**
   * This option enables screen capture (moire patterns) check while performing image quality validation.
   * @type {boolean|undefined}
   */
  @IsBoolean()
  @IsOptional()
  moireCheck?: boolean

  /**
   * This parameter specifies the necessary margin. Default 0.
   * @type {number|undefined}
   */
  @IsOptional()
  @IsNumber()
  documentPositionIndent?: number

  /**
   * This parameter controls the quality checks that the image should pass to be considered a valid input during the scanning process.
   * @type {eInputImageQualityChecks[]}
   */
  @IsOptional()
  @IsArray()
  @IsEnum(eInputImageQualityChecks, { each: true })
  expectedPass?: eInputImageQualityChecks[]
}
