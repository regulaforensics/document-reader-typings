import { IsDefined, IsInt, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eLights } from '@/consts'
import { Default } from '@/decorators'
import { ImageData } from '@/models/common/image-data'
import { aContainer } from '../../container.abstract'


export interface iDocumentImageContainer extends aContainer {
  /**
  * Structure is used for storing a graphic image
  * @type {ImageData}
  * @memberof iDocumentImageContainer
  */
  RawImageContainer: ImageData
}

export class DocumentImageContainer extends aContainer implements iDocumentImageContainer {
  /**
  * Lighting scheme code for the given result (used only for images)
  * @type {number}
  * @memberof DocumentImageContainer
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(eLights.OFF)
  light: number

  /**
  * @internal
  * @type {number}
  * @memberof DocumentImageContainer
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(0)
  list_idx: number

  /**
  * Page index (when working with multi-page document)
  * @type {number}
  * @memberof DocumentImageContainer
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(0)
  page_idx: number

  /**
  * @internal
  * @type {number}
  * @memberof DocumentImageContainer
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(0)
  buf_length: number

  /**
  * Structure is used for storing a graphic image
  * @type {ImageData}
  * @memberof DocumentImageContainer
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => ImageData)
  RawImageContainer: ImageData

  /**
  * Creates an instance of DocumentImageContainer from plain object
  *
  * @param {unknown} input - plain object
  * @returns {DocumentImageContainer}
  */
  static fromPlain = (input: unknown): DocumentImageContainer => plainToClass(DocumentImageContainer, input)

  /**
  * Check if the given instance is valid DocumentImageContainer
  *
  * @param {DocumentImageContainer} instance - instance to check
  * @throws {DocReaderTypeError}
  * @returns {true | never}
  */
  static isValid = (instance: DocumentImageContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('DocumentImageContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
