import { IsDefined, IsEnum } from 'class-validator'
import { CrossSourceValueComparison as iTextComparison } from '@regulaforensics/document-reader-webclient'

import { eCheckResult, eSource } from '@/consts'

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
  status: eCheckResult
}

export type { iTextComparison }
