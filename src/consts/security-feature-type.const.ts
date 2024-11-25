/**
* Enumeration contains identifiers determining type of features for a document authenticity checks.
* @enum {number}
*/
export enum eSecurityFeatureType {
  /**
  * Blank element
  */
  BLANK = 0,

  /**
  * Personalization element
  */
  FILL = 1,

  /**
  * Photo
  */
  PHOTO = 2,

  /**
  * MRZ
  */
  MRZ = 3,

  /**
  * False luminescence
  */
  FALSE_LUMINESCENCE = 4,

  /**
  * Hologram (static)
  */
  HOLO_SIMPLE = 5,

  /**
  * Hologram (static verify)
  */
  HOLO_VERIFY_STATIC = 6,

  /**
  * Hologram (static verify multiple)
  */
  HOLO_VERIFY_MULTI_STATIC = 7,

  /**
  * Hologram (dynamic verify)
  */
  HOLO_VERIFY_DYNAMIC = 8,

  /**
  * Pattern (non-interrupted)
  */
  PATTERN_NOT_INTERRUPTED = 9,

  /**
  * Pattern (non-shifted)
  */
  PATTERN_NOT_SHIFTED = 10,

  /**
  * Pattern (same colors)
  */
  PATTERN_SAME_COLORS = 11,

  /**
  * Pattern (IR invisible)
  */
  PATTERN_IR_INVISIBLE = 12,

  /**
  * Photo size
  */
  PHOTO_SIZE_CHECK = 13,

  /**
  * Main vs ghost portrait comparison
  */
  PORTRAIT_COMPARISON_VS_GHOST = 14,

  /**
  * Main vs RFID portrait comparison
  */
  PORTRAIT_COMPARISON_VS_RFID = 15,

  /**
  * Main vs other page portrait comparison
  */
  PORTRAIT_COMPARISON_VS_VISUAL = 16,

  /**
  * Barcode
  */
  BARCODE = 17,

  /**
  * Pattern (different line thickness)
  */
  PATTERN_DIFFERENT_LINES_THICKNESS = 18,

  /**
  * Main vs live camera portrait comparison
  */
  PORTRAIT_COMPARISON_VS_CAMERA = 19,

  /**
  * RFID vs live camera portrait comparison
  */
  PORTRAIT_COMPARISON_RFID_VS_CAMERA = 20,

  /**
  * Ghost photo
  */
  GHOST_PHOTO = 21,

  /**
  * Clear ghost photo
  */
  CLEAR_GHOST_PHOTO = 22,

  /**
  * Invisible object
  */
  INVISIBLE_OBJECT = 23,

  /**
  * Low contrast object
  */
  LOW_CONTRAST_OBJECT = 24,

  /**
  * Photo color check
  */
  PHOTO_COLOR = 25,

  /**
  * Photo squareness
  */
  PHOTO_SHAPE = 26,

  /**
  * Photo corners shape
  */
  PHOTO_CORNERS = 27,

  /**
  * OCR
  */
  OCR = 28,

  /**
  * External vs main portrait comparison
  */
  PORTRAIT_COMPARISON_EXT_VS_VISUAL = 29,

  /**
  * External vs RFID portrait comparison
  */
  PORTRAIT_COMPARISON_EXT_VS_RFID = 30,

  /**
  * External vs live camera portrait comparison
  */
  PORTRAIT_COMPARISON_EXT_VS_CAMERA = 31,

  /**
  * Portrait Depth
  */
  LIVENESS_DEPTH = 32,

  /**
  * Micro text
  */
  MICRO_TEXT = 33,

  /**
  * Fluorescent Object
  */
  FLUORESCENT_OBJECT = 34,

  /**
  * Facial landmarks check
  */
  LANDMARK_CHECK = 35,

  /**
  * Facial image presence
  */
  FACE_PRESENCE = 36,

  /**
  * Facial image absence
  */
  FACE_ABSENCE = 38,

  /**
  * Liveness screen capture.
  * LIVENESS_ELECTRONIC_DEVICE is used instead.
  * @deprecated
  */
  LIVENESS_SCREEN_CAPTURE = 39,

  /**
  * Liveness electronic device
  */
  LIVENESS_ELECTRONIC_DEVICE = 40,

  /**
  * Liveness OVI
  */
  LIVENESS_OVI = 41,

  /**
  * Barcode size check
  */
  BARCODE_SIZE_CHECK = 42,

  /**
  * LASINK
  */
  LASINK = 43,

  /**
  * Liveness MLI
  */
  LIVENESS_MLI = 44,

  /**
  * Liveness barcode background
  */
  LIVENESS_BARCODE_BACKGROUND = 45,

  /**
  * Visual zone portrait image vs. image from barcode
  */
  PORTRAIT_COMPARISON_VS_BARCODE = 46,

  /**
  * Image from barcode vs. image from RFID
  */
  PORTRAIT_COMPARISON_RFID_VS_BARCODE = 47,

  /**
  * Image from barcode vs. external source image
  */
  PORTRAIT_COMPARISON_EXT_VS_BARCODE = 48,

  /**
  * Image from barcode vs. photo from camera
  */
  PORTRAIT_COMPARISON_BARCODE_VS_CAMERA = 49,

  /**
  * Digital signature сheck
  */
  CHECK_DIGITAL_SIGNATURE = 50,

  /**
  * Contact сhip check
  */
  CONTACT_CHIP_CLASSIFICATION = 51,

  /**
   * Head position check
   */
  HEAD_POSITION_CHECK = 52,

  /**
   * Liveness black and white copy check
   */
  LIVENESS_BLACK_AND_WHITE_COPY_CHECK = 53,
}
