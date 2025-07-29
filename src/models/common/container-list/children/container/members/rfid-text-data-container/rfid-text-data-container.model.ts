import { IsDefined, IsEnum, IsIn, ValidateNested, validateSync } from 'class-validator'
import { RFIDDocVisualExtendedInfoItem } from '@regulaforensics/document-reader-webclient'
import { Expose, instanceToPlain, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eResultType } from '@/consts'
import { aContainer } from '../../container.abstract'
import { ProcessResponse } from '@/models'
import { RFIDDocVisualExtendedInfo, iRFIDDocVisualExtendedInfo } from './children'

/**
 * Result type of RFIDTextDataContainer
 */
export type tRFIDTextDataContainerResultType = eResultType.RFID_TEXT

/**
 * Result type of RFIDTextDataContainer
 * @type {tRFIDTextDataContainerResultType[]}
 */
export const RFIDTextDataContainerResultTypes: tRFIDTextDataContainerResultType[] = [eResultType.RFID_TEXT]

/**
 * Container for RFID text data
 */
export interface iRFIDTextDataContainer extends aContainer, RFIDDocVisualExtendedInfoItem {
  /**
   * @type {iRFIDDocVisualExtendedInfo}
   */
  DocVisualExtendedInfo: iRFIDDocVisualExtendedInfo

  /**
   * Result type stored in this container
   * @type {tRFIDTextDataContainerResultType}
   */
  result_type: tRFIDTextDataContainerResultType
}

/**
 * Container for RFID text data
 */
@Expose()
export class RFIDTextDataContainer extends aContainer implements iRFIDTextDataContainer {
  /**
   * @type {RFIDDocVisualExtendedInfo}
   */
  @IsDefined()
  @ValidateNested()
  @Type(() => RFIDDocVisualExtendedInfo)
  DocVisualExtendedInfo: RFIDDocVisualExtendedInfo

  /**
   * Result type stored in this container
   * @type {tRFIDTextDataContainerResultType}
   */
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn(RFIDTextDataContainerResultTypes)
  result_type: tRFIDTextDataContainerResultType

  /**
   * Creates an instance of RFIDTextDataContainer from plain object
   *
   * @param {unknown} input - plain object
   * @returns {RFIDTextDataContainer}
   */
  static fromPlain = (input: unknown): RFIDTextDataContainer => plainToClass(RFIDTextDataContainer, input)

  /**
   * Get RFIDTextDataContainer from ProcessResponse
   * @param {ProcessResponse} input - ProcessResponse object
   * @param {boolean} asPlain - return as plain object
   * @returns {(RFIDTextDataContainer|iRFIDTextDataContainer)[]}
   */
  static fromProcessResponse(input: ProcessResponse, asPlain: true): iRFIDTextDataContainer[]
  static fromProcessResponse(input: ProcessResponse, asPlain?: false): RFIDTextDataContainer[]
  static fromProcessResponse(
    input: ProcessResponse,
    asPlain: boolean = false,
  ): (RFIDTextDataContainer | iRFIDTextDataContainer)[] {
    try {
      const { ContainerList } = input

      const result = ContainerList.List.filter((container): container is RFIDTextDataContainer =>
        RFIDTextDataContainerResultTypes.includes(<tRFIDTextDataContainerResultType>container.result_type),
      )

      if (asPlain) {
        return result.map(
          (container) => instanceToPlain(container, { exposeUnsetFields: false }) as iRFIDTextDataContainer,
        )
      }

      return result
    } catch (error) {
      return []
    }
  }

  /**
   * Check if the given instance of RFIDTextDataContainer is valid
   *
   * @param {RFIDTextDataContainer} instance - instance of RFIDTextDataContainer to be checked
   * @throws {DocReaderTypeError} - if the given instance of RFIDTextDataContainer is not valid
   * @returns {true | never} - true if the given instance of RFIDTextDataContainer is valid
   */
  static validate = (instance: RFIDTextDataContainer): true | never => {
    const errors = validateSync(RFIDTextDataContainer.fromPlain(instance))

    if (errors.length) {
      throw new DocReaderTypeError(
        'RFIDTextDataContainer validation error: the data received does not match model structure!',
        errors,
      )
    }

    return true
  }
}
