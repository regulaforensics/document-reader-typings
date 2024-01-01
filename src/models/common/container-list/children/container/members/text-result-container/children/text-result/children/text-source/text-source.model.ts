import { IsDefined, IsEnum, IsInt, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'

import { CheckResult, Source } from '@/consts'


export interface ITextSource {
  /**
  * Source name
  * @type {Source}
  */
  source: Source

  /**
  * Source validity status
  * @type {CheckResult}
  */
  validityStatus: CheckResult

  /**
  * Container type
  * @type {number}
  */
  containerType?: number
}

export class TextSource implements ITextSource {
  /**
  * Source name
  * @type {Source}
  */
  @Expose()
  @IsDefined()
  @IsEnum(Source)
  source: Source

  /**
  * Source validity status
  * @type {CheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  validityStatus: CheckResult

  /**
  * Container type
  * @type {number}
  */
  @Expose()
  @IsOptional()
  @IsInt()
  containerType?: number
}
