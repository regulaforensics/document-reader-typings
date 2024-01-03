import { IsDefined, IsInt, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { iImageSource, iImageField, ImageSource, ImageField } from './children'


export interface iImagesResult {
  /**
  * Fields count
  * @type {number}
  * @memberof iImagesResult
  */
  fieldCount: number

  /**
  * Available sources count
  * @type {number}
  * @memberof iImagesResult
  */
  availableSourceCount: number

  /**
  * Available sources list
  * @type {iImageSource[]}
  * @memberof iImagesResult
  */
  availableSourceList: iImageSource[]

  /**
  * Fields list
  * @type {iImageField[]}
  * @memberof iImagesResult
  */
  fieldList: iImageField[]
}

export class ImagesResult implements iImagesResult {
  /**
  * Fields count
  * @type {number}
  * @memberof ImagesResult
  */
  @Expose()
  @IsDefined()
  @IsInt()
  fieldCount: number

  /**
  * Available sources count
  * @type {number}
  * @memberof ImagesResult
  */
  @Expose()
  @IsDefined()
  @IsInt()
  availableSourceCount: number

  /**
  * Available sources list
  * @type {ImageSource[]}
  * @memberof ImagesResult
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => ImageSource)
  availableSourceList: ImageSource[]

  /**
  * Fields list
  * @type {ImageField[]}
  * @memberof ImagesResult
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => ImageField)
  fieldList: ImageField[]
}
