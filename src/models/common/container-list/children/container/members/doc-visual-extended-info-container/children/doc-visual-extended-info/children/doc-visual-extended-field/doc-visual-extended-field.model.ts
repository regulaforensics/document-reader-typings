import { IsDefined, ValidateNested } from 'class-validator'
import { DocVisualExtendedField as cDocVisualExtendedField } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { Rect } from '@/models'
import { aVisualExtendedFieldItem } from '../../../../../../../../../visual-extended-field-item'

export class DocVisualExtendedField extends aVisualExtendedFieldItem implements cDocVisualExtendedField {
  /**
   * @type {Rect}
   */
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => Rect)
  FieldRect: Rect
}
