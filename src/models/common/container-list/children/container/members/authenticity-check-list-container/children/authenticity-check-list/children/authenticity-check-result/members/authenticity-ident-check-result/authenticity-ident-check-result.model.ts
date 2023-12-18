import { IsArray, IsDefined, IsEnum, IsIn, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { AuthenticityResultType, CheckResult } from 'consts'
import { AuthenticityCheckResultAbstract } from '../../authenticity-check-result.abstract'
import { IdentResult, IIdentResult } from './children'


export interface IAuthenticityIdentCheckResult extends AuthenticityCheckResultAbstract {
  Type:
    AuthenticityResultType.IMAGE_PATTERN |
    AuthenticityResultType.IR_VISIBILITY |
    AuthenticityResultType.OVI |
    AuthenticityResultType.IR_LUMINESCENCE |
    AuthenticityResultType.PORTRAIT_COMPARISON |
    AuthenticityResultType.KINEGRAM |
    AuthenticityResultType.LETTER_SCREEN |
    AuthenticityResultType.HOLOGRAM_DETECTION |
    AuthenticityResultType.FINGERPRINT_COMPARISON |
    AuthenticityResultType.LIVENESS
  Result: CheckResult
  List: IIdentResult[]
}

export class AuthenticityIdentCheckResult extends AuthenticityCheckResultAbstract implements IAuthenticityIdentCheckResult {
  @Expose()
  @IsDefined()
  @IsIn([
    AuthenticityResultType.IMAGE_PATTERN,
    AuthenticityResultType.IR_VISIBILITY,
    AuthenticityResultType.OVI,
    AuthenticityResultType.IR_LUMINESCENCE,
    AuthenticityResultType.PORTRAIT_COMPARISON,
    AuthenticityResultType.KINEGRAM,
    AuthenticityResultType.LETTER_SCREEN,
    AuthenticityResultType.HOLOGRAM_DETECTION,
    AuthenticityResultType.FINGERPRINT_COMPARISON,
    AuthenticityResultType.LIVENESS
  ])
  @IsEnum(AuthenticityResultType)
  Type:
    AuthenticityResultType.IMAGE_PATTERN |
    AuthenticityResultType.IR_VISIBILITY |
    AuthenticityResultType.OVI |
    AuthenticityResultType.IR_LUMINESCENCE |
    AuthenticityResultType.PORTRAIT_COMPARISON |
    AuthenticityResultType.KINEGRAM |
    AuthenticityResultType.LETTER_SCREEN |
    AuthenticityResultType.HOLOGRAM_DETECTION |
    AuthenticityResultType.FINGERPRINT_COMPARISON |
    AuthenticityResultType.LIVENESS

  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  Result: CheckResult

  @Expose()
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => IdentResult)
  List: IdentResult[]

  static fromPlain = (plain: unknown): AuthenticityIdentCheckResult => plainToClass(AuthenticityIdentCheckResult, plain)
}
