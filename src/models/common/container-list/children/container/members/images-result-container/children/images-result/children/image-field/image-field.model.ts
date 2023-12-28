import { IsDefined, IsEnum, IsInt, IsString, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { GraphicFieldType } from '@/consts'
import { IImageFieldValue, ImageFieldValue } from './children'


export interface IImageField {
  /**
  * Field name
  * @type {string}
  */
  fieldName: string

  /**
  * Field type
  * @type {GraphicFieldType}
  */
  fieldType: GraphicFieldType

  /**
  * Field value list
  * @type {IImageFieldValue[]}
  */
  valueList: IImageFieldValue[]

  /**
  * Field value count
  * @type {number}
  */
  valueCount: number
}

export class ImageField implements IImageField {
  /**
  * Field name
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  fieldName: string

  /**
  * Field type
  * @type {GraphicFieldType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(GraphicFieldType)
  fieldType: GraphicFieldType

  /**
  * Field value list
  * @type {ImageFieldValue[]}
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => ImageFieldValue)
  valueList: ImageFieldValue[]

  /**
  * Field value count
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  valueCount: number
}
