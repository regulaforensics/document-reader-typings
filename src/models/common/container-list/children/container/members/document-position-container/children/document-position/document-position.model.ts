import { IsEnum, IsInt, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { DocumentFormat } from 'consts'
import { Point } from 'models/common/point'


export interface IDocumentPosition {
  docFormat?: DocumentFormat
  Angle?: number
  Width?: number
  Height?: number
  Center?: Point
  LeftBottom?: Point
  LeftTop?: Point
  RightBottom?: Point
  RightTop?: Point
  Dpi?: number
}

export class DocumentPosition implements IDocumentPosition {
  @Expose()
  @IsOptional()
  @IsEnum(DocumentFormat)
  docFormat?: DocumentFormat

  @Expose()
  @IsOptional()
  @IsNumber()
  Angle?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  Width?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  Height?: number

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => Point)
  Center?: Point

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => Point)
  LeftBottom?: Point

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => Point)
  LeftTop?: Point

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => Point)
  RightBottom?: Point

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => Point)
  RightTop?: Point

  @Expose()
  @IsOptional()
  @IsInt()
  Dpi?: number
}
