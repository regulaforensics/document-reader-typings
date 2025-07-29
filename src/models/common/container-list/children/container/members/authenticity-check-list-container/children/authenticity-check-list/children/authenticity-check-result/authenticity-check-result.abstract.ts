import { IsDefined, IsInt, IsEnum, IsOptional, IsArray } from 'class-validator'
import { AuthenticityCheckResult, AuthenticityCheckResultListInner } from '@regulaforensics/document-reader-webclient'

import { eAuthenticity, eCheckResult } from '@/consts'

export abstract class aAuthenticityCheckResult implements AuthenticityCheckResult {
  /**
   * Type of the performed check (eAuthenticity)
   * @type {eAuthenticity}
   */
  @IsDefined()
  @IsEnum(eAuthenticity)
  Type: eAuthenticity

  /**
   * Overall checking result
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  Result: eCheckResult

  /**
   * Number of List items
   * @type {number|undefined}
   */
  @IsOptional()
  @IsInt()
  Count?: number

  /**
   * Array of results of checks
   * @type {AuthenticityCheckResultListInner[]}
   */
  @IsDefined()
  @IsArray()
  List: AuthenticityCheckResultListInner[]
}
