import { IsDefined, IsEnum, IsIn, IsInt, ValidateNested, validateSync } from 'class-validator'
import { Expose, instanceToPlain, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eLights, eResultType } from '@/consts'
import { Default } from '@/decorators'
import { aContainer } from '../../container.abstract'
import { iTextResult, TextResult } from './children'
import { ProcessResponse } from '@/models'


/**
* Result type of TextResultContainer
*/
export type tTextResultContainerResultType = eResultType.TEXT

/**
* Result type of TextResultContainer
* @type {tTextResultContainerResultType[]}
*/
export const TextResultContainerResultTypes: tTextResultContainerResultType[] = [
  eResultType.TEXT,
]

/**
* Container for iTextResult
*/
export interface iTextResultContainer extends aContainer {
  /**
  * Text result
  * @type {iTextResult}
  */
  Text: iTextResult

  /**
  * Result type stored in this container
  * @type {tTextResultContainerResultType}
  */
  result_type: tTextResultContainerResultType
}

/**
* Container for TextResult
*/
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
  * Result type stored in this container
  * @type {tTextResultContainerResultType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn(TextResultContainerResultTypes)
  result_type: tTextResultContainerResultType

  /**
  * Text result
  * @type {TextResult}
  */
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
  * Get TextResultContainer from ProcessResponse
  * @param {ProcessResponse} input - ProcessResponse object
  * @param {boolean} asPlain - if true, returns plain object
  * @returns {(TextResultContainer|iTextResultContainer)[]}
  */
  static fromProcessResponse(input: ProcessResponse, asPlain: true): iTextResultContainer[];
  static fromProcessResponse(input: ProcessResponse, asPlain: false): TextResultContainer[];
  static fromProcessResponse(input: ProcessResponse, asPlain: boolean = false): (TextResultContainer|iTextResultContainer)[] {
    const { ContainerList } = input

    const result = ContainerList.List.filter((container): container is TextResultContainer =>
      TextResultContainerResultTypes.includes(<tTextResultContainerResultType>container.result_type)
    )

    if (asPlain) {
      return result.map((container) => instanceToPlain(container) as iTextResultContainer)
    }

    return result
  }

  /**
  * Check if the given instance of TextContainer is valid
  *
  * @param {TextResultContainer} instance - instance of TextContainer to validate
  * @throws {DocReaderTypeError}
  * @returns {true | never}
  */
  static validate = (instance: TextResultContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('TextResultContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
