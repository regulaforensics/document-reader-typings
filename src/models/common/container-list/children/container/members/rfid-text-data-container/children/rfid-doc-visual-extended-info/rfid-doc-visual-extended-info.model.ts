import { IsDefined, IsInt, ValidateNested } from 'class-validator'
import { RFIDDocVisualExtendedInfo as cRFIDDocVisualExtendedInfo } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { RFIDDocVisualExtendedField } from './children'

export class RFIDDocVisualExtendedInfo implements cRFIDDocVisualExtendedInfo {
  /**
   * Number of pArrayFields array elements
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  nFields: number

  /**
   * @type {RFIDDocVisualExtendedField[]}
   */
  @IsDefined()
  @ValidateNested()
  @Type(() => RFIDDocVisualExtendedField)
  pArrayFields: RFIDDocVisualExtendedField[]
}
