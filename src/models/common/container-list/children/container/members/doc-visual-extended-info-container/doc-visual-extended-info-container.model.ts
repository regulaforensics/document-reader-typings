import { IsDefined, IsEnum, IsIn, ValidateNested, validateSync } from 'class-validator'
import { DocVisualExtendedInfoItem } from '@regulaforensics/document-reader-webclient'
import { Expose, instanceToPlain, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eResultType } from '@/consts'
import { aContainer } from '../../container.abstract'
import { ProcessResponse, DocVisualExtendedInfo } from '@/models'

/**
 * Result type of DocVisualExtendedInfoContainer
 */
export type tDocVisualExtendedInfoContainerResultType =
  | eResultType.VISUAL_TEXT
  | eResultType.MRZ_TEXT
  | eResultType.BARCODE_TEXT
  | eResultType.MAGNETIC_STRIPE_TEXT_DATA
  | eResultType.RFID_TEXT

/**
 * Result type of DocVisualExtendedInfoContainer
 * @type {tDocVisualExtendedInfoContainerResultType[]}
 */
export const DocVisualExtendedInfoContainerResultTypes: tDocVisualExtendedInfoContainerResultType[] = [
  eResultType.VISUAL_TEXT,
  eResultType.MRZ_TEXT,
  eResultType.BARCODE_TEXT,
  eResultType.MAGNETIC_STRIPE_TEXT_DATA,
  eResultType.RFID_TEXT,
]

/**
 * Container for iDocVisualExtendedInfo
 */
export interface iDocVisualExtendedInfoContainer extends aContainer, DocVisualExtendedInfoItem {
  /**
   * Result type stored in this container
   * @type {tDocVisualExtendedInfoContainerResultType}
   */
  result_type: tDocVisualExtendedInfoContainerResultType
}

/**
 * Container for DocVisualExtendedInfo
 */
@Expose()
export class DocVisualExtendedInfoContainer extends aContainer implements iDocVisualExtendedInfoContainer {
  /**
   * Structure serves for storing text results of MRZ, document filling and bar-codes reading
   * @type {DocVisualExtendedInfo|undefined}
   */
  @IsDefined()
  @ValidateNested()
  @Type(() => DocVisualExtendedInfo)
  DocVisualExtendedInfo: DocVisualExtendedInfo

  /**
   * Result type stored in this container
   * @type {tDocVisualExtendedInfoContainerResultType}
   */
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn(DocVisualExtendedInfoContainerResultTypes)
  result_type: tDocVisualExtendedInfoContainerResultType

  /**
   * Creates an instance of DocVisualExtendedInfoContainer from plain object
   *
   * @param {unknown} input - plain object
   * @returns {DocVisualExtendedInfoContainer}
   */
  static fromPlain = (input: unknown): DocVisualExtendedInfoContainer =>
    plainToClass(DocVisualExtendedInfoContainer, input)

  /**
   * Get DocVisualExtendedInfoContainer from ProcessResponse
   * @param {ProcessResponse} input - ProcessResponse object
   * @param {boolean} asPlain - return as plain object
   * @returns {(iDocVisualExtendedInfoContainer | DocVisualExtendedInfoContainer)[]}
   */
  static fromProcessResponse(input: ProcessResponse, asPlain: true): iDocVisualExtendedInfoContainer[]
  static fromProcessResponse(input: ProcessResponse, asPlain?: false): DocVisualExtendedInfoContainer[]
  static fromProcessResponse(
    input: ProcessResponse,
    asPlain: boolean = false,
  ): (iDocVisualExtendedInfoContainer | DocVisualExtendedInfoContainer)[] {
    try {
      const { ContainerList } = input

      const result = ContainerList.List.filter((container): container is DocVisualExtendedInfoContainer =>
        DocVisualExtendedInfoContainerResultTypes.includes(
          <tDocVisualExtendedInfoContainerResultType>container.result_type,
        ),
      )

      if (asPlain) {
        return result.map(
          (container) => instanceToPlain(container, { exposeUnsetFields: false }) as iDocVisualExtendedInfoContainer,
        )
      }

      return result
    } catch (error) {
      return []
    }
  }

  /**
   * Check if the given instance of DocVisualExtendedInfoContainer is valid
   *
   * @param {DocVisualExtendedInfoContainer} instance - instance of DocVisualExtendedInfoContainer to be checked
   * @throws {DocReaderTypeError}
   * @returns {true | never}
   */
  static validate = (instance: DocVisualExtendedInfoContainer): true | never => {
    const errors = validateSync(DocVisualExtendedInfoContainer.fromPlain(instance))

    if (errors.length) {
      throw new DocReaderTypeError(
        'DocVisualExtendedInfoContainer validation error: the data received does not match model structure!',
        errors,
      )
    }

    return true
  }
}
