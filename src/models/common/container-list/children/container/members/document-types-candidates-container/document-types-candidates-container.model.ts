import { IsDefined, IsEnum, IsIn, IsOptional, ValidateNested, validateSync } from 'class-validator'
import { CandidatesListItem } from '@regulaforensics/document-reader-webclient'
import { Expose, instanceToPlain, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eResultType } from '@/consts'
import { aContainer } from '../../container.abstract'
import { ProcessResponse } from '@/models'
import { DocumentTypesCandidatesList } from './children'

/**
 * Result type of DocumentTypesCandidatesContainer
 */
export type tDocumentTypesCandidatesContainerResultType = eResultType.DOCUMENT_TYPE_CANDIDATES

/**
 * Result type of DocumentTypesCandidatesContainer
 * @type {tDocumentTypesCandidatesContainerResultType[]}
 */
export const DocumentTypesCandidatesContainerResultTypes: tDocumentTypesCandidatesContainerResultType[] = [
  eResultType.DOCUMENT_TYPE_CANDIDATES,
]

/**
 * Container for document types candidates
 */
export interface iDocumentTypesCandidatesContainer extends aContainer, CandidatesListItem {
  /**
   * @type {DocumentTypesCandidatesList}
   */
  CandidatesList?: DocumentTypesCandidatesList

  /**
   * Result type stored in this container
   * @type {tDocumentTypesCandidatesContainerResultType}
   */
  result_type: tDocumentTypesCandidatesContainerResultType
}

/**
 * Container for document types candidates
 */
@Expose()
export class DocumentTypesCandidatesContainer extends aContainer implements iDocumentTypesCandidatesContainer {
  /**
   * @type {DocumentTypesCandidatesList}
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => DocumentTypesCandidatesList)
  CandidatesList?: DocumentTypesCandidatesList

  /**
   * Result type stored in this container
   * @type {tDocumentTypesCandidatesContainerResultType}
   */
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn(DocumentTypesCandidatesContainerResultTypes)
  result_type: tDocumentTypesCandidatesContainerResultType

  /**
   * Creates an instance of DocumentTypesCandidatesContainer from plain object
   *
   * @param {unknown} input - plain object
   * @returns {DocumentTypesCandidatesContainer}
   */
  static fromPlain = (input: unknown): DocumentTypesCandidatesContainer =>
    plainToClass(DocumentTypesCandidatesContainer, input)

  /**
   * Get DocumentTypesCandidatesContainer from ProcessResponse
   * @param {ProcessResponse} input - ProcessResponse object
   * @param {boolean} asPlain - return as plain object
   * @returns {(DocumentTypesCandidatesContainer|iDocumentTypesCandidatesContainer)[]}
   */
  static fromProcessResponse(input: ProcessResponse, asPlain: true): iDocumentTypesCandidatesContainer[]
  static fromProcessResponse(input: ProcessResponse, asPlain?: false): DocumentTypesCandidatesContainer[]
  static fromProcessResponse(
    input: ProcessResponse,
    asPlain: boolean = false,
  ): (DocumentTypesCandidatesContainer | iDocumentTypesCandidatesContainer)[] {
    try {
      const { ContainerList } = input

      const result = ContainerList.List.filter((container): container is DocumentTypesCandidatesContainer =>
        DocumentTypesCandidatesContainerResultTypes.includes(
          <tDocumentTypesCandidatesContainerResultType>container.result_type,
        ),
      )

      if (asPlain) {
        return result.map(
          (container) => instanceToPlain(container, { exposeUnsetFields: false }) as iDocumentTypesCandidatesContainer,
        )
      }

      return result
    } catch (error) {
      return []
    }
  }

  /**
   * Check if the given instance of DocumentTypesCandidatesContainer is valid
   *
   * @param {DocumentTypesCandidatesContainer} instance - instance of DocumentTypesCandidatesContainer to be checked
   * @throws {DocReaderTypeError} - if the given instance of DocumentTypesCandidatesContainer is not valid
   * @returns {true | never} - true if the given instance of DocumentTypesCandidatesContainer is valid
   */
  static validate = (instance: DocumentTypesCandidatesContainer): true | never => {
    const errors = validateSync(DocumentTypesCandidatesContainer.fromPlain(instance))

    if (errors.length) {
      throw new DocReaderTypeError(
        'DocumentTypesCandidatesContainer validation error: the data received does not match model structure!',
        errors,
      )
    }

    return true
  }
}
