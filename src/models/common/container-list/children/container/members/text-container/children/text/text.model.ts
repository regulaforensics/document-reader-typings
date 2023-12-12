import { IsDefined, IsEnum, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { CheckResult } from '~src/consts'
import { ITextAvailableSource, ITextField, TextAvailableSource, TextField } from './children'


export interface IText {
  status: CheckResult
  validityStatus: CheckResult
  comparisonStatus: CheckResult
  fieldList: ITextField[]
  availableSourceList: ITextAvailableSource[]
}

export class Text implements IText {
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
  @ValidateNested({ each: true })
  @Type(() => TextField)
  fieldList: TextField[]

  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => TextAvailableSource)
  availableSourceList: TextAvailableSource[]
}
