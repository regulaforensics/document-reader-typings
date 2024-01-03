import { IsEnum, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { iImageData, ImageData } from '@/models/common'
import { eLights } from '@/consts'


export interface iProcessRequestImage {
  ImageData: iImageData
  light?: eLights
  page_idx?: number
}

export class ProcessRequestImage implements iProcessRequestImage {
  @Expose()
  @ValidateNested()
  @Type(() => ImageData)
  ImageData: ImageData

  @Expose()
  @IsEnum(eLights)
  @IsOptional()
  light?: eLights

  @Expose()
  @IsInt()
  @IsOptional()
  page_idx?: number
}
