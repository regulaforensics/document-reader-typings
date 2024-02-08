import { IsArray, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { iImageData, ImageData } from '@/models/common/image-data'
import { Default } from '@/decorators'


export interface iRawImageContainerList {
  Count?: number
  Images?: iImageData[]
}

export class RawImageContainerList implements iRawImageContainerList {
  @Expose()
  @IsOptional()
  @IsInt()
  Count?: number

  @Expose()
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImageData)
  @Default([])
  Images?: ImageData[]
}
