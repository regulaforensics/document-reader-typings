import { IsArray, IsDefined, IsEnum, IsIn, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { Authenticity, CheckResult } from '@/consts'
import { AuthenticityCheckResultAbstract } from '../../authenticity-check-result.abstract'
import { IPhotoIdentResult, PhotoIdentResult } from './children'


export interface IAuthenticityPhotoIdentCheckResult extends AuthenticityCheckResultAbstract {
  Type: Authenticity.IPI | Authenticity.IR_PHOTO
  Result: CheckResult
  List: IPhotoIdentResult[]
}

export class AuthenticityPhotoIdentCheckResult extends AuthenticityCheckResultAbstract implements IAuthenticityPhotoIdentCheckResult {
  @Expose()
  @IsDefined()
  @IsIn([Authenticity.IPI, Authenticity.IR_PHOTO])
  @IsEnum(Authenticity)
  Type: Authenticity.IPI | Authenticity.IR_PHOTO

  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  Result: CheckResult

  @Expose()
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PhotoIdentResult)
  List: PhotoIdentResult[]

  static fromPlain = (plain: unknown): AuthenticityPhotoIdentCheckResult => plainToClass(AuthenticityPhotoIdentCheckResult, plain)
}
