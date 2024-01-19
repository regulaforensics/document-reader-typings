import { IsDefined, IsInt, IsNumber, IsOptional, Max, Min } from 'class-validator'
import { Expose } from 'class-transformer'


/**
* Structure describes one candidate for character recognition
*/
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
  * @type {unknown}
  */
  Reserved?: unknown
}

/**
* Structure describes one candidate for character recognition
*/
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
  @Min(0)
  @Max(100)
  SymbolProbability: number

  /**
  * @internal
  * @type {unknown}
  */
  @Expose()
  @IsOptional()
  Reserved?: unknown
}
