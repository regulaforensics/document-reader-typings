import { eVisualFieldType } from '../../../../../../../consts';
import { iRect, Rect } from '../../../../../rect';
import { iStringResultSDK, StringResultSDK } from '../../children';
import { aDocVisualExtendedField } from '../../doc-visual-extended-field.abstract';
/**
* Structure and serves for storing information from one text data field.
* Variant with field logical type and field rectangular area coordinates on the image.
*/
export interface iDocVisualExtendedField1 extends aDocVisualExtendedField {
    /**
    * Field logical type
    * @type {eVisualFieldType}
    */
    FieldType: eVisualFieldType;
    /**
    * Field rectangular area coordinates on the image
    * @type {iRect}
    */
    FieldRect: iRect;
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
* Variant with field logical type and field rectangular area coordinates on the image.
*/
export declare class DocVisualExtendedField1 extends aDocVisualExtendedField implements iDocVisualExtendedField1 {
    /**
    * Field logical type
    * @type {eVisualFieldType}
    */
    FieldType: eVisualFieldType;
    /**
    * Field rectangular area coordinates on the image
    * @type {Rect}
    */
    FieldRect: Rect;
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
    * Creates an instance of DocVisualExtendedField1 from plain object
    *
    * @param {unknown} input - plain object
    * @returns {DocVisualExtendedField1}
    */
    static fromPlain: (input: unknown) => DocVisualExtendedField1;
}
