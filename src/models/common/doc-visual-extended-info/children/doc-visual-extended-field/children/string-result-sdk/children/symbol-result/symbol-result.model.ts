import { IsArray, IsDefined, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { iRect, Rect } from '@/models/common/rect'
import { Default } from '@/decorators'
import { iSymbolCandidate, SymbolCandidate } from './children'


/**
* Structure describes the recognition result of one character from the document text field
*/
export interface iSymbolResult {
  /**
  * Borders of area occupied by the symbol on the image
  * @type {iRect}
  */
  SymbolRect: iRect

  /**
  * Number of significant elements of ListOfCandidates array
  * @type {number}
  */
  CandidatesCount: number

  /**
  * Array of candidate symbols. Sorted by descending of probability
  * of recognition (the first element has the highest probability)
  * @type {iSymbolCandidate[]}
  */
  ListOfCandidates: iSymbolCandidate[]

  /**
  * @internal
  * @type {unknown}
  */
  Reserved?: unknown
}

/**
* Structure describes the recognition result of one character from the document text field
*/
export class SymbolResult implements iSymbolResult {
  /**
  * Borders of area occupied by the symbol on the image
  * @type {Rect}
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => Rect)
  SymbolRect: Rect

  /**
  * Number of significant elements of ListOfCandidates array
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  CandidatesCount: number

  /**
  * Array of candidate symbols. Sorted by descending of probability
  * of recognition (the first element has the highest probability)
  * @type {SymbolCandidate[]}
  */
  @Expose()
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SymbolCandidate)
  @Default([])
  ListOfCandidates: SymbolCandidate[]

  /**
  * @internal
  * @type {unknown}
  */
  @Expose()
  @IsOptional()
  Reserved?: unknown
}
