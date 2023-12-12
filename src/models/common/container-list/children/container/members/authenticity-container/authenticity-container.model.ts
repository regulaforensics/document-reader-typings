import { IsDefined, IsInt, IsOptional, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '~src/distinct/errors'
import { ContainerAbstract } from '../../container.abstract'
import { AuthenticityCheckList, IAuthenticityCheckList } from './children'


export interface IAuthenticityContainer extends ContainerAbstract {
  AuthenticityCheckList: IAuthenticityCheckList
}

export class AuthenticityContainer extends ContainerAbstract implements IAuthenticityContainer {
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
  @Type(() => AuthenticityCheckList)
  AuthenticityCheckList: AuthenticityCheckList

  static fromPlain = (input: unknown) => plainToClass(AuthenticityContainer, input)

  static isValid = (instance: AuthenticityContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('AuthenticityContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
