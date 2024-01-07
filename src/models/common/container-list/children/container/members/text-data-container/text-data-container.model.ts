import { IsDefined, IsInt, IsOptional, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eLights } from '@/consts'
import { Default } from '@/decorators'
import { DocVisualExtendedInfo, iDocVisualExtendedInfo } from '@/models/common/doc-visual-extended-info'
import { aContainer } from '../../container.abstract'


export interface iTextDataContainer extends aContainer {
  DocVisualExtendedInfo?: iDocVisualExtendedInfo
}

export class TextDataContainer extends aContainer implements iTextDataContainer {
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
