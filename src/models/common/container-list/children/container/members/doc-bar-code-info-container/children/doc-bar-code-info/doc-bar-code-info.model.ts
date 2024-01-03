/**
* Structure serves for storing and passing to the user application of results of bar-codes areas search on the scanned
* document page and their reading in binary non-formatted code.
*/
import { IsArray, IsDefined, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { iDocBarCodeField, DocBarCodeField } from './children'


export interface iDocBarCodeInfo {
  /**
  * Number of pArrayFields array elements
  * @type {number}
  * @memberof iDocBarCodeInfo
  */
  nFields: number

  /**
  * Array of separate bar-codes reading results
  * @type {iDocBarCodeField[]}
  * @memberof iDocBarCodeInfo
  */
  pArrayFields: iDocBarCodeField[]
}

export class DocBarCodeInfo implements iDocBarCodeInfo {
  /**
  * Number of pArrayFields array elements
  * @type {number}
  * @memberof DocBarCodeInfo
  */
  @Expose()
  @IsDefined()
  @IsInt()
  nFields: number

  /**
  * Array of separate bar-codes reading results
  * @type {iDocBarCodeField[]}
  * @memberof DocBarCodeInfo
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => DocBarCodeField)
  @IsArray()
  pArrayFields: DocBarCodeField[]
}
