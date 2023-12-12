import { IsInt, IsOptional, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from 'errors'
import { ContainerAbstract } from '../../container.abstract'
import { DocBarCodeInfoFieldsList, IDocBarCodeInfoFieldsList } from './children'


export interface IDocBarCodeInfoContainer extends ContainerAbstract {
  DocBarCodeInfo?: IDocBarCodeInfoFieldsList
}

export class DocBarCodeInfoContainer extends ContainerAbstract implements IDocBarCodeInfoContainer {
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
  @IsOptional()
  @ValidateNested()
  @Type(() => DocBarCodeInfoFieldsList)
  DocBarCodeInfo?: DocBarCodeInfoFieldsList

  static fromPlain = (input: unknown) => plainToClass(DocBarCodeInfoContainer, input)

  static isValid = (instance: DocBarCodeInfoContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('DocBarCodeInfoContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
