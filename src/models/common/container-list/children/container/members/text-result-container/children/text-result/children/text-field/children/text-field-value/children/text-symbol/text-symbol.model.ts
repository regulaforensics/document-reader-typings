import { IsDefined, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { OriginalSymbol } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { Rect } from '@/models/common/rect'

/**
 * Used for storing symbol reading result
 */
export class TextSymbol implements OriginalSymbol {
  /**
   * Symbol code
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  code: number

  /**
   * Recognition probability
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  probability: number

  /**
   * Symbol rectangular area
   * @type {Rect|undefined}
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Rect)
  rect?: Rect
}

export type { TextSymbol as iTextSymbol }
