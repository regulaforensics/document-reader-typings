import { IsDefined, IsEnum, IsString, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { eCheckResult, eLCID, eVisualFieldType } from '@/consts'
import {
  TextComparison,
  iTextComparison,
  iTextValidity,
  iTextFieldValue,
  TextValidity,
  TextFieldValue
} from './children'


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
  status: eCheckResult

  /**
  * Comparison status
  * @type {eCheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  comparisonStatus: eCheckResult

  /**
  * Comparison results list
  * @type {TextComparison[]}
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => TextComparison)
  comparisonList: TextComparison[]

  /**
  * Field value
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  value: string

  /**
  * Values list
  * @type {TextFieldValue[]}
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => TextFieldValue)
  valueList: TextFieldValue[]

  /**
  * Validity status
  * @type {eCheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  validityStatus: eCheckResult

  /**
  * Validity results list
  * @type {TextValidity[]}
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => TextValidity)
  validityList: TextValidity[]
}
