import { IsBase64, IsDefined, IsString } from 'class-validator'


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
  @IsString()
  @IsDefined()
  @IsBase64()
  image: string
}
