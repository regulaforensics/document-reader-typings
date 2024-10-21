import { IsArray, IsDefined, IsEnum, IsIn, IsInt, ValidateNested } from 'class-validator'
import { plainToClass, Type } from 'class-transformer'

import { eAuthenticity, eCheckResult } from '@/consts'
import { Default } from '@/decorators'
import { aAuthenticityCheckResult } from '../../authenticity-check-result.abstract'
import { FibersType, iFibersType } from './children'


/**
* Result type of AuthenticityFibersTypeCheckResult
*/
export type tAuthenticityFibersTypeCheckResultType = eAuthenticity.UV_FIBERS

/**
* Result type of AuthenticityFibersTypeCheckResult
*/
export const AuthenticityFibersTypeCheckResultTypes: tAuthenticityFibersTypeCheckResultType[] = [
  eAuthenticity.UV_FIBERS
]

/**
* Container for FibersType
*/
export interface iAuthenticityFibersTypeCheckResult extends aAuthenticityCheckResult {
  /**
  * Type of the performed check (eAuthenticity)
  * @type {tAuthenticityFibersTypeCheckResultType}
  */
  Type: tAuthenticityFibersTypeCheckResultType

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
  * @type {tAuthenticityFibersTypeCheckResultType}
  */
  @IsDefined()
  @IsIn(AuthenticityFibersTypeCheckResultTypes)
  @IsEnum(eAuthenticity)
  Type: tAuthenticityFibersTypeCheckResultType

  /**
  * Overall checking result
  * @type {eCheckResult}
  */
  @IsDefined()
  @IsEnum(eCheckResult)
  @Default(eCheckResult.WAS_NOT_DONE)
  Result: eCheckResult

  /**
  * Array of results of checks
  * @type {FibersType[]}
  */
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
  @IsDefined()
  @IsInt()
  Count: number

  /**
  * Convert plain object to AuthenticityFibersTypeCheckResult instance
  * @param {unknown} plain - plain object
  * @returns {AuthenticityFibersTypeCheckResult} - instance
  */
  static fromPlain = (plain: unknown): AuthenticityFibersTypeCheckResult => plainToClass(AuthenticityFibersTypeCheckResult, plain)

  /**
  * Check if the given object is an instance of AuthenticityFibersTypeCheckResult
  * @param {unknown} type - object to check
  * @returns {type is AuthenticityFibersTypeCheckResult} - result
  */
  static isBelongs = (type: unknown): type is AuthenticityFibersTypeCheckResult => {
    const item = type as AuthenticityFibersTypeCheckResult

    return AuthenticityFibersTypeCheckResultTypes.includes(item?.Type)
  }
}
