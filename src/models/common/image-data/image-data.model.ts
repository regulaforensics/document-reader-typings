import { ImageData as iImageData } from '@regulaforensics/document-reader-webclient'
import { IsBase64, IsString, IsOptional } from 'class-validator'

/**
 * Image data in base64 format
 */
export class ImageData implements iImageData {
  /**
   * Image data in base64 format
   * @type {string}
   */
  @IsString()
  @IsOptional()
  @IsBase64()
  image?: string

  /**
   * Image format
   * @type {string}
   */
  @IsString()
  @IsOptional()
  format?: string
}

export type { iImageData }
