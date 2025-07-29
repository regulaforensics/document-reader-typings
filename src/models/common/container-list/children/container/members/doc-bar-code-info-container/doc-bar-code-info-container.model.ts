import { IsDefined, IsEnum, IsIn, ValidateNested, validateSync } from 'class-validator'
import { DocBarCodeInfoItem } from '@regulaforensics/document-reader-webclient'
import { Expose, instanceToPlain, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eResultType } from '@/consts'
import { ProcessResponse, DocBarCodeInfo } from '@/models'
import { aContainer } from '../../container.abstract'

/**
 * Result type of DocBarCodeInfoContainer
 */
export type tDocBarCodeInfoContainerResultType = eResultType.BARCODES

/**
 * Result type of DocBarCodeInfoContainer
 * @type {tDocBarCodeInfoContainerResultType[]}
 */
export const DocBarCodeInfoContainerResultTypes: tDocBarCodeInfoContainerResultType[] = [eResultType.BARCODES]

/**
 * Container for DocBarCodeInfo
 */
export interface iDocBarCodeInfoContainer extends aContainer, DocBarCodeInfoItem {
  /**
   * Result type stored in this container
   * @type {tDocBarCodeInfoContainerResultType}
   */
  result_type: tDocBarCodeInfoContainerResultType
}

/**
 * Container for DocBarCodeInfo
 */
@Expose()
export class DocBarCodeInfoContainer extends aContainer implements iDocBarCodeInfoContainer {
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
   * Result type stored in this container
   * @type {tDocBarCodeInfoContainerResultType}
   */
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn(DocBarCodeInfoContainerResultTypes)
  result_type: tDocBarCodeInfoContainerResultType

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
  static fromProcessResponse(input: ProcessResponse, asPlain: true): iDocBarCodeInfoContainer[]
  static fromProcessResponse(input: ProcessResponse, asPlain?: false): DocBarCodeInfoContainer[]
  static fromProcessResponse(
    input: ProcessResponse,
    asPlain: boolean = false,
  ): (iDocBarCodeInfoContainer | DocBarCodeInfoContainer)[] {
    try {
      const { ContainerList } = input

      if (!ContainerList) {
        return []
      }

      const result = ContainerList.List.filter((container): container is DocBarCodeInfoContainer =>
        DocBarCodeInfoContainerResultTypes.includes(<tDocBarCodeInfoContainerResultType>container.result_type),
      )

      if (asPlain) {
        return result.map((item) => instanceToPlain(item, { exposeUnsetFields: false }) as iDocBarCodeInfoContainer)
      }

      return result
    } catch (error) {
      return []
    }
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
      throw new DocReaderTypeError(
        'DocBarCodeInfoContainer validation error: the data received does not match model structure!',
        errors,
      )
    }

    return true
  }
}
