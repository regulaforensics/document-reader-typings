import { SymbolCandidate as cSymbolCandidate } from '@regulaforensics/document-reader-webclient'
import { IsDefined, IsInt, IsOptional } from 'class-validator'

export class SymbolCandidate implements cSymbolCandidate {
  /**
   * Unicode symbol code
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  SymbolCode: number

  /**
   * character recognition probability (0–100,%)
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  SymbolProbability: number

  /**
   * @type {number}
   */
  @IsOptional()
  @IsInt()
  Class?: number

  /**
   * @type {number}
   */
  @IsOptional()
  @IsInt()
  SubClass?: number
}
