import { IsArray, IsDefined, IsInt, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { iVerifiedFieldMap, VerifiedFieldMap } from './children'


export interface iListVerifiedFields {
  /**
  * Number of pFieldMaps array elements
  * @type {number}
  */
  Count: number

  /**
  * Array of results of document filling text fields’ data analysis
  * @type {iVerifiedFieldMap[]}
  */
  pFieldMaps: iVerifiedFieldMap[]
}

export class ListVerifiedFields implements iListVerifiedFields {
  /**
  * Number of pFieldMaps array elements
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  Count: number

  /**
  * Array of results of document filling text fields’ data analysis
  * @type {iVerifiedFieldMap[]}
  */
  @Expose()
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => VerifiedFieldMap)
  pFieldMaps: VerifiedFieldMap[]
}
