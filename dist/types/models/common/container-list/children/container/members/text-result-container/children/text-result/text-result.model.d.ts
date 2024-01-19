import { eCheckResult } from '../../../../../../../../../consts';
import { iTextSource, iTextField, TextSource, TextField } from './children';
/**
* Used for storing text result
*/
export interface iTextResult {
    /**
    * Status
    * @type {eCheckResult}
    */
    status: eCheckResult;
    /**
    * Validity status
    * @type {eCheckResult}
    */
    validityStatus: eCheckResult;
    /**
    * Comparison status
    * @type {eCheckResult}
    */
    comparisonStatus: eCheckResult;
    /**
    * Date format
    * @type {string}
    */
    dateFormat: string;
    /**
    * Fields list
    * @type {iTextField[]}
    */
    fieldList: iTextField[];
    /**
    * Sources list
    * @type {iTextSource[]}
    */
    availableSourceList: iTextSource[];
}
/**
* Used for storing text result
*/
export declare class TextResult implements iTextResult {
    /**
    * Status
    * @type {eCheckResult}
    */
    status: eCheckResult;
    /**
    * Validity status
    * @type {eCheckResult}
    */
    validityStatus: eCheckResult;
    /**
    * Comparison status
    * @type {eCheckResult}
    */
    comparisonStatus: eCheckResult;
    /**
    * Date format
    * @type {string}
    */
    dateFormat: string;
    /**
    * Fields list
    * @type {TextField[]}
    */
    fieldList: TextField[];
    /**
    * Sources list
    * @type {TextSource[]}
    */
    availableSourceList: TextSource[];
}
