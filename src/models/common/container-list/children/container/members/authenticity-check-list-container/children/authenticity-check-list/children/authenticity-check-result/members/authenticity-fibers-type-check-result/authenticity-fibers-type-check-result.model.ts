import { IsArray, IsDefined, IsEnum, IsIn, ValidateNested } from 'class-validator'
import { plainToClass, Type, Expose } from 'class-transformer'

import { eAuthenticity } from '@/consts'
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
  eAuthenticity.UV_FIBERS,
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
   * Array of results of checks
   * @type {iFibersType[]}
   */
  List: iFibersType[]
}

/**
 * Container for FibersType
 */
@Expose()
export class AuthenticityFibersTypeCheckResult
  extends aAuthenticityCheckResult
  implements iAuthenticityFibersTypeCheckResult
{
  /**
   * Type of the performed check (eAuthenticity)
   * @type {tAuthenticityFibersTypeCheckResultType}
   */
  @IsDefined()
  @IsIn(AuthenticityFibersTypeCheckResultTypes)
  @IsEnum(eAuthenticity)
  Type: tAuthenticityFibersTypeCheckResultType

  /**
   * Array of results of checks
   * @type {FibersType[]}
   */
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FibersType)
  List: FibersType[]

  /**
   * Convert plain object to AuthenticityFibersTypeCheckResult instance
   * @param {unknown} plain - plain object
   * @returns {AuthenticityFibersTypeCheckResult} - instance
   */
  static fromPlain = (plain: unknown): AuthenticityFibersTypeCheckResult =>
    plainToClass(AuthenticityFibersTypeCheckResult, plain)

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
