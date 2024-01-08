import { IsArray, IsDefined, IsInt, ValidateNested } from 'class-validator'
import { Expose, Transform } from 'class-transformer'

import { iuAuthenticityCheckResult, uAuthenticityCheckResult } from './children'


export interface iAuthenticityCheckList {
  Count: number
  List: iuAuthenticityCheckResult[]
}

export class AuthenticityCheckList implements iAuthenticityCheckList {
  @Expose()
  @IsDefined()
  @IsInt()
  Count: number

  @Expose()
  @ValidateNested({ each: true })
  @Transform(({ obj }) => uAuthenticityCheckResult.transformList(obj.List), { toClassOnly: true })
  @IsArray()
  List: uAuthenticityCheckResult[]
}
