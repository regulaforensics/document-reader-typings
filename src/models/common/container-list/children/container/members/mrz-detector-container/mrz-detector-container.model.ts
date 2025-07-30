import { IsDefined, IsEnum, IsIn, ValidateNested, validateSync } from 'class-validator'
import { ResultMRZDetectorItem } from '@regulaforensics/document-reader-webclient'
import { Expose, instanceToPlain, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eResultType } from '@/consts'
import { aContainer } from '../../container.abstract'
import { ProcessResponse } from '@/models'
import { ResultMRZDetector } from './children'

/**
 * Result type of MRZDetectorContainer
 */
export type tMRZDetectorContainerResultType = eResultType.MRZ_DETECTOR

/**
 * Result type of MRZDetectorContainer
 * @type {tMRZDetectorContainerResultType[]}
 */
export const MRZDetectorContainerResultTypes: tMRZDetectorContainerResultType[] = [eResultType.MRZ_DETECTOR]

/**
 * Container for MRZ detector
 */
export interface iMRZDetectorContainer extends aContainer, ResultMRZDetectorItem {
  /**
   * @type {ResultMRZDetector}
   */
  ResultMRZDetector: ResultMRZDetector

  /**
   * Result type stored in this container
   * @type {tMRZDetectorContainerResultType}
   */
  result_type: tMRZDetectorContainerResultType
}

/**
 * Container for MRZ detector
 */
@Expose()
export class MRZDetectorContainer extends aContainer implements iMRZDetectorContainer {
  /**
   * @type {ResultMRZDetector}
   */
  @IsDefined()
  @ValidateNested()
  @Type(() => ResultMRZDetector)
  ResultMRZDetector: ResultMRZDetector

  /**
   * Result type stored in this container
   * @type {tMRZDetectorContainerResultType}
   */
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn(MRZDetectorContainerResultTypes)
  result_type: tMRZDetectorContainerResultType

  /**
   * Creates an instance of MRZDetectorContainer from plain object
   *
   * @param {unknown} input - plain object
   * @returns {MRZDetectorContainer}
   */
  static fromPlain = (input: unknown): MRZDetectorContainer => plainToClass(MRZDetectorContainer, input)

  /**
   * Get MRZDetectorContainer from ProcessResponse
   * @param {ProcessResponse} input - ProcessResponse object
   * @param {boolean} asPlain - return as plain object
   * @returns {(MRZDetectorContainer|iMRZDetectorContainer)[]}
   */
  static fromProcessResponse(input: ProcessResponse, asPlain: true): iMRZDetectorContainer[]
  static fromProcessResponse(input: ProcessResponse, asPlain?: false): MRZDetectorContainer[]
  static fromProcessResponse(
    input: ProcessResponse,
    asPlain: boolean = false,
  ): (MRZDetectorContainer | iMRZDetectorContainer)[] {
    try {
      const { ContainerList } = input

      const result = ContainerList.List.filter((container): container is MRZDetectorContainer =>
        MRZDetectorContainerResultTypes.includes(<tMRZDetectorContainerResultType>container.result_type),
      )

      if (asPlain) {
        return result.map(
          (container) => instanceToPlain(container, { exposeUnsetFields: false }) as iMRZDetectorContainer,
        )
      }

      return result
    } catch (error) {
      return []
    }
  }

  /**
   * Check if the given instance of MRZDetectorContainer is valid
   *
   * @param {MRZDetectorContainer} instance - instance of MRZDetectorContainer to be checked
   * @throws {DocReaderTypeError} - if the given instance of MRZDetectorContainer is not valid
   * @returns {true | never} - true if the given instance of MRZDetectorContainer is valid
   */
  static validate = (instance: MRZDetectorContainer): true | never => {
    const errors = validateSync(MRZDetectorContainer.fromPlain(instance))

    if (errors.length) {
      throw new DocReaderTypeError(
        'MRZDetectorContainer validation error: the data received does not match model structure!',
        errors,
      )
    }

    return true
  }
}
