import { IsDefined, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { SymbolRecognitionResult as iSymbolRecognitionResult } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { Rect } from '@/models'
import { SymbolCandidate } from './children'

export class SymbolRecognitionResult {
  /**
   * @type {Rect}
   */
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => Rect)
  SymbolRect?: Rect

  /**
   * Number of significant elements of ListOfCandidates array
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  CandidatesCount: number

  /**
   * Array of candidate characters. Sorted in descending order of recognition probabilities (the first element has highest probability)
   * @type {SymbolCandidate[]}
   */
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => SymbolCandidate)
  ListOfCandidates: SymbolCandidate[]

  /**
   * @type {number}
   */
  @IsOptional()
  @IsInt()
  BaseLineBottom?: number

  /**
   * @type {number}
   */
  @IsOptional()
  @IsInt()
  BaseLineTop?: number
}

export type { iSymbolRecognitionResult }
