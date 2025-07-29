import { IsDefined, IsInt, ValidateNested } from 'class-validator'
import { DocVisualExtendedInfo as iDocVisualExtendedInfo } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { DocVisualExtendedField } from './children'

/**
 * Structure serves for storing text results of MRZ, document filling and bar-codes reading
 */
export class DocVisualExtendedInfo implements iDocVisualExtendedInfo {
  /**
   * Number of pArrayFields array elements
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  nFields: number

  /**
   * Array of structures containing logically divided text data
   * @type {DocVisualExtendedField[]}
   */
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => DocVisualExtendedField)
  pArrayFields: DocVisualExtendedField[]
}
