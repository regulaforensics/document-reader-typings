import {
  IsArray,
  IsBoolean,
  IsDefined,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator'
import { ProcessParams as cProcessParams } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import {
  eDocFormat,
  eDocType,
  eLCID,
  eLogLevel,
  eMeasureSystem,
  eMRZDetectMode,
  eMRZFormat,
  eResult,
  eScenario,
  eTextPostProcessing,
  eVisualFieldType,
  eInputBarcodeType,
} from '@/consts'
import { IsStringObjectRecord } from '@/validators'
import { FaceApi, ImageQA, PerDocumentConfig, ProcessParamsRfid, ProcessParamsAuth } from './children'

/**
 * Processing parameters
 */
export class ProcessParams implements cProcessParams {
  /**
   * This parameter is used to generate separate DTC-VC data container from RFID session data.
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  generateDTCVC?: boolean

  /**
   * The list of LCID types to recognize. If empty, values with all LCID types will be extracted.
   * Empty by default.
   * @type {eLCID[]|undefined}
   */
  @IsOptional()
  @IsEnum(eLCID, { each: true })
  lcidFilter?: eLCID[]

  /**
   * This parameter is used to enable document liveness check.
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  checkLiveness?: boolean

  /**
   * The list of LCID types to ignore during the recognition. If empty, values with all LCID types will be extracted.
   * Narrowing down the list can reduce processing time.
   * Empty by default.
   * @type {eLCID[]|undefined}
   */
  @IsOptional()
  @IsEnum(eLCID, { each: true })
  lcidIgnoreFilter?: eLCID[]

  /**
   * This parameter allows processing an image that contains a person and a document and compare the portrait photo from
   * the document with the person's face
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  oneShotIdentification?: boolean

  /**
   * This parameter allows comparing faces on Regula Face Web Service
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  useFaceApi?: boolean

  /**
   * Face API settings
   * @type {FaceApi|undefined}
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => FaceApi)
  faceApi?: FaceApi

  /**
   * This parameter allows enabling the CAN (Card Access Number) detection and recognition when using scenarios with
   * document location and MRZ reading, such as the MrzAndLocate scenario.
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  doDetectCan?: boolean

  /**
   * This parameter allows setting maximum height in pixels of output images and thus reducing image size to desired.
   * Does not change the aspect ratio.
   * Changes disabled if equals to 0.
   * Default 0.
   * @type {number|undefined}
   */
  @IsOptional()
  @IsInt()
  @Min(0)
  imageOutputMaxHeight?: number

  /**
   * This parameter allows setting maximum width in pixels of output images and thus reducing image size to desired.
   * Does not change the aspect ratio.
   * Changes disabled if equals to 0.
   * Default 0.
   * @type {number|undefined}
   */
  @IsOptional()
  @IsInt()
  @Min(0)
  imageOutputMaxWidth?: number

  /**
   * This parameter allows setting the processing scenario.
   * @type {eScenario}
   */
  @IsDefined()
  @IsEnum(eScenario)
  scenario: eScenario

  /**
   * Types of results to return in response. See \'Result\' enum for available options
   * @type {Result[]|undefined}
   */
  @IsOptional()
  @IsEnum(eResult, { each: true })
  resultTypeOutput?: eResult[]

  /**
   * Enable this option if the image you provide contains double page spread of the passport and you want to process
   * both pages in one go. It makes sense to use it for documents that have meaningful information on both pages, like
   * Russian domestic passport, or some others. Disabled by default.
   * @type {boolean|undefined}
   * @deprecated
   */
  @IsOptional()
  @IsBoolean()
  doublePageSpread?: boolean

  /**
   * When enabled together with \"doublePageSpread\" and there is a passport with two pages spread in the image, pages
   * will be cropped, straightened and aligned together, as if the document was captured on a flatbed scanner.
   * Disabled by default.
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  generateDoublePageSpreadImage?: boolean

  /**
   * List of text field types to extract. If empty, all text fields from template will be extracted. Narrowing the list
   * can shorten processing time.
   * Empty by default.
   * @type {eVisualFieldType[]|undefined}
   */
  @IsOptional()
  @IsEnum(eVisualFieldType, { each: true })
  fieldTypesFilter?: eVisualFieldType[]

  /**
   * This option allows you to set dates format so that solution will return dates in this format. For example, if you
   * supply 'MM/dd/yyyy', and document have printed date '09 JUL 2020' for the date os issue, you will get
   * '07/09/2020' as a result. By default it is set to system locale default (where the service is running).
   * @type {string|undefined}
   */
  @IsOptional()
  @IsString()
  dateFormat?: string

  /**
   * This option allows you to set measure system to be used for measurements in the result.
   * @type {eMeasureSystem|undefined}
   */
  @IsOptional()
  @IsEnum(eMeasureSystem)
  measureSystem?: eMeasureSystem

  /**
   * This parameter controls maximum resolution in dpi of output images. Resolution will remain original in case 0
   * is supplied. By default is set to return images in response with resolution not greater than 300 dpi for all
   * scenarios except FullAuth. In FullAuth scenario this limit is 1000 dpi by default.
   * @type {number|undefined}
   */
  @IsOptional()
  @IsInt()
  imageDpiOutMax?: number

  /**
   * This option can be enabled if you know for sure that the image you provide contains already cropped document by
   * its edges. This was designed to process on the server side images captured and cropped on mobile.
   * Disabled by default.
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  alreadyCropped?: boolean

  /**
   * This option allows passing custom processing parameters that can be implemented in future without changing API.
   * @type {Record<string, object>|undefined}
   */
  @IsOptional()
  @IsStringObjectRecord()
  customParams?: Record<string, object>

  /**
   * This option allows setting additional custom configuration per document type. If recognized document has
   * ID specified in config, processing adjusts according to designated configuration.
   * @type {PerDocumentConfig[]|undefined}
   */
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => PerDocumentConfig)
  config?: PerDocumentConfig[]

  /**
   * When enabled, results will contain transaction processing log. Disabled by default
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  log?: boolean

  /**
   * Specifies the level of detail in the transaction processing log.
   * @type {eLogLevel|undefined}
   */
  @IsOptional()
  @IsEnum(eLogLevel)
  logLevel?: eLogLevel

  /**
   * Force use of specific template ID and skip document type identification step.
   * @type {number|undefined}
   */
  @IsOptional()
  @IsInt()
  forceDocID?: number

  /**
   * When disabled, text field OCR will be done as is and then the recognized value will be matched to the field mask
   * for validity. If enabled, we are trying to read a field value with maximum efforts to match the mask and provide
   * a correctly formatted value, making assumptions based on the provided field mask in the template.
   * Enabled by default.
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  matchTextFieldMask?: boolean

  /**
   * When enabled, shorten the list of candidates to process during document detection in a single image process mode.
   * Reduces processing time for specific backgrounds.
   * Enabled by default.
   * @type {boolean|undefined}
   * @deprecated
   */
  @IsOptional()
  @IsBoolean()
  fastDocDetect?: boolean

  /**
   * When enabled, fail OCR field validity, if there is a glare over the text field on the image.
   * Disabled by default.
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  updateOCRValidityByGlare?: boolean

  /**
   * When enabled, each field in template will be checked for value presence and if the field is marked as required,
   * but has no value, it will have 'error' in validity status.
   * Disabled by default.
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  checkRequiredTextFields?: boolean

  /**
   * When enabled, returns cropped barcode images for unknown documents.
   * Disabled by default.
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  returnCroppedBarcode?: boolean

  /**
   * Image quality analysis settings
   * @type {ImageQA|undefined}
   */
  @IsOptional()
  @ValidateNested()
  imageQa?: ImageQA

  /**
   * When enabled, the image quality check status affects the document optical and overall status. Disabled by default.
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  strictImageQuality?: boolean

  /**
   * When enabled, image quality checks status affects document optical and overall status.
   * Disabled by default.
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  respectImageQuality?: boolean

  /**
   * Allows to force document format to be used for processing.
   * @type {eDocFormat|undefined}
   */
  @IsOptional()
  @IsEnum(eDocFormat)
  forceDocFormat?: eDocFormat

  /**
   * When enabled, no graphic fields will be cropped from document image. Disabled by default.
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  noGraphics?: boolean

  /**
   * When enabled, all personal data will be forcibly removed from the logs.
   * Disabled by default.
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  depersonalizeLog?: boolean

  /**
   * This option allows locating and cropping multiple documents from one image if enabled.
   * Disabled by default.
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  multiDocOnImage?: boolean

  /**
   * This option allows shifting the date of expiry into the future or past for number of months specified.
   * This is useful, for example, in some cases when document might be still valid for some period after original
   * expiration date to prevent negative validity status for such documents. Or by shifting the date to the past will
   * set negative validity for the documents that is about to expire in a specified number of months.
   * 0 by default
   * @type {number|undefined}
   */
  @IsOptional()
  @IsInt()
  shiftExpiryDate?: number

  /**
   * This options allows specifying the minimal age in years of the document holder for the document
   * to be considered valid.
   * @type {number|undefined}
   */
  @IsOptional()
  @IsInt()
  @Min(0)
  minimalHolderAge?: number

  /**
   * When enabled, returns input images in output.
   * Disabled by default.
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  returnUncroppedImage?: boolean

  /**
   * This option allows limiting MRZ formats to be recognized by specifying them in array.
   * @type {eMRZFormat[]|undefined}
   */
  @IsOptional()
  @IsEnum(eMRZFormat, { each: true })
  mrzFormatsFilter?: eMRZFormat[]

  /**
   * When enabled, make sure that in series processing MRZ is located fully inside the result document image,
   * if present on the document. Enabling this option may add extra processing time, by disabling optimizations,
   * but allows more stability in output image quality.
   * Disabled by default.
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  forceReadMrzBeforeLocate?: boolean

  /**
   * This option can be disabled to stop parsing after barcode is read.
   * Enabled by default.
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  parseBarcodes?: boolean

  /**
   * This option allows to convert text field values to upper or lower case.
   * @type {eTextPostProcessing|undefined}
   */
  @IsOptional()
  @IsEnum(eTextPostProcessing)
  convertCase?: eTextPostProcessing

  /**
   * When enabled, the Surname and GivenNames field will be divided into ft_First_Name, ft_Second_Name, ft_Third_Name,
   * ft_Fourth_Name, ft_Last_Name fields.
   * Disabled by default.
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  splitNames?: boolean

  /**
   * When enabled, OCR of perforated fields in the document template will not be performed. Disabled by default.
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  disablePerforationOCR?: boolean

  /**
   * List of specific eligible document types from DocumentType enum to recognize from.
   * You may, for example, specify only passports to be recognized by setting this property.
   * Empty by default.
   * @type {eDocType[]|undefined}
   */
  @IsOptional()
  @IsEnum(eDocType, { each: true })
  documentGroupFilter?: eDocType[]

  /**
   * Authenticity checks that should be performed regardless of the document type.
   * The available checks are listed in the eAuthenticity enum.
   * Note that only supported by your license checks can be added.
   * @type {number|undefined}
   */
  @IsOptional()
  @IsInt()
  processAuth?: number

  /**
   * This parameter is used to specify the document reader device type from which input images were captured.
   * Default 0.
   * @type {number|undefined}
   */
  @IsOptional()
  @IsInt()
  deviceId?: number

  /**
   * This parameter is used to specify the document reader device type from which input images were captured.
   * Default 0.
   * @type {number|undefined}
   */
  @IsOptional()
  @IsInt()
  deviceType?: number

  /**
   * This parameter is used to specify the document reader device type from which input images were captured
   * @type {string|undefined}
   */
  @IsOptional()
  @IsString()
  deviceTypeHex?: string

  /**
   * This parameter is used to tell the processing engine to ignore any parameters saved in the image when scanned
   * from the document reader device.
   * Default false
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  ignoreDeviceIdFromImage?: boolean

  /**
   * List of the document ID's to process. All documents will be processed, if empty.
   * @type {number[]|undefined}
   */
  @IsOptional()
  @IsInt({ each: true })
  documentIdList?: number[]

  /**
   * RFID processing parameters
   * @type {ProcessParamsRfid|undefined}
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ProcessParamsRfid)
  rfid?: ProcessParamsRfid

  /**
   * This parameter is used to enable authenticity checks
   * Default true
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  checkAuth?: boolean

  /**
   * Authenticity check parameters
   * @type {ProcessParamsAuth|undefined}
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ProcessParamsAuth)
  authParams?: ProcessParamsAuth

  /**
   * Make better MRZ detection on complex noisy backgrounds, like BW photocopy of some documents.
   * @type {eMRZDetectMode|undefined}
   */
  @IsOptional()
  @IsEnum(eMRZDetectMode)
  mrzDetectMode?: eMRZDetectMode

  /**
   * This parameter is used to generate numeric representation for issuing state and nationality codes
   * Default false
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  generateNumericCodes?: boolean

  /**
   * This parameter if enabled will require all necessary certificates to verify digital signature in barcode data to be present in order for the Barcode format check to succeed.
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  strictBarcodeDigitalSignatureCheck?: boolean

  /**
   * Select the longest value from the different value sources and write it to the value field if comparison is done successfully. The parameter applies this logic to the personal names, such as given name, surname, surname and given name, middle name and etc.
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  selectLongestNames?: boolean

  /**
   * Set the types of barcodes to process.
   * @type {eInputBarcodeType[]|undefined}
   */
  @IsOptional()
  @IsArray()
  @IsEnum(eInputBarcodeType, { each: true })
  doBarcodes?: eInputBarcodeType[]

  /**
   * When enabled, this parameter marks security checks that don’t meet minimum requirements as 'Failed' (instead of 'WasNotDone'), which causes the overall security status to be 'Failed'.
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  strictDLCategoryExpiry?: boolean

  /**
   * Set to generate Alpha-2 codes for nationality and issuing state fields.
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  generateAlpha2Codes?: boolean

  /**
   * Limits the number of pages to be processed from a PDF file.
   * @type {number|undefined}
   */
  @IsOptional()
  @IsNumber()
  pdfPagesLimit?: number

  /**
   * This parameter if enabled will ignore the minimum barcode resolution needed to start processing.
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  disableAuthResolutionFilter?: boolean
}
