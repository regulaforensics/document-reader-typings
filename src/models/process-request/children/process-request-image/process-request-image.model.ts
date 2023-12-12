import { IsEnum, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { IImageData, ImageData } from '~/src/distinct/models/common'
import { Light } from '~src/distinct/consts'


export interface IProcessRequestImage {
  ImageData: IImageData
  light?: Light
  page_idx?: number
}

export class ProcessRequestImage implements IProcessRequestImage {
  @Expose()
  @ValidateNested()
  @Type(() => ImageData)
  ImageData: ImageData

  @Expose()
  @IsEnum(Light)
  @IsOptional()
  light?: Light

  @Expose()
  @IsInt()
  @IsOptional()
  page_idx?: number
}
