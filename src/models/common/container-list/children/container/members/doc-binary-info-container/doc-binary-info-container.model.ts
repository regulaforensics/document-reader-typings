import { IsDefined, IsEnum, IsIn, IsInt, ValidateNested, validateSync } from 'class-validator'
import { Expose, instanceToPlain, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eLights, eResultType } from '@/consts'
import { Default } from '@/decorators'
import { ProcessResponse } from '@/models'
import { aContainer } from '../../container.abstract'
import { DocBinaryInfo, iDocBinaryInfo } from './children'


/**
* Result type of DocBinaryInfoContainer
*/
export type tDocBinaryInfoContainerResultType = eResultType.RFID_BINARY_DATA

/**
* Result type of DocBinaryInfoContainer
* @type {tDocBinaryInfoContainerResultType[]}
*/
export const DocBinaryInfoContainerResultTypes: tDocBinaryInfoContainerResultType[] = [
  eResultType.RFID_BINARY_DATA,
]

/**
* Container for iDocBinaryInfo
*/
export interface iDocBinaryInfoContainer extends aContainer {
  /**
  * Structure is used to store the data reading results from the RFID-chip in
  * a form of a list of the logically separated data groups.
  * @type {iDocBinaryInfo}
  */
  TDocBinaryInfo: iDocBinaryInfo

  /**
  * Result type stored in this container
  * @type {tDocBinaryInfoContainerResultType}
  */
  result_type: tDocBinaryInfoContainerResultType
}

/**
* Container for DocBarCodeInfo
*/
export class DocBinaryInfoContainer extends aContainer implements iDocBinaryInfoContainer {
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
  * @type {tDocBinaryInfoContainerResultType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn(DocBinaryInfoContainerResultTypes)
  result_type: tDocBinaryInfoContainerResultType

  /**
  * Structure is used to store the data reading results from the RFID-chip in
  * a form of a list of the logically separated data groups.
  * @type {DocBinaryInfo}
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => DocBinaryInfo)
  TDocBinaryInfo: DocBinaryInfo

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
  static fromProcessResponse(input: ProcessResponse, asPlain: true): iDocBinaryInfoContainer[];
  static fromProcessResponse(input: ProcessResponse, asPlain: false): DocBinaryInfoContainer[];
  static fromProcessResponse(input: ProcessResponse, asPlain: boolean = false): (iDocBinaryInfoContainer | DocBinaryInfoContainer)[] {
    const { ContainerList } = input

    if (!ContainerList) {
      return []
    }

    const result = ContainerList.List.filter((container): container is DocBinaryInfoContainer =>
      DocBinaryInfoContainerResultTypes.includes(<tDocBinaryInfoContainerResultType>container.result_type)
    )

    return asPlain
      ? result.map((container) => instanceToPlain(container) as iDocBinaryInfoContainer)
      : result
  }

  /**
  * Check if the given instance is a valid DocBinaryInfoContainer
  *
  * @param {DocBinaryInfoContainer} instance - instance to check
  * @throws {DocReaderTypeError}
  * @returns {true | never}
  */
  static validate = (instance: DocBinaryInfoContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('DocBinaryInfoContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
