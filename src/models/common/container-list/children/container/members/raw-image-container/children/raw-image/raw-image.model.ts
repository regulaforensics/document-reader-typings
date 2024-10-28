import {IsBase64, IsDefined, IsString } from 'class-validator'

import { iImageData } from '@/models'


/**
 * Contains cropped and rotated with perspective compensation image of document
 */
export interface iRawImage extends iImageData {
  /**
  * Image format
  * @type {string}
  */
  format: string
}

/**
 * Contains cropped and rotated with perspective compensation image of document
 */
export class RawImage implements iRawImage {
  /**
  * Image format
  * @type {string}
  */
  @IsDefined()
  @IsString()
  format: string

  /**
  * Structure is used for storing a graphic image
  * @type {string}
  */
  @IsString()
  @IsDefined()
  @IsBase64()
  image: string
}
