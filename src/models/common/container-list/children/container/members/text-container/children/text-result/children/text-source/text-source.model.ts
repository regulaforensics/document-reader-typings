import { IsDefined, IsEnum, IsInt, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'

import { CheckResult, Source } from '@/consts'


export interface ITextSource {
  /**
  * Source name
  */
  source: Source

  /**
  * Source validity status
  */
  validityStatus: CheckResult

  /**
  * Container type
  */
  containerType?: number
}

export class TextSource implements ITextSource {
  /**
  * Source name
  */
  @Expose()
  @IsDefined()
  @IsEnum(Source)
  source: Source

  /**
  * Source validity status
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  validityStatus: CheckResult

  /**
  * Container type
  */
  @Expose()
  @IsOptional()
  @IsInt()
  containerType?: number
}
