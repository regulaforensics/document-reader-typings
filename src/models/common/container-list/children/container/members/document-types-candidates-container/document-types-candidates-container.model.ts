import { IsInt, IsOptional, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '~src/distinct/errors'
import { ContainerAbstract } from '../../container.abstract'
import { DocumentTypesCandidatesList } from './children'


export interface IDocumentTypesCandidatesContainer extends ContainerAbstract {
  CandidatesList?: DocumentTypesCandidatesList
}

export class DocumentTypesCandidatesContainer extends ContainerAbstract implements IDocumentTypesCandidatesContainer {
  @Expose()
  @IsOptional()
  @IsInt()
  buf_length?: number

  @Expose()
  @IsOptional()
  @IsInt()
  light?: number

  @Expose()
  @IsOptional()
  @IsInt()
  list_idx?: number

  @Expose()
  @IsOptional()
  @IsInt()
  page_idx?: number

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => DocumentTypesCandidatesList)
  CandidatesList?: DocumentTypesCandidatesList

  static fromPlain = (input: unknown) => plainToClass(DocumentTypesCandidatesContainer, input)

  static isValid = (instance: DocumentTypesCandidatesContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('DocumentTypesCandidatesContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
