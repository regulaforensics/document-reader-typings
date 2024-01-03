import { IsDefined, IsString } from 'class-validator'
import { Expose } from 'class-transformer'


export interface iImageData {
  /**
  * Image data in base64 format
  * @type {string}
  */
  image: string
}

export class ImageData implements iImageData {
  /**
  * Image data in base64 format
  * @type {string}
  */
  @Expose()
  @IsString()
  @IsDefined()
  image: string
}
