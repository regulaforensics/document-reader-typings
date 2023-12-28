import { IsDefined, IsEnum, IsIn, IsInt, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { Light, ResultType } from '@/consts'
import { Default } from '@/decorators'
import { ContainerAbstract } from '../../container.abstract'
import { AuthenticityCheckList, IAuthenticityCheckList } from './children'


export interface IAuthenticityCheckListContainer extends ContainerAbstract {
  AuthenticityCheckList: IAuthenticityCheckList
}

export class AuthenticityCheckListContainer extends ContainerAbstract implements IAuthenticityCheckListContainer {
  /**
  * Lighting scheme code for the given result (used only for images)
  * @type {Light}
  */
  @Expose()
  @IsDefined()
  @IsEnum(Light)
  @Default(Light.OFF)
  light: Light

  /** @internal */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(0)
  list_idx: number

  /**
  * Page index (when working with multi-page document)
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(0)
  page_idx: number

  /** @internal */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(0)
  buf_length: number

  /**
  * Result type stored in this container (one of ResultType identifiers)
  * @type {ResultType.AUTHENTICITY | ResultType.FINGER_PRINT_COMPARISON | ResultType.PORTRAIT_COMPARISON}
  */
  @Expose()
  @IsDefined()
  @IsEnum(ResultType)
  @IsIn([
    ResultType.AUTHENTICITY,
    ResultType.FINGER_PRINT_COMPARISON,
    ResultType.PORTRAIT_COMPARISON
  ])
  result_type:
    ResultType.AUTHENTICITY |
    ResultType.FINGER_PRINT_COMPARISON |
    ResultType.PORTRAIT_COMPARISON

  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => AuthenticityCheckList)
  AuthenticityCheckList: AuthenticityCheckList

  /**
  * Create new instance of AuthenticityCheckListContainer from plain object
  *
  * @param {unknown} input - plain object
  * @returns {AuthenticityCheckListContainer}
  */
  static fromPlain = (input: unknown): AuthenticityCheckListContainer => plainToClass(AuthenticityCheckListContainer, input)

  /**
  * Check if the given instance is a valid AuthenticityCheckListContainer
  *
  * @param {AuthenticityCheckListContainer} instance - instance to check
  * @throws {DocReaderTypeError}
  * @returns {true | never}
  */
  static isValid = (instance: AuthenticityCheckListContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('AuthenticityContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
