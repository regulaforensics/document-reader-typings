import { IsDefined, IsEnum, IsIn, ValidateNested, validateSync } from 'class-validator'
import { BarcodePositionItem } from '@regulaforensics/document-reader-webclient'
import { Expose, instanceToPlain, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eResultType } from '@/consts'
import { ProcessResponse } from '@/models'
import { BoundsResult } from '@/models/common/bounds-result'
import { aContainer } from '../../container.abstract'

/**
 * Result type of BarcodeBoundsResultContainer
 */
export type tBarcodeBoundsResultContainerResultType = eResultType.BARCODE_POSITION

/**
 * Result type of BarcodeBoundsResultContainer
 * @type {tBarcodeBoundsResultContainerResultType[]}
 */
export const BarcodeBoundsResultContainerResultTypes: tBarcodeBoundsResultContainerResultType[] = [
  eResultType.BARCODE_POSITION,
]

/**
 * Container for iBarcodeBoundsResult
 */
export interface iBarcodeBoundsResultContainer extends aContainer, BarcodePositionItem {
  /**
   * Result type stored in this container
   * @type {tBarcodeBoundsResultContainerResultType}
   */
  result_type: tBarcodeBoundsResultContainerResultType
}

/**
 * Container for BarcodeBoundsResult
 */
@Expose()
export class BarcodeBoundsResultContainer extends aContainer implements iBarcodeBoundsResultContainer {
  /**
   * Barcode position
   * @type {BoundsResult}
   */
  @IsDefined()
  @ValidateNested()
  @Type(() => BoundsResult)
  BarcodePosition: BoundsResult

  /**
   * Result type stored in this container
   * @type {tBarcodeBoundsResultContainerResultType}
   */
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn(BarcodeBoundsResultContainerResultTypes)
  result_type: tBarcodeBoundsResultContainerResultType

  /**
   * Create new instance of BarcodeBoundsResultContainer from plain object
   *
   * @param {unknown} input - plain object
   * @return {BarcodeBoundsResultContainer}
   */
  static fromPlain = (input: unknown): BarcodeBoundsResultContainer => plainToClass(BarcodeBoundsResultContainer, input)

  /**
   * Get list of BarcodeBoundsResultContainer from ProcessResponse
   * @param {ProcessResponse} input - ProcessResponse object
   * @param {boolean} asPlain - return as plain object
   * @returns {(BarcodeBoundsResultContainer | iBarcodeBoundsResultContainer)[]}
   */
  static fromProcessResponse(input: ProcessResponse, asPlain: true): iBarcodeBoundsResultContainer[]
  static fromProcessResponse(input: ProcessResponse, asPlain?: false): BarcodeBoundsResultContainer[]
  static fromProcessResponse(
    input: ProcessResponse,
    asPlain: boolean = false,
  ): (BarcodeBoundsResultContainer | iBarcodeBoundsResultContainer)[] {
    try {
      const { ContainerList } = input

      if (!Array.isArray(ContainerList)) {
        return []
      }

      const result = ContainerList.List.filter((container): container is BarcodeBoundsResultContainer =>
        BarcodeBoundsResultContainerResultTypes.includes(
          <tBarcodeBoundsResultContainerResultType>container.result_type,
        ),
      )

      return asPlain
        ? result.map(
            (container) => instanceToPlain(container, { exposeUnsetFields: false }) as iBarcodeBoundsResultContainer,
          )
        : result
    } catch (error) {
      return []
    }
  }

  /**
   * Check if the given instance of BarcodeBoundsResultContainer is valid
   *
   * @param {BarcodeBoundsResultContainer} instance - instance of BarcodeBoundsResultContainer to validate
   * @throws {DocReaderTypeError} - if BarcodeBoundsResultContainer is not valid
   * @return {true | never} - true if BarcodeBoundsResultContainer is valid, never otherwise
   */
  static validate = (instance: BarcodeBoundsResultContainer): true | never => {
    const errors = validateSync(BarcodeBoundsResultContainer.fromPlain(instance))

    if (errors.length) {
      throw new DocReaderTypeError(
        'BarcodeBoundsResultContainer validation error: the data received does not match model structure!',
        errors,
      )
    }

    return true
  }
}
