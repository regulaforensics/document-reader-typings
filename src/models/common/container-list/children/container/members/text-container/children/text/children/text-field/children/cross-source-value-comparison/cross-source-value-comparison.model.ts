import { IsDefined, IsEnum } from 'class-validator'
import { Expose } from 'class-transformer'

import { CheckResult, Source } from '~src/distinct/consts'


export interface ICrossSourceValueComparison {
  sourceLeft: Source
  sourceRight: Source
  status: CheckResult
}

export class CrossSourceValueComparison implements ICrossSourceValueComparison {
  @Expose()
  @IsDefined()
  @IsEnum(Source)
  sourceLeft: Source

  @Expose()
  @IsDefined()
  @IsEnum(Source)
  sourceRight: Source

  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  status: CheckResult
}
