import { IsDefined, IsEnum, IsIn, ValidateNested, validateSync } from 'class-validator'
import { AuthenticityCheckListItem } from '@regulaforensics/document-reader-webclient'
import { instanceToPlain, plainToClass, Type, Expose } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eResultType } from '@/consts'
import { aContainer } from '../../container.abstract'
import { ProcessResponse, AuthenticityCheckList } from '@/models'

/**
 * Result type of AuthenticityCheckListContainer
 */
export type tAuthenticityCheckListContainerResultType =
  | eResultType.AUTHENTICITY
  | eResultType.FINGERPRINT_COMPARISON
  | eResultType.PORTRAIT_COMPARISON

/**
 * Result type of AuthenticityCheckListContainer
 * @type {tAuthenticityCheckListContainerResultType[]}
 */
export const AuthenticityCheckListContainerResultTypes: tAuthenticityCheckListContainerResultType[] = [
  eResultType.AUTHENTICITY,
  eResultType.FINGERPRINT_COMPARISON,
  eResultType.PORTRAIT_COMPARISON,
]

/**
 * Container for iAuthenticityCheckList
 */
export interface iAuthenticityCheckListContainer extends aContainer, AuthenticityCheckListItem {
  result_type: tAuthenticityCheckListContainerResultType
}

/**
 * Container for iAuthenticityCheckList
 */
@Expose()
export class AuthenticityCheckListContainer extends aContainer implements iAuthenticityCheckListContainer {
  /**
   * Structure serves for storing the result of document authenticity check using the images for different lighting
   * schemes and passing it to the user application.
   * @type {AuthenticityCheckList}
   */
  @IsDefined()
  @ValidateNested()
  @Type(() => AuthenticityCheckList)
  AuthenticityCheckList: AuthenticityCheckList

  /**
   * Result type stored in this container
   * @type {tAuthenticityCheckListContainerResultType}
   */
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn(AuthenticityCheckListContainerResultTypes)
  result_type: tAuthenticityCheckListContainerResultType

  /**
   * Create new instance of AuthenticityCheckListContainer from plain object
   *
   * @param {unknown} input - plain object
   * @returns {AuthenticityCheckListContainer}
   */
  static fromPlain = (input: unknown): AuthenticityCheckListContainer =>
    plainToClass(AuthenticityCheckListContainer, input)

  /**
   * Get list of AuthenticityCheckListContainer from ProcessResponse
   * @param {ProcessResponse} input - ProcessResponse with containers
   * @param {boolean} asPlain - return as plain object
   * @returns {(AuthenticityCheckListContainer|iAuthenticityCheckListContainer)[]}
   */
  static fromProcessResponse(input: ProcessResponse, asPlain: true): iAuthenticityCheckListContainer[]
  static fromProcessResponse(input: ProcessResponse, asPlain?: false): AuthenticityCheckListContainer[]
  static fromProcessResponse(
    input: ProcessResponse,
    asPlain: boolean = false,
  ): (AuthenticityCheckListContainer | iAuthenticityCheckListContainer)[] {
    try {
      const { ContainerList } = input

      if (!ContainerList) {
        return []
      }

      const result = ContainerList.List.filter((container): container is AuthenticityCheckListContainer =>
        AuthenticityCheckListContainerResultTypes.includes(
          <tAuthenticityCheckListContainerResultType>container.result_type,
        ),
      )

      if (asPlain) {
        return result.map(
          (container) => instanceToPlain(container, { exposeUnsetFields: false }) as iAuthenticityCheckListContainer,
        )
      }

      return result
    } catch (err) {
      return []
    }
  }

  /**
   * Check if the given instance is a valid AuthenticityCheckListContainer
   *
   * @param {AuthenticityCheckListContainer} instance - instance to check
   * @throws {DocReaderTypeError}
   * @returns {true | never}
   */
  static validate = (instance: AuthenticityCheckListContainer): true | never => {
    const errors = validateSync(AuthenticityCheckListContainer.fromPlain(instance))

    if (errors.length) {
      throw new DocReaderTypeError(
        'AuthenticityContainer validation error: the data received does not match model structure!',
        errors,
      )
    }

    return true
  }
}
