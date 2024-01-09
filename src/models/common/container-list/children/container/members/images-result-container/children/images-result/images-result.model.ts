import { IsDefined, IsInt, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { iImageSource, iImageField, ImageSource, ImageField } from './children'


/**
* Structure is used for representation of all graphic results
*/
export interface iImagesResult {
  /**
  * Fields count
  * @type {number}
  */
  fieldCount: number

  /**
  * Available sources count
  * @type {number}
  */
  availableSourceCount: number

  /**
  * Available sources list
  * @type {iImageSource[]}
  */
  availableSourceList: iImageSource[]

  /**
  * Fields list
  * @type {iImageField[]}
  */
  fieldList: iImageField[]
}

/**
* Structure is used for representation of all graphic results
*/
export class ImagesResult implements iImagesResult {
  /**
  * Fields count
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  fieldCount: number

  /**
  * Available sources count
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  availableSourceCount: number

  /**
  * Available sources list
  * @type {ImageSource[]}
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => ImageSource)
  availableSourceList: ImageSource[]

  /**
  * Fields list
  * @type {ImageField[]}
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => ImageField)
  fieldList: ImageField[]
}
