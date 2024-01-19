import { eLCID, eVisualFieldType, eFieldVerificationResult } from '../../../../../../../../../../../consts';
/**
* Contains information on results of comparing data obtained from different sources for
* the same logical type of field
*/
export interface iVerifiedFieldMap {
    /**
    * Text field logical type
    * @type {eVisualFieldType}
    */
    wFieldType: eVisualFieldType;
    /**
    * ID of language-culture to differentiate one field of the same type from another
    * @type {eLCID}
    */
    wLCID: eLCID;
    /**
    * Field data obtained through MRZ reading
    * Results of reading of multiline field lines are separated by ‘^’ symbol.
    * @type {string|undefined}
    */
    Field_MRZ?: string;
    /**
    * Field data obtained through document filling text fields reading
    * Results of reading of multiline field lines are separated by ‘^’ symbol.
    * @type {string|undefined}
    */
    Field_Visual?: string;
    /**
    * Field data obtained through bar-codes reading
    * Results of reading of multiline field lines are separated by ‘^’ symbol.
    * @type {string|undefined}
    */
    Field_Barcode?: string;
    /**
    * Field data obtained through RFID-chip memory reading
    * Results of reading of multiline field lines are separated by ‘^’ symbol.
    * @type {string|undefined}
    */
    Field_RFID?: string;
    /**
    * Verification results matrix
    * @type {[eFieldVerificationResult, eFieldVerificationResult, eFieldVerificationResult, eFieldVerificationResult, eFieldVerificationResult, eFieldVerificationResult, eFieldVerificationResult, eFieldVerificationResult, eFieldVerificationResult, eFieldVerificationResult]}
    */
    Matrix: [
        eFieldVerificationResult,
        eFieldVerificationResult,
        eFieldVerificationResult,
        eFieldVerificationResult,
        eFieldVerificationResult,
        eFieldVerificationResult,
        eFieldVerificationResult,
        eFieldVerificationResult,
        eFieldVerificationResult,
        eFieldVerificationResult
    ];
}
/**
* Contains information on results of comparing data obtained from different sources for
* the same logical type of field
*/
export declare class VerifiedFieldMap implements iVerifiedFieldMap {
    /**
    * Text field logical type
    * @type {eVisualFieldType}
    */
    wFieldType: eVisualFieldType;
    /**
    * ID of language-culture to differentiate one field of the same type from another
    * @type {eLCID}
    */
    wLCID: eLCID;
    /**
    * Field data obtained through MRZ reading
    * Results of reading of multiline field lines are separated by ‘^’ symbol.
    * @type {string|undefined}
    */
    Field_MRZ?: string;
    /**
    * Field data obtained through document filling text fields reading
    * Results of reading of multiline field lines are separated by ‘^’ symbol.
    * @type {string|undefined}
    */
    Field_Visual?: string;
    /**
    * Field data obtained through bar-codes reading
    * Results of reading of multiline field lines are separated by ‘^’ symbol.
    * @type {string|undefined}
    */
    Field_Barcode?: string;
    /**
    * Field data obtained through RFID-chip memory reading
    * Results of reading of multiline field lines are separated by ‘^’ symbol.
    * @type {string|undefined}
    */
    Field_RFID?: string;
    /**
    * Verification results matrix
    * @type {[eFieldVerificationResult, eFieldVerificationResult, eFieldVerificationResult, eFieldVerificationResult, eFieldVerificationResult, eFieldVerificationResult, eFieldVerificationResult, eFieldVerificationResult, eFieldVerificationResult, eFieldVerificationResult]}
    */
    Matrix: [
        eFieldVerificationResult,
        eFieldVerificationResult,
        eFieldVerificationResult,
        eFieldVerificationResult,
        eFieldVerificationResult,
        eFieldVerificationResult,
        eFieldVerificationResult,
        eFieldVerificationResult,
        eFieldVerificationResult,
        eFieldVerificationResult
    ];
    /**
    * Get MRZ data verification result
    * @param {VerifiedFieldMap} instance - instance of VerifiedFieldMap
    * @return {eFieldVerificationResult} - MRZ data verification result
    */
    static getMRZDataVerificationResult: (instance: VerifiedFieldMap) => eFieldVerificationResult;
    /**
    * Get RFID-chip data verification result
    * @param {VerifiedFieldMap} instance - instance of VerifiedFieldMap
    * @return {eFieldVerificationResult} - RFID-chip data verification result
    */
    static getRFIDDataVerificationResult: (instance: VerifiedFieldMap) => eFieldVerificationResult;
    /**
    * Get Document filling text fields data verification result
    * @param {VerifiedFieldMap} instance - instance of VerifiedFieldMap
    * @return {eFieldVerificationResult} - Document filling text fields data verification result
    */
    static getVisualDataVerificationResult: (instance: VerifiedFieldMap) => eFieldVerificationResult;
    /**
    * Get Bar-codes data verification result
    * @param {VerifiedFieldMap} instance - instance of VerifiedFieldMap
    * @return {eFieldVerificationResult} - Bar-codes data verification result
    */
    static getBarcodeDataVerificationResult: (instance: VerifiedFieldMap) => eFieldVerificationResult;
    /**
    * Get MRZ and RFID-chip data comparing result
    * @param {VerifiedFieldMap} instance - instance of VerifiedFieldMap
    * @return {eFieldVerificationResult} - MRZ and RFID-chip data comparing result
    */
    static getMRZAndRFIDDataComparingResult: (instance: VerifiedFieldMap) => eFieldVerificationResult;
    /**
    * Get MRZ and Document filling text fields data comparing result
    * @param {VerifiedFieldMap} instance - instance of VerifiedFieldMap
    * @return {eFieldVerificationResult} - MRZ and Document filling text fields data comparing result
    */
    static getMRZAndVisualDataComparingResult: (instance: VerifiedFieldMap) => eFieldVerificationResult;
    /**
    * Get MRZ and Bar-codes data comparing result
    * @param {VerifiedFieldMap} instance - instance of VerifiedFieldMap
    * @return {eFieldVerificationResult} - MRZ and Bar-codes data comparing result
    */
    static getMRZAndBarcodeDataComparingResult: (instance: VerifiedFieldMap) => eFieldVerificationResult;
    /**
    * Get Document filling text fields and RFID-chip data comparing result
    * @param {VerifiedFieldMap} instance - instance of VerifiedFieldMap
    * @return {eFieldVerificationResult} - Document filling text fields and RFID-chip data comparing result
    */
    static getVisualAndRFIDDataComparingResult: (instance: VerifiedFieldMap) => eFieldVerificationResult;
    /**
    * Get Document filling text fields and Bar-codes data comparing result
    * @param {VerifiedFieldMap} instance - instance of VerifiedFieldMap
    * @return {eFieldVerificationResult} - Document filling text fields and Bar-codes data comparing result
    */
    static getVisualAndBarcodeDataComparingResult: (instance: VerifiedFieldMap) => eFieldVerificationResult;
    /**
    * Get RFID-chip and Bar-codes data comparing result
    * @param {VerifiedFieldMap} instance - instance of VerifiedFieldMap
    * @return {eFieldVerificationResult} - RFID-chip and Bar-codes data comparing result
    */
    static getRFIDAndBarcodeDataComparingResult: (instance: VerifiedFieldMap) => eFieldVerificationResult;
}
