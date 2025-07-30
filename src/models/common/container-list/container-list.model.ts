import { IsArray, IsOptional, IsDefined, IsInt, ValidateNested } from 'class-validator'
import { ContainerList as cContainerList } from '@regulaforensics/document-reader-webclient'
import { Transform } from 'class-transformer'

import { transformToContainerList, uContainer } from './children'

export class ContainerList implements cContainerList {
  /**
   * Length of list (Count for items)
   * @type {number|undefined}
   */
  @IsOptional()
  @IsInt()
  Count?: number

  /**
   * List of containers with results
   * @type {uContainer[]}
   */
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Transform(({ obj }) => transformToContainerList(obj.List), { toClassOnly: true })
  List: uContainer[]
}
