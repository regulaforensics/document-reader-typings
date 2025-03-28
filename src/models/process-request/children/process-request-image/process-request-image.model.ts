import { IsEnum, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

import { iImageData, ImageData } from '@/models/common'
import { eLights } from '@/consts'


/**
* Image data
*/
export interface iProcessRequestImage {
  /**
  * Image data
  * @type {iImageData}
  */
  ImageData: iImageData

  /**
  * Lighting scheme code
  * @type {eLights|undefined}
  */
  light?: eLights

  /**
  * Page index (when working with multi-page document)
  * @type {number|undefined}
  */
  page_idx?: number
}

/**
* Image data
*/
export class ProcessRequestImage implements iProcessRequestImage {
  /**
  * Image data
  * @type {iImageData}
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
