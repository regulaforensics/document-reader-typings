import { IsDefined, IsInt, IsOptional, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from 'errors'
import { ContainerAbstract } from '../../container.abstract'
import { Status, IStatus } from './children'


export interface IStatusContainer extends ContainerAbstract {
  Status: IStatus
}

export class StatusContainer extends ContainerAbstract implements IStatusContainer {
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
  @Type(() => Status)
  Status: Status

  static fromPlain = (input: unknown) => plainToClass(StatusContainer, input)

  static isValid = (instance: StatusContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('StatusContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
