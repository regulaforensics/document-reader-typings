import { IsDefined, IsInt, IsNumber, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'


export interface iSymbolCandidate {
  /**
  * ASCII symbol code
  * @type {number}
  */
  SymbolCode: number

  /**
  * Symbol recognition probability (0–100, %)
  * @type {number}
  */
  SymbolProbability: number

  /**
  * @internal
  */
  Reserved?: unknown
}

export class SymbolCandidate implements iSymbolCandidate {
  /**
  * ASCII symbol code
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  SymbolCode: number

  /**
  * Symbol recognition probability (0–100, %)
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  SymbolProbability: number

  /**
  * @internal
  */
  @Expose()
  @IsOptional()
  Reserved?: unknown
}
