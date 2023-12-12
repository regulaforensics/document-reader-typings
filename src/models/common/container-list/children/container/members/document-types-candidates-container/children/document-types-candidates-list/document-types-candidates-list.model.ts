import { IsEnum, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { OneCandidate } from '~src/models/common/one-candidate'
import { DocumentTypeRecognitionResult } from '~src/consts'


export interface IDocumentTypesCandidatesList {
  RecResult?: DocumentTypeRecognitionResult
  Candidates?: OneCandidate[]
}

export class DocumentTypesCandidatesList implements IDocumentTypesCandidatesList {
  @Expose()
  @IsOptional()
  @IsEnum(DocumentTypeRecognitionResult)
  RecResult?: DocumentTypeRecognitionResult

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => OneCandidate)
  Candidates?: OneCandidate[]
}
