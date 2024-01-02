import { IsDefined, IsInt, IsOptional, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { Lights } from '@/consts'
import { Default } from '@/decorators'
import { DocVisualExtendedInfo, IDocVisualExtendedInfo } from '@/models/common/doc-visual-extended-info'
import { ContainerAbstract } from '../../container.abstract'


export interface ITextDataContainer extends ContainerAbstract {
  DocVisualExtendedInfo?: IDocVisualExtendedInfo
}

export class TextDataContainer extends ContainerAbstract implements ITextDataContainer {
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

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => DocVisualExtendedInfo)
  DocVisualExtendedInfo?: DocVisualExtendedInfo

  /**
  * Creates an instance of TextDataContainer from plain object
  *
  * @param {unknown} input - plain object
  * @returns {TextDataContainer}
  */
  static fromPlain = (input: unknown): TextDataContainer => plainToClass(TextDataContainer, input)

  /**
  * Check if the given instance of TextDataContainer is valid
  *
  * @param {TextDataContainer} instance - instance of TextDataContainer to be checked
  * @throws {DocReaderTypeError}
  * @returns {true | never}
  */
  static isValid = (instance: TextDataContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('TextDataContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
