import { IsDefined, IsEnum, IsInt, IsString, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { eGraphicFieldType } from '@/consts'
import { iImageFieldValue, ImageFieldValue } from './children'


export interface iImageField {
  /**
  * Field name
  * @type {string}
  */
  fieldName: string

  /**
  * Field type
  * @type {eGraphicFieldType}
  */
  fieldType: eGraphicFieldType

  /**
  * Field value list
  * @type {iImageFieldValue[]}
  */
  valueList: iImageFieldValue[]

  /**
  * Field value count
  * @type {number}
  */
  valueCount: number
}

export class ImageField implements iImageField {
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
  * @type {eGraphicFieldType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eGraphicFieldType)
  fieldType: eGraphicFieldType

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
