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
  DocumentFormat,
  DocumentType,
  LogLevel,
  MeasureSystem,
  MRZFormat,
  Result,
  Scenario,
  VisualFieldType,
  TextPostProcessing
} from '@/consts'
import { IsStringObjectRecord } from '@/validators'
import {
  FaceApi,
  IFaceApi,
  IImageQA,
  ImageQA,
  IPerDocumentConfig,
  IProcessParamsRfid,
  PerDocumentConfig,
  ProcessParamsRfid
} from './children'


export interface IProcessParams {
  oneShotIdentification?: boolean
  useFaceApi?: boolean
  faceApi?: IFaceApi
  doDetectCan?: boolean
  imageOutputMaxHeight?: number
  imageOutputMaxWidth?: number
  scenario: Scenario
  resultTypeOutput?: Result[]
  doublePageSpread?: boolean
  generateDoublePageSpreadImage?: boolean
  fieldTypesFilter?: VisualFieldType[]
  dateFormat?: string
  measureSystem?: MeasureSystem
  imageDpiOutMax?: number
  alreadyCropped?: boolean
  customParams?: Record<string, object>
  config?: IPerDocumentConfig[]
  log?: boolean
  logLevel?: LogLevel
  forceDocID?: number
  matchTextFieldMask?: boolean
  fastDocDetect?: boolean
  updateOCRValidityByGlare?: boolean
  checkRequiredTextFields?: boolean
  returnCroppedBarcode?: boolean
  imageQa?: IImageQA
  respectImageQuality?: boolean
  forceDocFormat?: DocumentFormat
  noGraphics?: boolean
  documentAreaMin?: number
  depersonalizeLog?: boolean
  multiDocOnImage?: boolean
  shiftExpiryDate?: number
  minimalHolderAge?: number
  returnUncroppedImage?: boolean
  mrzFormatsFilter?: MRZFormat[]
  forceReadMrzBeforeLocate?: boolean
  parseBarcodes?: boolean
  convertCase?: TextPostProcessing
  splitNames?: boolean
  disablePerforationOCR?: boolean
  documentGroupFilter?: DocumentType[]
  processAuth?: number
  deviceId?: number
  deviceType?: number
  deviceTypeHex?: string
  ignoreDeviceIdFromImage?: boolean
  documentIdList?: number[]
  rfid?: IProcessParamsRfid
}

export class ProcessParams implements IProcessParams {
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
  @IsEnum(Scenario)
  scenario: Scenario

  @Expose()
  @IsOptional()
  @IsEnum(Result, { each: true })
  resultTypeOutput?: Result[]

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
  @IsEnum(VisualFieldType, { each: true })
  fieldTypesFilter?: VisualFieldType[]

  @Expose()
  @IsOptional()
  @IsString()
  dateFormat?: string

  @Expose()
  @IsOptional()
  @IsEnum(MeasureSystem)
  measureSystem?: MeasureSystem

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
  @IsEnum(LogLevel)
  logLevel?: LogLevel

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
  @IsEnum(DocumentFormat)
  forceDocFormat?: DocumentFormat

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
  @IsEnum(MRZFormat, { each: true })
  mrzFormatsFilter?: MRZFormat[]

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
  @IsEnum(TextPostProcessing)
  convertCase?: TextPostProcessing

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
  @IsEnum(DocumentType, { each: true })
  documentGroupFilter?: DocumentType[]

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
