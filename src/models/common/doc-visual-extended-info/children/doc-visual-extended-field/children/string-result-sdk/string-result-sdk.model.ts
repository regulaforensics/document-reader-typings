import { IsArray, IsDefined, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { iSymbolResult, SymbolResult } from './children'
import { Default } from '@/decorators'


/**
* Structure describes a result of recognition of one line of the document multiline text field
*/
export interface iStringResultSDK {
  /**
  * Number of StringResult array elements
  * @type {number}
  */
  SymbolsCount: number

  /**
  * @internal
  * @type {unknown}
  */
  Reserved?: unknown

  /**
  * Array of separate characters recognition results
  * @type {iSymbolResult[]}
  */
  StringResult: iSymbolResult[]
}

/**
* Structure describes a result of recognition of one line of the document multiline text field
*/
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
  * @type {unknown}
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
  @Default([])
  StringResult: SymbolResult[]
}
