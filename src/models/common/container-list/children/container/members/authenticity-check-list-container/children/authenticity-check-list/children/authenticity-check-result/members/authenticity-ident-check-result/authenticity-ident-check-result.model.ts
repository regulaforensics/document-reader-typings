import { IsArray, IsDefined, IsEnum, IsIn, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { Authenticity, CheckResult } from '@/consts'
import { AuthenticityCheckResultAbstract } from '../../authenticity-check-result.abstract'
import { IdentResult, IIdentResult } from './children'


export interface IAuthenticityIdentCheckResult extends AuthenticityCheckResultAbstract {
  Type:
    Authenticity.IMAGE_PATTERN |
    Authenticity.IR_VISIBILITY |
    Authenticity.OVI |
    Authenticity.IR_LUMINESCENCE |
    Authenticity.PORTRAIT_COMPARISON |
    Authenticity.KINEGRAM |
    Authenticity.LETTER_SCREEN |
    Authenticity.HOLOGRAM_DETECTION |
    Authenticity.FINGERPRINT_COMPARISON |
    Authenticity.LIVENESS
  Result: CheckResult
  List: IIdentResult[]
}

export class AuthenticityIdentCheckResult extends AuthenticityCheckResultAbstract implements IAuthenticityIdentCheckResult {
  @Expose()
  @IsDefined()
  @IsIn([
    Authenticity.IMAGE_PATTERN,
    Authenticity.IR_VISIBILITY,
    Authenticity.OVI,
    Authenticity.IR_LUMINESCENCE,
    Authenticity.PORTRAIT_COMPARISON,
    Authenticity.KINEGRAM,
    Authenticity.LETTER_SCREEN,
    Authenticity.HOLOGRAM_DETECTION,
    Authenticity.FINGERPRINT_COMPARISON,
    Authenticity.LIVENESS
  ])
  @IsEnum(Authenticity)
  Type:
    Authenticity.IMAGE_PATTERN |
    Authenticity.IR_VISIBILITY |
    Authenticity.OVI |
    Authenticity.IR_LUMINESCENCE |
    Authenticity.PORTRAIT_COMPARISON |
    Authenticity.KINEGRAM |
    Authenticity.LETTER_SCREEN |
    Authenticity.HOLOGRAM_DETECTION |
    Authenticity.FINGERPRINT_COMPARISON |
    Authenticity.LIVENESS

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
