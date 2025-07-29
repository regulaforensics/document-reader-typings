import { IsDefined, IsEnum, IsInt, IsOptional } from 'class-validator'
import { TextAvailableSource as iTextSource } from '@regulaforensics/document-reader-webclient'

import { eCheckResult, eSource } from '@/consts'

/**
 * Used for description of text data source
 */
export class TextSource implements iTextSource {
  /**
   * Source name
   * @type {eSource}
   */
  @IsDefined()
  @IsEnum(eSource)
  source: eSource

  /**
   * Source validity status
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  validityStatus: eCheckResult

  /**
   * Container type
   * @type {number|undefined}
   */
  @IsOptional()
  @IsInt()
  containerType?: number
}

export type { iTextSource }
