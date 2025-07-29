import { IsDefined, IsEnum, IsIn, ValidateNested, validateSync } from 'class-validator'
import { TextItem } from '@regulaforensics/document-reader-webclient'
import { Expose, instanceToPlain, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eResultType } from '@/consts'
import { aContainer } from '../../container.abstract'
import { ProcessResponse, iTextResult, TextResult } from '@/models'

/**
 * Result type of TextResultContainer
 */
export type tTextResultContainerResultType = eResultType.TEXT

/**
 * Result type of TextResultContainer
 * @type {tTextResultContainerResultType[]}
 */
export const TextResultContainerResultTypes: tTextResultContainerResultType[] = [eResultType.TEXT]

/**
 * Container for iTextResult
 */
export interface iTextResultContainer extends aContainer, TextItem {
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
@Expose()
export class TextResultContainer extends aContainer implements iTextResultContainer {
  /**
   * Text result
   * @type {TextResult}
   */
  @IsDefined()
  @ValidateNested()
  @Type(() => TextResult)
  Text: TextResult

  /**
   * Result type stored in this container
   * @type {tTextResultContainerResultType}
   */
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn(TextResultContainerResultTypes)
  result_type: tTextResultContainerResultType

  /**
   * Creates an instance of TextContainer from plain object
   *
   * @param {unknown} input - plain object
   * @returns {TextResultContainer}
   */
  static fromPlain = (input: unknown): TextResultContainer =>
    plainToClass(TextResultContainer, input, { exposeUnsetFields: false })

  /**
   * Get TextResultContainer from ProcessResponse
   * @param {ProcessResponse} input - ProcessResponse object
   * @param {boolean} asPlain - if true, returns plain object
   * @returns {(TextResultContainer|iTextResultContainer)[]}
   */
  static fromProcessResponse(input: ProcessResponse, asPlain: true): iTextResultContainer[]
  static fromProcessResponse(input: ProcessResponse, asPlain?: false): TextResultContainer[]
  static fromProcessResponse(
    input: ProcessResponse,
    asPlain: boolean = false,
  ): (TextResultContainer | iTextResultContainer)[] {
    try {
      const { ContainerList } = input

      const result = ContainerList.List.filter((container): container is TextResultContainer =>
        TextResultContainerResultTypes.includes(<tTextResultContainerResultType>container.result_type),
      )

      if (asPlain) {
        return result.map(
          (container) => instanceToPlain(container, { exposeUnsetFields: false }) as iTextResultContainer,
        )
      }

      return result
    } catch (error) {
      return []
    }
  }

  /**
   * Check if the given instance of TextContainer is valid
   *
   * @param {TextResultContainer} instance - instance of TextContainer to validate
   * @throws {DocReaderTypeError}
   * @returns {true | never}
   */
  static validate = (instance: TextResultContainer): true | never => {
    const errors = validateSync(TextResultContainer.fromPlain(instance))

    if (errors.length) {
      throw new DocReaderTypeError(
        'TextResultContainer validation error: the data received does not match model structure!',
        errors,
      )
    }

    return true
  }
}
