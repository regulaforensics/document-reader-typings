import { IsDefined, IsInt, IsOptional, IsString, validateSync } from 'class-validator'
import { Expose, plainToClass } from 'class-transformer'

import { DocReaderTypeError } from 'errors'
import { ContainerAbstract } from '../../container.abstract'


export interface IEncryptedRCLContainer extends ContainerAbstract {
  EncryptedRCL: string
}

export class EncryptedRCLContainer extends ContainerAbstract implements IEncryptedRCLContainer {
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
  @IsString()
  EncryptedRCL: string

  static fromPlain = (input: unknown) => plainToClass(EncryptedRCLContainer, input)

  static isValid = (instance: EncryptedRCLContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('EncryptedRCLContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
