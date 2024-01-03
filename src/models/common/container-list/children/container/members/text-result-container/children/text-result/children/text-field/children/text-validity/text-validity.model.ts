import { IsDefined, IsEnum } from 'class-validator'
import { Expose } from 'class-transformer'

import { eCheckResult, eSource } from '@/consts'


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

export class TextValidity implements iTextValidity {
  /**
  * Source name
  * @type {eSource}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eSource)
  source: eSource

  /**
  * Validity status
  * @type {eCheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  status: eCheckResult
}
