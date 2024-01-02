import { IsArray, IsDefined, IsEnum, IsIn, IsInt, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { IRectangleCoordinates, RectangleCoordinates } from '@/models/common/rectangle-coordinates'
import { IImageData, ImageData } from '@/models/common/image-data'
import { Authenticity, CheckDiagnose, CheckResult, Lights } from '@/consts'
import { IRawImageContainerList, RawImageContainerList } from './children'


export interface IPhotoIdentResult {
  Type: Authenticity.IPI | Authenticity.IR_PHOTO
  ElementResult?: CheckResult
  ElementDiagnose?: CheckDiagnose
  LightIndex?: Lights
  Area?: IRectangleCoordinates
  SourceImage?: IImageData
  ResultImages?: IRawImageContainerList
  FieldTypesCount?: number
  FieldTypesList?: number[]
  Step?: number
  Angle?: number
  Reserved3?: number
}

export class PhotoIdentResult implements IPhotoIdentResult {
  @Expose()
  @IsDefined()
  @IsIn([Authenticity.IPI, Authenticity.IR_PHOTO])
  @IsEnum(Authenticity)
  Type: Authenticity.IPI | Authenticity.IR_PHOTO

  @Expose()
  @IsOptional()
  @IsEnum(CheckResult)
  ElementResult?: CheckResult

  @Expose()
  @IsOptional()
  @IsEnum(CheckDiagnose)
  ElementDiagnose?: CheckDiagnose

  @Expose()
  @IsOptional()
  @IsEnum(Lights)
  LightIndex?: Lights

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => RectangleCoordinates)
  Area?: RectangleCoordinates

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => ImageData)
  SourceImage?: ImageData

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => RawImageContainerList)
  ResultImages?: RawImageContainerList

  @Expose()
  @IsOptional()
  @IsInt()
  FieldTypesCount?: number

  @Expose()
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  FieldTypesList?: number[]

  @Expose()
  @IsOptional()
  @IsNumber()
  Step?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  Angle?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  Reserved3?: number
}
