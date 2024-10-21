import { IsArray, IsDefined, IsEnum, IsIn, IsInt, ValidateNested } from 'class-validator'
import { plainToClass, Type } from 'class-transformer'

import { eAuthenticity, eCheckResult } from '@/consts'
import { Default } from '@/decorators'
import { IdentResult, iIdentResult } from './children'
import { aAuthenticityCheckResult } from '../../authenticity-check-result.abstract'


/**
* Result type of AuthenticityIdentCheckResult
*/
export type tAuthenticityIdentCheckResultType =
  eAuthenticity.IMAGE_PATTERN |
  eAuthenticity.IR_VISIBILITY |
  eAuthenticity.OVI |
  eAuthenticity.IR_LUMINESCENCE |
  eAuthenticity.PORTRAIT_COMPARISON |
  eAuthenticity.KINEGRAM |
  eAuthenticity.LETTER_SCREEN |
  eAuthenticity.HOLOGRAM_DETECTION |
  eAuthenticity.FINGERPRINT_COMPARISON |
  eAuthenticity.LIVENESS |
  eAuthenticity.ENCRYPTED_IPI

/**
* Result type of AuthenticityIdentCheckResult
*/
export const AuthenticityIdentCheckResultTypes: tAuthenticityIdentCheckResultType[] = [
  eAuthenticity.IMAGE_PATTERN,
  eAuthenticity.IR_VISIBILITY,
  eAuthenticity.OVI,
  eAuthenticity.IR_LUMINESCENCE,
  eAuthenticity.PORTRAIT_COMPARISON,
  eAuthenticity.KINEGRAM,
  eAuthenticity.LETTER_SCREEN,
  eAuthenticity.HOLOGRAM_DETECTION,
  eAuthenticity.FINGERPRINT_COMPARISON,
  eAuthenticity.LIVENESS,
  eAuthenticity.ENCRYPTED_IPI,
]

/**
* Container for IdentResult
*/
export interface iAuthenticityIdentCheckResult extends aAuthenticityCheckResult {
  /**
  * Type of the performed check
  * @type {tAuthenticityIdentCheckResultType}
  */
  Type: tAuthenticityIdentCheckResultType

  /**
  * Overall checking result
  * @type {eCheckResult}
  */
  Result: eCheckResult

  /**
  * Array of results of checks
  * @type {iIdentResult[]}
  */
  List: iIdentResult[]

  /**
  * Number of List items
  * @type {number}
  */
  Count: number
}

/**
* Container for IdentResult
*/
export class AuthenticityIdentCheckResult extends aAuthenticityCheckResult implements iAuthenticityIdentCheckResult {
  /**
  * Type of the performed check
  * @type {tAuthenticityIdentCheckResultType}
  */
  @IsDefined()
  @IsIn(AuthenticityIdentCheckResultTypes)
  @IsEnum(eAuthenticity)
  Type: tAuthenticityIdentCheckResultType

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
  * @type {IdentResult[]}
  */
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => IdentResult)
  @Default([])
  List: IdentResult[]

  /**
  * Number of List items
  * @type {number}
  */
  @IsDefined()
  @IsInt()
  Count: number

  /**
  * Creates an instance of AuthenticityIdentCheckResult.
  * @param {iAuthenticityIdentCheckResult} plain - plain object
  * @return {AuthenticityIdentCheckResult} - new instance
  */
  static fromPlain = (plain: unknown): AuthenticityIdentCheckResult => plainToClass(AuthenticityIdentCheckResult, plain)

  /**
  * Check if the object is a valid AuthenticityIdentCheckResult
  * @param {unknown} type - object to check
  * @return {type is iAuthenticityIdentCheckResult} - result
  */
  static isBelongs = (type: unknown): type is iAuthenticityIdentCheckResult =>
    AuthenticityIdentCheckResultTypes.includes((type as iAuthenticityIdentCheckResult)?.Type)
}
