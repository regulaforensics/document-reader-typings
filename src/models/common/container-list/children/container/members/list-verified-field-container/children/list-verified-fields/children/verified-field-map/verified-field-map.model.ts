import { ArrayMaxSize, ArrayMinSize, IsArray, IsDefined, IsEnum, IsOptional, IsString } from 'class-validator'
import { Expose } from 'class-transformer'

import { eLCID, eVisualFieldType, eFieldVerificationResult } from '@/consts'


/**
* Contains information on results of comparing data obtained from different sources for
* the same logical type of field
*/
export interface iVerifiedFieldMap {
  /**
  * Text field logical type
  * @type {eVisualFieldType}
  */
  wFieldType: eVisualFieldType

  /**
  * ID of language-culture to differentiate one field of the same type from another
  * @type {eLCID}
  */
  wLCID: eLCID

  /**
  * Field data obtained through MRZ reading
  * Results of reading of multiline field lines are separated by ‘^’ symbol.
  * @type {string|undefined}
  */
  Field_MRZ?: string

  /**
  * Field data obtained through document filling text fields reading
  * Results of reading of multiline field lines are separated by ‘^’ symbol.
  * @type {string|undefined}
  */
  Field_Visual?: string

  /**
  * Field data obtained through bar-codes reading
  * Results of reading of multiline field lines are separated by ‘^’ symbol.
  * @type {string|undefined}
  */
  Field_Barcode?: string

  /**
  * Field data obtained through RFID-chip memory reading
  * Results of reading of multiline field lines are separated by ‘^’ symbol.
  * @type {string|undefined}
  */
  Field_RFID?: string

  /**
  * Verification results matrix
  * @type {[eFieldVerificationResult, eFieldVerificationResult, eFieldVerificationResult, eFieldVerificationResult, eFieldVerificationResult, eFieldVerificationResult, eFieldVerificationResult, eFieldVerificationResult, eFieldVerificationResult, eFieldVerificationResult]}
  */
  Matrix: [
    eFieldVerificationResult, // MRZ data verification result
    eFieldVerificationResult, // RFID-chip data verification result
    eFieldVerificationResult, // Document filling text fields data verification result
    eFieldVerificationResult, // Bar-codes data verification result
    eFieldVerificationResult, // MRZ and RFID-chip data comparing result
    eFieldVerificationResult, // MRZ and document filling text fields data comparing result
    eFieldVerificationResult, // MRZ and bar-codes data comparing result
    eFieldVerificationResult, // Document filling text fields and RFID-chip data comparing result
    eFieldVerificationResult, // Document filling text fields and bar-codes data comparing result
    eFieldVerificationResult, // RFID-chip and bar-codes data comparing result
  ]
}

/**
* Contains information on results of comparing data obtained from different sources for
* the same logical type of field
*/
export class VerifiedFieldMap implements iVerifiedFieldMap {
  /**
  * Text field logical type
  * @type {eVisualFieldType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eVisualFieldType)
  wFieldType: eVisualFieldType

  /**
  * ID of language-culture to differentiate one field of the same type from another
  * @type {eLCID}
  */
  @Expose()
  @IsOptional()
  @IsEnum(eLCID)
  wLCID: eLCID

  /**
  * Field data obtained through MRZ reading
  * Results of reading of multiline field lines are separated by ‘^’ symbol.
  * @type {string|undefined}
  */
  @Expose()
  @IsOptional()
  @IsString()
  Field_MRZ?: string

  /**
  * Field data obtained through document filling text fields reading
  * Results of reading of multiline field lines are separated by ‘^’ symbol.
  * @type {string|undefined}
  */
  @Expose()
  @IsOptional()
  @IsString()
  Field_Visual?: string

  /**
  * Field data obtained through bar-codes reading
  * Results of reading of multiline field lines are separated by ‘^’ symbol.
  * @type {string|undefined}
  */
  @Expose()
  @IsOptional()
  @IsString()
  Field_Barcode?: string

  /**
  * Field data obtained through RFID-chip memory reading
  * Results of reading of multiline field lines are separated by ‘^’ symbol.
  * @type {string|undefined}
  */
  @Expose()
  @IsOptional()
  @IsString()
  Field_RFID?: string

  /**
  * Verification results matrix
  * @type {[eFieldVerificationResult, eFieldVerificationResult, eFieldVerificationResult, eFieldVerificationResult, eFieldVerificationResult, eFieldVerificationResult, eFieldVerificationResult, eFieldVerificationResult, eFieldVerificationResult, eFieldVerificationResult]}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eFieldVerificationResult, { each: true })
  @IsArray()
  @ArrayMinSize(10)
  @ArrayMaxSize(10)
  Matrix: [
    eFieldVerificationResult, // MRZ data verification result
    eFieldVerificationResult, // RFID-chip data verification result
    eFieldVerificationResult, // Document filling text fields data verification result
    eFieldVerificationResult, // Bar-codes data verification result
    eFieldVerificationResult, // MRZ and RFID-chip data comparing result
    eFieldVerificationResult, // MRZ and document filling text fields data comparing result
    eFieldVerificationResult, // MRZ and bar-codes data comparing result
    eFieldVerificationResult, // Document filling text fields and RFID-chip data comparing result
    eFieldVerificationResult, // Document filling text fields and bar-codes data comparing result
    eFieldVerificationResult, // RFID-chip and bar-codes data comparing result
  ]

  /**
  * Get MRZ data verification result
  * @param {VerifiedFieldMap} instance - instance of VerifiedFieldMap
  * @return {eFieldVerificationResult} - MRZ data verification result
  */
  static getMRZDataVerificationResult = (instance: VerifiedFieldMap): eFieldVerificationResult => instance.Matrix[0]

  /**
  * Get RFID-chip data verification result
  * @param {VerifiedFieldMap} instance - instance of VerifiedFieldMap
  * @return {eFieldVerificationResult} - RFID-chip data verification result
  */
  static getRFIDDataVerificationResult = (instance: VerifiedFieldMap): eFieldVerificationResult => instance.Matrix[1]

  /**
  * Get Document filling text fields data verification result
  * @param {VerifiedFieldMap} instance - instance of VerifiedFieldMap
  * @return {eFieldVerificationResult} - Document filling text fields data verification result
  */
  static getVisualDataVerificationResult = (instance: VerifiedFieldMap): eFieldVerificationResult => instance.Matrix[2]

  /**
  * Get Bar-codes data verification result
  * @param {VerifiedFieldMap} instance - instance of VerifiedFieldMap
  * @return {eFieldVerificationResult} - Bar-codes data verification result
  */
  static getBarcodeDataVerificationResult = (instance: VerifiedFieldMap): eFieldVerificationResult => instance.Matrix[3]

  /**
  * Get MRZ and RFID-chip data comparing result
  * @param {VerifiedFieldMap} instance - instance of VerifiedFieldMap
  * @return {eFieldVerificationResult} - MRZ and RFID-chip data comparing result
  */
  static getMRZAndRFIDDataComparingResult = (instance: VerifiedFieldMap): eFieldVerificationResult => instance.Matrix[4]

  /**
  * Get MRZ and Document filling text fields data comparing result
  * @param {VerifiedFieldMap} instance - instance of VerifiedFieldMap
  * @return {eFieldVerificationResult} - MRZ and Document filling text fields data comparing result
  */
  static getMRZAndVisualDataComparingResult = (instance: VerifiedFieldMap): eFieldVerificationResult => instance.Matrix[5]

  /**
  * Get MRZ and Bar-codes data comparing result
  * @param {VerifiedFieldMap} instance - instance of VerifiedFieldMap
  * @return {eFieldVerificationResult} - MRZ and Bar-codes data comparing result
  */
  static getMRZAndBarcodeDataComparingResult = (instance: VerifiedFieldMap): eFieldVerificationResult => instance.Matrix[6]

  /**
  * Get Document filling text fields and RFID-chip data comparing result
  * @param {VerifiedFieldMap} instance - instance of VerifiedFieldMap
  * @return {eFieldVerificationResult} - Document filling text fields and RFID-chip data comparing result
  */
  static getVisualAndRFIDDataComparingResult = (instance: VerifiedFieldMap): eFieldVerificationResult => instance.Matrix[7]

  /**
  * Get Document filling text fields and Bar-codes data comparing result
  * @param {VerifiedFieldMap} instance - instance of VerifiedFieldMap
  * @return {eFieldVerificationResult} - Document filling text fields and Bar-codes data comparing result
  */
  static getVisualAndBarcodeDataComparingResult = (instance: VerifiedFieldMap): eFieldVerificationResult => instance.Matrix[8]

  /**
  * Get RFID-chip and Bar-codes data comparing result
  * @param {VerifiedFieldMap} instance - instance of VerifiedFieldMap
  * @return {eFieldVerificationResult} - RFID-chip and Bar-codes data comparing result
  */
  static getRFIDAndBarcodeDataComparingResult = (instance: VerifiedFieldMap): eFieldVerificationResult => instance.Matrix[9]
}
