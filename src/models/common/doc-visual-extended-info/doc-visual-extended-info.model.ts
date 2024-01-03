import { IsArray, IsDefined, IsInt, ValidateNested } from 'class-validator'
import { Expose, Transform } from 'class-transformer'

import { iuDocVisualExtendedField, uDocVisualExtendedField } from './children'


export interface iDocVisualExtendedInfo {
  /**
  * Number of pArrayFields array elements
  * @type {number}
  */
  nFields: number

  /**
  * Array of structures containing logically divided text data
  * @type {iuDocVisualExtendedField[]}
  */
  pArrayFields: iuDocVisualExtendedField[]
}

export class DocVisualExtendedInfo implements iDocVisualExtendedInfo {
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
  * @type {uDocVisualExtendedField[]}
  */
  @Expose()
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Transform(({ obj }) => uDocVisualExtendedField.transformList(obj.pArrayFields), { toClassOnly: true })
  pArrayFields: uDocVisualExtendedField[]
}
