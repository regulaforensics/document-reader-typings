import { IsDefined, IsEnum, IsIn, ValidateNested, validateSync } from 'class-validator'
import { TDocBinaryInfoItem } from '@regulaforensics/document-reader-webclient'
import { Expose, instanceToPlain, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eResultType } from '@/consts'
import { ProcessResponse, DocBinaryInfo } from '@/models'
import { aContainer } from '../../container.abstract'

/**
 * Result type of DocBinaryInfoContainer
 */
export type tDocBinaryInfoContainerResultType = eResultType.RFID_BINARY_DATA | eResultType.RFID_RAW_DATA

/**
 * Result type of DocBinaryInfoContainer
 * @type {tDocBinaryInfoContainerResultType[]}
 */
export const DocBinaryInfoContainerResultTypes: tDocBinaryInfoContainerResultType[] = [
  eResultType.RFID_BINARY_DATA,
  eResultType.RFID_RAW_DATA,
]

/**
 * Container for iDocBinaryInfo
 */
export interface iDocBinaryInfoContainer extends aContainer, TDocBinaryInfoItem {
  /**
   * Result type stored in this container
   * @type {tDocBinaryInfoContainerResultType}
   */
  result_type: tDocBinaryInfoContainerResultType
}

/**
 * Container for DocBarCodeInfo
 */
@Expose()
export class DocBinaryInfoContainer extends aContainer implements iDocBinaryInfoContainer {
  /**
   * Structure is used to store the data reading results from the RFID-chip in
   * a form of a list of the logically separated data groups.
   * @type {DocBinaryInfo}
   */
  @IsDefined()
  @ValidateNested()
  @Type(() => DocBinaryInfo)
  TDocBinaryInfo: DocBinaryInfo

  /**
   * Result type stored in this container
   * @type {tDocBinaryInfoContainerResultType}
   */
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn(DocBinaryInfoContainerResultTypes)
  result_type: tDocBinaryInfoContainerResultType

  /**
   * Creates an instance of DocBinaryInfoContainer from plain object
   *
   * @param {unknown} input - plain object
   * @returns {DocBinaryInfoContainer}
   */
  static fromPlain = (input: unknown): DocBinaryInfoContainer => plainToClass(DocBinaryInfoContainer, input)

  /**
   * Get DocBinaryInfoContainer from ProcessResponse
   * @param {ProcessResponse} input - ProcessResponse object
   * @param {boolean} asPlain - return as plain object
   * @returns {(iDocBinaryInfoContainer | DocBinaryInfoContainer)[]}
   */
  static fromProcessResponse(input: ProcessResponse, asPlain: true): iDocBinaryInfoContainer[]
  static fromProcessResponse(input: ProcessResponse, asPlain?: false): DocBinaryInfoContainer[]
  static fromProcessResponse(
    input: ProcessResponse,
    asPlain: boolean = false,
  ): (iDocBinaryInfoContainer | DocBinaryInfoContainer)[] {
    try {
      const { ContainerList } = input

      if (!ContainerList) {
        return []
      }

      const result = ContainerList.List.filter((container): container is DocBinaryInfoContainer =>
        DocBinaryInfoContainerResultTypes.includes(<tDocBinaryInfoContainerResultType>container.result_type),
      )

      return asPlain
        ? result.map((container) => instanceToPlain(container, { exposeUnsetFields: false }) as iDocBinaryInfoContainer)
        : result
    } catch (error) {
      return []
    }
  }

  /**
   * Check if the given instance is a valid DocBinaryInfoContainer
   *
   * @param {DocBinaryInfoContainer} instance - instance to check
   * @throws {DocReaderTypeError}
   * @returns {true | never}
   */
  static validate = (instance: DocBinaryInfoContainer): true | never => {
    const errors = validateSync(DocBinaryInfoContainer.fromPlain(instance))

    if (errors.length) {
      throw new DocReaderTypeError(
        'DocBinaryInfoContainer validation error: the data received does not match model structure!',
        errors,
      )
    }

    return true
  }
}
