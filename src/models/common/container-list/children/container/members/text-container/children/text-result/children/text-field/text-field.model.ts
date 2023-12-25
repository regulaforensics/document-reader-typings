import { IsDefined, IsEnum, IsString, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { CheckResult, LCID, TextFieldType } from '@/consts'
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
  */
  fieldType: TextFieldType

  /**
  * Field name
  */
  fieldName: string

  /**
  * LCID code
  */
  lcid: LCID

  /**
  * LCID name
  */
  lcidName: string

  /**
  * Field status
  */
  status: CheckResult

  /**
  * Comparison status
  */
  comparisonStatus: CheckResult

  /**
  * Comparison results list
  */
  comparisonList: ITextComparison[]

  /**
  * Field value
  */
  value: string

  /**
  * Values list
  */
  valueList: ITextFieldValue[]

  /**
  * Validity status
  */
  validityStatus: CheckResult

  /**
  * Validity results list
  */
  validityList: ITextValidity[]
}

export class TextField implements ITextField {
  /**
  * Field type
  */
  @Expose()
  @IsDefined()
  @IsEnum(TextFieldType)
  fieldType: TextFieldType

  /**
  * Field name
  */
  @Expose()
  @IsDefined()
  @IsString()
  fieldName: string

  /**
  * LCID code
  */
  @Expose()
  @IsDefined()
  @IsEnum(LCID)
  lcid: LCID

  /**
  * LCID name
  */
  @Expose()
  @IsDefined()
  @IsString()
  lcidName: string

  /**
  * Field status
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  status: CheckResult

  /**
  * Comparison status
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  comparisonStatus: CheckResult

  /**
  * Comparison results list
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => TextComparison)
  comparisonList: TextComparison[]

  /**
  * Field value
  */
  @Expose()
  @IsDefined()
  @IsString()
  value: string

  /**
  * Values list
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => TextFieldValue)
  valueList: TextFieldValue[]

  /**
  * Validity status
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  validityStatus: CheckResult

  /**
  * Validity results list
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => TextValidity)
  validityList: TextValidity[]
}
