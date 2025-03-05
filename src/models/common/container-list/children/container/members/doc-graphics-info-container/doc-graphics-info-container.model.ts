import { IsDefined, IsEnum, IsIn, IsInt, IsOptional, ValidateNested, validateSync } from 'class-validator'
import { instanceToPlain, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eLights, eResultType } from '@/consts'
import { Default } from '@/decorators'
import { aContainer } from '../../container.abstract'
import { DocGraphicsInfo, iDocGraphicsInfo } from './children'
import { ProcessResponse } from '@/models'


/**
* Result type of DocGraphicsInfoContainer
*/
export type tDocGraphicsInfoContainerResultType =
  eResultType.GRAPHICS |
  eResultType.BARCODES_IMAGE_DATA |
  eResultType.LIVE_PORTRAIT |
  eResultType.EXT_PORTRAIT |
  eResultType.FINGERPRINTS |
  eResultType.RFID_IMAGE_DATA

/**
* Result type of DocGraphicsInfoContainer
* @type {tDocGraphicsInfoContainerResultType[]}
*/
export const DocGraphicsInfoContainerResultTypes: tDocGraphicsInfoContainerResultType[] = [
  eResultType.GRAPHICS,
  eResultType.BARCODES_IMAGE_DATA,
  eResultType.LIVE_PORTRAIT,
  eResultType.EXT_PORTRAIT,
  eResultType.FINGERPRINTS,
  eResultType.RFID_IMAGE_DATA
]

/**
* Container for iDocGraphicsInfo
*/
export interface iDocGraphicsInfoContainer extends aContainer {
  /**
  * Model serves for storing graphic results of document filling area and bar-codes reading
  * @type {iDocGraphicsInfo|undefined}
  */
  DocGraphicsInfo: iDocGraphicsInfo

  /**
  * Result type stored in this container
  * @type {tDocGraphicsInfoContainerResultType}
  */
  result_type: tDocGraphicsInfoContainerResultType
}

/**
* Container for DocGraphicsInfo
*/
export class DocGraphicsInfoContainer extends aContainer implements iDocGraphicsInfoContainer {
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
  * @type {number}
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
  * @type {number}
  */
  @IsDefined()
  @IsInt()
  @Default(0)
  buf_length: number

  /**
  * Result type stored in this container
  * @type {tDocGraphicsInfoContainerResultType}
  */
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn(DocGraphicsInfoContainerResultTypes)
  result_type: tDocGraphicsInfoContainerResultType

  /**
  * Model serves for storing graphic results of document filling area and bar-codes reading
  * @type {DocGraphicsInfo|undefined}
  */
  @IsDefined()
  @ValidateNested()
  @Type(() => DocGraphicsInfo)
  DocGraphicsInfo: DocGraphicsInfo

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
  static fromProcessResponse(input: ProcessResponse, asPlain: true): iDocGraphicsInfoContainer[];
  static fromProcessResponse(input: ProcessResponse, asPlain?: false): DocGraphicsInfoContainer[];
  static fromProcessResponse(input: ProcessResponse, asPlain: boolean = false): (DocGraphicsInfoContainer | iDocGraphicsInfoContainer)[] {
    

    const { ContainerList } = input

    const result =  ContainerList.List.filter((container): container is DocGraphicsInfoContainer =>
      DocGraphicsInfoContainerResultTypes.includes(<tDocGraphicsInfoContainerResultType>container.result_type)
    )

    return asPlain
      ? result.map((container) => instanceToPlain(container, { exposeUnsetFields: false }) as iDocGraphicsInfoContainer)
      : result
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
      throw new DocReaderTypeError('DocGraphicsInfoContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
