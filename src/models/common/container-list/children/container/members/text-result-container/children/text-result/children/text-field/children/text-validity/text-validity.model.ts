import { IsDefined, IsEnum } from 'class-validator'
import { SourceValidity } from '@regulaforensics/document-reader-webclient'

import { eCheckResult, eSource } from '@/consts'

/**
 * Structure is used for storing specified source text field validity results
 */
export class TextValidity implements SourceValidity {
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
  status: eCheckResult
}

export type { TextValidity as iTextValidity }
