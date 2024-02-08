import { IsArray, IsDefined, IsEnum, IsIn, IsInt, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { eAuthenticity, eCheckResult } from '@/consts'
import { Default } from '@/decorators'
import { aAuthenticityCheckResult } from '../../authenticity-check-result.abstract'
import { FibersType, iFibersType } from './children'


/**
* Container for FibersType
*/
export interface iAuthenticityFibersTypeCheckResult extends aAuthenticityCheckResult {
  /**
  * Type of the performed check (eAuthenticity)
  * @type {eAuthenticity.UV_FIBERS}
  */
  Type: eAuthenticity.UV_FIBERS

  /**
  * Overall checking result
  * @type {eCheckResult}
  */
  Result: eCheckResult

  /**
  * Array of results of checks
  * @type {iFibersType[]}
  */
  List: iFibersType[]

  /**
  * Number of List items
  * @type {number}
  */
  Count: number
}

/**
* Container for FibersType
*/
export class AuthenticityFibersTypeCheckResult extends aAuthenticityCheckResult implements iAuthenticityFibersTypeCheckResult {
  /**
  * Type of the performed check (eAuthenticity)
  * @type {eAuthenticity.UV_FIBERS}
  */
  @Expose()
  @IsDefined()
  @IsIn([eAuthenticity.UV_FIBERS])
  @IsEnum(eAuthenticity)
  Type: eAuthenticity.UV_FIBERS

  /**
  * Overall checking result
  * @type {eCheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  @Default(eCheckResult.WAS_NOT_DONE)
  Result: eCheckResult

  /**
  * Array of results of checks
  * @type {FibersType[]}
  */
  @Expose()
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FibersType)
  @Default([])
  List: FibersType[]

  /**
  * Number of List items
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  Count: number

  /**
  * Convert plain object to AuthenticityFibersTypeCheckResult instance
  * @param {unknown} plain - plain object
  * @returns {AuthenticityFibersTypeCheckResult} - instance
  */
  static fromPlain = (plain: unknown): AuthenticityFibersTypeCheckResult => plainToClass(AuthenticityFibersTypeCheckResult, plain)
}
