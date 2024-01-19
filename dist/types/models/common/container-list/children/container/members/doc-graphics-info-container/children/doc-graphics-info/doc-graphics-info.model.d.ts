import { uDocGraphicField, iuDocGraphicField } from './children';
/**
* Model serves for storing graphic results of document filling area and bar-codes reading
*/
export interface iDocGraphicsInfo {
    /**
    * Array of images
    * @type {iuDocGraphicField[]}
    */
    pArrayFields: iuDocGraphicField[];
    /**
    * Number of pArrayFields array elements
    * @type {number}
    */
    nFields: number;
}
/**
* Model serves for storing graphic results of document filling area
* and bar-codes reading
*/
export declare class DocGraphicsInfo implements iDocGraphicsInfo {
    /**
    * Array of images
    * @type {uDocGraphicField[]}
    */
    pArrayFields: uDocGraphicField[];
    /**
    * Number of pArrayFields array elements
    * @type {number}
    */
    nFields: number;
}
