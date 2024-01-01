import { IsArray, IsDefined, IsInt, ValidateNested } from 'class-validator'
import { Expose, Transform, Type } from 'class-transformer'

import { DocVisualExtendedFieldUnion, IDocVisualExtendedFieldUnion } from './children'


export interface IDocVisualExtendedInfo {
  /**
  * Number of pArrayFields array elements
  * @type {number}
  */
  nFields: number

  /**
  * Array of structures containing logically divided text data
  * @type {IDocVisualExtendedFieldUnion[]}
  */
  pArrayFields: IDocVisualExtendedFieldUnion[]
}

export class DocVisualExtendedInfo implements IDocVisualExtendedInfo {
  /**
  * Number of pArrayFields array elements
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  nFields: number

  /**
  * Array of structures containing logically divided text data
  * @type {DocVisualExtendedFieldUnion[]}
  */
  @Expose()
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Transform(({ obj }) => DocVisualExtendedFieldUnion.transformList(obj.pArrayFields), { toClassOnly: true })
  pArrayFields: DocVisualExtendedFieldUnion[]
}
