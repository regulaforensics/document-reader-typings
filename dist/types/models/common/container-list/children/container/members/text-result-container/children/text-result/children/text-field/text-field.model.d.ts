import { eCheckResult, eLCID, eVisualFieldType } from '../../../../../../../../../../../consts';
import { TextComparison, iTextComparison, iTextValidity, iTextFieldValue, TextValidity, TextFieldValue } from './children';
/**
* Used for storing text field.
*/
export interface iTextField {
    /**
    * Field type
    * @type {eVisualFieldType}
    */
    fieldType: eVisualFieldType;
    /**
    * Field name
    * @type {string}
    */
    fieldName: string;
    /**
    * LCID code
    * @type {eLCID}
    */
    lcid: eLCID;
    /**
    * LCID name
    * @type {string}
    */
    lcidName: string;
    /**
    * Field status
    * @type {eCheckResult}
    */
    status: eCheckResult;
    /**
    * Comparison status
    * @type {eCheckResult}
    */
    comparisonStatus: eCheckResult;
    /**
    * Comparison results list
    * @type {iTextComparison[]}
    */
    comparisonList: iTextComparison[];
    /**
    * Field value
    * @type {string}
    */
    value: string;
    /**
    * Values list
    * @type {iTextFieldValue[]}
    */
    valueList: iTextFieldValue[];
    /**
    * Validity status
    * @type {eCheckResult}
    */
    validityStatus: eCheckResult;
    /**
    * Validity results list
    * @type {iTextValidity[]}
    */
    validityList: iTextValidity[];
}
/**
* Used for storing text field.
*/
export declare class TextField implements iTextField {
    /**
    * Field type
    * @type {eVisualFieldType}
    */
    fieldType: eVisualFieldType;
    /**
    * Field name
    * @type {string}
    */
    fieldName: string;
    /**
    * LCID code
    * @type {eLCID}
    */
    lcid: eLCID;
    /**
    * LCID name
    * @type {string}
    */
    lcidName: string;
    /**
    * Field status
    * @type {eCheckResult}
    */
    status: eCheckResult;
    /**
    * Comparison status
    * @type {eCheckResult}
    */
    comparisonStatus: eCheckResult;
    /**
    * Comparison results list
    * @type {TextComparison[]}
    */
    comparisonList: TextComparison[];
    /**
    * Field value
    * @type {string}
    */
    value: string;
    /**
    * Values list
    * @type {TextFieldValue[]}
    */
    valueList: TextFieldValue[];
    /**
    * Validity status
    * @type {eCheckResult}
    */
    validityStatus: eCheckResult;
    /**
    * Validity results list
    * @type {TextValidity[]}
    */
    validityList: TextValidity[];
}
