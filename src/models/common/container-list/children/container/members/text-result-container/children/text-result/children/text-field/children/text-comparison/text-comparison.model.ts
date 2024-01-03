import { IsDefined, IsEnum } from 'class-validator'
import { Expose } from 'class-transformer'

import { eCheckResult, eSource } from '@/consts'


export interface iTextComparison {
  /**
  * Source left
  * @type {eSource}
  */
  sourceLeft: eSource

  /**
  * Source right
  * @type {eSource}
  */
  sourceRight: eSource

  /**
  * Comparison status
  * @type {eCheckResult}
  */
  status: eCheckResult
}

export class TextComparison implements iTextComparison {
  /**
  * Source left
  * @type {eSource}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eSource)
  sourceLeft: eSource

  /**
  * Source right
  * @type {eSource}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eSource)
  sourceRight: eSource

  /**
  * Comparison status
  * @type {eCheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  status: eCheckResult
}
