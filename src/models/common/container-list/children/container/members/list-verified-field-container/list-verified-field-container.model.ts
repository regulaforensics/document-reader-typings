import { IsDefined, IsInt, IsOptional, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eLights } from '@/consts'
import { Default } from '@/decorators'
import { aContainer } from '../../container.abstract'
import { iListVerifiedFields, ListVerifiedFields } from './children'


export interface iListVerifiedFieldContainer extends aContainer {
  ListVerifiedFields?: iListVerifiedFields
}

export class ListVerifiedFieldContainer extends aContainer implements iListVerifiedFieldContainer {
  /**
  * Lighting scheme code for the given result (used only for images)
  * @type {number}
  * @memberof ListVerifiedFieldContainer
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(eLights.OFF)
  light: number

  /**
  * @internal
  * @type {number}
  * @memberof ListVerifiedFieldContainer
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(0)
  list_idx: number

  /**
  * Page index (when working with multi-page document)
  * @type {number}
  * @memberof ListVerifiedFieldContainer
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(0)
  page_idx: number

  /**
  * @internal
  * @type {number}
  * @memberof ListVerifiedFieldContainer
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(0)
  buf_length: number

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => ListVerifiedFields)
  ListVerifiedFields?: ListVerifiedFields

  /**
  * Creates an instance of ListVerifiedFieldContainer from plain
  *
  * @param {unknown} input - plain object
  * @return {ListVerifiedFieldContainer}
  */
  static fromPlain = (input: unknown): ListVerifiedFieldContainer => plainToClass(ListVerifiedFieldContainer, input)

  /**
  * Check if the given instance of LexicalAnalysisContainer is valid
  *
  * @param {ListVerifiedFieldContainer} instance - instance of LexicalAnalysisContainer to be checked
  * @throws {DocReaderTypeError} - if the given instance of LexicalAnalysisContainer is not valid
  * @return {true | never} - true if the given instance of LexicalAnalysisContainer is valid
  */
  static isValid = (instance: ListVerifiedFieldContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('ListVerifiedFieldContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
