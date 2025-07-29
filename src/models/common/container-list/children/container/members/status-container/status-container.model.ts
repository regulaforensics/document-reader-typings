import { IsDefined, IsEnum, IsIn, ValidateNested, validateSync } from 'class-validator'
import { StatusItem } from '@regulaforensics/document-reader-webclient'
import { Expose, instanceToPlain, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eResultType } from '@/consts'
import { aContainer } from '../../container.abstract'
import { iStatus, Status } from './children'
import { ProcessResponse } from '@/models'

/**
 * Result type of StatusContainer
 */
export type tStatusContainerResultType = eResultType.STATUS

/**
 * Result type of StatusContainer
 * @type {tStatusContainerResultType[]}
 */
export const StatusContainerResultTypes: tStatusContainerResultType[] = [eResultType.STATUS]

/**
 * Container for iStatus
 */
export interface iStatusContainer extends aContainer, StatusItem {
  /**
   * Status of the document check.
   * @type {iStatus}
   */
  Status: iStatus

  /**
   * Result type stored in this container
   * @type {tStatusContainerResultType}
   */
  result_type: tStatusContainerResultType
}

/**
 * Container for Status
 */
@Expose()
export class StatusContainer extends aContainer implements iStatusContainer {
  /**
   * Status of the document check.
   * @type {Status}
   */
  @IsDefined()
  @ValidateNested()
  @Type(() => Status)
  Status: Status

  /**
   * Result type stored in this container
   * @type {tStatusContainerResultType}
   */
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn(StatusContainerResultTypes)
  result_type: tStatusContainerResultType

  /**
   * Transform plain object to StatusContainer instance.
   * @param {unknown} input - plain object
   * @returns {StatusContainer}
   */
  static fromPlain = (input: unknown): StatusContainer =>
    plainToClass(StatusContainer, input, { exposeUnsetFields: false })

  /**
   * Get array of StatusContainer from ProcessResponse
   * @param {ProcessResponse} input - instance of ProcessResponse
   * @param {boolean} asPlain - flag to return plain object instead of class instance
   * @returns {(StatusContainer | iStatusContainer)[]}
   */
  static fromProcessResponse(input: ProcessResponse, asPlain: true): iStatusContainer[]
  static fromProcessResponse(input: ProcessResponse, asPlain?: false): StatusContainer[]
  static fromProcessResponse(input: ProcessResponse, asPlain: boolean = false): (StatusContainer | iStatusContainer)[] {
    try {
      const { ContainerList } = input

      const result = ContainerList.List.filter((container): container is StatusContainer =>
        StatusContainerResultTypes.includes(<tStatusContainerResultType>container.result_type),
      )

      if (asPlain) {
        return result.map((container) => instanceToPlain(container, { exposeUnsetFields: false }) as iStatusContainer)
      }

      return result
    } catch (error) {
      return []
    }
  }

  /**
   * Validate instance of StatusContainer for conformance with the schema.
   * @param {StatusContainer} instance - instance of StatusContainer
   * @throws {DocReaderTypeError}
   * @returns {true} if object satisfies StatusContainer schema
   */
  static validate = (instance: StatusContainer): true | never => {
    const errors = validateSync(StatusContainer.fromPlain(instance))

    if (errors.length) {
      throw new DocReaderTypeError(
        'StatusContainer validation error: the data received does not match model structure!',
        errors,
      )
    }

    return true
  }
}
