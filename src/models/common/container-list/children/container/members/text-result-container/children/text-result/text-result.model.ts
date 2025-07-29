import { IsArray, IsDefined, IsEnum, IsString, ValidateNested } from 'class-validator'
import { Text as iTextResult } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { eCheckResult } from '@/consts'
import { TextField, TextSource } from './children'

/**
 * Used for storing text result
 */
export class TextResult implements iTextResult {
  /**
   * Status
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  status: eCheckResult

  /**
   * Validity status
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  validityStatus: eCheckResult

  /**
   * Comparison status
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  comparisonStatus: eCheckResult

  /**
   * Date format
   * @type {string}
   */
  @IsDefined()
  @IsString()
  dateFormat: string

  /**
   * Fields list
   * @type {TextField[]}
   */
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => TextField)
  @IsArray()
  fieldList: TextField[]

  /**
   * Sources list
   * @type {TextSource[]}
   */
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => TextSource)
  @IsArray()
  availableSourceList: TextSource[]
}

export type { iTextResult }
