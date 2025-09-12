import { eResultType } from '@/consts'
import {
  AuthenticityCheckListContainer,
  BoundsResultContainer,
  BarcodeBoundsResultContainer,
  DocBarCodeInfoContainer,
  DocBinaryInfoContainer,
  DocGraphicsInfoContainer,
  DocVisualExtendedInfoContainer,
  EncryptedRCLContainer,
  ImageQualityCheckListContainer,
  ImagesResultContainer,
  LicenseContainer,
  ListVerifiedFieldContainer,
  OneCandidateContainer,
  RawImageContainer,
  StatusContainer,
  TextResultContainer,
  RFIDTextDataContainer,
  MRZPositionContainer,
  MRZTestQualityContainer,
  DocumentTypesCandidatesContainer,
  MRZDetectorContainer,
  FaceDetectionContainer,
  RFIDGraphicsInfoContainer,
  ByteArrayContainer,
} from './members'
import { isObject } from '@/helpers'

/**
 * Union of all containers
 */
export type uContainer =
  /**
   * List of authenticity checks
   */
  | AuthenticityCheckListContainer

  /**
   * List of barcodes found on the document
   */
  | DocBarCodeInfoContainer

  /**
   * List of RFID binary data
   */
  | DocBinaryInfoContainer

  /**
   * List of graphic fields found on the document
   */
  | DocGraphicsInfoContainer

  /**
   * Document image
   */
  | RawImageContainer

  /**
   * Document position on the image
   */
  | BoundsResultContainer

  /**
   * Barcode position on the image
   */
  | BarcodeBoundsResultContainer

  /**
   * Encrypted RCL container
   */
  | EncryptedRCLContainer

  /**
   * List of image quality checks
   */
  | ImageQualityCheckListContainer

  /**
   * List of images found on the document
   */
  | ImagesResultContainer

  /**
   * License container
   */
  | LicenseContainer

  /**
   * List of verified fields
   */
  | ListVerifiedFieldContainer

  /**
   * One candidate
   */
  | OneCandidateContainer

  /**
   * Status
   */
  | StatusContainer

  /**
   * Text data
   */
  | DocVisualExtendedInfoContainer

  /**
   * Text result
   */
  | TextResultContainer

  /**
   * Text result
   */
  | RFIDTextDataContainer

  /**
   * MRZ position result
   */
  | MRZPositionContainer

  /**
   * MRZ test quality result
   */
  | MRZTestQualityContainer

  /**
   * Document types candidates result
   */
  | DocumentTypesCandidatesContainer

  /**
   * MRZ detector result
   */
  | MRZDetectorContainer

  /**
   * Face detection result
   */
  | FaceDetectionContainer

  /**
   * RFID graphics info result
   */
  | RFIDGraphicsInfoContainer

  /**
   * Byte array result
   */
  | ByteArrayContainer

/**
 * Transform list of unknown items to list of containers
 * @internal
 * @param {unknown[]} items - list of unknown items
 * @returns {uContainer[]} - list of containers
 */
export const transformToContainerList = (items: unknown[]) => {
  const result: uContainer[] = []

  if (!Array.isArray(items)) {
    return result
  }

  for (const item of items) {
    if (!isObject(item) || !('result_type' in item)) {
      continue
    }

    const { result_type } = item

    switch (result_type) {
      case eResultType.MRZ_TEST_QUALITY:
        result.push(MRZTestQualityContainer.fromPlain(item))
        break
      case eResultType.DOCUMENT_TYPE_CANDIDATES:
        result.push(DocumentTypesCandidatesContainer.fromPlain(item))
        break
      case eResultType.AUTHENTICITY:
      case eResultType.PORTRAIT_COMPARISON:
      case eResultType.FINGERPRINT_COMPARISON:
        result.push(AuthenticityCheckListContainer.fromPlain(item))
        break
      case eResultType.BARCODE_POSITION:
        result.push(BarcodeBoundsResultContainer.fromPlain(item))
        break
      case eResultType.DOCUMENT_POSITION:
        result.push(BoundsResultContainer.fromPlain(item))
        break
      case eResultType.MRZ_DETECTOR:
        result.push(MRZDetectorContainer.fromPlain(item))
        break
      case eResultType.FACE_DETECTION:
        result.push(FaceDetectionContainer.fromPlain(item))
        break
      case eResultType.MRZ_POSITION:
        result.push(MRZPositionContainer.fromPlain(item))
        break
      case eResultType.BARCODES:
        result.push(DocBarCodeInfoContainer.fromPlain(item))
        break
      case eResultType.RFID_RAW_DATA:
      case eResultType.RFID_BINARY_DATA:
        result.push(DocBinaryInfoContainer.fromPlain(item))
        break
      case eResultType.DTC_VC:
        result.push(ByteArrayContainer.fromPlain(item))
        break
      case eResultType.RFID_ORIGINAL_GRAPHICS:
        result.push(RFIDGraphicsInfoContainer.fromPlain(item))
        break
      case eResultType.VISUAL_GRAPHICS:
      case eResultType.BARCODE_GRAPHICS:
      case eResultType.LIVE_PORTRAIT:
      case eResultType.EXT_PORTRAIT:
      case eResultType.FINGERPRINTS:
      case eResultType.RFID_GRAPHICS:
        result.push(DocGraphicsInfoContainer.fromPlain(item))
        break
      case eResultType.VISUAL_TEXT:
      case eResultType.MRZ_TEXT:
      case eResultType.BARCODE_TEXT:
      case eResultType.MAGNETIC_STRIPE_TEXT_DATA:
        result.push(DocVisualExtendedInfoContainer.fromPlain(item))
        break
      case eResultType.RFID_TEXT:
        result.push(RFIDTextDataContainer.fromPlain(item))
        break
      case eResultType.ENCRYPTED_RCL:
        result.push(EncryptedRCLContainer.fromPlain(item))
        break
      case eResultType.IMAGE_QUALITY:
        result.push(ImageQualityCheckListContainer.fromPlain(item))
        break
      case eResultType.IMAGES:
        result.push(ImagesResultContainer.fromPlain(item))
        break
      case eResultType.LICENSE:
        result.push(LicenseContainer.fromPlain(item))
        break
      case eResultType.LEXICAL_ANALYSIS:
        result.push(ListVerifiedFieldContainer.fromPlain(item))
        break
      case eResultType.DOCUMENT_TYPE:
        result.push(OneCandidateContainer.fromPlain(item))
        break
      case eResultType.DOCUMENT_IMAGE:
      case eResultType.RAW_UNCROPPED_IMAGE:
        result.push(RawImageContainer.fromPlain(item))
        break
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
