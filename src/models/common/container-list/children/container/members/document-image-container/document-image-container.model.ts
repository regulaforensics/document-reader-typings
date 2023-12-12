import { IsDefined, IsInt, IsOptional, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from 'errors'
import { ImageData } from 'models/common/image-data'
import { ContainerAbstract } from '../../container.abstract'


export interface IDocumentImageContainer extends ContainerAbstract {
  RawImageContainer: ImageData
}

export class DocumentImageContainer extends ContainerAbstract implements IDocumentImageContainer {
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
  @Type(() => ImageData)
  RawImageContainer: ImageData

  static fromPlain = (input: unknown) => plainToClass(DocumentImageContainer, input)

  static isValid = (instance: DocumentImageContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('DocumentImageContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
