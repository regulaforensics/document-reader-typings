import { IsArray, IsDefined, IsEnum, IsIn, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { eAuthenticity, eCheckResult } from '@/consts'
import { aAuthenticityCheckResult } from '../../authenticity-check-result.abstract'
import { FiberResult, iFiberResult } from './children'


export interface iAuthenticityFiberCheckResult extends aAuthenticityCheckResult {
  Type: eAuthenticity.UV_FIBERS | eAuthenticity.UV_BACKGROUND
  Result: eCheckResult
  List: iFiberResult[]
}

export class AuthenticityFiberCheckResult extends aAuthenticityCheckResult implements iAuthenticityFiberCheckResult {
  @Expose()
  @IsDefined()
  @IsIn([eAuthenticity.UV_FIBERS, eAuthenticity.UV_BACKGROUND])
  @IsEnum(eAuthenticity)
  Type: eAuthenticity.UV_FIBERS | eAuthenticity.UV_BACKGROUND

  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  Result: eCheckResult

  @Expose()
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FiberResult)
  List: FiberResult[]

  static fromPlain = (plain: unknown): AuthenticityFiberCheckResult => plainToClass(AuthenticityFiberCheckResult, plain)
}
