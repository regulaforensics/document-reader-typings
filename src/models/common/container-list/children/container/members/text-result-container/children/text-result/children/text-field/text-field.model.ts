import { IsArray, IsDefined, IsEnum, IsString, ValidateNested } from 'class-validator'
import { Expose, Transform, Type } from 'class-transformer'

import { eCheckResult, eLCID, eVisualFieldType } from '@/consts'
import { TextResultContainer } from '@/models'
import { Default } from '@/decorators'
import {
  iTextComparison,
  iTextFieldValue,
  iTextValidity,
  TextComparison,
  TextFieldValue,
  TextValidity
} from './children'


/**
* Used for storing text field.
*/
export interface iTextField {
  /**
  * Field type
  * @type {eVisualFieldType}
  */
  fieldType: eVisualFieldType

  /**
  * Field name
  * @type {string}
  */
  fieldName: string

  /**
  * LCID code
  * @type {eLCID}
  */
  lcid: eLCID

  /**
  * LCID name
  * @type {string}
  */
  lcidName: string

  /**
  * Field status
  * @type {eCheckResult}
  */
  status: eCheckResult

  /**
  * Comparison status
  * @type {eCheckResult}
  */
  comparisonStatus: eCheckResult

  /**
  * Comparison results list
  * @type {iTextComparison[]}
  */
  comparisonList: iTextComparison[]

  /**
  * Field value
  * @type {string}
  */
  value: string

  /**
  * Values list
  * @type {iTextFieldValue[]}
  */
  valueList: iTextFieldValue[]

  /**
  * Validity status
  * @type {eCheckResult}
  */
  validityStatus: eCheckResult

  /**
  * Validity results list
  * @type {iTextValidity[]}
  */
  validityList: iTextValidity[]
}

/**
* Used for storing text field.
*/
export class TextField implements iTextField {
  /**
  * Field type
  * @type {eVisualFieldType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eVisualFieldType)
  fieldType: eVisualFieldType

  /**
  * Field name
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  fieldName: string

  /**
  * LCID code
  * @type {eLCID}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eLCID)
  @Default(eLCID.LATIN)
  lcid: eLCID

  /**
  * LCID name
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  lcidName: string

  /**
  * Field status
  * @type {eCheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  @Default(eCheckResult.WAS_NOT_DONE)
  status: eCheckResult

  /**
  * Comparison status
  * @type {eCheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  @Default(eCheckResult.WAS_NOT_DONE)
  comparisonStatus: eCheckResult

  /**
  * Comparison results list
  * @type {TextComparison[]}
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => TextComparison)
  @Default([])
  @IsArray()
  comparisonList: TextComparison[]

  /**
  * Field value
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  @Transform(({ value }) => value ? String(value) : '')
  value: string

  /**
  * Values list
  * @type {TextFieldValue[]}
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => TextFieldValue)
  @Default([])
  @IsArray()
  valueList: TextFieldValue[]

  /**
  * Validity status
  * @type {eCheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  @Default(eCheckResult.WAS_NOT_DONE)
  validityStatus: eCheckResult

  /**
  * Validity results list
  * @type {TextValidity[]}
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => TextValidity)
  @Default([])
  @IsArray()
  validityList: TextValidity[]

  /**
  * Get text fields from containers
  * @param {TextResultContainer[]} containers
  * @param {eVisualFieldType} fieldType
  * @returns {TextField[]}
  */
  static fromContainers = (containers: TextResultContainer[], fieldType: eVisualFieldType): TextField[] => {
    const result: TextField[] = []

    containers.forEach(container => {
      const { Text } = container

      Text.fieldList.forEach(field => {
        if (field.fieldType === fieldType) {
          result.push(field)
        }
      })
    })

    return result
  }
}
