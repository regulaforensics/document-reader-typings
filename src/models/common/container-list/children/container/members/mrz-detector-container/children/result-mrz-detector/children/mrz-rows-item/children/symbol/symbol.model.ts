import { IsArray, IsDefined, IsInt } from 'class-validator'
import { Symbol as cSymbol } from '@regulaforensics/document-reader-webclient'

export class Symbol implements cSymbol {
  /**
   * @type {number[]}
   */
  @IsDefined()
  @IsArray()
  @IsInt({ each: true })
  boundingRect: number[]
}
