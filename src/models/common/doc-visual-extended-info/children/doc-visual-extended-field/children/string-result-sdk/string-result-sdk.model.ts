import { IsArray, IsDefined, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { ISymbolResult, SymbolResult } from './children'


export interface IStringResultSDK {
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
  * @type {ISymbolResult[]}
  */
  StringResult: ISymbolResult[]
}

export class StringResultSDK implements IStringResultSDK {
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
