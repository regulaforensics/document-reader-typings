import { IsDefined, IsEnum, IsInt, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'

import { eCheckResult, eSource } from '@/consts'


export interface iTextSource {
  /**
  * Source name
  * @type {eSource}
  */
  source: eSource

  /**
  * Source validity status
  * @type {eCheckResult}
  */
  validityStatus: eCheckResult

  /**
  * Container type
  * @type {number}
  */
  containerType?: number
}

export class TextSource implements iTextSource {
  /**
  * Source name
  * @type {eSource}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eSource)
  source: eSource

  /**
  * Source validity status
  * @type {eCheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  validityStatus: eCheckResult

  /**
  * Container type
  * @type {number}
  */
  @Expose()
  @IsOptional()
  @IsInt()
  containerType?: number
}
