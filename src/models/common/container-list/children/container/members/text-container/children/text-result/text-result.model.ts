import { IsDefined, IsEnum, IsString, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { CheckResult } from '@/consts'
import { ITextSource, ITextField, TextSource, TextField } from './children'


export interface ITextResult {
  /**
  * Status
  */
  status: CheckResult

  /**
  * Validity status
  */
  validityStatus: CheckResult

  /**
  * Comparison status
  */
  comparisonStatus: CheckResult

  /**
  * Date format
  */
  dateFormat: string

  /**
  * Fields list
  */
  fieldList: ITextField[]

  /**
  * Sources list
  */
  availableSourceList: ITextSource[]
}

export class TextResult implements ITextResult {
  /**
  * Status
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  status: CheckResult

  /**
  * Validity status
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  validityStatus: CheckResult

  /**
  * Comparison status
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  comparisonStatus: CheckResult

  /**
  * Date format
  */
  @Expose()
  @IsDefined()
  @IsString()
  dateFormat: string

  /**
  * Fields list
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => TextField)
  fieldList: TextField[]

  /**
  * Sources list
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => TextSource)
  availableSourceList: TextSource[]
}
