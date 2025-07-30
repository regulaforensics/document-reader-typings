import { IsArray, IsDefined, IsInt, ValidateNested } from 'class-validator'
import { DocBarCodeInfoFieldsList } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { DocBarCodeField } from './children'

/**
 * Structure serves for storing and passing to the user application of results of bar-codes areas search on the scanned
 * document page and their reading in binary non-formatted code.
 */
export class DocBarCodeInfo implements DocBarCodeInfoFieldsList {
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
  pArrayFields: DocBarCodeField[]
}
