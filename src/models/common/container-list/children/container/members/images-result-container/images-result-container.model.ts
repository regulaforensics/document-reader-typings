import { IsDefined, IsEnum, IsIn, IsInt, ValidateNested, validateSync } from 'class-validator'
import { instanceToPlain, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eLights, eResultType } from '@/consts'
import { Default } from '@/decorators'
import { aContainer } from '../../container.abstract'
import { iImagesResult, ImagesResult } from './children'
import { ProcessResponse } from '@/models'


/**
* Result type of ImagesResultContainer
*/
export type tImagesResultContainerResultType = eResultType.IMAGES

/**
* Result type of ImagesResultContainer
* @type {tImagesResultContainerResultType[]}
*/
export const ImagesResultContainerResultTypes: tImagesResultContainerResultType[] = [
  eResultType.IMAGES,
]

/**
* Container for iImagesResult
*/
export interface iImagesResultContainer extends aContainer {
  /**
  * Used for representation of all graphic results
  * @type {iImagesResult}
  */
  Images: iImagesResult

  /**
  * Result type stored in this container
  * @type {tImagesResultContainerResultType}
  */
  result_type: tImagesResultContainerResultType
}

/**
* Container for ImagesResult
*/
export class ImagesResultContainer extends aContainer implements iImagesResultContainer {
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
  * @type {tImagesResultContainerResultType}
  */
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn(ImagesResultContainerResultTypes)
  result_type: tImagesResultContainerResultType

  /**
  * Images result
  * @type {ImagesResult}
  */
  @IsDefined()
  @ValidateNested()
  @Type(() => ImagesResult)
  Images: ImagesResult

  /**
  * Create new instance of ImagesResultContainer from plain object
  *
  * @param {unknown} input - plain object
  * @returns {ImagesResultContainer}
  */
  static fromPlain = (input: unknown): ImagesResultContainer => plainToClass(ImagesResultContainer, input)

  /**
  * Get ImagesResultContainer from ProcessResponse
  * @param {ProcessResponse} input - ProcessResponse object
  * @param {boolean} asPlain - return as plain object
  * @returns {(ImagesResultContainer|iImagesResultContainer)[]}
  */
  static fromProcessResponse(input: ProcessResponse, asPlain: true): iImagesResultContainer[];
  static fromProcessResponse(input: ProcessResponse, asPlain?: false): ImagesResultContainer[];
  static fromProcessResponse(input: ProcessResponse, asPlain: boolean = false): (ImagesResultContainer|iImagesResultContainer)[] {
    try {
      const { ContainerList } = input

      const result = ContainerList.List.filter((container): container is ImagesResultContainer =>
        ImagesResultContainerResultTypes.includes(<tImagesResultContainerResultType>container.result_type)
      )

      if (asPlain) {
        return result.map((container) => instanceToPlain(container, {exposeUnsetFields: false}) as iImagesResultContainer)
      }

      return result
    } catch (error) {
      return []
    }
  }

  /**
  * Check if the given instance satisfies the ImagesResultContainer interface
  *
  * @param {ImagesResultContainer} instance - instance to be checked
  * @throws {DocReaderTypeError}
  * @returns {true | never}
  */
  static validate = (instance: ImagesResultContainer): true | never => {
    const errors = validateSync(ImagesResultContainer.fromPlain(instance))

    if (errors.length) {
      throw new DocReaderTypeError('ImagesResultContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
