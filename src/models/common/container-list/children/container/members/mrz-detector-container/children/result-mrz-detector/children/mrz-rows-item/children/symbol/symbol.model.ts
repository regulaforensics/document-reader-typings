import { IsArray, IsDefined, IsInt } from 'class-validator'
import { Symbol as iSymbol } from '@regulaforensics/document-reader-webclient'

export class Symbol implements iSymbol {
  /**
   * @type {number[]}
   */
  @IsDefined()
  @IsArray()
  @IsInt({ each: true })
  boundingRect: number[]
}

export type { iSymbol }
