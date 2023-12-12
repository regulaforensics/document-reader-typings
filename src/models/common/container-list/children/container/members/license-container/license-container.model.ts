import { IsDefined, IsInt, IsOptional, IsString, validateSync } from 'class-validator'
import { Expose, plainToClass } from 'class-transformer'

import { DocReaderTypeError } from 'errors'
import { ContainerAbstract } from '../../container.abstract'


export interface ILicenseContainer extends ContainerAbstract {
  License: string
}

export class LicenseContainer extends ContainerAbstract implements ILicenseContainer {
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
  License: string

  static fromPlain = (input: unknown) => plainToClass(LicenseContainer, input)

  static isValid = (instance: LicenseContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('LicenseContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
