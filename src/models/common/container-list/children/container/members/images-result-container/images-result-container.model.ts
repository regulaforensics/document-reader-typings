import { IsDefined, IsInt, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { Lights } from '@/consts'
import { Default } from '@/decorators'
import { ContainerAbstract } from '../../container.abstract'
import { IImagesResult, ImagesResult } from './children'


export interface IImagesResultContainer extends ContainerAbstract {
  /**
  * Images result
  * @type {IImagesResult}
  */
  Images: IImagesResult
}

export class ImagesResultContainer extends ContainerAbstract implements IImagesResultContainer {
  /**
  * Lighting scheme code for the given result (used only for images)
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(Lights.OFF)
  light: number

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
  static isValid = (instance: ImagesResultContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('ImagesResultContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
