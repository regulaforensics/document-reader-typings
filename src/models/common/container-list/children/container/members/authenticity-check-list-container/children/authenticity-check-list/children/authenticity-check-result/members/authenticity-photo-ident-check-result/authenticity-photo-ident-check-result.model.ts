import { IsArray, IsDefined, IsEnum, IsIn, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { eAuthenticity, eCheckResult } from '@/consts'
import { Default } from '@/decorators'
import { aAuthenticityCheckResult } from '../../authenticity-check-result.abstract'
import { iPhotoIdentResult, PhotoIdentResult } from './children'


export interface iAuthenticityPhotoIdentCheckResult extends aAuthenticityCheckResult {
  Type: eAuthenticity.IPI | eAuthenticity.IR_PHOTO
  Result: eCheckResult
  List: iPhotoIdentResult[]
}

export class AuthenticityPhotoIdentCheckResult extends aAuthenticityCheckResult implements iAuthenticityPhotoIdentCheckResult {
  @Expose()
  @IsDefined()
  @IsIn([eAuthenticity.IPI, eAuthenticity.IR_PHOTO])
  @IsEnum(eAuthenticity)
  Type: eAuthenticity.IPI | eAuthenticity.IR_PHOTO

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
}
