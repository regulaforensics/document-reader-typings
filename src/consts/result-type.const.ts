
/*

typedef enum eRPRM_ResultType
{
    RPRM_ResultType_Empty                       = 0,
    RPRM_ResultType_RawImage                    = 1,            // TRawImageContainer
    RPRM_ResultType_FileImage                   = 2,            // byte array
    RPRM_ResultType_MRZ_OCR_Extended            = 3,            // TDocVisualExtendedInfo
    RPRM_ResultType_BarCodes                    = 5,            // TDocBarCodeInfo
    RPRM_ResultType_Graphics                    = 6,            // TDocGraphicsInfo
    RPRM_ResultType_MRZ_TestQuality             = 7,            // TDocMRZTestQuality
    RPRM_ResultType_DocumentTypesCandidates     = 8,            // TCandidatesListContainer
    RPRM_ResultType_ChosenDocumentTypeCandidate = 9,            // TOneCandidate
    RPRM_ResultType_DocumentsInfoList           = 10,           // not used. TListDocsInfo
    RPRM_ResultType_OCRLexicalAnalyze           = 15,           // TListVerifiedFields
    RPRM_ResultType_RawUncroppedImage           = 16,           // TRawImageContainer
    RPRM_ResultType_Visual_OCR_Extended         = 17,           // TDocVisualExtendedInfo
    RPRM_ResultType_BarCodes_TextData           = 18,           // TDocVisualExtendedInfo
    RPRM_ResultType_BarCodes_ImageData          = 19,           // TDocGraphicsInfo
    RPRM_ResultType_Authenticity                = 20,           // TAuthenticityCheckList


    //-------------------- unused  ---------------
    RPRM_ResultType_ExpertAnalyze               = 21,           // not used
    RPRM_ResultType_OCRLexicalAnalyzeEx         = 22,           // not used
    //-------------------- unused  ---------------

    RPRM_ResultType_EOSImage                    = 23,           // TRawImageContainer for EOS full-size images
    RPRM_ResultType_Bayer                       = 24,           // TRawImageContainer
    RPRM_ResultType_MagneticStripe              = 25,           // byte array
    RPRM_ResultType_MagneticStripe_TextData     = 26,           // TDocVisualExtendedInfo
    RPRM_ResultType_FieldFileImage              = 27,           // byte array
    RPRM_ResultType_DatabaseCheck               = 28,           // TDatabaseCheck
    RPRM_ResultType_FingerprintTemplateISO      = 29,           // byte array

    RPRM_ResultType_InputImageQuality           = 30,           // TImageQualityCheckList
    RPRM_ResultType_DeviceInfo                  = 31,           // TRegulaDeviceProperties
    RPRM_ResultType_LivePortrait                = 32,           // TDocGraphicsInfo
    RPRM_ResultType_Status                      = 33,           // TStatus
    RPRM_ResultType_Portrait_Comparison         = 34,           // TAuthenticityCheckList
    RPRM_ResultType_ExtPortrait                 = 35,           // TDocGraphicsInfo
    RPRM_ResultType_Text                        = 36,           // TTextResult
    RPRM_ResultType_Images                      = 37,           // TImagesResult
    RPRM_ResultType_FingerPrints                = 38,           // TDocGraphicsInfo
    RPRM_ResultType_FingerPrint_Comparison      = 39,           // TAuthenticityCheckList
    RPRM_ResultType_FaceDatabaseCheck           = 40,           // TDatabaseCheck
    RPRM_ResultType_BSI_XML_v2                  = 73,           // BSI XML v2 result. buffer = char* - pointer to BSI XML v2
    RPRM_ResultType_DocumentPosition            = 85,           // TBoundsResult
    RPRM_ResultType_BSI_XML                     = 92,           // BSI XML result. buffer = char* - pointer to BSI XML
    RPRM_ResultType_Custom                      = 100,
} eRPRM_ResultType;


enum eRPRM_ResultType_Internal
{
    //	new values add in end - value should be less than 100
    RPRM_ResultType_Internal_CheckImagesResult = 110, // result of ImageSorter; buffer = char* (json string)
    RPRM_ResultType_Internal_PhotoPosition = 99,        // precise photo position; buffer = TFieldPosCorrectorResult *
    RPRM_ResultType_Internal_MainDocumentInfo = 98,        // Main document ID; returns TDocumentInfo *
    RPRM_ResultType_Internal_FaceDetection = 97,        // Face detection result; buffer = CRectCandidats *
    RPRM_ResultType_Internal_L1StyleResults = 96,     // some READERDEMO internal thing
    RPRM_ResultType_Internal_DocFormat = 95,        // unrotated document format. buffer = CDocFormat (0..3)
    RPRM_ResultType_Internal_DocFormatRotated = 94,        // rotated document format from MRZ. buffer = CDocFormat (any value)
    RPRM_ResultType_Internal_DocPreOrientationFace = 93,    // rotated document format from face detection. buffer = eRPRM_Orientation
    RPRM_ResultType_Internal_ColorCalibrationInfo = 91, // color calibration buffer for single light
    RPRM_ResultType_Internal_DistCalibrationInfo = 90, // distortion calibration buffer for single mode
    RPRM_ResultType_Internal_DocsList = 89,    // not used. list all known documents; buf_length - number of elements, buffer - int array with document IDs,
    RPRM_ResultType_Internal_VisaBounds = 88,        // visa bounds from MRZ. buffer = RECT*;
    RPRM_ResultType_Internal_MrzDetector = 87,        // MRZDetector.dll result. buffer = TResultMRZDetector *;
    RPRM_ResultType_Internal_DocumentPositionVD = 86,        // Videodetection result. buffer = POSITIONDOCUMENT*;
    RPRM_ResultType_Internal_Orientation = 84,        // docuemnt orientation. buffer = eRPRM_Orientation;
    RPRM_ResultType_Internal_PreOrientation = 83,        // docuemnt orientation. buffer = eRPRM_Orientation;
    RPRM_ResultType_Internal_DeviceType = 82,        // docuemnt orientation. buffer = TDeviceType *;
    RPRM_ResultType_Internal_TextDocInfo = 81,			// document information. buffer = TDocInfo *
    RPRM_ResultType_Internal_GraphicsDocInfo = 80,
    RPRM_ResultType_Internal_BarcodeDocInfo = 79,
    RPRM_ResultType_Internal_SourceImagesInfo = 78,        // images info. buffer = TSourceImagesInfo *;
    RPRM_ResultType_Internal_RequiredOcrFields = 77,    // buffer = TDwordArray*;
    RPRM_ResultType_Internal_LexAnalysisDepth = 76,        // buffer = uint32_t;
    RPRM_ResultType_Internal_OriginalResolutionPPM = 75,        // buffer = uint32_t;
    RPRM_ResultType_Internal_BoundsLocationParams = 74, // buffer = TBoundsLocationParams *
    RPRM_ResultType_Internal_CandidateInfo = 72,    // not used. buffer = TOneCandidate *
    RPRM_ResultType_Internal_SamplePath = 71, // buffer = char *
    RPRM_ResultType_Internal_BindResult = 70,            // buffer = TBindingResultsList*
    RPRM_ResultType_Internal_SaveDebugInfo = 69,            // buffer = NULL
    RPRM_ResultType_Internal_DocumentJsonDesc = 68,          // buffer = char* (JSON Utf-8)
    RPRM_ResultType_Internal_Bind_LayersListDesc = 67,        // buffer = TBindingLayersList*
    RPRM_ResultType_Internal_MrzImage = 66,        // buffer = TRawImageContainer*
    RPRM_ResultType_Internal_RawCalibrateImages = 65, // buffer = TRawCalibrateImages*
    RPRM_ResultType_Internal_ByteArray = 64, // buffer = unsigned char *, buffer_length = size
    RPRM_ResultType_Internal_DocumentJSON = 63, // buffer = Json::Value.
    RPRM_ResultType_Internal_BarcodePosition = 62, // buffer = TBoundsResult*;
    RPRM_ResultType_Internal_MrzPosition = 61, // buffer = TBoundsResult*;
    RPRM_ResultType_Internal_Point = 60, // buffer = POINT*;
    RPRM_ResultType_Internal_LetterScreenParams = 59, // Input coordinates for LetterScreen check, buffer = RECT*
    RPRM_ResultType_Internal_LetterScreenResult = 58, // buffer = TIdentResult*
    RPRM_ResultType_Internal_LetterScreenMRZ = 57, // input MRZ for LetterScreen check, buffer = char*
    RPRM_ResultType_Internal_IsPageProcessed = 56, // indication that page was processed well, buffer - not used
    RPRM_ResultType_Internal_TransformPoint = 55, // GetPointPosRequest for ePC_Calibration_TransformPoint or ePC_Calibration_TransformPointBack
    RPRM_ResultType_Internal_RectF = 54, // RECTF for
    RPRM_ResultType_Internal_TextColor = 53, // checkColor authenticity check result
    RPRM_ResultType_Internal_FieldsSplitInfo = 52, // ePC_ImSeg_GetFieldSplitInfo result, buffer - char*
    RPRM_ResultType_Internal_ProcessParams = 51, // buffer = Json::Value*
    RPRM_ResultType_Internal_License = 50, // buffer = unsigned char *, buffer_length = size
    RPRM_ResultType_Internal_EncryptedRCL = 49, // buffer = unsigned char *, buffer_length = size
    RPRM_ResultType_Internal_RFID_Session = 48, // buffer = uint8_t*, buffer_length = size
    RPRM_ResultType_Internal_ProcessParamsString = 47, // buffer = char* (JSON Utf-8)
    RPRM_ResultType_Internal_PDFImagesTextJson = 46, // buffer = char* (JSON Utf-8)
    RPRM_ResultType_Internal_JsonValue = 45, // buffer = Json::Value*
};


*/

/*

* */

/**
* Enumeration describes available container types.
* @enum {number}
*/
export enum ResultType {
  // AuthenticityCheckListContainer
  AUTHENTICITY = 20,
  PORTRAIT_COMPARISON = 34,
  FINGER_PRINT_COMPARISON = 39,

  // DocBarCodeInfoContainer
  BAR_CODES = 5,

  // OneCandidateContainer
  CHOSEN_DOCUMENT_TYPE_CANDIDATE = 9,

  // StatusContainer
  STATUS = 33,



  /*EMPTY = 0,
  RAW_IMAGE = 1,
  FILE_IMAGE = 2,
  MRZ_OCR_EXTENDED = 3,
  BAR_CODES = 5,
  GRAPHICS = 6,
  MRZ_TEST_QUALITY = 7,
  DOCUMENT_TYPES_CANDIDATES = 8,
  CHOSEN_DOCUMENT_TYPE_CANDIDATE = 9,
  DOCUMENTS_INFO_LIST = 10,
  OCR_LEXICAL_ANALYZE = 15,
  RAW_UNCROPPED_IMAGE = 16,
  VISUAL_OCR_EXTENDED = 17,
  BAR_CODES_TEXT_DATA = 18,
  BAR_CODES_IMAGE_DATA = 19,
  AUTHENTICITY = 20,
  EXPERT_ANALYZE = 21,
  OCR_LEXICAL_ANALYZE_EX = 22,
  EOS_IMAGE = 23,
  BAYER = 24,
  MAGNETIC_STRIPE = 25,
  MAGNETIC_STRIPE_TEXT_DATA = 26,
  FIELD_FILE_IMAGE = 27,
  DATABASE_CHECK = 28,
  FINGERPRINT_TEMPLATE_ISO = 29,
  INPUT_IMAGE_QUALITY = 30,
  DEVICE_INFO = 31,
  LIVE_PORTRAIT = 32,
  STATUS = 33,
  PORTRAIT_COMPARISON = 34,
  EXT_PORTRAIT = 35,
  TEXT = 36,
  IMAGES = 37,
  FINGER_PRINTS = 38,
  FINGER_PRINT_COMPARISON = 39,
  BSI_XML_V2 = 73,
  DOCUMENT_POSITION = 85,
  BSI_XML = 92,
  CUSTOM = 100,*/


  /*
  DOC_VISUAL_EXTENDED_INFO = 3,
  DOC_GRAPHICS_INFO = 6,
  MRZ_TEST_QUALITY = 7,
  ONE_CANDIDATE = 9,
  LIST_VERIFIED_FIELDS = 15,
  RAW_IMAGE_CONTAINER = 16,
  DOC_VISUAL_EXTENDED_INFO_2 = 17,
  AUTHENTICITY_CHECK_LIST = 20,
  IMAGE_QUALITY_CHECK_LIST = 30,
  STATUS = 33,
  TEXT = 36,
  IMAGES = 37,
  MRZ_POSITION = 61,
  DOCUMENT_POSITION = 85,
  RESULT_MRZ_DETECTOR = 87,
  FACE_DETECTION = 97,*/
}
