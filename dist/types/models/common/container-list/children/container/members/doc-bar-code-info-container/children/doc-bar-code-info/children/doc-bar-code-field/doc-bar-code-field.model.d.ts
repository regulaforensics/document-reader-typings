import { iRect, Rect } from '../../../../../../../../..';
import { eBarCodeDetectionType, eBarCodeResultCodes, eBarCodeType } from '../../../../../../../../../../../consts';
import { TipPDF417Info, TipDecodeModule, iTipPDF417Info, iTipDecodeModule } from './children';
/**
* Structure is a basic containing structure for iDocBarCodeInfo list
* and contains bar-code reading data
*/
export interface iDocBarCodeField {
    /**
    * BarCode rotation angle (in radians)
    * @type {number}
    */
    bcAngle_DETECT: number;
    /**
    * BarCode reading result
    * @type {eBarCodeResultCodes}
    */
    bcCodeResult: eBarCodeResultCodes;
    /**
    * Number of read bar-code modules
    * @type {number}
    */
    bcCountModule: number;
    /**
    * Results of reading data from a bar-code modules
    * @type {iTipDecodeModule[]}
    */
    bcDataModule: iTipDecodeModule[];
    /**
    * Information on PDF417 code parameters (only for PDF417)
    * @type {iTipPDF417Info|undefined}
    */
    bcPDF417INFO?: iTipPDF417Info;
    /**
    * BarCode area coordinates on the image
    * @type {iRect}
    */
    bcROI_DETECT: iRect;
    /**
    * Decoded bar-code type
    * @type {eBarCodeType}
    */
    bcType_DECODE: eBarCodeType;
    /**
    * Type of the detected bar-code
    * @type {eBarCodeDetectionType}
    */
    bcType_DETECT: eBarCodeDetectionType;
    /**
    * @internal
    */
    bcReserved1?: unknown;
    /**
    * @internal
    */
    bcReserved2?: unknown;
    /**
    * @internal
    */
    bcReserved3?: unknown;
}
/**
* Structure is a basic containing structure for DocBarCodeInfo list
* and contains bar-code reading data
*/
export declare class DocBarCodeField implements iDocBarCodeField {
    /**
    * BarCode rotation angle (in radians)
    * @type {number}
    */
    bcAngle_DETECT: number;
    /**
    * BarCode reading result
    * @type {eBarCodeResultCodes}
    */
    bcCodeResult: eBarCodeResultCodes;
    /**
    * Number of read bar-code modules
    * @type {number}
    */
    bcCountModule: number;
    /**
    * Results of reading data from a bar-code modules
    * @type {TipDecodeModule[]}
    */
    bcDataModule: TipDecodeModule[];
    /**
    * Information on PDF417 code parameters (only for PDF417)
    * @type {TipPDF417Info|undefined}
    */
    bcPDF417INFO?: TipPDF417Info;
    /**
    * BarCode area coordinates on the image
    * @type {Rect}
    */
    bcROI_DETECT: Rect;
    /**
    * Decoded bar-code type
    * @type {eBarCodeType}
    */
    bcType_DECODE: eBarCodeType;
    /**
    * Type of the detected bar-code
    * @type {eBarCodeDetectionType}
    */
    bcType_DETECT: eBarCodeDetectionType;
    /**
    * @internal
    */
    bcReserved1?: unknown;
    /**
    * @internal
    */
    bcReserved2?: unknown;
    /**
    * @internal
    */
    bcReserved3?: unknown;
}
