import { IsDefined, IsEnum, IsIn, IsInt, IsOptional, ValidateNested, validateSync } from 'class-validator'
import { instanceToPlain, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eLights, eResultType } from '@/consts'
import { Default } from '@/decorators'
import { ProcessResponse } from '@/models'
import { aContainer } from '../../container.abstract'
import { DocBarCodeInfo, iDocBarCodeInfo } from './children'


/**
* Result type of DocBarCodeInfoContainer
*/
export type tDocBarCodeInfoContainerResultType = eResultType.BARCODES

/**
* Result type of DocBarCodeInfoContainer
* @type {tDocBarCodeInfoContainerResultType[]}
*/
export const DocBarCodeInfoContainerResultTypes: tDocBarCodeInfoContainerResultType[] = [
  eResultType.BARCODES,
]

/**
* Container for iDocBarCodeInfo
*/
export interface iDocBarCodeInfoContainer extends aContainer {
  /**
  * Structure serves for storing and passing to the user application of results of bar-codes areas search on the
  * scanned document page and their reading in binary non-formatted code.
  * @type {iDocBarCodeInfo|undefined}
  */
  DocBarCodeInfo: iDocBarCodeInfo

  /**
  * Result type stored in this container
  * @type {tDocBarCodeInfoContainerResultType}
  */
  result_type: tDocBarCodeInfoContainerResultType
}

/**
* Container for DocBarCodeInfo
*/
export class DocBarCodeInfoContainer extends aContainer implements iDocBarCodeInfoContainer {
  /**
  * Lighting scheme code for the given result (used only for images)
  * @type {number}
  */
  @IsDefined()
  @IsInt()
  @Default(eLights.OFF)
  light: number

  /**
  * @internal
  */
  @IsDefined()
  @IsInt()
  @Default(0)
  list_idx: number

  /**
  * Page index (when working with multi-page document)
  * @type {number}
  */
  @IsDefined()
  @IsInt()
  @Default(0)
  page_idx: number

  /**
  * @internal
  */
  @IsDefined()
  @IsInt()
  @Default(0)
  buf_length: number

  /**
  * Result type stored in this container
  * @type {tDocBarCodeInfoContainerResultType}
  */
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn(DocBarCodeInfoContainerResultTypes)
  result_type: tDocBarCodeInfoContainerResultType

  /**
  * Structure serves for storing and passing to the user application of results of bar-codes areas search on the
  * scanned document page and their reading in binary non-formatted code.
  * @type {DocBarCodeInfo|undefined}
  */
  @IsDefined()
  @ValidateNested()
  @Type(() => DocBarCodeInfo)
  DocBarCodeInfo: DocBarCodeInfo

  /**
  * Creates an instance of DocBarCodeInfoContainer from plain object
  *
  * @param {unknown} input - plain object
  * @returns {DocBarCodeInfoContainer}
  */
  static fromPlain = (input: unknown): DocBarCodeInfoContainer => plainToClass(DocBarCodeInfoContainer, input)

  /**
  * Get DocBarCodeInfoContainer from ProcessResponse
  * @param {ProcessResponse} input - ProcessResponse object
  * @param {boolean} asPlain - return with plain object
  * @returns {(iDocBarCodeInfoContainer | DocBarCodeInfoContainer)[]}
  */
  static fromProcessResponse (input: ProcessResponse, asPlain: true): iDocBarCodeInfoContainer[];
  static fromProcessResponse (input: ProcessResponse, asPlain?: false): DocBarCodeInfoContainer[];
  static fromProcessResponse (input: ProcessResponse, asPlain: boolean = false): (iDocBarCodeInfoContainer | DocBarCodeInfoContainer)[] {
    if (!ProcessResponse.isValid(input)) {
      return []
    }

    const { ContainerList } = input

    if (!ContainerList) {
      return []
    }

    const result =  ContainerList.List.filter((container): container is DocBarCodeInfoContainer =>
      DocBarCodeInfoContainerResultTypes.includes(<tDocBarCodeInfoContainerResultType>container.result_type)
    )

    if (asPlain) {
      return result.map((item) => instanceToPlain(item, { exposeUnsetFields: false }) as iDocBarCodeInfoContainer)
    }

    return result
  }

  /**
  * Check if the given instance is a valid DocBarCodeInfoContainer
  *
  * @param {DocBarCodeInfoContainer} instance - instance to check
  * @throws {DocReaderTypeError}
  * @returns {true | never}
  */
  static validate = (instance: DocBarCodeInfoContainer): true | never => {
    const errors = validateSync(DocBarCodeInfoContainer.fromPlain(instance))

    if (errors.length) {
      throw new DocReaderTypeError('DocBarCodeInfoContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
