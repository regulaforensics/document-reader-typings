/**
* Enumeration contains identificators which determinate the result of the
* text field comparasing from the different sources.
* @enum {number}
*/
export declare enum eCheckDiagnose {
    /**
    * Check was not performed
    */
    UNKNOWN = 0,
    /**
    * Check was ok
    */
    PASS = 1,
    /**
    * Invalid input data
    */
    INVALID_INPUT_DATA = 2,
    /**
    * Internal error in module
    */
    INTERNAL_ERROR = 3,
    /**
    * Exception caught
    */
    EXCEPTION_IN_MODULE = 4,
    /**
    * Can't make reliable decision
    */
    UNCERTAIN_VERIFICATION = 5,
    /**
    * Image in necessary light not found
    */
    NECESSARY_IMAGE_NOT_FOUND = 7,
    /**
    * Necessary side of photo not found
    */
    PHOTO_SIDES_NOT_FOUND = 8,
    /**
    * Invalid checksum
    */
    INVALID_CHECKSUM = 10,
    /**
    * Syntactical error
    */
    SYNTAX_ERROR = 11,
    /**
    * Logical error
    */
    LOGIC_ERROR = 12,
    /**
    * Comparison was incorrect
    */
    SOURCES_COMPARISON_ERROR = 13,
    /**
    * Logical error, e.g. the current date is less than issue date
    */
    FIELDS_COMPARISON_LOGIC_ERROR = 14,
    /**
    * Wrong field format
    */
    INVALID_FIELD_FORMAT = 15,
    /**
    * Element of the luminescense in the UV does not meet the standard
    */
    TRUE_LUMINESCENCE_ERROR = 20,
    /**
    * The presence of excess luminescence in UV
    */
    FALSE_LUMINESCENCE_ERROR = 21,
    /**
    * Pattern does not match the standard
    */
    FIXED_PATTERN_ERROR = 22,
    /**
    * Low contrast of object in transmitted IR light
    */
    LOW_CONTRAST_IN_IR_LIGHT = 23,
    /**
    * Background of page is too light or has invalid color
    */
    INCORRECT_BACKGROUND_LIGHT = 24,
    /**
    * Background lightness of two pages is different
    */
    BACKGROUND_COMPARISON_ERROR = 25,
    /**
    * Text has incorrect color of luminescence in UV light
    */
    INCORRECT_TEXT_COLOR = 26,
    /**
    * Invalid luminescence in photo area
    */
    PHOTO_FALSE_LUMINESCENCE = 27,
    /**
    * Object is too shifted from standard coordinates
    */
    TOO_MUCH_SHIFT = 28,
    /**
    * No protective fibers were found in UV
    */
    FIBERS_NOT_FOUND = 30,
    /**
    * Error finding fibers, too many objects
    */
    TOO_MANY_OBJECTS = 31,
    /**
    * Speck or exposure in UV image
    */
    SPECKS_IN_UV = 33,
    /**
    * Resolution too low for fibers search
    */
    TOO_LOW_RESOLUTION = 34,
    /**
    * Erroneous visibility of the element in IR
    */
    INVISIBLE_ELEMENT_PRESENT = 40,
    /**
    * Element is absent in IR
    */
    VISIBLE_ELEMENT_ABSENT = 41,
    /**
    * Element should be in color
    */
    ELEMENT_SHOULD_BE_COLORED = 42,
    /**
    * Element should be in grayscale
    */
    ELEMENT_SHOULD_BE_GRAYSCALE = 43,
    /**
    * IR image does not match the image in white light
    */
    PHOTO_WHITE_IR_DONT_MATCH = 44,
    /**
    * Glow paper in MRZ (UV dull paper check)
    */
    UV_DULL_PAPER_MRZ = 50,
    /**
    * Luminescence characters in MRZ
    */
    FALSE_LUMINESCENCE_IN_MRZ = 51,
    /**
    * Glow in the field of photo paper (UV dull paper check)
    */
    UV_DULL_PAPER_PHOTO = 52,
    /**
    * Glow of the whole paper form (UV dull paper check)
    */
    UV_DULL_PAPER_BLANK = 53,
    /**
    * Glow of the document in UV (UV dull paper check)
    */
    UV_DULL_PAPER_ERROR = 54,
    /**
    * Element of blank has luminescence
    */
    FALSE_LUMINESCENCE_IN_BLANK = 55,
    /**
    * Violation of the retro-reflective protection
    */
    BAD_AREA_IN_AXIAL = 60,
    /**
    * Invalid params for IPI check
    */
    FALSE_IP_PARAMETERS = 65,
    /**
    * IR image too bright
    */
    FIELD_POS_CORRECTOR_HIGHLIGHT_IR = 80,
    /**
    * Glares in photo area
    */
    FIELD_POS_CORRECTOR_GLARES_IN_PHOTO_AREA = 81,
    /**
    * The portrait was replaced
    */
    FIELD_POS_CORRECTOR_PHOTO_REPLACED = 82,
    /**
    * Facial landmarks (eyes) check error
    */
    FIELD_POS_CORRECTOR_LANDMARKS_CHECK_ERROR = 83,
    /**
    * No facial image found
    */
    FIELD_POS_CORRECTOR_FACE_PRESENCE_CHECK_ERROR = 84,
    /**
    * A facial image is found
    */
    FIELD_POS_CORRECTOR_FACE_ABSENCE_CHECK_ERROR = 85,
    /**
    * OVI object is not visible in IR
    */
    OVI_IR_INVISIBLE = 90,
    /**
    * Insufficient area of the object OVI
    */
    OVI_INSUFFICIENT_AREA = 91,
    /**
    * OVI color of an object does not change
    */
    OVI_COLOR_INVARIABLE = 92,
    /**
    * Impossible to determine the color of the AXIAL image
    */
    OVI_BAD_COLOR_FRONT = 93,
    /**
    * Impossible to determine the color of the WHITE image
    */
    OVI_BAD_COLOR_SIDE = 94,
    /**
    * Wide color spread
    */
    OVI_WIDE_COLOR_SPREAD = 95,
    /**
    * Not enough color information
    */
    OVI_BAD_COLOR_PERCENT = 96,
    /**
    * Hologram element absent
    */
    HOLOGRAM_ELEMENT_ABSENT = 100,
    /**
    * There are no side or top images. Check cancelled
    */
    HOLOGRAM_SIDE_TOP_IMAGES_ABSENT = 101,
    /**
    * Hologram element present
    */
    HOLOGRAM_ELEMENT_PRESENT = 102,
    /**
    * Frame with hologram not found
    */
    HOLOGRAM_FRAMES_IS_ABSENT = 103,
    /**
    * Field with hologram not found in description
    */
    HOLOGRAM_HOLO_FIELD_IS_ABSENT = 104,
    /**
    * Pattern is interrupted
    */
    PHOTO_PATTERN_INTERRUPTED = 110,
    /**
    * Some of the patterns are shifted relative to each other
    */
    PHOTO_PATTERN_SHIFTED = 111,
    /**
    * Some parts of the pattern have different color
    */
    PHOTO_PATTERN_DIFFERENT_COLORS = 112,
    /**
    * Pattern visible in the infrared
    */
    PHOTO_PATTERN_IR_VISIBLE = 113,
    /**
    * Edge of the photo does not intersect with the pattern. Check cancelled
    */
    PHOTO_PATTERN_NOT_INTERSECT = 114,
    /**
    * Size of the photo does not correspond to requirements
    */
    PHOTO_SIZE_IS_WRONG = 115,
    /**
    * Some parts of the pattern have invalid color
    */
    PHOTO_PATTERN_INVALID_COLOR = 116,
    /**
    * Some patterns are relatively shifted
    */
    PHOTO_PATTERN_SHIFTED_VERT = 117,
    /**
    * Not found Pattern. Check cancelled
    */
    PHOTO_PATTERN_PATTERN_NOT_FOUND = 118,
    /**
    * Different lines thickness
    */
    PHOTO_PATTERN_DIFFERENT_LINES_THICKNESS = 119,
    /**
    * Photo shape is not rectangular
    */
    PHOTO_IS_NOT_RECTANGLE = 120,
    /**
    * Photo corners don't satisfy the requirements
    */
    PHOTO_CORNERS_IS_WRONG = 121,
    /**
    * For internal use
    */
    DOCUMENT_IS_CANCELLING = 122,
    /**
    * Text color should be blue
    */
    TEXT_COLOR_SHOULD_BE_BLUE = 130,
    /**
    * Text color should be green
    */
    TEXT_COLOR_SHOULD_BE_GREEN = 131,
    /**
    * Text color should be red
    */
    TEXT_COLOR_SHOULD_BE_RED = 132,
    /**
    * Text should be black
    */
    TEXT_SHOULD_BE_BLACK = 133,
    /**
    * Barcode read with errors
    */
    BARCODE_WAS_READ_WITH_ERRORS = 140,
    /**
    * Barcode data format error
    */
    BARCODE_DATA_FORMAT_ERROR = 141,
    /**
    * Barcode size parameters error
    */
    BARCODE_SIZE_PARAMS_ERROR = 142,
    /**
    * Not all barcodes read
    */
    NOT_ALL_BARCODES_READ = 143,
    /**
    * Glares in the barcode area
    */
    GLARES_IN_BARCODE_AREA = 144,
    /**
    * Portraits differ
    */
    PORTRAIT_COMPARISON_PORTRAITS_DIFFER = 150,
    /**
    * No reply from portrait comparison service
    */
    PORTRAIT_COMPARISON_NO_SERVICE_REPLY = 151,
    /**
    * Portrait comparison service error
    */
    PORTRAIT_COMPARISON_SERVICE_ERROR = 152,
    /**
    * Not enough images
    */
    PORTRAIT_COMPARISON_NOT_ENOUGH_IMAGES = 153,
    /**
    * No image from camera
    */
    PORTRAIT_COMPARISON_NO_LIVE_PHOTO = 154,
    /**
    * No license on portrait comparison service
    */
    PORTRAIT_COMPARISON_NO_SERVICE_LICENSE = 155,
    /**
    * No portraits detected
    */
    PORTRAIT_COMPARISON_NO_PORTRAIT_DETECTED = 156,
    /**
    * Unsuitable light conditions
    */
    MOBILE_IMAGES_UNSUITABLE_LIGHT_CONDITIONS = 160,
    /**
    * No difference in visible and UV mobile images. Possible UV torch malfunction
    */
    MOBILE_IMAGES_WHITE_UV_NO_DIFFERENCE = 161,
    /**
    * Fingerprints comparison mismatch
    */
    FINGERPRINTS_COMPARISON_MISMATCH = 170,
    /**
    * Face isn’t detected
    */
    HOLO_PHOTO_FACE_NOT_DETECTED = 180,
    /**
    * Face comparison failed
    */
    HOLO_PHOTO_FACE_COMPARISON_FAILED = 181,
    /**
    * Glare in center absent
    */
    HOLO_PHOTO_GLARE_IN_CENTER_ABSENT = 182,
    /**
    * Hologram element shape error
    */
    HOLO_PHOTO_HOLO_ELEMENT_SHAPE_ERROR = 183,
    /**
    * Algorithm steps error
    */
    HOLO_PHOTO_ALGORITHMS_STEPS_ERROR = 184,
    /**
    * Hologram areas not loaded
    */
    HOLO_PHOTO_HOLO_AREAS_NOT_LOADED = 185,
    /**
    * Hologram check finished by time out
    */
    HOLO_PHOTO_FINISHED_BY_TIMEOUT = 186,
    /**
    * Document is not within image frame
    */
    HOLO_PHOTO_DOCUMENT_OUTSIDE_FRAME = 187,
    /**
    * Liveness depth check failed
    */
    LIVENESS_DEPTH_CHECK_FAILED = 190,
    /**
    * Document capture from the screen is detected
    */
    LIVENESS_SCREEN_CAPTURE_DETECTED = 191,
    /**
    * Document capture from another device is detected
    */
    LIVENESS_ELECTRONIC_DEVICE_DETECTED = 192,
    /**
    * Incorrect MRZ area dimensions
    */
    MRZ_QUALITY_WRONG_SYMBOL_POSITION = 200,
    /**
    * Signs of MRZ area editing detected
    */
    MRZ_QUALITY_WRONG_BACKGROUND = 201,
    /**
    * Incorrect MRZ area width
    */
    MRZ_QUALITY_WRONG_MRZ_WIDTH = 202,
    /**
    * Incorrect MRZ area height
    */
    MRZ_QUALITY_WRONG_MRZ_HEIGHT = 203,
    /**
    * Incorrect distance between the lines of the MRZ area
    */
    MRZ_QUALITY_WRONG_LINE_POSITION = 204,
    /**
    * Incorrect font type
    */
    MRZ_QUALITY_WRONG_FONT_TYPE = 205,
    /**
    * Incorrect text data position
    */
    OCR_QUALITY_TEXT_POSITION = 220,
    /**
    * Incorrect text data font
    */
    OCR_QUALITY_INVALID_FONT = 221,
    /**
    * Signs of OCR area editing detected
    */
    OCR_QUALITY_INVALID_BACKGROUND = 222,
    /**
    * Invalid LASINK lines frequency
    * @see {https://www.idemia.com/wp-content/uploads/2021/02/lasink-origin-idemia-brochure-202206.pdf}
    */
    LASINK_INVALID_LINES_FREQUENCY = 230,
    /**
    * Traces of an electronic device were found in the image
    */
    DOC_LIVENESS_ELECTRONIC_DEVICE_DETECTED = 240,
    /**
    * Invalid barcode background
    */
    DOC_LIVENESS_INVALID_BARCODE_BACKGROUND = 241,
    /**
    * For internal use
    */
    LAST_DIAGNOSE_VALUE = 250
}
