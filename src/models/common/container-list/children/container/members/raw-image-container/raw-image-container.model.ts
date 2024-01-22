import { IsDefined, IsEnum, IsIn, IsInt, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eLights, eResultType } from '@/consts'
import { Default } from '@/decorators'
import { iImageData, ImageData } from '@/models/common/image-data'
import { aContainer } from '../../container.abstract'
import { ProcessResponse } from '@/models'


/**
* Result type of RawImageContainer
*/
export type tRawImageContainerResultType = eResultType.RAW_UNCROPPED_IMAGE

/**
* Result type of RawImageContainer
* @type {tRawImageContainerResultType[]}
*/
export const RawImageContainerResultTypes: tRawImageContainerResultType[] = [
  eResultType.RAW_UNCROPPED_IMAGE,
]

/**
* Container for iImageData
* Contains cropped and rotated with perspective compensation image of document.
* Single input image can contain multiple document side/pages, which will be returned as separated results.
* Most of coordinates in other types defined on that image
*/
export interface iRawImageContainer extends aContainer {
  /**
  * Structure is used for storing a graphic image
  * @type {iImageData}
  */
  RawImageContainer: iImageData

  /**
  * Result type stored in this container
  * @type {tRawImageContainerResultType}
  */
  result_type: tRawImageContainerResultType
}

/**
* Container for ImageData
*/
export class RawImageContainer extends aContainer implements iRawImageContainer {
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
  * @type {number}
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
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(0)
  buf_length: number

  /**
  * Result type stored in this container
  * @type {tRawImageContainerResultType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn(RawImageContainerResultTypes)
  result_type: tRawImageContainerResultType

  /**
  * Structure is used for storing a graphic image
  * @type {ImageData}
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => ImageData)
  RawImageContainer: ImageData

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
  * @returns {RawImageContainer[]}
  */
  static fromProcessResponse = (input: ProcessResponse): RawImageContainer[] => {
    const { ContainerList } = input

    return ContainerList.List.filter((container): container is RawImageContainer =>
      RawImageContainerResultTypes.includes(<tRawImageContainerResultType>container.result_type)
    )
  }

  /**
  * Check if the given instance is valid RawImageContainer
  *
  * @param {RawImageContainer} instance - instance to check
  * @throws {DocReaderTypeError}
  * @returns {true | never}
  */
  static validate = (instance: RawImageContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('RawImageContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
