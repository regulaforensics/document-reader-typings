import { IsArray, IsDefined, IsInt, ValidateNested } from 'class-validator'
import { Transform } from 'class-transformer'

import { Default } from '@/decorators'
import { iuContainer, uContainer } from './children'


export interface iContainerList {
  /**
  * Number of containers with results
  * @type {number}
  */
  Count: number

  /**
  * List of containers with results
  * @type {iuContainer[]}
  */
  List: iuContainer[]
}

export class ContainerList implements iContainerList {
  @IsDefined()
  @IsInt()
  Count: number

  /**
  * List of containers with results
  * @type {uContainer[]}
  */
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Transform(({ obj }) => uContainer.transformList(obj.List), { toClassOnly: true })
  @Default([])
  List: uContainer[]
}
