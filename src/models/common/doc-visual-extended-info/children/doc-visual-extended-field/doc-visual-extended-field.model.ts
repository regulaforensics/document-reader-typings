import { IsDefined, IsEnum, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { LCID, TextFieldType } from '~src/consts'
import { IStringRecognitionResult, StringRecognitionResult } from '~src/models/common/string-recognition-result'
import { IRectangleCoordinates, RectangleCoordinates } from '~src/models/common/rectangle-coordinates'


export interface IDocVisualExtendedField {
  wFieldType: TextFieldType
  FieldName: string
  wLCID: LCID
  StringsResult?: IStringRecognitionResult[]
  Buf_Text?: string
  FieldRect?: IRectangleCoordinates
  RFID_OriginDG?: number
  RFID_OriginTagEntry?: number
}

export class DocVisualExtendedField implements IDocVisualExtendedField {
  @Expose()
  @IsDefined()
  @IsEnum(TextFieldType)
  wFieldType: TextFieldType

  @Expose()
  @IsDefined()
  @IsString()
  FieldName: string

  @Expose()
  @IsDefined()
  @IsEnum(LCID)
  wLCID: LCID

  @Expose()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => StringRecognitionResult)
  StringsResult?: StringRecognitionResult[]

  @Expose()
  @IsOptional()
  @IsString()
  Buf_Text?: string

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
  RFID_OriginTagEntry?: number
}
