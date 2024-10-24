import { IsDefined, IsEnum } from 'class-validator'

import { eCheckResult, eSource } from '@/consts'
import { Default } from '@/decorators'


/**
* Structure is used for storing specified source text field validity results
*/
export interface iTextValidity {
  /**
  * Source name
  * @type {eSource}
  */
  source: eSource

  /**
  * Validity status
  * @type {eCheckResult}
  */
  status: eCheckResult
}

/**
* Structure is used for storing specified source text field validity results
*/
export class TextValidity implements iTextValidity {
  /**
  * Source name
  * @type {eSource}
  */
  @IsDefined()
  @IsEnum(eSource)
  source: eSource

  /**
  * Validity status
  * @type {eCheckResult}
  */
  @IsDefined()
  @IsEnum(eCheckResult)
  @Default(eCheckResult.WAS_NOT_DONE)
  status: eCheckResult
}
