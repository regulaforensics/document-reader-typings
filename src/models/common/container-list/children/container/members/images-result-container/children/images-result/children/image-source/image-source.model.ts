import { IsDefined, IsEnum, IsNumber, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'

import { Source } from '@/consts'


export interface IImageSource {
  /**
  * Container type
  * @type {number}
  */
  containerType: number

  /**
  * Source
  * @type {Source}
  */
  source: Source
}

export class ImageSource implements IImageSource {
  /**
  * Container type
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  containerType: number

  /**
  * Source
  * @type {Source}
  */
  @Expose()
  @IsDefined()
  @IsEnum(Source)
  source: Source
}
