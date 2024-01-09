import { IsDefined, IsEnum, IsString, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { eGraphicFieldType } from '@/consts'
import { ImageData } from '@/models/common/image-data'
import { iRect, Rect } from '@/models/common/rect'
import { aDocGraphicField } from '../../doc-graphic-field.abstract'


/**
* Information about one graphic field, which is a rectangle
*/
export interface iDocGraphicFieldRect extends aDocGraphicField {
  /**
  * Field area coordinates on the general image
  * @type {iRect}
  */
  FieldRect: iRect
}

/**
* Information about one graphic field, which is a rectangle
*/
export class DocGraphicFieldRect extends aDocGraphicField implements iDocGraphicFieldRect {
  /**
  * Graphic field logical type
  * @type {eGraphicFieldType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eGraphicFieldType)
  FieldType: eGraphicFieldType

  /**
  * Graphic field symbolic name
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  FieldName: string

  /**
  * Image data
  * @type {ImageData}
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => ImageData)
  image: ImageData

  /**
  * Field area coordinates on the general image
  * @type {Rect}
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => Rect)
  FieldRect: Rect

  /**
  * Create new instance of DocGraphicFieldRect from plain object
  *
  * @param {unknown} input - plain object
  * @return {DocGraphicFieldRect}
  */
  static fromPlain = (input: unknown): DocGraphicFieldRect => plainToClass(DocGraphicFieldRect, input)
}
