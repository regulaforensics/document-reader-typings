import { IsDefined, IsEnum, IsNumber } from 'class-validator'

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
  @IsDefined()
  @IsNumber()
  containerType: number

  /**
  * Source
  * @type {eSource}
  */
  @IsDefined()
  @IsEnum(eSource)
  source: eSource
}
