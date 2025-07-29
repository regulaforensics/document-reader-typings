import { IsArray, IsDefined, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator'
import { TextField as iTextField } from '@regulaforensics/document-reader-webclient'
import { Transform, Type } from 'class-transformer'

import { eCheckResult, eLCID, eVisualFieldType } from '@/consts'
import { TextResultContainer, TextComparison, TextFieldValue, TextValidity } from '@/models'

/**
 * Used for storing text field.
 */
export class TextField implements iTextField {
  /**
   * Field type
   * @type {eVisualFieldType}
   */
  @IsDefined()
  @IsEnum(eVisualFieldType)
  fieldType: eVisualFieldType

  /**
   * Field name
   * @type {string}
   */
  @IsDefined()
  @IsString()
  fieldName: string

  /**
   * LCID code
   * @type {eLCID}
   */
  @IsDefined()
  @IsEnum(eLCID)
  lcid: eLCID

  /**
   * LCID name
   * @type {string|undefined}
   */
  @IsOptional()
  @IsString()
  lcidName?: string

  /**
   * Field status
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  status: eCheckResult

  /**
   * Validity status
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  validityStatus: eCheckResult

  /**
   * Comparison status
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  comparisonStatus: eCheckResult

  /**
   * Field value
   * @type {string}
   */
  @IsDefined()
  @IsString()
  @Transform(({ value }) => (value ? String(value) : ''))
  value: string

  /**
   * Values list
   * @type {TextFieldValue[]}
   */
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => TextFieldValue)
  @IsArray()
  valueList: TextFieldValue[]

  /**
   * Validity results list
   * @type {TextValidity[]}
   */
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => TextValidity)
  @IsArray()
  validityList: TextValidity[]

  /**
   * Comparison results list
   * @type {TextComparison[]}
   */
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => TextComparison)
  @IsArray()
  comparisonList: TextComparison[]

  /**
   * Get text fields from containers
   * @param {TextResultContainer[]} containers
   * @param {eVisualFieldType} fieldType
   * @returns {TextField[]}
   */
  static fromContainers = (containers: TextResultContainer[], fieldType: eVisualFieldType): TextField[] => {
    const result: TextField[] = []

    containers.forEach((container) => {
      const { Text } = container

      Text.fieldList.forEach((field) => {
        if (field.fieldType === fieldType) {
          result.push(field)
        }
      })
    })

    return result
  }
}
