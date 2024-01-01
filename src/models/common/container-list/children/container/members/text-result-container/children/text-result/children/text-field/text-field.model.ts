import { IsDefined, IsEnum, IsString, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { CheckResult, LCID, VisualFieldType } from '@/consts'
import {
  TextComparison,
  ITextComparison,
  ITextValidity,
  ITextFieldValue,
  TextValidity,
  TextFieldValue
} from './children'


export interface ITextField {
  /**
  * Field type
  * @type {VisualFieldType}
  */
  fieldType: VisualFieldType

  /**
  * Field name
  * @type {string}
  */
  fieldName: string

  /**
  * LCID code
  * @type {LCID}
  */
  lcid: LCID

  /**
  * LCID name
  * @type {string}
  */
  lcidName: string

  /**
  * Field status
  * @type {CheckResult}
  */
  status: CheckResult

  /**
  * Comparison status
  * @type {CheckResult}
  */
  comparisonStatus: CheckResult

  /**
  * Comparison results list
  * @type {ITextComparison[]}
  */
  comparisonList: ITextComparison[]

  /**
  * Field value
  * @type {string}
  */
  value: string

  /**
  * Values list
  * @type {ITextFieldValue[]}
  */
  valueList: ITextFieldValue[]

  /**
  * Validity status
  * @type {CheckResult}
  */
  validityStatus: CheckResult

  /**
  * Validity results list
  * @type {ITextValidity[]}
  */
  validityList: ITextValidity[]
}

export class TextField implements ITextField {
  /**
  * Field type
  * @type {VisualFieldType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(VisualFieldType)
  fieldType: VisualFieldType

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
  * @type {LCID}
  */
  @Expose()
  @IsDefined()
  @IsEnum(LCID)
  lcid: LCID

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
  * @type {CheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  status: CheckResult

  /**
  * Comparison status
  * @type {CheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  comparisonStatus: CheckResult

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
  * @type {CheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  validityStatus: CheckResult

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
