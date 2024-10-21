import { IsArray, IsDefined, IsEnum, IsInt, IsString, ValidateNested } from 'class-validator'
import { Transform, Type } from 'class-transformer'

import { eGraphicFieldType } from '@/consts'
import { ImagesResultContainer } from '@/models'
import { Default } from '@/decorators'
import { iImageFieldValue, ImageFieldValue } from './children'


/**
* Used for provision of one image or graphic field
*/
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

/**
* Used for provision of one image or graphic field
*/
export class ImageField implements iImageField {
  /**
  * Field name
  * @type {string}
  */
  @IsDefined()
  @IsString()
  fieldName: string

  /**
  * Field type
  * @type {eGraphicFieldType}
  */
  @IsDefined()
  @IsEnum(eGraphicFieldType)
  @Default(eGraphicFieldType.OTHER)
  fieldType: eGraphicFieldType

  /**
  * Field value list
  * @type {ImageFieldValue[]}
  */
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => ImageFieldValue)
  @IsArray()
  @Default([])
  valueList: ImageFieldValue[]

  /**
  * Field value count
  * @type {number}
  */
  @IsDefined()
  @IsInt()
  @Transform(({ obj }) => obj.valueList.length, { toClassOnly: true })
  valueCount: number

  /**
  * Get field from containers
  * @param {ImagesResultContainer[]} containers
  * @param {eGraphicFieldType[]|undefined} fieldTypes
  * @returns {ImageField[]}
  */
  static fromContainers = (containers: ImagesResultContainer[], fieldTypes?: eGraphicFieldType[]): ImageField[] => {
    const result: ImageField[] = []

    containers.forEach(container => {
      const { Images } = container

      Images.fieldList.forEach(field => {
        if (!fieldTypes) {
          result.push(field)

          return
        }

        if (fieldTypes.includes(field.fieldType)) {
          result.push(field)
        }
      })
    })

    return result
  }
}
