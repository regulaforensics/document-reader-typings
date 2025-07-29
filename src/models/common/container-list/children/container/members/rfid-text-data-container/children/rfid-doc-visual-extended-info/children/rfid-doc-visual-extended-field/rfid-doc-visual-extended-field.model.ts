import { RFIDDocVisualExtendedField as iRFIDDocVisualExtendedField } from '@regulaforensics/document-reader-webclient'

import { aVisualExtendedFieldItem } from '../../../../../../../../../visual-extended-field-item'
import { IsDefined, IsInt, IsOptional } from 'class-validator'

export class RFIDDocVisualExtendedField extends aVisualExtendedFieldItem implements iRFIDDocVisualExtendedField {
  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  OriginDG: number

  /**
   * @type {number|undefined}
   */
  @IsOptional()
  @IsInt()
  OriginDGTag?: number

  /**
   * Record index of the text field source in the data group
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  OriginTagEntry: number

  /**
   * @type {number|undefined}
   */
  @IsOptional()
  @IsInt()
  OriginEntryView?: number
}

export type { iRFIDDocVisualExtendedField }
