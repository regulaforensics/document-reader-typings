import { IsArray, IsDefined, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { IRectangleCoordinates, RectangleCoordinates } from '@/models/common/rectangle-coordinates'
import { ISymbolCandidate, SymbolCandidate } from './children'


export interface ISymbolResult {
  /**
  * Borders of area occupied by the symbol on the image
  * @type {IRectangleCoordinates}
  */
  SymbolRect: IRectangleCoordinates

  /**
  * Number of significant elements of ListOfCandidates array
  * @type {number}
  */
  CandidatesCount: number

  /**
  * Array of candidate symbols. Sorted by descending of probability
  * of recognition (the first element has the highest probability)
  * @type {ISymbolCandidate[]}
  */
  ListOfCandidates: ISymbolCandidate[]

  /**
  * @internal
  */
  Reserved?: unknown
}

export class SymbolResult implements ISymbolResult {
  /**
  * Borders of area occupied by the symbol on the image
  * @type {IRectangleCoordinates}
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
  * @type {ISymbolCandidate[]}
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
