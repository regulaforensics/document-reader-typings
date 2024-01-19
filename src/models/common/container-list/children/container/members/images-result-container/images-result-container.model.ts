import { IsDefined, IsEnum, IsIn, IsInt, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eLights, eResultType } from '@/consts'
import { Default } from '@/decorators'
import { aContainer } from '../../container.abstract'
import { iImagesResult, ImagesResult } from './children'


/**
* Result type of ImagesResultContainer
*/
export type tImagesResultContainerResultType = eResultType.IMAGES

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
  * @type {tImagesResultContainerResultType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn([eResultType.IMAGES])
  result_type: tImagesResultContainerResultType

  /**
  * Images result
  * @type {ImagesResult}
  */
  @Expose()
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
  static fromPlain = (input: unknown) => plainToClass(ImagesResultContainer, input)

  /**
  * Check if the given instance satisfies the ImagesResultContainer interface
  *
  * @param {ImagesResultContainer} instance - instance to be checked
  * @throws {DocReaderTypeError}
  * @returns {true | never}
  */
  static validate = (instance: ImagesResultContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('ImagesResultContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}