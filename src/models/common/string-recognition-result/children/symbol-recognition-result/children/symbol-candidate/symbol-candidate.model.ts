import { IsDefined, IsInt, IsNumber } from 'class-validator'
import { Expose } from 'class-transformer'


export interface ISymbolCandidate {
  SymbolCode: number
  SymbolProbability: number
}

export class SymbolCandidate implements ISymbolCandidate {
  @Expose()
  @IsDefined()
  @IsInt()
  SymbolCode: number

  @Expose()
  @IsDefined()
  @IsNumber()
  SymbolProbability: number
}
