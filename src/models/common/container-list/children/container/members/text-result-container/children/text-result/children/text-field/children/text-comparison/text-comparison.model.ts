import { IsDefined, IsEnum } from 'class-validator'

import { eCheckResult, eSource } from '@/consts'
import { Default } from '@/decorators'


/**
* Used for comparison of text results
*/
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

/**
* Used for comparison of text results
*/
export class TextComparison implements iTextComparison {
  /**
  * Source left
  * @type {eSource}
  */
  @IsDefined()
  @IsEnum(eSource)
  sourceLeft: eSource

  /**
  * Source right
  * @type {eSource}
  */
  @IsDefined()
  @IsEnum(eSource)
  sourceRight: eSource

  /**
  * Comparison status
  * @type {eCheckResult}
  */
  @IsDefined()
  @IsEnum(eCheckResult)
  @Default(eCheckResult.WAS_NOT_DONE)
  status: eCheckResult
}
