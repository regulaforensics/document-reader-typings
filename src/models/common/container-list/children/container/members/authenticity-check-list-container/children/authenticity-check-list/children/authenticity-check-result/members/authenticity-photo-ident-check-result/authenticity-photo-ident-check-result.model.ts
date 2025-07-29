import { IsArray, IsDefined, IsEnum, IsIn, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { eAuthenticity } from '@/consts'
import { aAuthenticityCheckResult } from '../../authenticity-check-result.abstract'
import { iPhotoIdentResult, PhotoIdentResult } from './children'

/**
 * Result type of AuthenticityPhotoIdentCheckResult
 */
export type tAuthenticityPhotoIdentCheckResultType = eAuthenticity.IPI

/**
 * Result type of AuthenticityPhotoIdentCheckResult
 */
export const AuthenticityPhotoIdentCheckResultTypes: tAuthenticityPhotoIdentCheckResultType[] = [eAuthenticity.IPI]

/**
 * Container for PhotoIdentResult
 */
export interface iAuthenticityPhotoIdentCheckResult extends aAuthenticityCheckResult {
  /**
   * Type of the performed check
   * @type {tAuthenticityPhotoIdentCheckResultType}
   */
  Type: tAuthenticityPhotoIdentCheckResultType

  /**
   * Array of results of checks
   * @type {iPhotoIdentResult[]}
   */
  List: iPhotoIdentResult[]
}

/**
 * Container for PhotoIdentResult
 */
@Expose()
export class AuthenticityPhotoIdentCheckResult
  extends aAuthenticityCheckResult
  implements iAuthenticityPhotoIdentCheckResult
{
  /**
   * Type of the performed check
   * @type {tAuthenticityPhotoIdentCheckResultType}
   */
  @IsDefined()
  @IsIn(AuthenticityPhotoIdentCheckResultTypes)
  @IsEnum(eAuthenticity)
  Type: tAuthenticityPhotoIdentCheckResultType

  /**
   * Array of results of checks
   * @type {iPhotoIdentResult[]}
   */
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PhotoIdentResult)
  List: PhotoIdentResult[]

  /**
   * Create instance of AuthenticityPhotoIdentCheckResult from plain object
   * @param {unknown} plain - plain object
   * @returns {AuthenticityPhotoIdentCheckResult}
   */
  static fromPlain = (plain: unknown): AuthenticityPhotoIdentCheckResult =>
    plainToClass(AuthenticityPhotoIdentCheckResult, plain)

  /**
   * Check if the given type belongs to AuthenticityPhotoIdentCheckResult
   * @param {unknown} type - type to check
   * @return {type is iAuthenticityPhotoIdentCheckResult} - result
   */
  static isBelongs = (type: unknown): type is iAuthenticityPhotoIdentCheckResult =>
    AuthenticityPhotoIdentCheckResultTypes.includes((type as iAuthenticityPhotoIdentCheckResult)?.Type)
}
