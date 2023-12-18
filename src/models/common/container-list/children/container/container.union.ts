import { TransformFnParams } from 'class-transformer/types/interfaces'

import {
  AuthenticityCheckListContainer,
  OneCandidateContainer,
  DocBarCodeInfoContainer,
  DocumentImageContainer,
  DocumentPositionContainer,
  DocumentTypesCandidatesContainer,
  EncryptedRCLContainer,
  GraphicsContainer,
  IAuthenticityCheckListContainer,
  IOneCandidateContainer,
  IDocBarCodeInfoContainer,
  IDocumentImageContainer,
  IDocumentPositionContainer,
  IDocumentTypesCandidatesContainer,
  IEncryptedRCLContainer,
  IGraphicsContainer,
  IImageQualityContainer,
  IImagesContainer,
  ILexicalAnalysisContainer,
  ILicenseContainer,
  ImageQualityContainer,
  ImagesContainer,
  IStatusContainer,
  ITextContainer,
  ITextDataContainer,
  LexicalAnalysisContainer,
  LicenseContainer,
  StatusContainer,
  TextContainer,
  TextDataContainer
} from './members'


export type ContainerUnion =
  AuthenticityCheckListContainer |
  DocBarCodeInfoContainer |
  DocumentImageContainer |
  DocumentPositionContainer |
  DocumentTypesCandidatesContainer |
  EncryptedRCLContainer |
  GraphicsContainer |
  ImageQualityContainer |
  ImagesContainer |
  LexicalAnalysisContainer |
  LicenseContainer |
  OneCandidateContainer |
  StatusContainer |
  TextContainer |
  TextDataContainer

export type IContainerUnion =
  IAuthenticityCheckListContainer |
  IDocBarCodeInfoContainer |
  IDocumentImageContainer |
  IDocumentPositionContainer |
  IDocumentTypesCandidatesContainer |
  IEncryptedRCLContainer |
  IGraphicsContainer |
  IImageQualityContainer |
  IImagesContainer |
  ILexicalAnalysisContainer |
  ILicenseContainer |
  IOneCandidateContainer |
  IStatusContainer |
  ITextContainer |
  ITextDataContainer

export namespace ContainerUnion {
  export const transform = ({ value }: TransformFnParams) => StatusContainer.fromPlain(value)
}
