import { IsBase64, IsString, IsOptional } from 'class-validator'
import { ImageData as cImageData } from '@regulaforensics/document-reader-webclient'

/**
 * Image data in base64 format
 */
export class ImageData implements cImageData {
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

export type { ImageData as iImageData }
