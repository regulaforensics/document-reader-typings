import { IsDefined, IsString } from 'class-validator'
import { Expose } from 'class-transformer'


export interface IImageData {
  /**
  * Image data in base64 format
  */
  image: string
}

export class ImageData implements IImageData {
  /**
  * Image data in base64 format
  */
  @Expose()
  @IsString()
  @IsDefined()
  image: string
}
