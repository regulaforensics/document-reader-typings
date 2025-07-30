import { IsArray, IsEnum, IsOptional, ValidateNested } from 'class-validator'
import { DocumentTypesCandidatesList as cDocumentTypesCandidatesList } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { eDocumentTypeRecognitionResult } from '@/consts'
import { OneCandidate } from '../../../../../../../one-candidate'

export class DocumentTypesCandidatesList implements cDocumentTypesCandidatesList {
  /**
   * @type {eDocumentTypeRecognitionResult}
   */
  @IsOptional()
  @IsEnum(eDocumentTypeRecognitionResult)
  RecResult?: eDocumentTypeRecognitionResult

  /**
   * @type {OneCandidate[]}
   */
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => OneCandidate)
  @IsArray()
  Candidates?: OneCandidate[]
}
