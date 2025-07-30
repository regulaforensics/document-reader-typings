import { IsEnum, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { ProcessRequestImage as cProcessRequestImage } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { ImageData } from '@/models/common'
import { eLights } from '@/consts'

/**
 * Image data
 */
export class ProcessRequestImage implements cProcessRequestImage {
  /**
   * Image data
   * @type {ImageData}
   */
  @ValidateNested()
  @Type(() => ImageData)
  ImageData: ImageData

  /**
   * Lighting scheme code
   * @type {eLights|undefined}
   */
  @IsEnum(eLights)
  @IsOptional()
  light?: eLights

  /**
   * Page index (when working with multi-page document)
   * @type {number|undefined}
   */
  @IsInt()
  @IsOptional()
  page_idx?: number
}
