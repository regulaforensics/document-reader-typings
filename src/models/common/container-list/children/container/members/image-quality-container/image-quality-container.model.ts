import { IsDefined, IsInt, IsOptional, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '~src/errors'
import { ContainerAbstract } from '../../container.abstract'
import { ImageQualityCheckList, IImageQualityCheckList } from './children'


export interface IImageQualityContainer extends ContainerAbstract {
  ImageQualityCheckList: IImageQualityCheckList
}

export class ImageQualityContainer extends ContainerAbstract implements IImageQualityContainer {
  @Expose()
  @IsOptional()
  @IsInt()
  buf_length?: number

  @Expose()
  @IsOptional()
  @IsInt()
  light?: number

  @Expose()
  @IsOptional()
  @IsInt()
  list_idx?: number

  @Expose()
  @IsOptional()
  @IsInt()
  page_idx?: number

  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => ImageQualityCheckList)
  ImageQualityCheckList: ImageQualityCheckList

  static fromPlain = (input: unknown) => plainToClass(ImageQualityContainer, input)

  static isValid = (instance: ImageQualityContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('ImageQualityContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
