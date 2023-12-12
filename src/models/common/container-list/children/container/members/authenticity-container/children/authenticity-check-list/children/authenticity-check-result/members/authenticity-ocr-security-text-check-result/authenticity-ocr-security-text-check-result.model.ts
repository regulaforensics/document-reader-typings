import { IsArray, IsDefined, IsEnum, IsIn, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { AuthenticityResultType, CheckResult } from '~src/consts'
import { AuthenticityCheckResultAbstract } from '../../authenticity-check-result.abstract'
import { IOCRSecurityTextResult, OCRSecurityTextResult } from './children'


export interface IAuthenticityOCRSecurityTextCheckResult extends AuthenticityCheckResultAbstract {
  Type: AuthenticityResultType.OCR_SECURITY_TEXT
  Result: CheckResult
  List: IOCRSecurityTextResult[]
}

export class AuthenticityOCRSecurityTextCheckResult extends AuthenticityCheckResultAbstract implements IAuthenticityOCRSecurityTextCheckResult {
  @Expose()
  @IsDefined()
  @IsIn([AuthenticityResultType.OCR_SECURITY_TEXT])
  @IsEnum(AuthenticityResultType)
  Type: AuthenticityResultType.OCR_SECURITY_TEXT

  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  Result: CheckResult

  @Expose()
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OCRSecurityTextResult)
  List: OCRSecurityTextResult[]

  static fromPlain = (plain: unknown): AuthenticityOCRSecurityTextCheckResult => plainToClass(AuthenticityOCRSecurityTextCheckResult, plain)
}
