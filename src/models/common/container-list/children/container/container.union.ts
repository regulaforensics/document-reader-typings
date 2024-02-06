import { eResultType } from '@/consts'
import {
  AuthenticityCheckListContainer,
  BoundsResultContainer,
  DocBarCodeInfoContainer,
  DocBinaryInfoContainer,
  DocGraphicsInfoContainer,
  DocVisualExtendedInfoContainer,
  EncryptedRCLContainer,
  iAuthenticityCheckListContainer,
  iBoundsResultContainer,
  iDocBarCodeInfoContainer,
  iDocBinaryInfoContainer,
  iDocGraphicsInfoContainer,
  iDocVisualExtendedInfoContainer,
  iEncryptedRCLContainer,
  iImageQualityCheckListContainer,
  iImagesResultContainer,
  iLicenseContainer,
  iListVerifiedFieldContainer,
  ImageQualityCheckListContainer,
  ImagesResultContainer,
  iOneCandidateContainer,
  iRawImageContainer,
  iStatusContainer,
  iTextResultContainer,
  LicenseContainer,
  ListVerifiedFieldContainer,
  OneCandidateContainer,
  RawImageContainer,
  StatusContainer,
  TextResultContainer
} from './members'
import { isObject } from '@/helpers'


/**
* Union of all containers
*/
export type uContainer =
  /**
  * List of authenticity checks
  */
  AuthenticityCheckListContainer |

  /**
  * List of barcodes found on the document
  */
  DocBarCodeInfoContainer |

  /**
  * List of RFID binary data
  */
  DocBinaryInfoContainer |

  /**
  * List of graphic fields found on the document
  */
  DocGraphicsInfoContainer |

  /**
  * Document image
  */
  RawImageContainer |

  /**
  * Document position on the image
  */
  BoundsResultContainer |

  /**
  * Encrypted RCL container
  */
  EncryptedRCLContainer |

  /**
  * List of image quality checks
  */
  ImageQualityCheckListContainer |

  /**
  * List of images found on the document
  */
  ImagesResultContainer |

  /**
  * License container
  */
  LicenseContainer |

  /**
  * List of verified fields
  */
  ListVerifiedFieldContainer |

  /**
  * One candidate
  */
  OneCandidateContainer |

  /**
  * Status
  */
  StatusContainer |

  /**
  * Text data
  */
  DocVisualExtendedInfoContainer |

  /**
  * Text result
  */
  TextResultContainer

/**
* Union of all interfaces of containers
*/
export type iuContainer =
  /**
  * List of authenticity checks
  */
  iAuthenticityCheckListContainer |

  /**
  * List of barcodes found on the document
  */
  iDocBarCodeInfoContainer |

  /**
  * List of RFID binary data
  */
  iDocBinaryInfoContainer |

  /**
  * List of graphic fields found on the document
  */
  iDocGraphicsInfoContainer |

  /**
  * Document image
  */
  iRawImageContainer |

  /**
  * Document position on the image
  */
  iBoundsResultContainer |

  /**
  * Encrypted RCL container
  */
  iEncryptedRCLContainer |

  /**
  * List of image quality checks
  */
  iImageQualityCheckListContainer |

  /**
  * List of images found on the document
  */
  iImagesResultContainer |

  /**
  * License container
  */
  iLicenseContainer |

  /**
  * List of verified fields
  */
  iListVerifiedFieldContainer |

  /**
  * One candidate
  */
  iOneCandidateContainer |

  /**
  * Status
  */
  iStatusContainer |

  /**
  * Text data
  */
  iDocVisualExtendedInfoContainer |

  /**
  * Text result
  */
  iTextResultContainer

export namespace uContainer {
  /**
  * Transform list of unknown items to list of containers
  * @internal
  * @param {unknown[]} items - list of unknown items
  * @returns {uContainer[]} - list of containers
  */
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
        case eResultType.AUTHENTICITY:
        case eResultType.FINGER_PRINT_COMPARISON:
        case eResultType.PORTRAIT_COMPARISON:
          result.push(AuthenticityCheckListContainer.fromPlain(item))
          break
        case eResultType.DOCUMENT_POSITION:
        case eResultType.MRZ_POSITION:
        case eResultType.BARCODE_POSITION:
          result.push(BoundsResultContainer.fromPlain(item))
          break
        case eResultType.BARCODES:
          result.push(DocBarCodeInfoContainer.fromPlain(item))
          break
        case eResultType.RFID_BINARY_DATA:
          result.push(DocBinaryInfoContainer.fromPlain(item))
          break
        case eResultType.GRAPHICS:
        case eResultType.BARCODES_IMAGE_DATA:
        case eResultType.LIVE_PORTRAIT:
        case eResultType.EXT_PORTRAIT:
        case eResultType.FINGERPRINTS:
        case eResultType.RFID_IMAGE_DATA:
          result.push(DocGraphicsInfoContainer.fromPlain(item))
          break
        case eResultType.VISUAL_OCR_EXTENDED:
        case eResultType.MRZ_OCR_EXTENDED:
        case eResultType.BARCODES_TEXT_DATA:
        case eResultType.MAGNETIC_STRIPE_TEXT_DATA:
        case eResultType.RFID_TEXT_DATA:
          result.push(DocVisualExtendedInfoContainer.fromPlain(item))
          break
        case eResultType.ENCRYPTED_RCL:
          result.push(EncryptedRCLContainer.fromPlain(item))
          break
        case eResultType.INPUT_IMAGE_QUALITY:
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
        case eResultType.CHOSEN_DOCUMENT_TYPE_CANDIDATE:
          result.push(OneCandidateContainer.fromPlain(item))
          break
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
}
