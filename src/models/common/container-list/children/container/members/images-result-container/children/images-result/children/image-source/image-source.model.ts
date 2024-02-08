import { IsDefined, IsEnum, IsNumber } from 'class-validator'
import { Expose } from 'class-transformer'

import { eSource } from '@/consts'


/**
* Used for graphic information source description
*/
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

/**
* Used for graphic information source description
*/
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
