import { IsDefined, IsEnum, IsIn, IsInt, ValidateNested, validateSync } from 'class-validator'
import { instanceToPlain, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eLights, eResultType } from '@/consts'
import { Default } from '@/decorators'
import { aContainer } from '../../container.abstract'
import { ProcessResponse } from '@/models'
import { iRawImage, RawImage } from './children/raw-image'


/**
* Result type of RawImageContainer
*/
export type tRawImageContainerResultType = eResultType.DOCUMENT_IMAGE | eResultType.RAW_UNCROPPED_IMAGE

/**
* Result type of RawImageContainer
* @type {tRawImageContainerResultType[]}
*/
export const RawImageContainerResultTypes: tRawImageContainerResultType[] = [
  eResultType.DOCUMENT_IMAGE,
  eResultType.RAW_UNCROPPED_IMAGE,
]

/**
* Container for iRawImage
* Contains cropped and rotated with perspective compensation image of document.
* Single input image can contain multiple document side/pages, which will be returned as separated results.
* Most of coordinates in other types defined on that image
*/
export interface iRawImageContainer extends aContainer {
  /**
  * Structure is used for storing a graphic image
  * @type {iRawImage}
  */
  RawImageContainer: iRawImage

  /**
  * Result type stored in this container
  * @type {tRawImageContainerResultType}
  */
  result_type: tRawImageContainerResultType
}

/**
* Container for RawImage
*/
export class RawImageContainer extends aContainer implements iRawImageContainer {
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
  * @type {tRawImageContainerResultType}
  */
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn(RawImageContainerResultTypes)
  result_type: tRawImageContainerResultType

  /**
  * Structure is used for storing a graphic image
  * @type {RawImage}
  */
  @IsDefined()
  @ValidateNested()
  @Type(() => RawImage)
  RawImageContainer: RawImage

  /**
  * Creates an instance of RawImageContainer from plain object
  *
  * @param {unknown} input - plain object
  * @returns {RawImageContainer}
  */
  static fromPlain = (input: unknown): RawImageContainer => plainToClass(RawImageContainer, input)

  /**
  * Get RawImageContainer from ProcessResponse
  * @param {ProcessResponse} input - ProcessResponse object
  * @param {boolean} asPlain - return as plain object
  * @returns {(iRawImageContainer|RawImageContainer)[]}
  */
  static fromProcessResponse(input: ProcessResponse, asPlain: true): iRawImageContainer[];
  static fromProcessResponse(input: ProcessResponse, asPlain?: false): RawImageContainer[];
  static fromProcessResponse(input: ProcessResponse, asPlain: boolean = false): (iRawImageContainer|RawImageContainer)[] {
    try {
      const { ContainerList } = input

      const result = ContainerList.List.filter((container): container is RawImageContainer =>
        RawImageContainerResultTypes.includes(<tRawImageContainerResultType>container.result_type)
      )

      if (asPlain) {
        return result.map((container) => instanceToPlain(container, {exposeUnsetFields: false}) as iRawImageContainer)
      }

      return result
    } catch (error) {
      return []
    }
  }

  /**
  * Check if the given instance is valid RawImageContainer
  *
  * @param {RawImageContainer} instance - instance to check
  * @throws {DocReaderTypeError}
  * @returns {true | never}
  */
  static validate = (instance: RawImageContainer): true | never => {
    const errors = validateSync(RawImageContainer.fromPlain(instance))

    if (errors.length) {
      throw new DocReaderTypeError('RawImageContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
