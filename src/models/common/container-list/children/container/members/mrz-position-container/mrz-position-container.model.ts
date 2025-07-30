import { IsDefined, IsEnum, IsIn, ValidateNested, validateSync } from 'class-validator'
import { MrzPositionItem } from '@regulaforensics/document-reader-webclient'
import { Expose, instanceToPlain, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eResultType } from '@/consts'
import { aContainer } from '../../container.abstract'
import { ProcessResponse, BoundsResult } from '@/models'

/**
 * Result type of MRZPositionContainer
 */
export type tMRZPositionContainerResultType = eResultType.MRZ_POSITION

/**
 * Result type of MRZPositionContainer
 * @type {tMRZPositionContainerResultType[]}
 */
export const MRZPositionContainerResultTypes: tMRZPositionContainerResultType[] = [eResultType.MRZ_POSITION]

/**
 * Container for MRZ position
 */
export interface iMRZPositionContainer extends aContainer, MrzPositionItem {
  /**
   * @type {BoundsResult}
   */
  MrzPosition: BoundsResult

  /**
   * Result type stored in this container
   * @type {tMRZPositionContainerResultType}
   */
  result_type: tMRZPositionContainerResultType
}

/**
 * Container for MRZ position
 */
@Expose()
export class MRZPositionContainer extends aContainer implements iMRZPositionContainer {
  /**
   * @type {BoundsResult}
   */
  @IsDefined()
  @ValidateNested()
  @Type(() => BoundsResult)
  MrzPosition: BoundsResult

  /**
   * Result type stored in this container
   * @type {tMRZPositionContainerResultType}
   */
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn(MRZPositionContainerResultTypes)
  result_type: tMRZPositionContainerResultType

  /**
   * Creates an instance of MRZPositionContainer from plain object
   *
   * @param {unknown} input - plain object
   * @returns {MRZPositionContainer}
   */
  static fromPlain = (input: unknown): MRZPositionContainer => plainToClass(MRZPositionContainer, input)

  /**
   * Get MRZPositionContainer from ProcessResponse
   * @param {ProcessResponse} input - ProcessResponse object
   * @param {boolean} asPlain - return as plain object
   * @returns {(MRZPositionContainer|iMRZPositionContainer)[]}
   */
  static fromProcessResponse(input: ProcessResponse, asPlain: true): iMRZPositionContainer[]
  static fromProcessResponse(input: ProcessResponse, asPlain?: false): MRZPositionContainer[]
  static fromProcessResponse(
    input: ProcessResponse,
    asPlain: boolean = false,
  ): (MRZPositionContainer | iMRZPositionContainer)[] {
    try {
      const { ContainerList } = input

      const result = ContainerList.List.filter((container): container is MRZPositionContainer =>
        MRZPositionContainerResultTypes.includes(<tMRZPositionContainerResultType>container.result_type),
      )

      if (asPlain) {
        return result.map(
          (container) => instanceToPlain(container, { exposeUnsetFields: false }) as iMRZPositionContainer,
        )
      }

      return result
    } catch (error) {
      return []
    }
  }

  /**
   * Check if the given instance of MRZPositionContainer is valid
   *
   * @param {MRZPositionContainer} instance - instance of MRZPositionContainer to be checked
   * @throws {DocReaderTypeError} - if the given instance of MRZPositionContainer is not valid
   * @returns {true | never} - true if the given instance of MRZPositionContainer is valid
   */
  static validate = (instance: MRZPositionContainer): true | never => {
    const errors = validateSync(MRZPositionContainer.fromPlain(instance))

    if (errors.length) {
      throw new DocReaderTypeError(
        'MRZPositionContainer validation error: the data received does not match model structure!',
        errors,
      )
    }

    return true
  }
}
