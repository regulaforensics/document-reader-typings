import { IsArray, IsDefined, IsEnum, IsIn, IsInt, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { iRectangleCoordinates, RectangleCoordinates } from '@/models/common/rectangle-coordinates'
import { iImageData, ImageData } from '@/models/common/image-data'
import { eAuthenticity, eCheckDiagnose, eCheckResult, eLights } from '@/consts'
import { iRawImageContainerList, RawImageContainerList } from './children'


export interface iPhotoIdentResult {
  Type: eAuthenticity.IPI | eAuthenticity.IR_PHOTO
  ElementResult?: eCheckResult
  ElementDiagnose?: eCheckDiagnose
  LightIndex?: eLights
  Area?: iRectangleCoordinates
  SourceImage?: iImageData
  ResultImages?: iRawImageContainerList
  FieldTypesCount?: number
  FieldTypesList?: number[]
  Step?: number
  Angle?: number
  Reserved3?: number
}

export class PhotoIdentResult implements iPhotoIdentResult {
  @Expose()
  @IsDefined()
  @IsIn([eAuthenticity.IPI, eAuthenticity.IR_PHOTO])
  @IsEnum(eAuthenticity)
  Type: eAuthenticity.IPI | eAuthenticity.IR_PHOTO

  @Expose()
  @IsOptional()
  @IsEnum(eCheckResult)
  ElementResult?: eCheckResult

  @Expose()
  @IsOptional()
  @IsEnum(eCheckDiagnose)
  ElementDiagnose?: eCheckDiagnose

  @Expose()
  @IsOptional()
  @IsEnum(eLights)
  LightIndex?: eLights

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
