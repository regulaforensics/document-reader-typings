import { IsArray, IsDefined, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

import { iDocBarCodeField, DocBarCodeField } from './children'
import { Default } from '@/decorators'

/**
* Structure serves for storing and passing to the user application of results of bar-codes areas search on the scanned
* document page and their reading in binary non-formatted code.
*/
export interface iDocBarCodeInfo {
  /**
  * Number of pArrayFields array elements
  * @type {number}
  */
  nFields: number

  /**
  * Array of separate bar-codes reading results
  * @type {iDocBarCodeField[]}
  */
  pArrayFields: iDocBarCodeField[]
}

/**
* Structure serves for storing and passing to the user application of results of bar-codes areas search on the scanned
* document page and their reading in binary non-formatted code.
*/
export class DocBarCodeInfo implements iDocBarCodeInfo {
  /**
  * Number of pArrayFields array elements
  * @type {number}
  */
  @IsDefined()
  @IsInt()
  nFields: number

  /**
  * Array of separate bar-codes reading results
  * @type {DocBarCodeField[]}
  */
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => DocBarCodeField)
  @IsArray()
  @Default([])
  pArrayFields: DocBarCodeField[]
}
