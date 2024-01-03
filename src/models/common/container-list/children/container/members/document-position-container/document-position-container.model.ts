import { IsDefined, IsInt, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eLights } from '@/consts'
import { Default } from '@/decorators'
import { BoundsResult, iBoundsResult } from '@/models/common/bounds-result'
import { aContainer } from '../../container.abstract'


export interface iDocumentPositionContainer extends aContainer {
  /**
  * Document position
  * @type {iBoundsResult}
  * @memberof iDocumentPositionContainer
  */
  DocumentPosition: iBoundsResult
}

export class DocumentPositionContainer extends aContainer implements iDocumentPositionContainer {
  /**
  * Lighting scheme code for the given result (used only for images)
  * @type {number}
  * @memberof DocumentPositionContainer
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(eLights.OFF)
  light: number

  /**
  * @internal
  * @type {number}
  * @memberof DocumentPositionContainer
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(0)
  list_idx: number

  /**
  * Page index (when working with multi-page document)
  * @type {number}
  * @memberof DocumentPositionContainer
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(0)
  page_idx: number

  /**
  * @internal
  * @type {number}
  * @memberof DocumentPositionContainer
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(0)
  buf_length: number

  /**
  * Document position
  * @type {BoundsResult}
  * @memberof DocumentPositionContainer
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => BoundsResult)
  DocumentPosition: BoundsResult

  /**
  * Create new instance of DocumentPositionContainer from plain object
  *
  * @param {unknown} input - plain object
  * @return {DocumentPositionContainer}
  */
  static fromPlain = (input: unknown): DocumentPositionContainer => plainToClass(DocumentPositionContainer, input)

  /**
  * Check if the given instance of DocumentPositionContainer is valid
  *
  * @param {DocumentPositionContainer} instance - instance of DocumentPositionContainer to validate
  * @throws {DocReaderTypeError} - if DocumentPositionContainer is not valid
  * @return {true | never} - true if DocumentPositionContainer is valid, never otherwise
  */
  static isValid = (instance: DocumentPositionContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('DocumentPositionContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
