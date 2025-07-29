import { IsArray, IsDefined, IsEnum, IsIn, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { eAuthenticity } from '@/consts'
import { IdentResult, iIdentResult } from './children'
import { aAuthenticityCheckResult } from '../../authenticity-check-result.abstract'

/**
 * Result type of AuthenticityIdentCheckResult
 */
export type tAuthenticityIdentCheckResultType =
  | eAuthenticity.IMAGE_PATTERN
  | eAuthenticity.IR_VISIBILITY
  | eAuthenticity.OVI
  | eAuthenticity.PORTRAIT_COMPARISON
  | eAuthenticity.KINEGRAM
  | eAuthenticity.LETTER_SCREEN
  | eAuthenticity.HOLOGRAM_DETECTION
  | eAuthenticity.FINGERPRINT_COMPARISON
  | eAuthenticity.LIVENESS

/**
 * Result type of AuthenticityIdentCheckResult
 */
export const AuthenticityIdentCheckResultTypes: tAuthenticityIdentCheckResultType[] = [
  eAuthenticity.IMAGE_PATTERN,
  eAuthenticity.IR_VISIBILITY,
  eAuthenticity.OVI,
  eAuthenticity.PORTRAIT_COMPARISON,
  eAuthenticity.KINEGRAM,
  eAuthenticity.LETTER_SCREEN,
  eAuthenticity.HOLOGRAM_DETECTION,
  eAuthenticity.FINGERPRINT_COMPARISON,
  eAuthenticity.LIVENESS,
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
   * Array of results of checks
   * @type {iIdentResult[]}
   */
  List: iIdentResult[]
}

/**
 * Container for IdentResult
 */
@Expose()
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
   * Array of results of checks
   * @type {IdentResult[]}
   */
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => IdentResult)
  List: IdentResult[]

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
