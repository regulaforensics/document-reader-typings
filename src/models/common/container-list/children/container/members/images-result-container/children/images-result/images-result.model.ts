import { IsDefined, IsInt, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { IImageSource, IImageField, ImageSource, ImageField } from './children'


export interface IImagesResult {
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
  * @type {IImageSource[]}
  */
  availableSourceList: IImageSource[]

  /**
  * Fields list
  * @type {IImageField[]}
  */
  fieldList: IImageField[]
}

export class ImagesResult implements IImagesResult {
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
