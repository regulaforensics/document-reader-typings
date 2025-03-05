import { IsDefined, IsEnum, IsIn, IsInt, ValidateNested, validateSync } from 'class-validator'
import { instanceToPlain, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eLights, eResultType } from '@/consts'
import { Default } from '@/decorators'
import { aContainer } from '../../container.abstract'
import { iListVerifiedFields, ListVerifiedFields } from './children'
import { ProcessResponse } from '@/models'


/**
* Result type of ListVerifiedFieldContainer
*/
export type tListVerifiedFieldContainerResultType = eResultType.LEXICAL_ANALYSIS

/**
* Result type of ListVerifiedFieldContainer
* @type {tListVerifiedFieldContainerResultType[]}
*/
export const ListVerifiedFieldContainerResultTypes: tListVerifiedFieldContainerResultType[] = [
  eResultType.LEXICAL_ANALYSIS,
]

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
  ListVerifiedFields: iListVerifiedFields

  /**
  * Result type stored in this container
  * @type {tListVerifiedFieldContainerResultType}
  */
  result_type: tListVerifiedFieldContainerResultType
}

/**
* Container for ListVerifiedFields
*/
export class ListVerifiedFieldContainer extends aContainer implements iListVerifiedFieldContainer {
  /**
  * Lighting scheme code for the given result (used only for images)
  * @type {number}
  */
  @IsDefined()
  @IsInt()
  @Default(eLights.OFF)
  light: number

  /**
  * @internal
  * @type {number}
  */
  @IsDefined()
  @IsInt()
  @Default(0)
  list_idx: number

  /**
  * Page index (when working with multi-page document)
  * @type {number}
  */
  @IsDefined()
  @IsInt()
  @Default(0)
  page_idx: number

  /**
  * @internal
  * @type {number}
  */
  @IsDefined()
  @IsInt()
  @Default(0)
  buf_length: number

  /**
  * Result type stored in this container
  * @type {tListVerifiedFieldContainerResultType}
  */
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn(ListVerifiedFieldContainerResultTypes)
  result_type: tListVerifiedFieldContainerResultType

  /**
  * Structure serves for storing the results of comparing the MRZ
  * text data, document filling area data, bar-codes data and data retrieved from RFID-chip
  * memory (used together with RFID-Chip Reader SDK) and passing it to the user application
  * @type {ListVerifiedFields|undefined}
  */
  @IsDefined()
  @ValidateNested()
  @Type(() => ListVerifiedFields)
  ListVerifiedFields: ListVerifiedFields

  /**
  * Creates an instance of ListVerifiedFieldContainer from plain
  *
  * @param {unknown} input - plain object
  * @return {ListVerifiedFieldContainer}
  */
  static fromPlain = (input: unknown): ListVerifiedFieldContainer => plainToClass(ListVerifiedFieldContainer, input)

  /**
  * Get ListVerifiedFieldContainer from ProcessResponse
  * @param {ProcessResponse} input - ProcessResponse object
  * @param {boolean} asPlain - return as plain object
  * @return {(ListVerifiedFieldContainer|iListVerifiedFieldContainer)[]}
  */
  static fromProcessResponse(input: ProcessResponse, asPlain: true): iListVerifiedFieldContainer[];
  static fromProcessResponse(input: ProcessResponse, asPlain?: false): ListVerifiedFieldContainer[];
  static fromProcessResponse(input: ProcessResponse, asPlain: boolean = false): (ListVerifiedFieldContainer|iListVerifiedFieldContainer)[] {
    if (!ProcessResponse.isValid(input)) {
      return []
    }

    const { ContainerList } = input

    const result =  ContainerList.List.filter((container): container is ListVerifiedFieldContainer =>
      ListVerifiedFieldContainerResultTypes.includes(<tListVerifiedFieldContainerResultType>container.result_type)
    )

    return asPlain ? result.map((container) => instanceToPlain(container, { exposeUnsetFields: false }) as iListVerifiedFieldContainer) : result
  }

  /**
  * Check if the given instance of LexicalAnalysisContainer is valid
  *
  * @param {ListVerifiedFieldContainer} instance - instance of LexicalAnalysisContainer to be checked
  * @throws {DocReaderTypeError} - if the given instance of LexicalAnalysisContainer is not valid
  * @return {true | never} - true if the given instance of LexicalAnalysisContainer is valid
  */
  static validate = (instance: ListVerifiedFieldContainer): true | never => {
    const errors = validateSync(ListVerifiedFieldContainer.fromPlain(instance))

    if (errors.length) {
      throw new DocReaderTypeError('ListVerifiedFieldContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
