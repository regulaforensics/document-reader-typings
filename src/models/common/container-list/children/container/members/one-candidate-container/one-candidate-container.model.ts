import { IsDefined, IsEnum, IsIn, IsInt, IsOptional, ValidateNested, validateSync } from 'class-validator'
import { Expose, instanceToPlain, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eLights, eResultType } from '@/consts'
import { Default } from '@/decorators'
import { iOneCandidate, OneCandidate } from './children'
import { aContainer } from '../../container.abstract'
import { ProcessResponse } from '@/models'


/**
* Result type of OneCandidateContainer
*/
export type tOneCandidateContainerResultType = eResultType.CHOSEN_DOCUMENT_TYPE_CANDIDATE

/**
* Result type of OneCandidateContainer
* @type {tOneCandidateContainerResultType[]}
*/
export const OneCandidateContainerResultTypes: tOneCandidateContainerResultType[] = [
  eResultType.CHOSEN_DOCUMENT_TYPE_CANDIDATE,
]

/**
* Container for iOneCandidate
*/
export interface iOneCandidateContainer extends aContainer {
  /**
  * Contains information on one candidate document when determining the document type
  * @type {iOneCandidate|undefined}
  */
  OneCandidate?: iOneCandidate

  /**
  * Result type stored in this container
  * @type {tOneCandidateContainerResultType}
  */
  result_type: tOneCandidateContainerResultType
}

/**
* Container for OneCandidate
*/
export class OneCandidateContainer extends aContainer implements iOneCandidateContainer {
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
  * @type {tOneCandidateContainerResultType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn(OneCandidateContainerResultTypes)
  result_type: tOneCandidateContainerResultType

  /**
  * Contains information on one candidate document when determining the document type
  * @type {OneCandidate|undefined}
  */
  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => OneCandidate)
  OneCandidate?: OneCandidate

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
  static fromProcessResponse(input: ProcessResponse, asPlain: true): iOneCandidateContainer[];
  static fromProcessResponse(input: ProcessResponse, asPlain: false): OneCandidateContainer[];
  static fromProcessResponse(input: ProcessResponse, asPlain: boolean = false): (OneCandidateContainer|iOneCandidateContainer)[] {
    const { ContainerList } = input

    const result = ContainerList.List.filter((container): container is OneCandidateContainer =>
      OneCandidateContainerResultTypes.includes(<tOneCandidateContainerResultType>container.result_type)
    )

    if (asPlain) {
      return result.map((container) => instanceToPlain(container, { strategy: 'excludeAll' }) as iOneCandidateContainer)
    }

    return result
  }

  /**
  * Check if the given instance of OneCandidateContainer is valid
  *
  * @param {OneCandidateContainer} instance - instance of OneCandidateContainer to validate
  * @throws {DocReaderTypeError} - if the given instance of OneCandidateContainer is not valid
  * @returns {true | never} - true if OneCandidateContainer is valid
  */
  static validate = (instance: OneCandidateContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('ChosenDocumentTypeContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
