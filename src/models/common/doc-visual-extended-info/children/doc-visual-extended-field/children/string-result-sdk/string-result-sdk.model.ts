import { IsArray, IsDefined, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { iSymbolResult, SymbolResult } from './children'


export interface iStringResultSDK {
  /**
  * Number of StringResult array elements
  * @type {number}
  */
  SymbolsCount: number

  /**
  * @internal
  */
  Reserved?: unknown

  /**
  * Array of separate characters recognition results
  * @type {iSymbolResult[]}
  */
  StringResult: iSymbolResult[]
}

export class StringResultSDK implements iStringResultSDK {
  /**
  * Number of StringResult array elements
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  SymbolsCount: number

  /**
  * @internal
  */
  @Expose()
  @IsOptional()
  Reserved?: unknown

  /**
  * Array of separate characters recognition results
  * @type {SymbolResult[]}
  */
  @Expose()
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SymbolResult)
  StringResult: SymbolResult[]
}
