import { IsArray, IsEnum, IsOptional, ValidateNested } from 'class-validator'
import { DocumentTypesCandidatesList as iDocumentTypesCandidatesList } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { eDocumentTypeRecognitionResult } from '@/consts'
import { OneCandidate } from '../../../../../../../one-candidate'

export class DocumentTypesCandidatesList implements iDocumentTypesCandidatesList {
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

export type { iDocumentTypesCandidatesList }
