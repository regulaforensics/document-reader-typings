import { IsArray, IsDefined, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Transform } from 'class-transformer'

import { iuContainer, uContainer } from './children'


export interface iContainerList {
  Count?: number

  /**
  * List of containers with results
  * @type {iuContainer[]}
  */
  List: iuContainer[]
}

export class ContainerList implements iContainerList {
  @Expose()
  @IsOptional()
  @IsInt()
  Count?: number

  /**
  * List of containers with results
  * @type {uContainer[]}
  */
  @Expose()
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Transform(({ obj }) => uContainer.transformList(obj.List), { toClassOnly: true })
  List: uContainer[]
}
