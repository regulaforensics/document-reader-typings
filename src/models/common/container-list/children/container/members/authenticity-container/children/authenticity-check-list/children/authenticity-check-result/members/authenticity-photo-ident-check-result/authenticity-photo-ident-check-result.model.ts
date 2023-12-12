import { IsArray, IsDefined, IsEnum, IsIn, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { AuthenticityResultType, CheckResult } from '~src/consts'
import { AuthenticityCheckResultAbstract } from '../../authenticity-check-result.abstract'
import { IPhotoIdentResult, PhotoIdentResult } from './children'


export interface IAuthenticityPhotoIdentCheckResult extends AuthenticityCheckResultAbstract {
  Type: AuthenticityResultType.IPI | AuthenticityResultType.IR_PHOTO
  Result: CheckResult
  List: IPhotoIdentResult[]
}

export class AuthenticityPhotoIdentCheckResult extends AuthenticityCheckResultAbstract implements IAuthenticityPhotoIdentCheckResult {
  @Expose()
  @IsDefined()
  @IsIn([AuthenticityResultType.IPI, AuthenticityResultType.IR_PHOTO])
  @IsEnum(AuthenticityResultType)
  Type: AuthenticityResultType.IPI | AuthenticityResultType.IR_PHOTO

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
