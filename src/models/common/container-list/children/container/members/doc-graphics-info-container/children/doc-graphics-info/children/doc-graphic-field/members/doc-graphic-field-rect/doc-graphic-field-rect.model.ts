import { IsDefined, IsEnum, IsString, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { eGraphicFieldType } from '@/consts'
import { ImageData } from '@/models/common/image-data'
import { iRectangleCoordinates, RectangleCoordinates } from '@/models/common/rectangle-coordinates'
import { aDocGraphicField } from '../../doc-graphic-field.abstract'


export interface iDocGraphicFieldRect extends aDocGraphicField {
  /**
  * Field area coordinates on the general image
  * @type {iRectangleCoordinates}
  */
  FieldRect: iRectangleCoordinates
}

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
  * @type {RectangleCoordinates}
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => RectangleCoordinates)
  FieldRect: RectangleCoordinates

  /**
  * Create new instance of DocGraphicFieldRect from plain object
  *
  * @param {unknown} input - plain object
  * @return {DocGraphicFieldRect}
  */
  static fromPlain = (input: unknown): DocGraphicFieldRect => plainToClass(DocGraphicFieldRect, input)
}
