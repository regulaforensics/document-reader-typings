import { IsArray, IsDefined, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Transform } from 'class-transformer'

import { iuContainer, uContainer } from './children'


export interface iContainerList {
  Count?: number
  List: iuContainer[]
}

export class ContainerList implements iContainerList {
  @Expose()
  @IsOptional()
  @IsInt()
  Count?: number

  @Expose()
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Transform(({ obj }) => uContainer.transformList(obj.List), { toClassOnly: true })
  List: uContainer[]
}
