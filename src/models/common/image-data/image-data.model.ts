import { IsBase64, IsDefined, IsString } from 'class-validator'
import { Expose } from 'class-transformer'


/**
* Image data in base64 format
*/
export interface iImageData {
  /**
  * Image data in base64 format
  * @type {string}
  */
  image: string
}

/**
* Image data in base64 format
*/
export class ImageData implements iImageData {
  /**
  * Image data in base64 format
  * @type {string}
  */
  @Expose()
  @IsString()
  @IsDefined()
  @IsBase64()
  image: string
}
