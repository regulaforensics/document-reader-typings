import { IsDefined, IsEnum, IsIn, ValidateNested, validateSync } from 'class-validator'
import { DocumentPositionItem } from '@regulaforensics/document-reader-webclient'
import { Expose, instanceToPlain, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eResultType } from '@/consts'
import { ProcessResponse } from '@/models'
import { BoundsResult } from '@/models/common/bounds-result'
import { aContainer } from '../../container.abstract'

/**
 * Result type of BoundsResultContainer
 */
export type tBoundsResultContainerResultType = eResultType.DOCUMENT_POSITION

/**
 * Result type of BoundsResultContainer
 * @type {tBoundsResultContainerResultType[]}
 */
export const BoundsResultContainerResultTypes: tBoundsResultContainerResultType[] = [eResultType.DOCUMENT_POSITION]

/**
 * Container for iBoundsResult
 */
export interface iBoundsResultContainer extends aContainer, DocumentPositionItem {
  /**
   * Result type stored in this container
   * @type {tBoundsResultContainerResultType}
   */
  result_type: tBoundsResultContainerResultType
}

/**
 * Container for BoundsResult
 */
@Expose()
export class BoundsResultContainer extends aContainer implements iBoundsResultContainer {
  /**
   * Document position
   * @type {BoundsResult}
   */
  @IsDefined()
  @ValidateNested()
  @Type(() => BoundsResult)
  DocumentPosition: BoundsResult

  /**
   * Result type stored in this container
   * @type {tBoundsResultContainerResultType}
   */
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn(BoundsResultContainerResultTypes)
  result_type: tBoundsResultContainerResultType

  /**
   * Create new instance of BoundsResultContainer from plain object
   *
   * @param {unknown} input - plain object
   * @return {BoundsResultContainer}
   */
  static fromPlain = (input: unknown): BoundsResultContainer => plainToClass(BoundsResultContainer, input)

  /**
   * Get list of BoundsResultContainer from ProcessResponse
   * @param {ProcessResponse} input - ProcessResponse object
   * @param {boolean} asPlain - return as plain object
   * @returns {(BoundsResultContainer | iBoundsResultContainer)[]}
   */
  static fromProcessResponse(input: ProcessResponse, asPlain: true): iBoundsResultContainer[]
  static fromProcessResponse(input: ProcessResponse, asPlain?: false): BoundsResultContainer[]
  static fromProcessResponse(
    input: ProcessResponse,
    asPlain: boolean = false,
  ): (BoundsResultContainer | iBoundsResultContainer)[] {
    try {
      const { ContainerList } = input

      if (!Array.isArray(ContainerList)) {
        return []
      }

      const result = ContainerList.List.filter((container): container is BoundsResultContainer =>
        BoundsResultContainerResultTypes.includes(<tBoundsResultContainerResultType>container.result_type),
      )

      return asPlain
        ? result.map((container) => instanceToPlain(container, { exposeUnsetFields: false }) as iBoundsResultContainer)
        : result
    } catch (error) {
      return []
    }
  }

  /**
   * Check if the given instance of BoundsResultContainer is valid
   *
   * @param {BoundsResultContainer} instance - instance of BoundsResultContainer to validate
   * @throws {DocReaderTypeError} - if BoundsResultContainer is not valid
   * @return {true | never} - true if BoundsResultContainer is valid, never otherwise
   */
  static validate = (instance: BoundsResultContainer): true | never => {
    const errors = validateSync(BoundsResultContainer.fromPlain(instance))

    if (errors.length) {
      throw new DocReaderTypeError(
        'BoundsResultContainer validation error: the data received does not match model structure!',
        errors,
      )
    }

    return true
  }
}
