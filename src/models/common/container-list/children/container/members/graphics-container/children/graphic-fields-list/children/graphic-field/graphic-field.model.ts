import { IsDefined, IsEnum, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { GraphicFieldType } from '~src/distinct/consts'
import { IImageData, ImageData } from '~src/distinct/models/common/image-data'
import { IRectangleCoordinates, RectangleCoordinates } from '~src/distinct/models/common/rectangle-coordinates'


export interface IGraphicField {
  FieldType: GraphicFieldType
  image: IImageData
  FieldRect?: IRectangleCoordinates
  RFID_OriginDG?: number
  RFID_OriginDGTag?: number
  RFID_OriginTagEntry?: number
  RFID_OriginEntryView?: number
}

export class GraphicField implements IGraphicField {
  @Expose()
  @IsDefined()
  @IsEnum(GraphicFieldType)
  FieldType: GraphicFieldType

  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => ImageData)
  image: ImageData

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => RectangleCoordinates)
  FieldRect?: RectangleCoordinates

  @Expose()
  @IsOptional()
  @IsNumber()
  RFID_OriginDG?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  RFID_OriginDGTag?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  RFID_OriginTagEntry?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  RFID_OriginEntryView?: number
}
