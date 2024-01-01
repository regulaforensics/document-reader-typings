import { IsDefined, IsEnum } from 'class-validator'
import { Expose } from 'class-transformer'

import { CheckResult, Source } from '@/consts'


export interface ITextComparison {
  /**
  * Source left
  * @type {Source}
  */
  sourceLeft: Source

  /**
  * Source right
  * @type {Source}
  */
  sourceRight: Source

  /**
  * Comparison status
  * @type {CheckResult}
  */
  status: CheckResult
}

export class TextComparison implements ITextComparison {
  /**
  * Source left
  * @type {Source}
  */
  @Expose()
  @IsDefined()
  @IsEnum(Source)
  sourceLeft: Source

  /**
  * Source right
  * @type {Source}
  */
  @Expose()
  @IsDefined()
  @IsEnum(Source)
  sourceRight: Source

  /**
  * Comparison status
  * @type {CheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  status: CheckResult
}
