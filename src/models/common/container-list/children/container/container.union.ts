import { eResultType } from '@/consts'
import {
  AuthenticityCheckListContainer,
  DocBarCodeInfoContainer,
  DocGraphicsInfoContainer,
  DocumentImageContainer,
  DocumentPositionContainer,
  EncryptedRCLContainer,
  iAuthenticityCheckListContainer,
  iDocBarCodeInfoContainer,
  iDocGraphicsInfoContainer,
  iDocumentImageContainer,
  iDocumentPositionContainer,
  iEncryptedRCLContainer,
  iImageQualityCheckListContainer,
  iImagesResultContainer,
  iLicenseContainer,
  iListVerifiedFieldContainer,
  ImageQualityCheckListContainer,
  ImagesResultContainer,
  iOneCandidateContainer,
  iStatusContainer,
  iTextDataContainer,
  iTextResultContainer,
  LicenseContainer,
  ListVerifiedFieldContainer,
  OneCandidateContainer,
  StatusContainer,
  TextDataContainer,
  TextResultContainer
} from './members'
import { isObject } from '@/helpers'


export type uContainer =
  AuthenticityCheckListContainer |
  DocBarCodeInfoContainer |
  DocGraphicsInfoContainer |
  DocumentImageContainer |
  DocumentPositionContainer |
  EncryptedRCLContainer |
  ImageQualityCheckListContainer |
  ImagesResultContainer |
  LicenseContainer |
  ListVerifiedFieldContainer |
  OneCandidateContainer |
  StatusContainer |
  TextDataContainer |
  TextResultContainer

export type iuContainer =
  iAuthenticityCheckListContainer |
  iDocBarCodeInfoContainer |
  iDocGraphicsInfoContainer |
  iDocumentImageContainer |
  iDocumentPositionContainer |
  iEncryptedRCLContainer |
  iImageQualityCheckListContainer |
  iImagesResultContainer |
  iLicenseContainer |
  iListVerifiedFieldContainer |
  iOneCandidateContainer |
  iStatusContainer |
  iTextDataContainer |
  iTextResultContainer

export namespace uContainer {
  export const transformList = (items: unknown[]) => {
    const result: uContainer[] = []

    if (!Array.isArray(items)) {
      return result
    }

    for (const item of items) {
      if (!isObject(item) || !item.hasOwnProperty('result_type')) {
        continue
      }

      // @ts-ignore
      const { result_type } = item

      switch (result_type) {
        case eResultType.STATUS:
          result.push(StatusContainer.fromPlain(item))
        break
        case eResultType.TEXT:
          result.push(TextResultContainer.fromPlain(item))
        break
      }
    }

    return result
  }
}
