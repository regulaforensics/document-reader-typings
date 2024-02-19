import { IsArray, IsDefined, IsInt, ValidateNested } from 'class-validator'
import { Expose, Transform, Type } from 'class-transformer'

import { Default } from '@/decorators'
import { iImageField, iImageSource, ImageField, ImageSource } from './children'


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
  @Transform(({ obj }) => obj.fieldList.length, { toClassOnly: true})
  fieldCount: number

  /**
  * Available sources count
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Transform(({ obj }) => obj.availableSourceList.length, { toClassOnly: true})
  availableSourceCount: number

  /**
  * Available sources list
  * @type {ImageSource[]}
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => ImageSource)
  @IsArray()
  @Default([])
  availableSourceList: ImageSource[]

  /**
  * Fields list
  * @type {ImageField[]}
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => ImageField)
  @IsArray()
  @Default([])
  fieldList: ImageField[]
}
