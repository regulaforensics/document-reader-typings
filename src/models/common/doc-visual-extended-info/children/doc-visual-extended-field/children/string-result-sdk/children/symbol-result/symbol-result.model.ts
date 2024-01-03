import { IsArray, IsDefined, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { iRectangleCoordinates, RectangleCoordinates } from '@/models/common/rectangle-coordinates'
import { iSymbolCandidate, SymbolCandidate } from './children'


export interface iSymbolResult {
  /**
  * Borders of area occupied by the symbol on the image
  * @type {iRectangleCoordinates}
  */
  SymbolRect: iRectangleCoordinates

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
  */
  Reserved?: unknown
}

export class SymbolResult implements iSymbolResult {
  /**
  * Borders of area occupied by the symbol on the image
  * @type {iRectangleCoordinates}
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => RectangleCoordinates)
  SymbolRect: RectangleCoordinates

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
  * @type {iSymbolCandidate[]}
  */
  @Expose()
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SymbolCandidate)
  ListOfCandidates: SymbolCandidate[]

  /**
  * @internal
  */
  @Expose()
  @IsOptional()
  Reserved?: unknown
}
