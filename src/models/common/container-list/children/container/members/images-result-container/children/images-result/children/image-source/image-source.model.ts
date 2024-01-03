import { IsDefined, IsEnum, IsNumber, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'

import { eSource } from '@/consts'


export interface iImageSource {
  /**
  * Container type
  * @type {number}
  * @memberof iImageSource
  */
  containerType: number

  /**
  * Source
  * @type {eSource}
  * @memberof iImageSource
  */
  source: eSource
}

export class ImageSource implements iImageSource {
  /**
  * Container type
  * @type {number}
  * @memberof ImageSource
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  containerType: number

  /**
  * Source
  * @type {eSource}
  * @memberof ImageSource
  */
  @Expose()
  @IsDefined()
  @IsEnum(eSource)
  source: eSource
}
