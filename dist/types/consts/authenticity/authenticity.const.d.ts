/**
* Enumeration describes available authenticity checks: https://docs.regulaforensics.com/develop/doc-reader-sdk/web-service/development/enums/authenticity-result-type/.
* @enum {number}
*/
export declare enum eAuthenticity {
    /**
    * No authenticity control procedure
    */
    NONE = 0,
    /**
    * Document luminescence check in UV light
    */
    UV_LUMINESCENCE = 1,
    /**
    * B900 ink MRZ contrast check in IR light
    */
    IR_B900 = 2,
    /**
    * Image patterns presence/absence check (position, shape, color)
    */
    IMAGE_PATTERN = 4,
    /**
    * Confirm laminate integrity check in axial light
    */
    AXIAL_PROTECTION = 8,
    /**
    * Protection fibers presence check (color, density) in UV light
    */
    UV_FIBERS = 16,
    /**
    * Document elements visibility check in IR light
    */
    IR_VISIBILITY = 32,
    /**
    * OCR for the text field in UV light comparison with other text sources check
    */
    OCR_SECURITY_TEXT = 64,
    /**
    * Invisible Personal Information (IPI) visualization
    */
    IPI = 128,
    /**
    * Document photo check in IR light
    */
    IR_PHOTO = 256,
    /**
    * Owner's photo embedding check (is photo printed or sticked)
    */
    PHOTO_EMBED_TYPE = 512,
    /**
    * OVI check
    */
    OVI = 1024,
    /**
    * IR luminescence check
    */
    IR_LUMINESCENCE = 2048,
    /**
    * Hologram presence check
    */
    HOLOGRAMS = 4096,
    /**
    * Owner&#39;s photo area advanced check (photo shape, size, position, etc.)
    */
    PHOTO_AREA = 8192,
    /**
    * UV background check
    */
    UV_BACKGROUND = 16384,
    /**
    * Portrait comparison check (document printed vs chip vs live)
    */
    PORTRAIT_COMPARISON = 32768,
    /**
    * Barcode format check (code metadata, data format, contents format, etc.)
    */
    BARCODE_FORMAT_CHECK = 65536,
    /**
    * Kinegram check
    */
    KINEGRAM = 131072,
    /**
    * LetterScreen check
    */
    LETTER_SCREEN = 262144,
    /**
    * Hologram detection and validation check
    */
    HOLOGRAM_DETECTION = 524288,
    /**
    * Fingerprint comparison check
    */
    FINGERPRINT_COMPARISON = 1048576,
    /**
    * Document liveness check
    */
    LIVENESS = 2097152,
    /**
    * Extended OCR Check
    */
    EXTENDED_OCR_CHECK = 4194304,
    /**
    * Extended MRZ check
    */
    EXTENDED_MRZ_CHECK = 8388608,
    /**
    * Flag for status-only authenticity
    */
    STATUS_ONLY = 2147483648
}
