import { IsDefined, IsEnum, IsInt, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { Light, Source } from 'consts'
import { IRfidOrigin, RfidOrigin } from 'models/common/rfid-origin'
import { IRectangleCoordinates, RectangleCoordinates } from 'models/common/rectangle-coordinates'


export interface IImagesFieldValue {
  source: Source
  value: string
  originalValue?: string
  originalPageIndex?: number
  pageIndex: number
  lightIndex: Light
  containerType: number
  fieldRect?: IRectangleCoordinates
  rfidOrigin?: IRfidOrigin
}

export class ImagesFieldValue implements IImagesFieldValue {
  @Expose()
  @IsDefined()
  @IsEnum(Source)
  source: Source

  @Expose()
  @IsDefined()
  @IsString()
  value: string

  @Expose()
  @IsOptional()
  @IsString()
  originalValue?: string

  @Expose()
  @IsOptional()
  @IsInt()
  originalPageIndex?: number

  @Expose()
  @IsDefined()
  @IsInt()
  pageIndex: number

  @Expose()
  @IsDefined()
  @IsEnum(Light)
  lightIndex: Light

  @Expose()
  @IsDefined()
  @IsNumber()
  containerType: number

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => RectangleCoordinates)
  fieldRect?: RectangleCoordinates

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => RfidOrigin)
  rfidOrigin?: RfidOrigin
}
