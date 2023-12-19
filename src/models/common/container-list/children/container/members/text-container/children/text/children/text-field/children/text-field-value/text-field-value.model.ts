import { IsDefined, IsEnum, IsInt, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { IRectangleCoordinates, RectangleCoordinates } from 'models/common/rectangle-coordinates'
import { IRfidOrigin, RfidOrigin } from 'models/common/rfid-origin'
import { Source } from 'consts'
import { IOriginalSymbol, OriginalSymbol } from './children'


export interface ITextFieldValue {
  source: Source
  value: string
  originalValue?: string
  originalSymbols?: IOriginalSymbol
  pageIndex: number
  probability?: number
  fieldRect?: IRectangleCoordinates
  rfidOrigin?: IRfidOrigin
}

export class TextFieldValue implements ITextFieldValue {
  @Expose()
  @IsDefined()
  @IsEnum(Source)
  source: Source

  @Expose()
  @IsString()
  @IsDefined()
  value: string

  @Expose()
  @IsOptional()
  @IsString()
  originalValue?: string

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => OriginalSymbol)
  originalSymbols?: OriginalSymbol

  @Expose()
  @IsDefined()
  @IsInt()
  pageIndex: number

  @Expose()
  @IsOptional()
  @IsNumber()
  probability?: number

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
