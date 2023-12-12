import { IsArray, IsDefined, IsEnum, IsIn, IsInt, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { IRectangleCoordinates, RectangleCoordinates } from 'models/common/rectangle-coordinates'
import { IImageData, ImageData } from 'models/common/image-data'
import { AuthenticityResultType, CheckDiagnose, CheckResult, Light } from 'consts'
import { IRawImageContainerList, RawImageContainerList } from './children'


export interface IPhotoIdentResult {
  Type: AuthenticityResultType.IPI | AuthenticityResultType.IR_PHOTO
  ElementResult?: CheckResult
  ElementDiagnose?: CheckDiagnose
  LightIndex?: Light
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
  @IsIn([AuthenticityResultType.IPI, AuthenticityResultType.IR_PHOTO])
  @IsEnum(AuthenticityResultType)
  Type: AuthenticityResultType.IPI | AuthenticityResultType.IR_PHOTO

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
  @IsEnum(Light)
  LightIndex?: Light

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
