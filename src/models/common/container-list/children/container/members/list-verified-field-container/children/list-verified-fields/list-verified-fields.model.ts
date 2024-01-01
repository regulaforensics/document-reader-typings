import { IsArray, IsDefined, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { IVerifiedFieldMap, VerifiedFieldMap } from './children'


export interface IListVerifiedFields {
  /**
  * Number of pFieldMaps array elements
  * @type {number}
  */
  Count: number

  /**
  * Array of results of document filling text fields’ data analysis
  * @type {IVerifiedFieldMap[]}
  */
  pFieldMaps: IVerifiedFieldMap[]
}

export class ListVerifiedFields implements IListVerifiedFields {
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
  * @type {IVerifiedFieldMap[]}
  */
  @Expose()
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => VerifiedFieldMap)
  pFieldMaps: VerifiedFieldMap[]
}
