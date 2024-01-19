/**
* Structure is used for storing additional information on parameters
* of PDF417 format bar-codes
*/
export interface iTipPDF417Info {
    /**
    * Code decoding rotation angle (in radians)
    * @type {number}
    */
    Angle: number;
    /**
    * Number of columns in the bar-code
    * @type {number}
    */
    bcColumn: number;
    /**
    * BarCode error correction level
    * @type {number}
    */
    bcErrorLevel: number;
    /**
    * Number of rows in a bar-code
    * @type {number}
    */
    bcRow: number;
    /**
    * Width of the minimum bar-code element on the image, in pixels
    * @type {number}
    */
    minX: number;
    /**
    * Height of the minimum bar-code element on the image, in pixels
    * @type {number}
    */
    minY: number;
}
/**
* Structure is used for storing additional information on parameters
* of PDF417 format bar-codes
*/
export declare class TipPDF417Info implements iTipPDF417Info {
    /**
    * Code decoding rotation angle (in radians)
    * @type {number}
    */
    Angle: number;
    /**
    * Number of columns in the bar-code
    * @type {number}
    */
    bcColumn: number;
    /**
    * BarCode error correction level
    * @type {number}
    */
    bcErrorLevel: number;
    /**
    * Number of rows in a bar-code
    * @type {number}
    */
    bcRow: number;
    /**
    * Width of the minimum bar-code element on the image, in pixels
    * @type {number}
    */
    minX: number;
    /**
    * Height of the minimum bar-code element on the image, in pixels
    * @type {number}
    */
    minY: number;
}
