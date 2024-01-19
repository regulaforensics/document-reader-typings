/**
* Enumeration describes available container types.
* @enum {number}
*/
export declare enum eResultType {
    /**
    * Contains result of document authenticity checks
    * Result type for AuthenticityCheckListContainer
    */
    AUTHENTICITY = 20,
    /**
    * Result type for AuthenticityCheckListContainer
    */
    FINGER_PRINT_COMPARISON = 39,
    /**
    * Result type for AuthenticityCheckListContainer
    */
    PORTRAIT_COMPARISON = 34,
    /**
    * Contains information about document position on the input image, its center, angle, etc
    * Result type for BoundsResult
    */
    DOCUMENT_POSITION = 85,
    /**
    * Result type for BoundsResult
    */
    MRZ_POSITION = 61,
    /**
    * Result type for BoundsResult
    */
    BARCODE_POSITION = 62,
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
    * Contains barcode parsing result with graphic fields
    * Result type for DocGraphicsInfoContainer
    */
    BARCODES_IMAGE_DATA = 19,
    /**
    * Result type for DocGraphicsInfoContainer
    */
    LIVE_PORTRAIT = 32,
    /**
    * Result type for DocGraphicsInfoContainer
    */
    EXT_PORTRAIT = 35,
    /**
    * Result type for DocGraphicsInfoContainer
    */
    FINGERPRINTS = 38,
    /**
    * Contains Visual zone OCR results
    * Result type for DocVisualExtendedInfoContainer
    */
    VISUAL_OCR_EXTENDED = 17,
    /**
    * Contains MRZ OCR results
    * Result type for DocVisualExtendedInfoContainer
    */
    MRZ_OCR_EXTENDED = 3,
    /**
    * Contains barcode parsing result with text fields
    * Result type for DocVisualExtendedInfoContainer
    */
    BARCODES_TEXT_DATA = 18,
    /**
    * Result type for DocVisualExtendedInfoContainer
    */
    MAGNETIC_STRIPE_TEXT_DATA = 26,
    /**
    * Contains encrypted ResultContainerList
    * Result type for EncryptedRCLContainer
    */
    ENCRYPTED_RCL = 49,
    /**
    * Contains image quality check results
    * Result type for ImageQualityCheckListContainer
    */
    INPUT_IMAGE_QUALITY = 30,
    /**
    * Contains images from all document sources (mrz, rfid, visual, barcode)
    * Result type for ImagesResultContainer
    */
    IMAGES = 37,
    /**
    * Contains license
    * Result type for LicenseContainer
    */
    LICENSE = 50,
    /**
    * Contains lexical data analysis results that allow you to compare MRZ OCR results, Visual zone OCR results,
    * barcodes and RFID chip data for an additional assessment of the authenticity of the document
    * (this is an old format, better use TEXT type)
    * Result type for ListVerifiedFieldContainer
    */
    LEXICAL_ANALYSIS = 15,
    /**
    * Contains description of determined document type, if any
    * Result type for OneCandidateContainer
    */
    CHOSEN_DOCUMENT_TYPE_CANDIDATE = 9,
    /**
    * Result type for RawImageContainer
    */
    RAW_UNCROPPED_IMAGE = 16,
    /**
    * Contains check statuses with details, grouped by source
    * Result type for StatusContainer
    */
    STATUS = 33,
    /**
    * Contains document textual fields from all sources (mrz, rfid, visual, barcode) with validity
    * and cross-source compare checks
    * Result type for TextResultContainer
    */
    TEXT = 36
}
