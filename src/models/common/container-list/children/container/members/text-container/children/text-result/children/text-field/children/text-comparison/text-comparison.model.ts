import { IsDefined, IsEnum } from 'class-validator'
import { Expose } from 'class-transformer'

import { CheckResult, Source } from '@/consts'


export interface ITextComparison {
  /**
  * Source left
  */
  sourceLeft: Source

  /**
  * Source right
  */
  sourceRight: Source

  /**
  * Comparison status
  */
  status: CheckResult
}

export class TextComparison implements ITextComparison {
  /**
  * Source left
  */
  @Expose()
  @IsDefined()
  @IsEnum(Source)
  sourceLeft: Source

  /**
  * Source right
  */
  @Expose()
  @IsDefined()
  @IsEnum(Source)
  sourceRight: Source

  /**
  * Comparison status
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  status: CheckResult
}
