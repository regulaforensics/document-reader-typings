import { IsArray, IsDefined, IsEnum, IsIn, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { eAuthenticity, eCheckResult } from '@/consts'
import { aAuthenticityCheckResult } from '../../authenticity-check-result.abstract'
import { IdentResult, iIdentResult } from './children'


export interface iAuthenticityIdentCheckResult extends aAuthenticityCheckResult {
  Type:
    eAuthenticity.IMAGE_PATTERN |
    eAuthenticity.IR_VISIBILITY |
    eAuthenticity.OVI |
    eAuthenticity.IR_LUMINESCENCE |
    eAuthenticity.PORTRAIT_COMPARISON |
    eAuthenticity.KINEGRAM |
    eAuthenticity.LETTER_SCREEN |
    eAuthenticity.HOLOGRAM_DETECTION |
    eAuthenticity.FINGERPRINT_COMPARISON |
    eAuthenticity.LIVENESS
  Result: eCheckResult
  List: iIdentResult[]
}

export class AuthenticityIdentCheckResult extends aAuthenticityCheckResult implements iAuthenticityIdentCheckResult {
  @Expose()
  @IsDefined()
  @IsIn([
    eAuthenticity.IMAGE_PATTERN,
    eAuthenticity.IR_VISIBILITY,
    eAuthenticity.OVI,
    eAuthenticity.IR_LUMINESCENCE,
    eAuthenticity.PORTRAIT_COMPARISON,
    eAuthenticity.KINEGRAM,
    eAuthenticity.LETTER_SCREEN,
    eAuthenticity.HOLOGRAM_DETECTION,
    eAuthenticity.FINGERPRINT_COMPARISON,
    eAuthenticity.LIVENESS
  ])
  @IsEnum(eAuthenticity)
  Type:
    eAuthenticity.IMAGE_PATTERN |
    eAuthenticity.IR_VISIBILITY |
    eAuthenticity.OVI |
    eAuthenticity.IR_LUMINESCENCE |
    eAuthenticity.PORTRAIT_COMPARISON |
    eAuthenticity.KINEGRAM |
    eAuthenticity.LETTER_SCREEN |
    eAuthenticity.HOLOGRAM_DETECTION |
    eAuthenticity.FINGERPRINT_COMPARISON |
    eAuthenticity.LIVENESS

  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  Result: eCheckResult

  @Expose()
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => IdentResult)
  List: IdentResult[]

  static fromPlain = (plain: unknown): AuthenticityIdentCheckResult => plainToClass(AuthenticityIdentCheckResult, plain)
}
