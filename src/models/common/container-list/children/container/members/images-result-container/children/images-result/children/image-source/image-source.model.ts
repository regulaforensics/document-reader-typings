import { IsDefined, IsEnum, IsNumber, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'

import { eSource } from '@/consts'


export interface iImageSource {
  /**
  * Container type
  * @type {number}
  */
  containerType: number

  /**
  * Source
  * @type {eSource}
  */
  source: eSource
}

export class ImageSource implements iImageSource {
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
  * @type {eSource}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eSource)
  source: eSource
}
