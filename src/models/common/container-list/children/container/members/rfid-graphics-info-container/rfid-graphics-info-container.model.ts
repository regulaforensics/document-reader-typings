import { IsDefined, IsEnum, IsIn, ValidateNested, validateSync } from 'class-validator'
import { TOriginalRFIDGraphicsInfoItem } from '@regulaforensics/document-reader-webclient'
import { Expose, instanceToPlain, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eResultType } from '@/consts'
import { aContainer } from '../../container.abstract'
import { ProcessResponse } from '@/models'
import { TOriginalRFIDGraphicsInfo } from './children'

/**
 * Result type of RFIDGraphicsInfoContainer
 */
export type tRFIDGraphicsInfoContainerResultType = eResultType.RFID_ORIGINAL_GRAPHICS

/**
 * Result type of RFIDGraphicsInfoContainer
 * @type {tRFIDGraphicsInfoContainerResultType[]}
 */
export const RFIDGraphicsInfoContainerResultTypes: tRFIDGraphicsInfoContainerResultType[] = [
  eResultType.RFID_ORIGINAL_GRAPHICS,
]

/**
 * Container for RFID graphics info
 */
export interface iRFIDGraphicsInfoContainer extends aContainer, TOriginalRFIDGraphicsInfoItem {
  /**
   * @type {TOriginalRFIDGraphicsInfo}
   */
  TOriginalRFIDGraphicsInfo: TOriginalRFIDGraphicsInfo

  /**
   * Result type stored in this container
   * @type {tRFIDGraphicsInfoContainerResultType}
   */
  result_type: tRFIDGraphicsInfoContainerResultType
}

/**
 * Container for RFID graphics info
 */
@Expose()
export class RFIDGraphicsInfoContainer extends aContainer implements iRFIDGraphicsInfoContainer {
  /**
   * @type {TOriginalRFIDGraphicsInfo}
   */
  @IsDefined()
  @ValidateNested()
  @Type(() => TOriginalRFIDGraphicsInfo)
  TOriginalRFIDGraphicsInfo: TOriginalRFIDGraphicsInfo

  /**
   * Result type stored in this container
   * @type {tRFIDGraphicsInfoContainerResultType}
   */
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn(RFIDGraphicsInfoContainerResultTypes)
  result_type: tRFIDGraphicsInfoContainerResultType

  /**
   * Creates an instance of RFIDGraphicsInfoContainer from plain object
   *
   * @param {unknown} input - plain object
   * @returns {RFIDGraphicsInfoContainer}
   */
  static fromPlain = (input: unknown): RFIDGraphicsInfoContainer => plainToClass(RFIDGraphicsInfoContainer, input)

  /**
   * Get RFIDGraphicsInfoContainer from ProcessResponse
   * @param {ProcessResponse} input - ProcessResponse object
   * @param {boolean} asPlain - return as plain object
   * @returns {(RFIDGraphicsInfoContainer|iRFIDGraphicsInfoContainer)[]}
   */
  static fromProcessResponse(input: ProcessResponse, asPlain: true): iRFIDGraphicsInfoContainer[]
  static fromProcessResponse(input: ProcessResponse, asPlain?: false): RFIDGraphicsInfoContainer[]
  static fromProcessResponse(
    input: ProcessResponse,
    asPlain: boolean = false,
  ): (RFIDGraphicsInfoContainer | iRFIDGraphicsInfoContainer)[] {
    try {
      const { ContainerList } = input

      const result = ContainerList.List.filter((container): container is RFIDGraphicsInfoContainer =>
        RFIDGraphicsInfoContainerResultTypes.includes(<tRFIDGraphicsInfoContainerResultType>container.result_type),
      )

      if (asPlain) {
        return result.map(
          (container) => instanceToPlain(container, { exposeUnsetFields: false }) as iRFIDGraphicsInfoContainer,
        )
      }

      return result
    } catch (error) {
      return []
    }
  }

  /**
   * Check if the given instance of RFIDGraphicsInfoContainer is valid
   *
   * @param {RFIDGraphicsInfoContainer} instance - instance of RFIDGraphicsInfoContainer to be checked
   * @throws {DocReaderTypeError} - if the given instance of RFIDGraphicsInfoContainer is not valid
   * @returns {true | never} - true if the given instance of RFIDGraphicsInfoContainer is valid
   */
  static validate = (instance: RFIDGraphicsInfoContainer): true | never => {
    const errors = validateSync(RFIDGraphicsInfoContainer.fromPlain(instance))

    if (errors.length) {
      throw new DocReaderTypeError(
        'RFIDGraphicsInfoContainer validation error: the data received does not match model structure!',
        errors,
      )
    }

    return true
  }
}
