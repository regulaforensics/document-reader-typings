import { IsDefined, IsEnum } from 'class-validator'
import { Expose } from 'class-transformer'

import { CheckResult, Source } from '@/consts'


export interface ITextValidity {
  /**
  * Source name
  */
  source: Source

  /**
  * Validity status
  */
  status: CheckResult
}

export class TextValidity implements ITextValidity {
  /**
  * Source name
  */
  @Expose()
  @IsDefined()
  @IsEnum(Source)
  source: Source

  /**
  * Validity status
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  status: CheckResult
}
