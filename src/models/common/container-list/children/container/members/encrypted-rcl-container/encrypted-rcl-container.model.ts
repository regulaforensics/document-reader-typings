import { IsBase64, IsDefined, IsEnum, IsIn, IsString, validateSync } from 'class-validator'
import { EncryptedRCLItem } from '@regulaforensics/document-reader-webclient'
import { Expose, instanceToPlain, plainToClass } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eResultType } from '@/consts'
import { aContainer } from '../../container.abstract'
import { ProcessResponse } from '@/models'

/**
 * Result type of EncryptedRCLContainer
 */
export type tEncryptedRCLContainerResultType = eResultType.ENCRYPTED_RCL

/**
 * Result type of EncryptedRCLContainer
 * @type {tEncryptedRCLContainerResultType[]}
 */
export const EncryptedRCLContainerResultTypes: tEncryptedRCLContainerResultType[] = [eResultType.ENCRYPTED_RCL]

/**
 * Container for EncryptedRCL base64 string
 */
export interface iEncryptedRCLContainer extends aContainer, EncryptedRCLItem {
  /**
   * EncryptedRCL base64 string
   * @type {string}
   */
  EncryptedRCL: string

  /**
   * Result type stored in this container
   * @type {tEncryptedRCLContainerResultType}
   */
  result_type: tEncryptedRCLContainerResultType
}

/**
 * Container for EncryptedRCL
 */
@Expose()
export class EncryptedRCLContainer extends aContainer implements iEncryptedRCLContainer {
  /**
   * EncryptedRCL base64 string
   * @type {string}
   */
  @IsDefined()
  @IsString()
  @IsBase64()
  EncryptedRCL: string

  /**
   * Result type stored in this container
   * @type {tEncryptedRCLContainerResultType}
   */
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn(EncryptedRCLContainerResultTypes)
  result_type: tEncryptedRCLContainerResultType

  /**
   * Creates an instance of EncryptedRCLContainer from plain
   *
   * @param {unknown} input - plain object
   * @returns {EncryptedRCLContainer}
   */
  static fromPlain = (input: unknown): EncryptedRCLContainer => plainToClass(EncryptedRCLContainer, input)

  /**
   * Get EncryptedRCLContainer from ProcessResponse
   * @param {ProcessResponse} input - ProcessResponse object
   * @param {boolean} asPlain - return as plain object
   * @returns {(EncryptedRCLContainer|iEncryptedRCLContainer)[]}
   */
  static fromProcessResponse(input: ProcessResponse, asPlain: true): iEncryptedRCLContainer[]
  static fromProcessResponse(input: ProcessResponse, asPlain?: false): EncryptedRCLContainer[]
  static fromProcessResponse(
    input: ProcessResponse,
    asPlain: boolean = false,
  ): (EncryptedRCLContainer | iEncryptedRCLContainer)[] {
    try {
      const { ContainerList } = input

      const result = ContainerList.List.filter((container): container is EncryptedRCLContainer =>
        EncryptedRCLContainerResultTypes.includes(<tEncryptedRCLContainerResultType>container.result_type),
      )

      if (asPlain) {
        return result.map(
          (container) => instanceToPlain(container, { exposeUnsetFields: false }) as iEncryptedRCLContainer,
        )
      }

      return result
    } catch (error) {
      return []
    }
  }

  /**
   * Check if the given instance of EncryptedRCLContainer is valid
   *
   * @param {EncryptedRCLContainer} instance - instance to check
   * @throws {DocReaderTypeError}
   * @returns {true | never}
   */
  static validate = (instance: EncryptedRCLContainer): true | never => {
    const errors = validateSync(EncryptedRCLContainer.fromPlain(instance))

    if (errors.length) {
      throw new DocReaderTypeError(
        'EncryptedRCLContainer validation error: the data received does not match model structure!',
        errors,
      )
    }

    return true
  }
}
