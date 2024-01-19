import { iRect, Rect } from '../../../../../../../../../../../rect';
import { iRfidOrigin, RfidOrigin } from '../../../../../../../../../../../rfid-origin';
import { eCheckResult, eSource } from '../../../../../../../../../../../../../consts';
import { iTextSymbol, TextSymbol } from './children';
/**
* Used for storing text field values
*/
export interface iTextFieldValue {
    /**
    * Source
    * @type {eSource}
    */
    source: eSource;
    /**
    * Field value in current provision of information format
    * @type {string}
    */
    value: string;
    /**
    * Field original value
    * @type {string|undefined}
    */
    originalValue?: string;
    /**
    * Original validity
    * @type {eCheckResult}
    */
    originalValidity: eCheckResult;
    /**
    * Page index
    * @type {number}
    */
    pageIndex: number;
    /**
    * Field rectangular area
    * @type {iRect|undefined}
    */
    fieldRect?: iRect;
    /**
    * Field source from electronic document
    * @type {iRfidOrigin|undefined}
    */
    rfidOrigin?: iRfidOrigin;
    /**
    * Field recognition probability
    * @type {number}
    */
    probability: number;
    /**
    * Original symbols
    * @type {iTextSymbol[]|undefined}
    */
    originalSymbols?: iTextSymbol[];
}
/**
* Used for storing text field values
*/
export declare class TextFieldValue implements iTextFieldValue {
    /**
    * Source
    * @type {eSource}
    */
    source: eSource;
    /**
    * Field value in current provision of information format
    * @type {string}
    */
    value: string;
    /**
    * Field original value
    * @type {string|undefined}
    */
    originalValue?: string;
    /**
    * Original validity
    * @type {eCheckResult}
    */
    originalValidity: eCheckResult;
    /**
    * Page index
    * @type {number}
    */
    pageIndex: number;
    /**
    * Field rectangular area
    * @type {Rect|undefined}
    */
    fieldRect?: Rect;
    /**
    * Field source from electronic document
    * @type {RfidOrigin|undefined}
    */
    rfidOrigin?: RfidOrigin;
    /**
    * Field recognition probability
    * @type {number}
    */
    probability: number;
    /**
    * Original symbols
    * @type {TextSymbol[]|undefined}
    */
    originalSymbols?: TextSymbol[];
}
