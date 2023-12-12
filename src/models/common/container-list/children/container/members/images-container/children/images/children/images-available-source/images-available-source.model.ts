import { IsDefined, IsEnum, IsNumber, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'

import { Source } from '~src/distinct/consts'


export interface IImagesAvailableSource {
  containerType?: number
  source: Source
}

export class ImagesAvailableSource implements IImagesAvailableSource {
  @Expose()
  @IsOptional()
  @IsNumber()
  containerType?: number

  @Expose()
  @IsDefined()
  @IsEnum(Source)
  source: Source
}
