import { IsArray, IsDefined, IsEnum, IsIn, IsInt, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { eAuthenticity, eCheckResult } from '@/consts'
import { Default } from '@/decorators'
import { IdentResult, iIdentResult } from './children'
import { aAuthenticityCheckResult } from '../../authenticity-check-result.abstract'


/**
* Container for IdentResult
*/
export interface iAuthenticityIdentCheckResult extends aAuthenticityCheckResult {
  /**
  * Type of the performed check
  * @type {
  *   eAuthenticity.IMAGE_PATTERN |
  *   eAuthenticity.IR_VISIBILITY |
  *   eAuthenticity.OVI |
  *   eAuthenticity.IR_LUMINESCENCE |
  *   eAuthenticity.PORTRAIT_COMPARISON |
  *   eAuthenticity.KINEGRAM |
  *   eAuthenticity.LETTER_SCREEN |
  *   eAuthenticity.HOLOGRAM_DETECTION |
  *   eAuthenticity.FINGERPRINT_COMPARISON |
  *   eAuthenticity.LIVENESS
  * }
  */
  Type:
    eAuthenticity.IMAGE_PATTERN |
    eAuthenticity.IR_VISIBILITY |
    eAuthenticity.OVI |
    eAuthenticity.IR_LUMINESCENCE |
    eAuthenticity.PORTRAIT_COMPARISON |
    eAuthenticity.KINEGRAM |
    eAuthenticity.LETTER_SCREEN |
    eAuthenticity.HOLOGRAM_DETECTION |
    eAuthenticity.FINGERPRINT_COMPARISON |
    eAuthenticity.LIVENESS

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
  * @type {
  *   eAuthenticity.IMAGE_PATTERN |
  *   eAuthenticity.IR_VISIBILITY |
  *   eAuthenticity.OVI |
  *   eAuthenticity.IR_LUMINESCENCE |
  *   eAuthenticity.PORTRAIT_COMPARISON |
  *   eAuthenticity.KINEGRAM |
  *   eAuthenticity.LETTER_SCREEN |
  *   eAuthenticity.HOLOGRAM_DETECTION |
  *   eAuthenticity.FINGERPRINT_COMPARISON |
  *   eAuthenticity.LIVENESS
  * }
  */
  @Expose()
  @IsDefined()
  @IsIn([
    eAuthenticity.IMAGE_PATTERN,
    eAuthenticity.IR_VISIBILITY,
    eAuthenticity.OVI,
    eAuthenticity.IR_LUMINESCENCE,
    eAuthenticity.PORTRAIT_COMPARISON,
    eAuthenticity.KINEGRAM,
    eAuthenticity.LETTER_SCREEN,
    eAuthenticity.HOLOGRAM_DETECTION,
    eAuthenticity.FINGERPRINT_COMPARISON,
    eAuthenticity.LIVENESS
  ])
  @IsEnum(eAuthenticity)
  Type:
    eAuthenticity.IMAGE_PATTERN |
    eAuthenticity.IR_VISIBILITY |
    eAuthenticity.OVI |
    eAuthenticity.IR_LUMINESCENCE |
    eAuthenticity.PORTRAIT_COMPARISON |
    eAuthenticity.KINEGRAM |
    eAuthenticity.LETTER_SCREEN |
    eAuthenticity.HOLOGRAM_DETECTION |
    eAuthenticity.FINGERPRINT_COMPARISON |
    eAuthenticity.LIVENESS

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
  * @type {IdentResult[]}
  */
  @Expose()
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
  @Expose()
  @IsDefined()
  @IsInt()
  Count: number

  /**
  * Creates an instance of AuthenticityIdentCheckResult.
  * @param {iAuthenticityIdentCheckResult} plain - plain object
  * @return {AuthenticityIdentCheckResult} - new instance
  */
  static fromPlain = (plain: unknown): AuthenticityIdentCheckResult => plainToClass(AuthenticityIdentCheckResult, plain)
}
