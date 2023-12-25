/**
* Structure serves for storing and passing to the user application of results of bar-codes areas search on the scanned
* document page and their reading in binary non-formatted code.
*/
import { IsArray, IsDefined, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { IDocBarCodeField, DocBarCodeField } from './children'


export interface IDocBarCodeInfo {
  /**
  * Number of pArrayFields array elements
  */
  nFields: number

  /**
  * Array of separate bar-codes reading results
  */
  pArrayFields: IDocBarCodeField[]
}

export class DocBarCodeInfo implements IDocBarCodeInfo {
  /**
  * Number of pArrayFields array elements
  */
  @Expose()
  @IsDefined()
  @IsInt()
  nFields: number

  /**
  * Array of separate bar-codes reading results
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => DocBarCodeField)
  @IsArray()
  pArrayFields: DocBarCodeField[]
}
