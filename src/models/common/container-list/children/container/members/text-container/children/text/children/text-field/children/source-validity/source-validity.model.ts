import { IsDefined, IsEnum } from 'class-validator'
import { Expose } from 'class-transformer'

import { CheckResult, Source } from '~src/consts'


export interface ISourceValidity {
  source: Source
  status: CheckResult
}

export class SourceValidity implements ISourceValidity {
  @Expose()
  @IsDefined()
  @IsEnum(Source)
  source: Source

  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  status: CheckResult
}
