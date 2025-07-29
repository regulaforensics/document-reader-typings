import { IsDefined, IsEnum, IsIn, IsString, validateSync } from 'class-validator'
import { ByteArrayItem } from '@regulaforensics/document-reader-webclient'
import { Expose, instanceToPlain, plainToClass } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eResultType } from '@/consts'
import { aContainer } from '../../container.abstract'
import { ProcessResponse } from '@/models'

/**
 * Result type of ByteArrayContainer
 */
export type tByteArrayContainerResultType = eResultType.DTC_VC

/**
 * Result type of ByteArrayContainer
 * @type {tByteArrayContainerResultType[]}
 */
export const ByteArrayContainerResultTypes: tByteArrayContainerResultType[] = [eResultType.DTC_VC]

/**
 * Container for byte array
 */
export interface iByteArrayContainer extends aContainer, ByteArrayItem {
  /**
   * @type {string}
   */
  ByteArray: string

  /**
   * Result type stored in this container
   * @type {tByteArrayContainerResultType}
   */
  result_type: tByteArrayContainerResultType
}

/**
 * Container for byte array
 */
@Expose()
export class ByteArrayContainer extends aContainer implements iByteArrayContainer {
  /**
   * @type {string}
   */
  @IsDefined()
  @IsString()
  ByteArray: string

  /**
   * Result type stored in this container
   * @type {tByteArrayContainerResultType}
   */
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn(ByteArrayContainerResultTypes)
  result_type: tByteArrayContainerResultType

  /**
   * Creates an instance of ByteArrayContainer from plain object
   *
   * @param {unknown} input - plain object
   * @returns {ByteArrayContainer}
   */
  static fromPlain = (input: unknown): ByteArrayContainer => plainToClass(ByteArrayContainer, input)

  /**
   * Get ByteArrayContainer from ProcessResponse
   * @param {ProcessResponse} input - ProcessResponse object
   * @param {boolean} asPlain - return as plain object
   * @returns {(ByteArrayContainer|iByteArrayContainer)[]}
   */
  static fromProcessResponse(input: ProcessResponse, asPlain: true): iByteArrayContainer[]
  static fromProcessResponse(input: ProcessResponse, asPlain?: false): ByteArrayContainer[]
  static fromProcessResponse(
    input: ProcessResponse,
    asPlain: boolean = false,
  ): (ByteArrayContainer | iByteArrayContainer)[] {
    try {
      const { ContainerList } = input

      const result = ContainerList.List.filter((container): container is ByteArrayContainer =>
        ByteArrayContainerResultTypes.includes(<tByteArrayContainerResultType>container.result_type),
      )

      if (asPlain) {
        return result.map(
          (container) => instanceToPlain(container, { exposeUnsetFields: false }) as iByteArrayContainer,
        )
      }

      return result
    } catch (error) {
      return []
    }
  }

  /**
   * Check if the given instance of ByteArrayContainer is valid
   *
   * @param {ByteArrayContainer} instance - instance of ByteArrayContainer to be checked
   * @throws {DocReaderTypeError} - if the given instance of ByteArrayContainer is not valid
   * @returns {true | never} - true if the given instance of ByteArrayContainer is valid
   */
  static validate = (instance: ByteArrayContainer): true | never => {
    const errors = validateSync(ByteArrayContainer.fromPlain(instance))

    if (errors.length) {
      throw new DocReaderTypeError(
        'ByteArrayContainer validation error: the data received does not match model structure!',
        errors,
      )
    }

    return true
  }
}
