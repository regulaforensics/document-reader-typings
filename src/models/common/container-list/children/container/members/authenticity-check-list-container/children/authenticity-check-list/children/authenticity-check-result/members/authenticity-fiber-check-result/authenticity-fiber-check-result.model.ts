import { IsArray, IsDefined, IsEnum, IsIn, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { Authenticity, CheckResult } from '@/consts'
import { AuthenticityCheckResultAbstract } from '../../authenticity-check-result.abstract'
import { FiberResult, IFiberResult } from './children'


export interface IAuthenticityFiberCheckResult extends AuthenticityCheckResultAbstract {
  Type: Authenticity.UV_FIBERS | Authenticity.UV_BACKGROUND
  Result: CheckResult
  List: IFiberResult[]
}

export class AuthenticityFiberCheckResult extends AuthenticityCheckResultAbstract implements IAuthenticityFiberCheckResult {
  @Expose()
  @IsDefined()
  @IsIn([Authenticity.UV_FIBERS, Authenticity.UV_BACKGROUND])
  @IsEnum(Authenticity)
  Type: Authenticity.UV_FIBERS | Authenticity.UV_BACKGROUND

  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  Result: CheckResult

  @Expose()
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FiberResult)
  List: FiberResult[]

  static fromPlain = (plain: unknown): AuthenticityFiberCheckResult => plainToClass(AuthenticityFiberCheckResult, plain)
}
