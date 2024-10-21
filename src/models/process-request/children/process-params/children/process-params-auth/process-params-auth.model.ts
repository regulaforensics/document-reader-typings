import { IsBoolean, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

import { iLivenessParams, LivenessParams } from './children'


/**
 * Authenticity parameters
 */
export interface iProcessParamsAuth {
    /**
     * This parameter is used to enable document liveness check
     * Default true
     * @type {boolean|undefined}
     */
    checkLiveness?: boolean

    /**
     * Liveness parameters
     * @type {iLivenessParams|undefined}
     */
    livenessParams?: iLivenessParams

    /**
     * This parameter is used to enable Document luminescence check in UV light
     * Default true
     * @type {boolean|undefined}
     */
    checkUVLuminiscence?: boolean

    /**
     * This parameter is used to enable B900 ink MRZ contrast check in IR light
     * Default true
     * @type {boolean|undefined}
     */
    checkIRB900?: boolean

    /**
     * This parameter is used to enable Image patterns presence/absence check (position, shape, color)
     * Default true
     * @type {boolean|undefined}
     */
    checkImagePatterns?: boolean

    /**
     * This parameter is used to enable Fibers detection
     * Default true
     * @type {boolean|undefined}
     */
    checkFibers?: boolean

    /**
     * This parameter is used to enable Extended MRZ Check
     * Default true
     * @type {boolean|undefined}
     */
    checkExtMRZ?: boolean

    /**
     * This parameter is used to enable Extended OCR Check
     * Default true
     * @type {boolean|undefined}
     */
    checkExtOCR?: boolean

    /**
     * This parameter is used to enable laminate integrity check in axial light
     * Default true
     * @type {boolean|undefined}
     */
    checkAxial?: boolean

    /**
     * This parameter is used to enable Barcode format check (code metadata, data format, contents format, etc.)
     * Default true
     * @type {boolean|undefined}
     */
    checkBarcodeFormat?: boolean

    /**
     * This parameter is used to enable Document elements visibility check in IR light
     * Default true
     * @type {boolean|undefined}
     */
    checkIRVisibility?: boolean

    /**
     * This parameter is used to enable Invisible Personal Information (IPI) check
     * Default true
     * @type {boolean|undefined}
     */
    checkIPI?: boolean

    /**
     * This parameter is used to enable Owner's photo embedding check (is photo printed or sticked)
     * Default true
     * @type {boolean|undefined}
     */
    checkPhotoEmbedding?: boolean

    /**
     * This parameter is used to enable Portrait comparison check
     * Default true
     * @type {boolean|undefined}
     */
    checkPhotoComparison?: boolean

    /**
     * This parameter is used to enable LetterScreen check
     * Default false
     * @type {boolean|undefined}
     */
    checkLetterScreen?: boolean
}

/**
 * Params for the RFID chip data reprocessing
 */
export class ProcessParamsAuth implements iProcessParamsAuth {
    /**
     * This parameter is used to enable document liveness check
     * Default true
     * @type {boolean|undefined}
     */
  @IsOptional()
    @IsBoolean()
    checkLiveness?: boolean

    /**
     * Liveness parameters
     * @type {LivenessParams|undefined}
     */
  @IsOptional()
    @ValidateNested()
    @Type(() => LivenessParams)
    livenessParams?: LivenessParams

    /**
     * This parameter is used to enable Document luminescence check in UV light
     * Default true
     * @type {boolean|undefined}
     */
  @IsOptional()
    @IsBoolean()
    checkUVLuminiscence?: boolean

    /**
     * TThis parameter is used to enable B900 ink MRZ contrast check in IR light
     * Default true
     * @type {boolean|undefined}
     */
  @IsOptional()
    @IsBoolean()
    checkIRB900?: boolean

    /**
     * This parameter is used to enable Image patterns presence/absence check (position, shape, color)
     * Default true
     * @type {boolean|undefined}
     */
  @IsOptional()
    @IsBoolean()
    checkImagePatterns?: boolean

    /**
     * This parameter is used to enable Fibers detection
     * Default true
     * @type {boolean|undefined}
     */
  @IsOptional()
    @IsBoolean()
    checkFibers?: boolean

    /**
     * This parameter is used to enable Extended MRZ Check
     * Default true
     * @type {boolean|undefined}
     */
  @IsOptional()
    @IsBoolean()
    checkExtMRZ?: boolean

    /**
     * This parameter is used to enable Extended OCR Check
     * Default true
     * @type {boolean|undefined}
     */
  @IsOptional()
    @IsBoolean()
    checkExtOCR?: boolean

    /**
     * This parameter is used to enable laminate integrity check in axial light
     * Default true
     * @type {boolean|undefined}
     */
  @IsOptional()
    @IsBoolean()
    checkAxial?: boolean

    /**
     * This parameter is used to enable Barcode format check (code metadata, data format, contents format, etc.)
     * Default true
     * @type {boolean|undefined}
     */
  @IsOptional()
    @IsBoolean()
    checkBarcodeFormat?: boolean

    /**
     * This parameter is used to enable Document elements visibility check in IR light
     * Default true
     * @type {boolean|undefined}
     */
  @IsOptional()
    @IsBoolean()
    checkIRVisibility?: boolean

    /**
     * This parameter is used to enable Invisible Personal Information (IPI) check
     * Default true
     * @type {boolean|undefined}
     */
  @IsOptional()
    @IsBoolean()
    checkIPI?: boolean

    /**
     * This parameter is used to enable Owner's photo embedding check (is photo printed or sticked)
     * Default true
     * @type {boolean|undefined}
     */
  @IsOptional()
    @IsBoolean()
    checkPhotoEmbedding?: boolean

    /**
     * This parameter is used to enable Portrait comparison check
     * Default true
     * @type {boolean|undefined}
     */
  @IsOptional()
    @IsBoolean()
    checkPhotoComparison?: boolean

    /**
     * This parameter is used to enable LetterScreen check
     * Default true
     * @type {boolean|undefined}
     */
  @IsOptional()
    @IsBoolean()
    checkLetterScreen?: boolean
}
