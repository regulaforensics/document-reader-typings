import { ArrayMaxSize, ArrayMinSize, IsArray, IsDefined, IsEnum, IsOptional, IsString } from 'class-validator'
import { Expose } from 'class-transformer'

import { LCID, VisualFieldType, FieldVerificationResult } from '@/consts'


export interface IVerifiedFieldMap {
  /**
  * Text field logical type
  * @type {VisualFieldType}
  */
  wFieldType: VisualFieldType

  /**
  * ID of language-culture to differentiate one field of the same type from another
  * @type {LCID}
  */
  wLCID: LCID

  /**
  * Field data obtained through MRZ reading
  * Results of reading of multiline field lines are separated by ‘^’ symbol.
  * @type {string}
  */
  Field_MRZ?: string

  /**
  * Field data obtained through document filling text fields reading
  * Results of reading of multiline field lines are separated by ‘^’ symbol.
  * @type {string}
  */
  Field_Visual?: string

  /**
  * Field data obtained through bar-codes reading
  * Results of reading of multiline field lines are separated by ‘^’ symbol.
  * @type {string}
  */
  Field_Barcode?: string

  /**
  * Field data obtained through RFID-chip memory reading
  * Results of reading of multiline field lines are separated by ‘^’ symbol.
  * @type {string}
  */
  Field_RFID?: string

  /**
  * Verification results matrix
  * @type {[FieldVerificationResult, FieldVerificationResult, FieldVerificationResult, FieldVerificationResult, FieldVerificationResult, FieldVerificationResult, FieldVerificationResult, FieldVerificationResult, FieldVerificationResult, FieldVerificationResult]}
  */
  Matrix: [
    FieldVerificationResult, // MRZ data verification result
    FieldVerificationResult, // RFID-chip data verification result
    FieldVerificationResult, // Document filling text fields data verification result
    FieldVerificationResult, // Bar-codes data verification result
    FieldVerificationResult, // MRZ and RFID-chip data comparing result
    FieldVerificationResult, // MRZ and document filling text fields data comparing result
    FieldVerificationResult, // MRZ and bar-codes data comparing result
    FieldVerificationResult, // Document filling text fields and RFID-chip data comparing result
    FieldVerificationResult, // Document filling text fields and bar-codes data comparing result
    FieldVerificationResult, // RFID-chip and bar-codes data comparing result
  ]
}

export class VerifiedFieldMap implements IVerifiedFieldMap {
  /**
  * Text field logical type
  * @type {VisualFieldType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(VisualFieldType)
  wFieldType: VisualFieldType

  /**
  * ID of language-culture to differentiate one field of the same type from another
  * @type {LCID}
  */
  @Expose()
  @IsOptional()
  @IsEnum(LCID)
  wLCID: LCID

  /**
  * Field data obtained through MRZ reading
  * Results of reading of multiline field lines are separated by ‘^’ symbol.
  * @type {string}
  */
  @Expose()
  @IsOptional()
  @IsString()
  Field_MRZ?: string

  /**
  * Field data obtained through document filling text fields reading
  * Results of reading of multiline field lines are separated by ‘^’ symbol.
  * @type {string}
  */
  @Expose()
  @IsOptional()
  @IsString()
  Field_Visual?: string

  /**
  * Field data obtained through bar-codes reading
  * Results of reading of multiline field lines are separated by ‘^’ symbol.
  * @type {string}
  */
  @Expose()
  @IsOptional()
  @IsString()
  Field_Barcode?: string

  /**
  * Field data obtained through RFID-chip memory reading
  * Results of reading of multiline field lines are separated by ‘^’ symbol.
  * @type {string}
  */
  @Expose()
  @IsOptional()
  @IsString()
  Field_RFID?: string

  /**
  * Verification results matrix
  * @type {[FieldVerificationResult, FieldVerificationResult, FieldVerificationResult, FieldVerificationResult, FieldVerificationResult, FieldVerificationResult, FieldVerificationResult, FieldVerificationResult, FieldVerificationResult, FieldVerificationResult]}
  */
  @Expose()
  @IsDefined()
  @IsEnum(FieldVerificationResult, { each: true })
  @IsArray()
  @ArrayMinSize(10)
  @ArrayMaxSize(10)
  Matrix: [
    FieldVerificationResult, // MRZ data verification result
    FieldVerificationResult, // RFID-chip data verification result
    FieldVerificationResult, // Document filling text fields data verification result
    FieldVerificationResult, // Bar-codes data verification result
    FieldVerificationResult, // MRZ and RFID-chip data comparing result
    FieldVerificationResult, // MRZ and document filling text fields data comparing result
    FieldVerificationResult, // MRZ and bar-codes data comparing result
    FieldVerificationResult, // Document filling text fields and RFID-chip data comparing result
    FieldVerificationResult, // Document filling text fields and bar-codes data comparing result
    FieldVerificationResult, // RFID-chip and bar-codes data comparing result
  ]

  /**
  * Get MRZ data verification result
  * @param {VerifiedFieldMap} instance - instance of VerifiedFieldMap
  * @return {FieldVerificationResult} - MRZ data verification result
  */
  static getMRZDataVerificationResult = (instance: VerifiedFieldMap): FieldVerificationResult => instance.Matrix[0]

  /**
  * Get RFID-chip data verification result
  * @param {VerifiedFieldMap} instance - instance of VerifiedFieldMap
  * @return {FieldVerificationResult} - RFID-chip data verification result
  */
  static getRFIDDataVerificationResult = (instance: VerifiedFieldMap): FieldVerificationResult => instance.Matrix[1]

  /**
  * Get Document filling text fields data verification result
  * @param {VerifiedFieldMap} instance - instance of VerifiedFieldMap
  * @return {FieldVerificationResult} - Document filling text fields data verification result
  */
  static getVisualDataVerificationResult = (instance: VerifiedFieldMap): FieldVerificationResult => instance.Matrix[2]

  /**
  * Get Bar-codes data verification result
  * @param {VerifiedFieldMap} instance - instance of VerifiedFieldMap
  * @return {FieldVerificationResult} - Bar-codes data verification result
  */
  static getBarcodeDataVerificationResult = (instance: VerifiedFieldMap): FieldVerificationResult => instance.Matrix[3]

  /**
  * Get MRZ and RFID-chip data comparing result
  * @param {VerifiedFieldMap} instance - instance of VerifiedFieldMap
  * @return {FieldVerificationResult} - MRZ and RFID-chip data comparing result
  */
  static getMRZAndRFIDDataComparingResult = (instance: VerifiedFieldMap): FieldVerificationResult => instance.Matrix[4]

  /**
  * Get MRZ and Document filling text fields data comparing result
  * @param {VerifiedFieldMap} instance - instance of VerifiedFieldMap
  * @return {FieldVerificationResult} - MRZ and Document filling text fields data comparing result
  */
  static getMRZAndVisualDataComparingResult = (instance: VerifiedFieldMap): FieldVerificationResult => instance.Matrix[5]

  /**
  * Get MRZ and Bar-codes data comparing result
  * @param {VerifiedFieldMap} instance - instance of VerifiedFieldMap
  * @return {FieldVerificationResult} - MRZ and Bar-codes data comparing result
  */
  static getMRZAndBarcodeDataComparingResult = (instance: VerifiedFieldMap): FieldVerificationResult => instance.Matrix[6]

  /**
  * Get Document filling text fields and RFID-chip data comparing result
  * @param {VerifiedFieldMap} instance - instance of VerifiedFieldMap
  * @return {FieldVerificationResult} - Document filling text fields and RFID-chip data comparing result
  */
  static getVisualAndRFIDDataComparingResult = (instance: VerifiedFieldMap): FieldVerificationResult => instance.Matrix[7]

  /**
  * Get Document filling text fields and Bar-codes data comparing result
  * @param {VerifiedFieldMap} instance - instance of VerifiedFieldMap
  * @return {FieldVerificationResult} - Document filling text fields and Bar-codes data comparing result
  */
  static getVisualAndBarcodeDataComparingResult = (instance: VerifiedFieldMap): FieldVerificationResult => instance.Matrix[8]

  /**
  * Get RFID-chip and Bar-codes data comparing result
  * @param {VerifiedFieldMap} instance - instance of VerifiedFieldMap
  * @return {FieldVerificationResult} - RFID-chip and Bar-codes data comparing result
  */
  static getRFIDAndBarcodeDataComparingResult = (instance: VerifiedFieldMap): FieldVerificationResult => instance.Matrix[9]
}
