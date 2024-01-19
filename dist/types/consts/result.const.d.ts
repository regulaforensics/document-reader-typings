/**
* Enumeration contains a pool of constants which determine the type of resulting data formed during the data scanning and processing cycle and passed to the user application.
* @enum {number}
*/
export declare enum eResult {
    /**
    * Contains cropped and rotated with perspective compensation image of document. Single input image can contain multiple document side/pages, which will be returned as separated results. Most of coordinates in other types defined on that image
    */
    DOCUMENT_IMAGE = 1,
    /**
    * Contains MRZ OCR results
    */
    MRZ_TEXT = 3,
    /**
    * Contains raw information about barcodes on the input image
    */
    BARCODES = 5,
    /**
    * Contains cropped graphic fields from Visual zone
    */
    VISUAL_GRAPHICS = 6,
    /**
    * Contains list of document type candidates with their probabilities and descriptions
    */
    DOCUMENT_TYPE_CANDIDATES = 8,
    /**
    * Contains description of determined document type, if any
    */
    DOCUMENT_TYPE = 9,
    /**
    * Contains lexical data analysis results that allow you to compare MRZ OCR results, Visual zone OCR results, barcodes and RFID chip data for an additional assessment of the authenticity of the document (this is an old format, better use TEXT type)
    */
    LEXICAL_ANALYSIS = 15,
    /**
    * Contains Visual zone OCR results
    */
    VISUAL_TEXT = 17,
    /**
    * Contains barcode parsing result with text fields
    */
    BARCODE_TEXT = 18,
    /**
    * Contains barcode parsing result with graphic fields
    */
    BARCODE_GRAPHICS = 19,
    /**
    * Contains result of document authenticity checks
    */
    AUTHENTICITY = 20,
    /**
    * Contains image quality check results
    */
    IMAGE_QUALITY = 30,
    /**
    * Contains check statuses with details, grouped by source
    */
    STATUS = 33,
    /**
    * Contains result of portraits comparison
    */
    PORTRAIT_COMPARISON = 34,
    /**
    * Contains document textual fields from all sources (mrz, rfid, visual, barcode) with validity and cross-source compare checks
    */
    TEXT = 36,
    /**
    * Contains images from all document sources (mrz, rfid, visual, barcode)
    */
    IMAGES = 37,
    /**
    * Contains result of fingerprints comparison
    */
    FINGERPRINT_COMPARISON = 39,
    /**
    * Contains encrypted ResultContainerList
    */
    ENCRYPTED_RCL = 49,
    /**
    * Contains license
    */
    LICENSE = 50,
    /**
    * Contains information about document position on the input image, its center, angle, etc
    */
    DOCUMENT_POSITION = 85,
    /**
    * Contains RFID raw data
    */
    RFID_RAW_DATA = 101,
    /**
    * Contains RFID text results
    */
    RFID_TEXT = 102,
    /**
    * Contains RFID graphic results
    */
    RFID_GRAPHICS = 103,
    /**
    * Contains RFID binary data
    */
    RFID_BINARY_DATA = 104,
    /**
    * Contains RFID original graphics data
    */
    RFID_ORIGINAL_GRAPHICS = 105
}
