import { IsArray, IsDefined, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Transform } from 'class-transformer'

import { ContainerUnion, IContainerUnion } from './children'


export interface IContainerList {
  Count?: number
  List: IContainerUnion[]
}

export class ContainerList implements IContainerList {
  @Expose()
  @IsOptional()
  @IsInt()
  Count?: number

  @Expose()
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Transform(({ obj }) => ContainerUnion.transformList(obj.List), { toClassOnly: true })
  List: ContainerUnion[]
}
