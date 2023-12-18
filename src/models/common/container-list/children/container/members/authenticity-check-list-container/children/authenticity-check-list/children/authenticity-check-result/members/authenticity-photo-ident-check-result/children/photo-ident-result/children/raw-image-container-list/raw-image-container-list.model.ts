import { IsArray, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { ImageData } from 'models/common/image-data'


export interface IRawImageContainerList {
  Count?: number
  Images?: ImageData[]
}

export class RawImageContainerList implements IRawImageContainerList {
  @Expose()
  @IsOptional()
  @IsInt()
  Count?: number

  @Expose()
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImageData)
  Images?: ImageData[]
}
