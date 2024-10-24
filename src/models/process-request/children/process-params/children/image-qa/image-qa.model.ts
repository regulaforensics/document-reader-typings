import { IsBoolean, IsInt, IsNumber, IsOptional } from 'class-validator'


/**
* Image QA check parameters
*/
export interface iImageQA {
  /**
  * Set the threshold for an actual document brightness below which the check fails
  * @type {number|undefined}
  */
  brightnessThreshold?: number

  /**
  * This parameter sets threshold for Image QA check of the presented document physical dpi. If actual document dpi is
  * below this threshold, check will fail.
  * @type {number|undefined}
  */
  dpiThreshold?: number

  /**
  * This parameter sets threshold for Image QA check of the presented document perspective angle in degrees. If actual
  * document perspective angle is above this threshold, check will fail.
  * @type {number|undefined}
  */
  angleThreshold?: number

  /**
  * This option enables focus check while performing image quality validation.
  * @type {boolean|undefined}
  */
  focusCheck?: boolean

  /**
  * This option enables glares check while performing image quality validation.
  * @type {boolean|undefined}
  */
  glaresCheck?: boolean

  /**
  * This option enables colorness check while performing image quality validation.
  * @type {boolean|undefined}
  */
  colornessCheck?: boolean

  /**
  * This option enables screen capture (moire patterns) check while performing image quality validation.
  * @type {boolean|undefined}
  */
  moireCheck?: boolean

  /**
  * This parameter specifies the necessary margin. Default 0.
  * @type {number|undefined}
  */
  documentPositionIndent?: number
}

/**
* Image QA check parameters
*/
export class ImageQA implements iImageQA {
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
}
