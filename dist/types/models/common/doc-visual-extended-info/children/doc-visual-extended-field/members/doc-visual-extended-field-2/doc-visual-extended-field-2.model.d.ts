import { eRfidDataGroupTypeTag, eVisualFieldType } from '../../../../../../../consts';
import { iStringResultSDK, StringResultSDK } from '../../children';
import { aDocVisualExtendedField } from '../../doc-visual-extended-field.abstract';
/**
* Structure and serves for storing information from one text data field.
* Variant with field logical type and RFID data.
*/
export interface iDocVisualExtendedField2 extends aDocVisualExtendedField {
    /**
    * Field logical type
    * @type {eVisualFieldType}
    */
    FieldType: eVisualFieldType;
    /**
    * Data group
    * @type {eRfidDataGroupTypeTag}
    */
    RFID_OriginDG: eRfidDataGroupTypeTag;
    /**
    * @internal
    * @type {unknown}
    */
    RFID_OriginDGTag?: unknown;
    /**
    * Record index of the text field source in the data group
    * @type {number}
    */
    RFID_OriginTagEntry: number;
    /**
    * @internal
    * @type {unknown}
    */
    RFID_OriginEntryView?: unknown;
    /**
    * Field symbolic name (null-terminated string)
    * @type {string}
    */
    FieldName: string;
    /**
    * Number of StringsResult array elements
    * @type {number}
    */
    StringsCount: number;
    /**
    * Array of separate strings of multiline text field recognition results
    * @type {iStringResultSDK[]}
    */
    StringsResult: iStringResultSDK[];
    /**
    * Buf_Text text string length
    * @type {number}
    */
    Buf_Length: number;
    /**
    * String containing text field data. Results of reading of multiline
    * field lines are separated by ‘^’ symbol
    * @type {string}
    */
    Buf_Text: string;
    /**
    * @internal
    * @type {unknown}
    */
    FieldMask?: unknown;
    /**
    * @internal
    * @type {unknown}
    */
    Validity?: unknown;
    /**
    * @internal
    * @type {unknown}
    */
    InComparison?: unknown;
    /**
    * @internal
    * @type {unknown}
    */
    Reserved2?: unknown;
    /**
    * @internal
    * @type {unknown}
    */
    Reserved3?: unknown;
}
/**
* Structure and serves for storing information from one text data field.
* Variant with field logical type and RFID data.
*/
export declare class DocVisualExtendedField2 extends aDocVisualExtendedField implements iDocVisualExtendedField2 {
    /**
    * Field logical type
    * @type {eVisualFieldType}
    */
    FieldType: eVisualFieldType;
    /**
    * Data group
    * @type {eRfidDataGroupTypeTag}
    */
    RFID_OriginDG: eRfidDataGroupTypeTag;
    /**
    * @internal
    * @type {unknown}
    */
    RFID_OriginDGTag?: unknown;
    /**
    * Record index of the text field source in the data group
    * @type {number}
    */
    RFID_OriginTagEntry: number;
    /**
    * @internal
    * @type {unknown}
    */
    RFID_OriginEntryView: number;
    /**
    * Field symbolic name (null-terminated string)
    * @type {string}
    */
    FieldName: string;
    /**
    * Number of StringsResult array elements
    * @type {number}
    */
    StringsCount: number;
    /**
    * Array of separate strings of multiline text field recognition results
    * @type {StringResultSDK[]}
    */
    StringsResult: StringResultSDK[];
    /**
    * Buf_Text text string length
    * @type {number}
    */
    Buf_Length: number;
    /**
    * String containing text field data. Results of reading of multiline
    * field lines are separated by ‘^’ symbol
    * @type {string}
    */
    Buf_Text: string;
    /**
    * @internal
    * @type {unknown}
    */
    FieldMask?: unknown;
    /**
    * @internal
    * @type {unknown}
    */
    Validity?: unknown;
    /**
    * @internal
    * @type {unknown}
    */
    InComparison?: unknown;
    /**
    * @internal
    * @type {unknown}
    */
    Reserved2?: unknown;
    /**
    * @internal
    * @type {unknown}
    */
    Reserved3?: unknown;
    /**
    * Creates an instance of DocVisualExtendedField2 from plain object
    *
    * @param {unknown} input - plain object
    * @returns {DocVisualExtendedField2}
    */
    static fromPlain: (input: unknown) => DocVisualExtendedField2;
}
