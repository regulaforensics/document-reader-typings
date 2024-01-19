import { IsDefined, IsEnum, IsIn, IsInt, IsOptional, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eLights, eResultType } from '@/consts'
import { Default } from '@/decorators'
import { iOneCandidate, OneCandidate } from './children'
import { aContainer } from '../../container.abstract'


/**
* Result type of OneCandidateContainer
*/
export type tOneCandidateContainerResultType = eResultType.CHOSEN_DOCUMENT_TYPE_CANDIDATE

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
  @IsIn([eResultType.CHOSEN_DOCUMENT_TYPE_CANDIDATE])
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
