import { IsArray, IsDefined, IsEnum, IsIn, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { Authenticity, CheckResult } from '@/consts'
import { AuthenticityCheckResultAbstract } from '../../authenticity-check-result.abstract'
import { IOCRSecurityTextResult, OCRSecurityTextResult } from './children'


export interface IAuthenticityOCRSecurityTextCheckResult extends AuthenticityCheckResultAbstract {
  Type: Authenticity.OCR_SECURITY_TEXT
  Result: CheckResult
  List: IOCRSecurityTextResult[]
}

export class AuthenticityOCRSecurityTextCheckResult extends AuthenticityCheckResultAbstract implements IAuthenticityOCRSecurityTextCheckResult {
  @Expose()
  @IsDefined()
  @IsIn([Authenticity.OCR_SECURITY_TEXT])
  @IsEnum(Authenticity)
  Type: Authenticity.OCR_SECURITY_TEXT

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
