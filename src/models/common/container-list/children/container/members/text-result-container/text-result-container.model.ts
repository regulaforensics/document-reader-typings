import { IsDefined, IsEnum, IsIn, IsInt, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eLights, eResultType } from '@/consts'
import { Default } from '@/decorators'
import { aContainer } from '../../container.abstract'
import { iTextResult, TextResult } from './children'


export interface iTextResultContainer extends aContainer {
  Text: iTextResult
}

export class TextResultContainer extends aContainer implements iTextResultContainer {
  /**
  * Lighting scheme code for the given result (used only for images)
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(eLights.OFF)
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
  * Result type stored in this container (one of ResultType identifiers)
  * @type {eResultType.TEXT}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn([
    eResultType.TEXT,
  ])
  result_type: eResultType.TEXT

  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => TextResult)
  Text: TextResult

  /**
  * Creates an instance of TextContainer from plain object
  *
  * @param {unknown} input - plain object
  * @returns {TextResultContainer}
  */
  static fromPlain = (input: unknown): TextResultContainer => plainToClass(TextResultContainer, input, { strategy: 'excludeAll' })

  /**
  * Check if the given instance of TextContainer is valid
  *
  * @param {TextResultContainer} instance - instance of TextContainer to validate
  * @throws {DocReaderTypeError}
  * @returns {true | never}
  */
  static isValid = (instance: TextResultContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('TextResultContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
