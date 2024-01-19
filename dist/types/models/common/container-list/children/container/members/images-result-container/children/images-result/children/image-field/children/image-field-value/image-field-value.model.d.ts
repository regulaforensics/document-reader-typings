import { eLights, eSource } from '../../../../../../../../../../../../../consts';
import { iRfidOrigin, RfidOrigin } from '../../../../../../../../../../../rfid-origin';
import { iRect, Rect } from '../../../../../../../../../../../rect';
/**
* Image representation
*/
export interface iImageFieldValue {
    /**
    * Image file in Base64 representation
    * @type {string}
    */
    value: string;
    /**
    * Original image file in Base64 representation
    * @type {string}
    */
    originalValue: string;
    /**
    * Source
    * @type {eSource}
    */
    source: eSource;
    /**
    * Container type
    * @type {number}
    */
    containerType: number;
    /**
    * Page index
    * @type {number}
    */
    pageIndex: number;
    /**
    * Light index
    * @type {eLights}
    */
    lightIndex: eLights;
    /**
    * Field rectangular area
    * @type {iRect}
    */
    fieldRect: iRect;
    /**
    * Field source from electronic document
    * @type {iRfidOrigin|undefined}
    */
    rfidOrigin?: iRfidOrigin;
    /**
    * Original page index
    * @type {number|undefined}
    */
    originalPageIndex?: number;
}
/**
* Image representation
*/
export declare class ImageFieldValue implements iImageFieldValue {
    /**
    * Image file in Base64 representation
    * @type {string}
    */
    value: string;
    /**
    * Original image file in Base64 representation
    * @type {string}
    */
    originalValue: string;
    /**
    * Source
    * @type {eSource}
    */
    source: eSource;
    /**
    * Container type
    * @type {number}
    */
    containerType: number;
    /**
    * Page index
    * @type {number}
    */
    pageIndex: number;
    /**
    * Light index
    * @type {eLights}
    */
    lightIndex: eLights;
    /**
    * Field rectangular area
    * @type {Rect}
    */
    fieldRect: Rect;
    /**
    * Field source from electronic document
    * @type {RfidOrigin|undefined}
    */
    rfidOrigin?: RfidOrigin;
    /**
    * Original page index
    * @type {number|undefined}
    */
    originalPageIndex?: number;
}
