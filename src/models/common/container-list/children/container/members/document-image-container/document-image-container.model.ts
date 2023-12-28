import { IsDefined, IsEnum, IsInt, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { Light } from '@/consts'
import { Default } from '@/decorators'
import { ImageData } from '@/models/common/image-data'
import { ContainerAbstract } from '../../container.abstract'


export interface IDocumentImageContainer extends ContainerAbstract {
  /**
  * Structure is used for storing a graphic image
  */
  RawImageContainer: ImageData
}

export class DocumentImageContainer extends ContainerAbstract implements IDocumentImageContainer {
  /**
  * Lighting scheme code for the given result (used only for images)
  * @type {Light}
  */
  @Expose()
  @IsDefined()
  @IsEnum(Light)
  @Default(Light.OFF)
  light: Light

  /** @internal */
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

  /** @internal */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(0)
  buf_length: number

  /**
  * Structure is used for storing a graphic image
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
