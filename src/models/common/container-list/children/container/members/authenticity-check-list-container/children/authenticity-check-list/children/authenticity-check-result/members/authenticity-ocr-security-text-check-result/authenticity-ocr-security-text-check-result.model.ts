import { IsArray, IsDefined, IsEnum, IsIn, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { eAuthenticity, eCheckResult } from '@/consts'
import { aAuthenticityCheckResult } from '../../authenticity-check-result.abstract'
import { iOCRSecurityTextResult, OCRSecurityTextResult } from './children'


export interface iAuthenticityOCRSecurityTextCheckResult extends aAuthenticityCheckResult {
  Type: eAuthenticity.OCR_SECURITY_TEXT
  Result: eCheckResult
  List: iOCRSecurityTextResult[]
}

export class AuthenticityOCRSecurityTextCheckResult extends aAuthenticityCheckResult implements iAuthenticityOCRSecurityTextCheckResult {
  @Expose()
  @IsDefined()
  @IsIn([eAuthenticity.OCR_SECURITY_TEXT])
  @IsEnum(eAuthenticity)
  Type: eAuthenticity.OCR_SECURITY_TEXT

  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  Result: eCheckResult

  @Expose()
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OCRSecurityTextResult)
  List: OCRSecurityTextResult[]

  static fromPlain = (plain: unknown): AuthenticityOCRSecurityTextCheckResult => plainToClass(AuthenticityOCRSecurityTextCheckResult, plain)
}
