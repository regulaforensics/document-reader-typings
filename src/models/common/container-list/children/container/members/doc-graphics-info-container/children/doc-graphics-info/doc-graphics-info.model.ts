import { IsDefined, IsInt, ValidateNested } from 'class-validator'
import { GraphicFieldsList as iDocGraphicsInfo } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { DocGraphicField } from './children'

/**
 * Model serves for storing graphic results of document filling area
 * and bar-codes reading
 */
export class DocGraphicsInfo implements iDocGraphicsInfo {
  /**
   * Array of images
   * @type {DocGraphicField[]}
   */
  @IsDefined()
  @ValidateNested()
  @Type(() => DocGraphicField)
  pArrayFields: DocGraphicField[]

  /**
   * Number of pArrayFields array elements
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  nFields: number
}

export type { iDocGraphicsInfo }
