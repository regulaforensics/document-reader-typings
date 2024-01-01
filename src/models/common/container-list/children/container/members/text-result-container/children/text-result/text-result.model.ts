import { IsDefined, IsEnum, IsString, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { CheckResult } from '@/consts'
import { ITextSource, ITextField, TextSource, TextField } from './children'


export interface ITextResult {
  /**
  * Status
  * @type {CheckResult}
  */
  status: CheckResult

  /**
  * Validity status
  * @type {CheckResult}
  */
  validityStatus: CheckResult

  /**
  * Comparison status
  * @type {CheckResult}
  */
  comparisonStatus: CheckResult

  /**
  * Date format
  * @type {string}
  */
  dateFormat: string

  /**
  * Fields list
  * @type {ITextField[]}
  */
  fieldList: ITextField[]

  /**
  * Sources list
  * @type {ITextSource[]}
  */
  availableSourceList: ITextSource[]
}

export class TextResult implements ITextResult {
  /**
  * Status
  * @type {CheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  status: CheckResult

  /**
  * Validity status
  * @type {CheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  validityStatus: CheckResult

  /**
  * Comparison status
  * @type {CheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  comparisonStatus: CheckResult

  /**
  * Date format
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  dateFormat: string

  /**
  * Fields list
  * @type {TextField[]}
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => TextField)
  fieldList: TextField[]

  /**
  * Sources list
  * @type {TextSource[]}
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => TextSource)
  availableSourceList: TextSource[]
}
