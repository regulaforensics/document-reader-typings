import { IsDefined, IsInt, ValidateNested } from 'class-validator'
import { SymbolEstimationItem as cSymbolEstimationItem } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { Rect } from '@/models'

export class SymbolEstimationItem implements cSymbolEstimationItem {
  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  ALIGNMENT_NEAREST_SYMBOLS: number

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  CONTRAST_PRINT: number

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  CONTRAST_SYMBOL: number

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  CharSymbol: number

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  EDGE: number

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  EMPTINESS: number

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  STAIN: number

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  SYMBOLS_INTERVAL: number

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  SYMBOL_PARAM: number

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  SYMBOL_SIZE: number

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  SizeErrorAlignWithNext: number

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  SizeErrorAlignWithPrev: number

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  SizeErrorIntervWithNext: number

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  SizeErrorIntervWithPrev: number

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  SizeErrorSymbolHeight: number

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  SizeErrorSymbolWidth: number

  /**
   * @type {Rect}
   */
  @IsDefined()
  @ValidateNested()
  @Type(() => Rect)
  SymbolBounds: Rect
}
