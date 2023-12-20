import { IsDefined, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { CheckResult, LCID, TextFieldType } from '@/consts'
import {
  CrossSourceValueComparison,
  ICrossSourceValueComparison,
  ISourceValidity,
  ITextFieldValue,
  SourceValidity,
  TextFieldValue
} from './children'


export interface ITextField {
  fieldType: TextFieldType
  fieldName: string
  lcid?: LCID
  status: CheckResult
  validityStatus: CheckResult
  comparisonStatus: CheckResult
  value: string
  valueList: ITextFieldValue[]
  validityList: ISourceValidity[]
  comparisonList: ICrossSourceValueComparison[]
}

export class TextField implements ITextField {
  @Expose()
  @IsDefined()
  @IsEnum(TextFieldType)
  fieldType: TextFieldType

  @Expose()
  @IsDefined()
  @IsString()
  fieldName: string

  @Expose()
  @IsOptional()
  @IsEnum(LCID)
  lcid?: LCID

  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  status: CheckResult

  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  validityStatus: CheckResult

  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  comparisonStatus: CheckResult

  @Expose()
  @IsDefined()
  @IsString()
  value: string

  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => TextFieldValue)
  valueList: TextFieldValue[]

  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => SourceValidity)
  validityList: SourceValidity[]

  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => CrossSourceValueComparison)
  comparisonList: CrossSourceValueComparison[]
}
