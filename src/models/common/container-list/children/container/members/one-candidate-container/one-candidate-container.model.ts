import { IsDefined, IsEnum, IsIn, IsOptional, IsString, ValidateNested, validateSync } from 'class-validator'
import { OneCandidateItem } from '@regulaforensics/document-reader-webclient'
import { Expose, instanceToPlain, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eResultType } from '@/consts'
import { aContainer } from '../../container.abstract'
import { ProcessResponse } from '@/models'
import { iOneCandidate, OneCandidate } from '../../../../../one-candidate'

/**
 * Result type of OneCandidateContainer
 */
export type tOneCandidateContainerResultType = eResultType.DOCUMENT_TYPE

/**
 * Result type of OneCandidateContainer
 * @type {tOneCandidateContainerResultType[]}
 */
export const OneCandidateContainerResultTypes: tOneCandidateContainerResultType[] = [eResultType.DOCUMENT_TYPE]

/**
 * Container for iOneCandidate
 */
export interface iOneCandidateContainer extends aContainer, OneCandidateItem {
  /**
   * Contains information on one candidate document when determining the document type
   * @type {iOneCandidate|undefined}
   */
  OneCandidate: iOneCandidate

  /**
   * Result type stored in this container
   * @type {tOneCandidateContainerResultType}
   */
  result_type: tOneCandidateContainerResultType
}

/**
 * Container for OneCandidate
 */
@Expose()
export class OneCandidateContainer extends aContainer implements iOneCandidateContainer {
  /**
   * Contains information on one candidate document when determining the document type
   * @type {OneCandidate|undefined}
   */
  @IsDefined()
  @ValidateNested()
  @Type(() => OneCandidate)
  OneCandidate: OneCandidate

  /**
   * @type {string}
   */
  @IsOptional()
  @IsString()
  XML_buffer?: string

  /**
   * Result type stored in this container
   * @type {tOneCandidateContainerResultType}
   */
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn(OneCandidateContainerResultTypes)
  result_type: tOneCandidateContainerResultType

  /**
   * Creates an instance of OneCandidateContainer from plain object
   *
   * @param {unknown} input - plain object
   * @returns {OneCandidateContainer}
   */
  static fromPlain = (input: unknown): OneCandidateContainer => plainToClass(OneCandidateContainer, input)

  /**
   * Get OneCandidateContainer from ProcessResponse
   * @param {ProcessResponse} input - ProcessResponse object
   * @param {boolean} asPlain - return as plain object
   * @returns {(OneCandidateContainer|iOneCandidateContainer)[]}
   */
  static fromProcessResponse(input: ProcessResponse, asPlain: true): iOneCandidateContainer[]
  static fromProcessResponse(input: ProcessResponse, asPlain?: false): OneCandidateContainer[]
  static fromProcessResponse(
    input: ProcessResponse,
    asPlain: boolean = false,
  ): (OneCandidateContainer | iOneCandidateContainer)[] {
    try {
      const { ContainerList } = input

      const result = ContainerList.List.filter((container): container is OneCandidateContainer =>
        OneCandidateContainerResultTypes.includes(<tOneCandidateContainerResultType>container.result_type),
      )

      if (asPlain) {
        return result.map(
          (container) => instanceToPlain(container, { exposeUnsetFields: false }) as iOneCandidateContainer,
        )
      }

      return result
    } catch (error) {
      return []
    }
  }

  /**
   * Check if the given instance of OneCandidateContainer is valid
   *
   * @param {OneCandidateContainer} instance - instance of OneCandidateContainer to validate
   * @throws {DocReaderTypeError} - if the given instance of OneCandidateContainer is not valid
   * @returns {true | never} - true if OneCandidateContainer is valid
   */
  static validate = (instance: OneCandidateContainer): true | never => {
    const errors = validateSync(OneCandidateContainer.fromPlain(instance))

    if (errors.length) {
      throw new DocReaderTypeError(
        'ChosenDocumentTypeContainer validation error: the data received does not match model structure!',
        errors,
      )
    }

    return true
  }
}
