import { IsDefined, IsEnum, IsInt, IsString, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { eGraphicFieldType } from '@/consts'
import { iImageFieldValue, ImageFieldValue } from './children'


export interface iImageField {
  /**
  * Field name
  * @type {string}
  * @memberof iImageField
  */
  fieldName: string

  /**
  * Field type
  * @type {eGraphicFieldType}
  * @memberof iImageField
  */
  fieldType: eGraphicFieldType

  /**
  * Field value list
  * @type {iImageFieldValue[]}
  * @memberof iImageField
  */
  valueList: iImageFieldValue[]

  /**
  * Field value count
  * @type {number}
  * @memberof iImageField
  */
  valueCount: number
}

export class ImageField implements iImageField {
  /**
  * Field name
  * @type {string}
  * @memberof ImageField
  */
  @Expose()
  @IsDefined()
  @IsString()
  fieldName: string

  /**
  * Field type
  * @type {eGraphicFieldType}
  * @memberof ImageField
  */
  @Expose()
  @IsDefined()
  @IsEnum(eGraphicFieldType)
  fieldType: eGraphicFieldType

  /**
  * Field value list
  * @type {ImageFieldValue[]}
  * @memberof ImageField
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => ImageFieldValue)
  valueList: ImageFieldValue[]

  /**
  * Field value count
  * @type {number}
  * @memberof ImageField
  */
  @Expose()
  @IsDefined()
  @IsInt()
  valueCount: number
}
