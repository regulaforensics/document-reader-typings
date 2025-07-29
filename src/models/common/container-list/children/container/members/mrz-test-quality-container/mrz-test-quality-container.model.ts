import { IsDefined, IsEnum, IsIn, ValidateNested, validateSync } from 'class-validator'
import { MRZTestQualityItem } from '@regulaforensics/document-reader-webclient'
import { Expose, instanceToPlain, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eResultType } from '@/consts'
import { aContainer } from '../../container.abstract'
import { ProcessResponse } from '@/models'
import { iMRZTestQuality, MRZTestQuality } from './children'

/**
 * Result type of MRZTestQualityContainer
 */
export type tMRZTestQualityContainerResultType = eResultType.MRZ_TEST_QUALITY

/**
 * Result type of MRZTestQualityContainer
 * @type {tMRZTestQualityContainerResultType[]}
 */
export const MRZTestQualityContainerResultTypes: tMRZTestQualityContainerResultType[] = [eResultType.MRZ_TEST_QUALITY]

/**
 * Container for MRZ test quality
 */
export interface iMRZTestQualityContainer extends aContainer, MRZTestQualityItem {
  /**
   * @type {iMRZTestQuality}
   */
  MRZTestQuality: iMRZTestQuality

  /**
   * Result type stored in this container
   * @type {tMRZTestQualityContainerResultType}
   */
  result_type: tMRZTestQualityContainerResultType
}

/**
 * Container for MRZ test quality
 */
@Expose()
export class MRZTestQualityContainer extends aContainer implements iMRZTestQualityContainer {
  /**
   * @type {MRZTestQuality}
   */
  @IsDefined()
  @ValidateNested()
  @Type(() => MRZTestQuality)
  MRZTestQuality: MRZTestQuality

  /**
   * Result type stored in this container
   * @type {tMRZTestQualityContainerResultType}
   */
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn(MRZTestQualityContainerResultTypes)
  result_type: tMRZTestQualityContainerResultType

  /**
   * Creates an instance of MRZTestQualityContainer from plain object
   *
   * @param {unknown} input - plain object
   * @returns {MRZTestQualityContainer}
   */
  static fromPlain = (input: unknown): MRZTestQualityContainer => plainToClass(MRZTestQualityContainer, input)

  /**
   * Get MRZTestQualityContainer from ProcessResponse
   * @param {ProcessResponse} input - ProcessResponse object
   * @param {boolean} asPlain - return as plain object
   * @returns {(MRZTestQualityContainer|iMRZTestQualityContainer)[]}
   */
  static fromProcessResponse(input: ProcessResponse, asPlain: true): iMRZTestQualityContainer[]
  static fromProcessResponse(input: ProcessResponse, asPlain?: false): MRZTestQualityContainer[]
  static fromProcessResponse(
    input: ProcessResponse,
    asPlain: boolean = false,
  ): (MRZTestQualityContainer | iMRZTestQualityContainer)[] {
    try {
      const { ContainerList } = input

      const result = ContainerList.List.filter((container): container is MRZTestQualityContainer =>
        MRZTestQualityContainerResultTypes.includes(<tMRZTestQualityContainerResultType>container.result_type),
      )

      if (asPlain) {
        return result.map(
          (container) => instanceToPlain(container, { exposeUnsetFields: false }) as iMRZTestQualityContainer,
        )
      }

      return result
    } catch (error) {
      return []
    }
  }

  /**
   * Check if the given instance of MRZTestQualityContainer is valid
   *
   * @param {MRZTestQualityContainer} instance - instance of MRZTestQualityContainer to be checked
   * @throws {DocReaderTypeError} - if the given instance of MRZTestQualityContainer is not valid
   * @returns {true | never} - true if the given instance of MRZTestQualityContainer is valid
   */
  static validate = (instance: MRZTestQualityContainer): true | never => {
    const errors = validateSync(MRZTestQualityContainer.fromPlain(instance))

    if (errors.length) {
      throw new DocReaderTypeError(
        'MRZTestQualityContainer validation error: the data received does not match model structure!',
        errors,
      )
    }

    return true
  }
}
