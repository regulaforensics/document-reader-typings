import { IsDefined, IsEnum, IsIn, IsInt, ValidateNested, validateSync } from 'class-validator'
import { Expose, instanceToPlain, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eLights, eResultType } from '@/consts'
import { Default } from '@/decorators'
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
export const StatusContainerResultTypes: tStatusContainerResultType[] = [
  eResultType.STATUS,
]

/**
* Container for iStatus
*/
export interface iStatusContainer extends aContainer {
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
export class StatusContainer extends aContainer implements iStatusContainer {
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
  * @type {number}
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
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(0)
  buf_length: number

  /**
  * Result type stored in this container
  * @type {tStatusContainerResultType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn(StatusContainerResultTypes)
  result_type: tStatusContainerResultType

  /**
  * Status of the document check.
  * @type {Status}
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => Status)
  Status: Status

  /**
  * Transform plain object to StatusContainer instance.
  * @param {unknown} input - plain object
  * @returns {StatusContainer}
  */
  static fromPlain = (input: unknown): StatusContainer => plainToClass(StatusContainer, input, { strategy: 'excludeAll' })

  /**
  * Get array of StatusContainer from ProcessResponse
  * @param {ProcessResponse} input - instance of ProcessResponse
  * @param {boolean} asPlain - flag to return plain object instead of class instance
  * @returns {(StatusContainer | iStatusContainer)[]}
  */
  static fromProcessResponse(input: ProcessResponse, asPlain: false): StatusContainer[];
  static fromProcessResponse(input: ProcessResponse, asPlain: true): iStatusContainer[];
  static fromProcessResponse(input: ProcessResponse, asPlain: boolean = false): (StatusContainer|iStatusContainer)[] {
    const { ContainerList } = input

    const result = ContainerList.List.filter((container): container is StatusContainer =>
      StatusContainerResultTypes.includes(<tStatusContainerResultType>container.result_type)
    )

    if (asPlain) {
      return result.map((container) => instanceToPlain(container) as iStatusContainer)
    }

    return result
  }

  /**
  * Validate instance of StatusContainer for conformance with the schema.
  * @param {StatusContainer} instance - instance of StatusContainer
  * @throws {DocReaderTypeError}
  * @returns {true} if object satisfies StatusContainer schema
  */
  static validate = (instance: StatusContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('StatusContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
