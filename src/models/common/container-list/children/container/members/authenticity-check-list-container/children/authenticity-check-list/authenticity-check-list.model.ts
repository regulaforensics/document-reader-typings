import { IsArray, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Transform } from 'class-transformer'

import { uAuthenticityCheckResult, iuAuthenticityCheckResult } from './children'


export interface iAuthenticityCheckList {
  Count?: number
  List: iuAuthenticityCheckResult[]
}

export class AuthenticityCheckList implements iAuthenticityCheckList {
  @Expose()
  @IsOptional()
  @IsInt()
  Count?: number

  @Expose()
  @ValidateNested({ each: true })
  @Transform(({ obj }) => uAuthenticityCheckResult.transformList(obj.List), { toClassOnly: true })
  @IsArray()
  List: uAuthenticityCheckResult[]
}
