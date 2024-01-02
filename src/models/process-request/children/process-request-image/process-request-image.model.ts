import { IsEnum, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { IImageData, ImageData } from '@/models/common'
import { Lights } from '@/consts'


export interface IProcessRequestImage {
  ImageData: IImageData
  light?: Lights
  page_idx?: number
}

export class ProcessRequestImage implements IProcessRequestImage {
  @Expose()
  @ValidateNested()
  @Type(() => ImageData)
  ImageData: ImageData

  @Expose()
  @IsEnum(Lights)
  @IsOptional()
  light?: Lights

  @Expose()
  @IsInt()
  @IsOptional()
  page_idx?: number
}
