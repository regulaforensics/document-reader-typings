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
  * List of graphic fields found on the document
  */
  DocGraphicsInfoContainer |

  /**
  * Document image
  */
  DocumentImageContainer |

  /**
  * Document position on the image
  */
  DocumentPositionContainer |

  /**
  * Encrypted result of authenticity check
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
  * List of licenses
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
  TextDataContainer |

  /**
   * Text result
   */
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
