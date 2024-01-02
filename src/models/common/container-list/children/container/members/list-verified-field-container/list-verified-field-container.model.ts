import { IsDefined, IsInt, IsOptional, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { Lights } from '@/consts'
import { Default } from '@/decorators'
import { ContainerAbstract } from '../../container.abstract'
import { IListVerifiedFields, ListVerifiedFields } from './children'


export interface IListVerifiedFieldContainer extends ContainerAbstract {
  ListVerifiedFields?: IListVerifiedFields
}

export class ListVerifiedFieldContainer extends ContainerAbstract implements IListVerifiedFieldContainer {
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
