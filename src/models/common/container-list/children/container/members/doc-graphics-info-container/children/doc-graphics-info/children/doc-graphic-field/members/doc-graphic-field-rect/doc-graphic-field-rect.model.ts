import { IsDefined, IsEnum, IsString, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { GraphicFieldType } from '@/consts'
import { ImageData } from '@/models/common/image-data'
import { IRectangleCoordinates, RectangleCoordinates } from '@/models/common/rectangle-coordinates'
import { DocGraphicField } from '../../doc-graphic-field.abstract'


export interface IDocGraphicFieldRect extends DocGraphicField {
  /**
  * Field area coordinates on the general image
  */
  FieldRect: IRectangleCoordinates
}

export class DocGraphicFieldRect extends DocGraphicField implements IDocGraphicFieldRect {
  /**
  * Graphic field logical type
  */
  @Expose()
  @IsDefined()
  @IsEnum(GraphicFieldType)
  FieldType: GraphicFieldType

  /**
  * Graphic field symbolic name
  */
  @Expose()
  @IsDefined()
  @IsString()
  FieldName: string

  /**
  * Image data
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => ImageData)
  image: ImageData

  /**
  * Field area coordinates on the general image
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => RectangleCoordinates)
  FieldRect: RectangleCoordinates

  static fromPlain = (input: unknown): DocGraphicFieldRect => plainToClass(DocGraphicFieldRect, input)
}
