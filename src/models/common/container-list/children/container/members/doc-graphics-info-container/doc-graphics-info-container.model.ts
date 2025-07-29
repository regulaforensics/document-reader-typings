import { IsDefined, IsEnum, IsIn, ValidateNested, validateSync } from 'class-validator'
import { DocGraphicsInfoItem } from '@regulaforensics/document-reader-webclient'
import { Expose, instanceToPlain, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eResultType } from '@/consts'
import { aContainer } from '../../container.abstract'
import { ProcessResponse, DocGraphicsInfo } from '@/models'

/**
 * Result type of DocGraphicsInfoContainer
 */
export type tDocGraphicsInfoContainerResultType =
  | eResultType.VISUAL_GRAPHICS
  | eResultType.BARCODE_GRAPHICS
  | eResultType.LIVE_PORTRAIT
  | eResultType.EXT_PORTRAIT
  | eResultType.FINGERPRINTS
  | eResultType.RFID_GRAPHICS

/**
 * Result type of DocGraphicsInfoContainer
 * @type {tDocGraphicsInfoContainerResultType[]}
 */
export const DocGraphicsInfoContainerResultTypes: tDocGraphicsInfoContainerResultType[] = [
  eResultType.VISUAL_GRAPHICS,
  eResultType.BARCODE_GRAPHICS,
  eResultType.LIVE_PORTRAIT,
  eResultType.EXT_PORTRAIT,
  eResultType.FINGERPRINTS,
  eResultType.RFID_GRAPHICS,
]

/**
 * Container for iDocGraphicsInfo
 */
export interface iDocGraphicsInfoContainer extends aContainer, DocGraphicsInfoItem {
  /**
   * Result type stored in this container
   * @type {tDocGraphicsInfoContainerResultType}
   */
  result_type: tDocGraphicsInfoContainerResultType
}

/**
 * Container for DocGraphicsInfo
 */
@Expose()
export class DocGraphicsInfoContainer extends aContainer implements iDocGraphicsInfoContainer {
  /**
   * Model serves for storing graphic results of document filling area and bar-codes reading
   * @type {DocGraphicsInfo|undefined}
   */
  @IsDefined()
  @ValidateNested()
  @Type(() => DocGraphicsInfo)
  DocGraphicsInfo: DocGraphicsInfo

  /**
   * Result type stored in this container
   * @type {tDocGraphicsInfoContainerResultType}
   */
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn(DocGraphicsInfoContainerResultTypes)
  result_type: tDocGraphicsInfoContainerResultType

  /**
   * Creates an instance of DocGraphicsInfoContainer from plain object
   *
   * @param {unknown} input - plain object
   * @returns {DocGraphicsInfoContainer}
   */
  static fromPlain = (input: unknown): DocGraphicsInfoContainer => plainToClass(DocGraphicsInfoContainer, input)

  /**
   * Get DocGraphicsInfoContainer from ProcessResponse
   * @param {ProcessResponse} input - ProcessResponse object
   * @param {boolean} asPlain - return DocGraphicsInfoContainer as plain object
   * @returns {(DocGraphicsInfoContainer | iDocGraphicsInfoContainer)[]}
   */
  static fromProcessResponse(input: ProcessResponse, asPlain: true): iDocGraphicsInfoContainer[]
  static fromProcessResponse(input: ProcessResponse, asPlain?: false): DocGraphicsInfoContainer[]
  static fromProcessResponse(
    input: ProcessResponse,
    asPlain: boolean = false,
  ): (DocGraphicsInfoContainer | iDocGraphicsInfoContainer)[] {
    try {
      const { ContainerList } = input

      const result = ContainerList.List.filter((container): container is DocGraphicsInfoContainer =>
        DocGraphicsInfoContainerResultTypes.includes(<tDocGraphicsInfoContainerResultType>container.result_type),
      )

      return asPlain
        ? result.map(
            (container) => instanceToPlain(container, { exposeUnsetFields: false }) as iDocGraphicsInfoContainer,
          )
        : result
    } catch (error) {
      return []
    }
  }

  /**
   * Check if the given instance is valid DocGraphicsInfoContainer
   *
   * @param {DocGraphicsInfoContainer} instance - instance to check
   * @throws {DocReaderTypeError}
   * @returns {true | never}
   */
  static validate = (instance: DocGraphicsInfoContainer): true | never => {
    const errors = validateSync(DocGraphicsInfoContainer.fromPlain(instance))

    if (errors.length) {
      throw new DocReaderTypeError(
        'DocGraphicsInfoContainer validation error: the data received does not match model structure!',
        errors,
      )
    }

    return true
  }
}
