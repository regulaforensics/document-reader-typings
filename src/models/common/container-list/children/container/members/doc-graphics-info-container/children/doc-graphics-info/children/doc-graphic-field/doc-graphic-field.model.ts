import { IsDefined, IsEnum, IsString, ValidateNested } from 'class-validator'
import { GraphicField as iDocGraphicField } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { Rect, ImageData } from '@/models'
import { eGraphicFieldType } from '@/consts'

/**
 * Information about one graphic field - abstract class
 */
export class DocGraphicField implements iDocGraphicField {
  /**
   * @type {Rect}
   */
  @IsDefined()
  @ValidateNested()
  @Type(() => Rect)
  FieldRect: Rect

  /**
   * @type {eGraphicFieldType}
   */
  @IsDefined()
  @IsEnum(eGraphicFieldType)
  FieldType: eGraphicFieldType

  /**
   * Graphic field symbolic name
   * @type {string}
   */
  @IsDefined()
  @IsString()
  FieldName: string

  /**
   * @type {ImageData}
   */
  @IsDefined()
  @ValidateNested()
  @Type(() => ImageData)
  image: ImageData
}

export type { iDocGraphicField }
