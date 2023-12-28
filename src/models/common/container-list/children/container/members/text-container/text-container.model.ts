import { IsDefined, IsEnum, IsIn, IsInt, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { Light, ResultType } from '@/consts'
import { Default } from '@/decorators'
import { ContainerAbstract } from '../../container.abstract'
import { ITextResult, TextResult } from './children'


export interface ITextContainer extends ContainerAbstract {
  Text: ITextResult
}

export class TextContainer extends ContainerAbstract implements ITextContainer {
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
  * Result type stored in this container (one of ResultType identifiers)
  * @type {ResultType.TEXT}
  */
  @Expose()
  @IsDefined()
  @IsEnum(ResultType)
  @IsIn([
    ResultType.TEXT,
  ])
  result_type: ResultType.TEXT

  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => TextResult)
  Text: TextResult

  /**
  * Creates an instance of TextContainer from plain object
  *
  * @param {unknown} input - plain object
  * @returns {TextContainer}
  */
  static fromPlain = (input: unknown): TextContainer => plainToClass(TextContainer, input, { strategy: 'excludeAll' })

  /**
  * Check if the given instance of TextContainer is valid
  *
  * @param {TextContainer} instance - instance of TextContainer to validate
  * @throws {DocReaderTypeError}
  * @returns {true | never}
  */
  static isValid = (instance: TextContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('TextContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
