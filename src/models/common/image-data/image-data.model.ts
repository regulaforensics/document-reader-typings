import { IsDefined, IsString } from 'class-validator'
import { Expose } from 'class-transformer'


export interface IImageData {
  image: string
}

export class ImageData implements IImageData {
  @Expose()
  @IsString()
  @IsDefined()
  image: string
}
