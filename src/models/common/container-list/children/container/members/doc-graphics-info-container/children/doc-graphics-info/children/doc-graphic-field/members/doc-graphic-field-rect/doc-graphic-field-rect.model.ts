import { IsDefined, IsEnum, IsString, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { GraphicFieldType } from '@/consts'
import { ImageData } from '@/models/common/image-data'
import { IRectangleCoordinates, RectangleCoordinates } from '@/models/common/rectangle-coordinates'
import { DocGraphicField } from '../../doc-graphic-field.abstract'


export interface IDocGraphicFieldRect extends DocGraphicField {
  /**
  * Field area coordinates on the general image
  * @type {IRectangleCoordinates}
  */
  FieldRect: IRectangleCoordinates
}

export class DocGraphicFieldRect extends DocGraphicField implements IDocGraphicFieldRect {
  /**
  * Graphic field logical type
  * @type {GraphicFieldType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(GraphicFieldType)
  FieldType: GraphicFieldType

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
