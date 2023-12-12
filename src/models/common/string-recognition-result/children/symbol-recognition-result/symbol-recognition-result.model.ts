import { IsArray, IsDefined, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { IRectangleCoordinates, RectangleCoordinates } from '~src/models/common/rectangle-coordinates'
import { ISymbolCandidate, SymbolCandidate } from './children'


export interface ISymbolRecognitionResult {
  SymbolRect: IRectangleCoordinates
  ListOfCandidates: ISymbolCandidate[]
}

export class SymbolRecognitionResult implements ISymbolRecognitionResult {
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => RectangleCoordinates)
  SymbolRect: RectangleCoordinates

  @Expose()
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SymbolCandidate)
  ListOfCandidates: SymbolCandidate[]
}
