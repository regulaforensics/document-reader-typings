import {
  IsBoolean,
  IsDefined,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  ValidateNested
} from 'class-validator'
import { Expose, Type } from 'class-transformer'

import {
  eDocFormat,
  eDocType,
  eLogLevel,
  eMeasureSystem,
  eMRZFormat,
  eResult,
  eScenario,
  eVisualFieldType,
  eTextPostProcessing
} from '@/consts'
import { IsStringObjectRecord } from '@/validators'
import {
  FaceApi,
  iFaceApi,
  iImageQA,
  ImageQA,
  iPerDocumentConfig,
  iProcessParamsRfid,
  PerDocumentConfig,
  ProcessParamsRfid
} from './children'


export interface iProcessParams {
  oneShotIdentification?: boolean
  useFaceApi?: boolean
  faceApi?: iFaceApi
  doDetectCan?: boolean
  imageOutputMaxHeight?: number
  imageOutputMaxWidth?: number
  scenario: eScenario
  resultTypeOutput?: eResult[]
  doublePageSpread?: boolean
  generateDoublePageSpreadImage?: boolean
  fieldTypesFilter?: eVisualFieldType[]
  dateFormat?: string
  measureSystem?: eMeasureSystem
  imageDpiOutMax?: number
  alreadyCropped?: boolean
  customParams?: Record<string, object>
  config?: iPerDocumentConfig[]
  log?: boolean
  logLevel?: eLogLevel
  forceDocID?: number
  matchTextFieldMask?: boolean
  fastDocDetect?: boolean
  updateOCRValidityByGlare?: boolean
  checkRequiredTextFields?: boolean
  returnCroppedBarcode?: boolean
  imageQa?: iImageQA
  respectImageQuality?: boolean
  forceDocFormat?: eDocFormat
  noGraphics?: boolean
  documentAreaMin?: number
  depersonalizeLog?: boolean
  multiDocOnImage?: boolean
  shiftExpiryDate?: number
  minimalHolderAge?: number
  returnUncroppedImage?: boolean
  mrzFormatsFilter?: eMRZFormat[]
  forceReadMrzBeforeLocate?: boolean
  parseBarcodes?: boolean
  convertCase?: eTextPostProcessing
  splitNames?: boolean
  disablePerforationOCR?: boolean
  documentGroupFilter?: eDocType[]
  processAuth?: number
  deviceId?: number
  deviceType?: number
  deviceTypeHex?: string
  ignoreDeviceIdFromImage?: boolean
  documentIdList?: number[]
  rfid?: iProcessParamsRfid
}

export class ProcessParams implements iProcessParams {
  @Expose()
  @IsBoolean()
  @IsOptional()
  oneShotIdentification?: boolean

  @Expose()
  @IsBoolean()
  @IsOptional()
  useFaceApi?: boolean

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => FaceApi)
  faceApi?: FaceApi

  @Expose()
  @IsBoolean()
  @IsOptional()
  doDetectCan?: boolean

  @Expose()
  @IsOptional()
  @IsInt()
  @Min(0)
  imageOutputMaxHeight?: number

  @Expose()
  @IsOptional()
  @IsInt()
  @Min(0)
  imageOutputMaxWidth?: number

  @Expose()
  @IsDefined()
  @IsEnum(eScenario)
  scenario: eScenario

  @Expose()
  @IsOptional()
  @IsEnum(eResult, { each: true })
  resultTypeOutput?: eResult[]

  @Expose()
  @IsBoolean()
  @IsOptional()
  doublePageSpread?: boolean

  @Expose()
  @IsBoolean()
  @IsOptional()
  generateDoublePageSpreadImage?: boolean

  @Expose()
  @IsOptional()
  @IsEnum(eVisualFieldType, { each: true })
  fieldTypesFilter?: eVisualFieldType[]

  @Expose()
  @IsOptional()
  @IsString()
  dateFormat?: string

  @Expose()
  @IsOptional()
  @IsEnum(eMeasureSystem)
  measureSystem?: eMeasureSystem

  @Expose()
  @IsOptional()
  @IsInt()
  @Min(0)
  imageDpiOutMax?: number

  @Expose()
  @IsBoolean()
  @IsOptional()
  alreadyCropped?: boolean

  @Expose()
  @IsOptional()
  @IsStringObjectRecord()
  customParams?: Record<string, object>

  @Expose()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => PerDocumentConfig)
  config?: PerDocumentConfig[]

  @Expose()
  @IsBoolean()
  @IsOptional()
  log?: boolean

  @Expose()
  @IsOptional()
  @IsEnum(eLogLevel)
  logLevel?: eLogLevel

  @Expose()
  @IsOptional()
  @IsInt()
  forceDocID?: number

  @Expose()
  @IsBoolean()
  @IsOptional()
  matchTextFieldMask?: boolean

  @Expose()
  @IsBoolean()
  @IsOptional()
  fastDocDetect?: boolean

  @Expose()
  @IsBoolean()
  @IsOptional()
  updateOCRValidityByGlare?: boolean

  @Expose()
  @IsBoolean()
  @IsOptional()
  checkRequiredTextFields?: boolean

  @Expose()
  @IsBoolean()
  @IsOptional()
  returnCroppedBarcode?: boolean

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => ImageQA)
  imageQa?: ImageQA

  @Expose()
  @IsBoolean()
  @IsOptional()
  respectImageQuality?: boolean

  @Expose()
  @IsOptional()
  @IsEnum(eDocFormat)
  forceDocFormat?: eDocFormat

  @Expose()
  @IsBoolean()
  @IsOptional()
  noGraphics?: boolean

  @Expose()
  @IsOptional()
  @IsNumber()
  documentAreaMin?: number

  @Expose()
  @IsBoolean()
  @IsOptional()
  depersonalizeLog?: boolean

  @Expose()
  @IsBoolean()
  @IsOptional()
  multiDocOnImage?: boolean

  @Expose()
  @IsOptional()
  @IsNumber()
  shiftExpiryDate?: number

  @Expose()
  @IsOptional()
  @IsInt()
  minimalHolderAge?: number

  @Expose()
  @IsBoolean()
  @IsOptional()
  returnUncroppedImage?: boolean

  @Expose()
  @IsOptional()
  @IsEnum(eMRZFormat, { each: true })
  mrzFormatsFilter?: eMRZFormat[]

  @Expose()
  @IsBoolean()
  @IsOptional()
  forceReadMrzBeforeLocate?: boolean

  @Expose()
  @IsBoolean()
  @IsOptional()
  parseBarcodes?: boolean

  @Expose()
  @IsOptional()
  @IsEnum(eTextPostProcessing)
  convertCase?: eTextPostProcessing

  @Expose()
  @IsBoolean()
  @IsOptional()
  splitNames?: boolean

  @Expose()
  @IsBoolean()
  @IsOptional()
  disablePerforationOCR?: boolean

  @Expose()
  @IsOptional()
  @IsEnum(eDocType, { each: true })
  documentGroupFilter?: eDocType[]

  @Expose()
  @IsOptional()
  @IsNumber()
  processAuth?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  deviceId?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  deviceType?: number

  @Expose()
  @IsOptional()
  @IsString()
  deviceTypeHex?: string

  @Expose()
  @IsBoolean()
  @IsOptional()
  ignoreDeviceIdFromImage?: boolean

  @Expose()
  @IsOptional()
  @IsNumber({}, { each: true })
  documentIdList?: number[]

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => ProcessParamsRfid)
  rfid?: ProcessParamsRfid
}
