import { IsArray, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Transform } from 'class-transformer'

import { AuthenticityCheckResultUnion, IAuthenticityCheckResultUnion } from './children'


export interface IAuthenticityCheckList {
  Count?: number
  List: IAuthenticityCheckResultUnion[]
}

export class AuthenticityCheckList implements IAuthenticityCheckList {
  @Expose()
  @IsOptional()
  @IsInt()
  Count?: number

  @Expose()
  @ValidateNested({ each: true })
  @Transform(({ obj }) => AuthenticityCheckResultUnion.transformList(obj.List), { toClassOnly: true })
  @IsArray()
  List: AuthenticityCheckResultUnion[]
}
