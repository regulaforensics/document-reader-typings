import { IsDefined, IsEnum } from 'class-validator'
import { Expose } from 'class-transformer'

import { CheckResult, Source } from '@/consts'


export interface ITextValidity {
  /**
  * Source name
  * @type {Source}
  */
  source: Source

  /**
  * Validity status
  * @type {CheckResult}
  */
  status: CheckResult
}

export class TextValidity implements ITextValidity {
  /**
  * Source name
  * @type {Source}
  */
  @Expose()
  @IsDefined()
  @IsEnum(Source)
  source: Source

  /**
  * Validity status
  * @type {CheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  status: CheckResult
}
