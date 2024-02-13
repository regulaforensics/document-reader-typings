import { IsArray, IsDefined, IsEnum, IsIn, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { eAuthenticity, eCheckResult } from '@/consts'
import { Default } from '@/decorators'
import { aAuthenticityCheckResult } from '../../authenticity-check-result.abstract'
import { iPhotoIdentResult, PhotoIdentResult } from './children'


export type tAuthenticityPhotoIdentCheckResultType = eAuthenticity.IPI | eAuthenticity.IR_PHOTO

export const AuthenticityPhotoIdentCheckResultTypes: tAuthenticityPhotoIdentCheckResultType[] = [
  eAuthenticity.IPI,
  eAuthenticity.IR_PHOTO
]

export interface iAuthenticityPhotoIdentCheckResult extends aAuthenticityCheckResult {
  Type: tAuthenticityPhotoIdentCheckResultType
  Result: eCheckResult
  List: iPhotoIdentResult[]
}

export class AuthenticityPhotoIdentCheckResult extends aAuthenticityCheckResult implements iAuthenticityPhotoIdentCheckResult {
  @Expose()
  @IsDefined()
  @IsIn(AuthenticityPhotoIdentCheckResultTypes)
  @IsEnum(eAuthenticity)
  Type: tAuthenticityPhotoIdentCheckResultType

  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  @Default(eCheckResult.WAS_NOT_DONE)
  Result: eCheckResult

  @Expose()
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PhotoIdentResult)
  @Default([])
  List: PhotoIdentResult[]

  static fromPlain = (plain: unknown): AuthenticityPhotoIdentCheckResult => plainToClass(AuthenticityPhotoIdentCheckResult, plain)

  /**
  * Check if the given type belongs to AuthenticityPhotoIdentCheckResult
  * @param {unknown} type - type to check
  * @return {type is iAuthenticityPhotoIdentCheckResult} - result
  */
  static isBelongs = (type: unknown): type is iAuthenticityPhotoIdentCheckResult =>
    AuthenticityPhotoIdentCheckResultTypes.includes((type as iAuthenticityPhotoIdentCheckResult)?.Type)
}
