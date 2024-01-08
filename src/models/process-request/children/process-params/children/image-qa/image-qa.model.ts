import { IsBoolean, IsInt, IsNumber, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'


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


  angleThreshold?: number
  focusCheck?: boolean
  glaresCheck?: boolean
  colornessCheck?: boolean
  moireCheck?: boolean
  documentPositionIndent?: number
}

export class ImageQA implements iImageQA {
  /**
  * Set the threshold for an actual document brightness below which the check fails
  *
  * @type {number}
  */
  @Expose()
  @IsOptional()
  @IsNumber()
  brightnessThreshold?: number

  @Expose()
  @IsOptional()
  @IsInt()
  dpiThreshold?: number

  @Expose()
  @IsOptional()
  @IsInt()
  angleThreshold?: number

  @Expose()
  @IsBoolean()
  @IsOptional()
  focusCheck?: boolean

  @Expose()
  @IsBoolean()
  @IsOptional()
  glaresCheck?: boolean

  @Expose()
  @IsBoolean()
  @IsOptional()
  colornessCheck?: boolean

  @Expose()
  @IsBoolean()
  @IsOptional()
  moireCheck?: boolean

  @Expose()
  @IsOptional()
  @IsNumber()
  documentPositionIndent?: number
}
