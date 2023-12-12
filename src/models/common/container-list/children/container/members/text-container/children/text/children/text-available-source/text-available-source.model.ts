import { IsDefined, IsEnum, IsInt, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'

import { CheckResult, Source } from '~src/distinct/consts'


export interface ITextAvailableSource {
  source: Source
  validityStatus: CheckResult
  containerType?: number
}

export class TextAvailableSource implements ITextAvailableSource {
  @Expose()
  @IsDefined()
  @IsEnum(Source)
  source: Source

  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  validityStatus: CheckResult

  @Expose()
  @IsOptional()
  @IsInt()
  containerType?: number
}
