import { IsDefined, IsInt, IsOptional, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from 'errors'
import { ContainerAbstract } from '../../container.abstract'
import { Images, IImages } from './children'


export interface IImagesContainer extends ContainerAbstract {
  Images: IImages
}

export class ImagesContainer extends ContainerAbstract implements IImagesContainer {
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
  @Type(() => Images)
  Images: Images

  static fromPlain = (input: unknown) => plainToClass(ImagesContainer, input)

  static isValid = (instance: ImagesContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('ImagesContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
