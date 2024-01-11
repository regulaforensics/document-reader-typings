import { IsDefined, IsEnum, IsIn, IsInt, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eLights, eResultType } from '@/consts'
import { Default } from '@/decorators'
import { aContainer } from '../../container.abstract'
import { AuthenticityCheckList, iAuthenticityCheckList } from './children'


/**
* Result type of AuthenticityCheckListContainer
*/
export type tAuthenticityCheckListContainerResultType =
  eResultType.AUTHENTICITY |
  eResultType.FINGER_PRINT_COMPARISON |
  eResultType.PORTRAIT_COMPARISON

/**
* Container for iAuthenticityCheckList
*/
export interface iAuthenticityCheckListContainer extends aContainer {
  /**
  * Structure serves for storing the result of document authenticity check using the images for different lighting
  * schemes and passing it to the user application.
  * @type {iAuthenticityCheckList}
  */
  AuthenticityCheckList: iAuthenticityCheckList

  /**
  * Result type stored in this container
  * @type {tAuthenticityCheckListContainerResultType}
  */
  result_type: tAuthenticityCheckListContainerResultType
}

/**
* Container for iAuthenticityCheckList
*/
export class AuthenticityCheckListContainer extends aContainer implements iAuthenticityCheckListContainer {
  /**
  * Lighting scheme code for the given result (used only for images)
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(eLights.OFF)
  light: number

  /**
  * @internal
  */
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

  /**
  * @internal
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(0)
  buf_length: number

  /**
  * Result type stored in this container
  * @type {tAuthenticityCheckListContainerResultType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn([
    eResultType.AUTHENTICITY,
    eResultType.FINGER_PRINT_COMPARISON,
    eResultType.PORTRAIT_COMPARISON
  ])
  result_type: tAuthenticityCheckListContainerResultType

  /**
  * Structure serves for storing the result of document authenticity check using the images for different lighting
  * schemes and passing it to the user application.
  * @type {AuthenticityCheckList}
  */
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
  static validate = (instance: AuthenticityCheckListContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('AuthenticityContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
