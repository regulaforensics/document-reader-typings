/**
* Enumeration describes available container types.
* @enum {number}
*/
export enum eResultType {
  /**
  * Contains cropped and rotated with perspective compensation image of document. Single input image can contain
  * multiple document side/pages, which will be returned as separated results. Most of coordinates in other types
  * defined on that image
  */
  DOCUMENT_IMAGE = 1,

  /**
  * Contains MRZ OCR results
  * Result type for DocVisualExtendedInfoContainer
  */
  MRZ_OCR_EXTENDED = 3,

  /**
  * Contains raw information about barcodes on the input image
  * Result type for DocBarCodeInfoContainer
  */
  BARCODES = 5,

  /**
  * Contains cropped graphic fields from Visual zone
  * Result type for DocGraphicsInfoContainer
  */
  GRAPHICS = 6,

  /**
  * Contains list of document type candidates with their probabilities and descriptions
  */
  DOCUMENT_TYPE_CANDIDATES = 8,

  /**
  * Contains description of determined document type, if any
  * Result type for OneCandidateContainer
  */
  CHOSEN_DOCUMENT_TYPE_CANDIDATE = 9,

  /**
  * Contains lexical data analysis results that allow you to compare MRZ OCR results, Visual zone OCR results,
  * barcodes and RFID chip data for an additional assessment of the authenticity of the document
  * (this is an old format, better use TEXT type)
  * Result type for ListVerifiedFieldContainer
  */
  LEXICAL_ANALYSIS = 15,

  /**
  * Result type for RawImageContainer
  */
  RAW_UNCROPPED_IMAGE = 16,

  /**
  * Contains Visual zone OCR results
  * Result type for DocVisualExtendedInfoContainer
  */
  VISUAL_OCR_EXTENDED = 17,

  /**
  * Contains barcode parsing result with text fields
  * Result type for DocVisualExtendedInfoContainer
  */
  BARCODES_TEXT_DATA = 18,

  /**
  * Contains barcode parsing result with graphic fields
  * Result type for DocGraphicsInfoContainer
  */
  BARCODES_IMAGE_DATA = 19,

  /**
  * Contains result of document authenticity checks
  * Result type for AuthenticityCheckListContainer
  */
  AUTHENTICITY = 20,

  /**
  * Result type for DocVisualExtendedInfoContainer
  */
  MAGNETIC_STRIPE_TEXT_DATA = 26,

  /**
  * Contains image quality check results
  * Result type for ImageQualityCheckListContainer
  */
  INPUT_IMAGE_QUALITY = 30,

  /**
  * Result type for DocGraphicsInfoContainer
  */
  LIVE_PORTRAIT = 32,

  /**
  * Contains check statuses with details, grouped by source
  * Result type for StatusContainer
  */
  STATUS = 33,

  /**
  * Result type for AuthenticityCheckListContainer
  */
  PORTRAIT_COMPARISON = 34,

  /**
  * Result type for DocGraphicsInfoContainer
  */
  EXT_PORTRAIT = 35,

  /**
  * Contains document textual fields from all sources (mrz, rfid, visual, barcode) with validity
  * and cross-source compare checks
  * Result type for TextResultContainer
  */
  TEXT = 36,

  /**
  * Contains images from all document sources (mrz, rfid, visual, barcode)
  * Result type for ImagesResultContainer
  */
  IMAGES = 37,

  /**
  * Result type for DocGraphicsInfoContainer
  */
  FINGERPRINTS = 38,

  /**
  * Result type for AuthenticityCheckListContainer
  */
  FINGER_PRINT_COMPARISON = 39,

  /**
  * Contains encrypted ResultContainerList
  * Result type for EncryptedRCLContainer
  */
  ENCRYPTED_RCL = 49,

  /**
  * Contains license
  * Result type for LicenseContainer
  */
  LICENSE = 50,

  /**
  * Result type for BoundsResult
  */
  MRZ_POSITION = 61,

  /**
  * Result type for BoundsResult
  */
  BARCODE_POSITION = 62,

  /**
  * Contains information about document position on the input image, its center, angle, etc
  * Result type for BoundsResult
  */
  DOCUMENT_POSITION = 85,

  /**
  * A list of binary data arrays, which are an exact
  * copy of the data stored in the memory of RFID-chip, without any additional formatting
  */
  RFID_RAW_DATA = 101,

  /**
  * List of logically selected document filling fields that contain text information
  */
  RFID_TEXT_DATA = 102,

  /**
  * List of logically selected document filling fields that contain graphics information
  */
  RFID_IMAGE_DATA = 103,

  /**
  * List of structures, corresponding to different types of data. They do not contain service information used when formatting
  * to record in the chip memory
  */
  RFID_BINARY_DATA = 104,

  /**
  * List of binary data arrays, which are an exact copy of the graphic files stored in the memory of RFID-chip
  */
  RFID_ORIGINAL_GRAPHICS = 105,
}
