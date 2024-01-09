import { IsDefined, IsInt, IsOptional, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eLights } from '@/consts'
import { Default } from '@/decorators'
import { aContainer } from '../../container.abstract'
import { iListVerifiedFields, ListVerifiedFields } from './children'


/**
* Container for iListVerifiedFields
*/
export interface iListVerifiedFieldContainer extends aContainer {
  /**
  * Structure serves for storing the results of comparing the MRZ
  * text data, document filling area data, bar-codes data and data retrieved from RFID-chip
  * memory (used together with RFID-Chip Reader SDK) and passing it to the user application
  * @type {iListVerifiedFields|undefined}
  */
  ListVerifiedFields?: iListVerifiedFields
}

/**
* Container for ListVerifiedFields
*/
export class ListVerifiedFieldContainer extends aContainer implements iListVerifiedFieldContainer {
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

  /**
  * Structure serves for storing the results of comparing the MRZ
  * text data, document filling area data, bar-codes data and data retrieved from RFID-chip
  * memory (used together with RFID-Chip Reader SDK) and passing it to the user application
  * @type {ListVerifiedFields|undefined}
  */
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
