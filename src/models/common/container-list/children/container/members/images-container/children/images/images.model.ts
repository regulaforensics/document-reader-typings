import { IsDefined, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { IImagesAvailableSource, IImagesField, ImagesAvailableSource, ImagesField } from './children'


export interface IImages {
  availableSourceList: IImagesAvailableSource[]
  fieldList: IImagesField[]
}

export class Images implements IImages {
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => ImagesAvailableSource)
  availableSourceList: ImagesAvailableSource[]

  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => ImagesField)
  fieldList: ImagesField[]
}
