import { iuDocVisualExtendedField, uDocVisualExtendedField } from './children';
/**
* Structure serves for storing text results of MRZ, document filling and bar-codes reading
*/
export interface iDocVisualExtendedInfo {
    /**
    * Number of pArrayFields array elements
    * @type {number}
    */
    nFields: number;
    /**
    * Array of structures containing logically divided text data
    * @type {iuDocVisualExtendedField[]}
    */
    pArrayFields: iuDocVisualExtendedField[];
}
/**
* Structure serves for storing text results of MRZ, document filling and bar-codes reading
*/
export declare class DocVisualExtendedInfo implements iDocVisualExtendedInfo {
    /**
    * Number of pArrayFields array elements
    * @type {number}
    */
    nFields: number;
    /**
    * Array of structures containing logically divided text data
    * @type {uDocVisualExtendedField[]}
    */
    pArrayFields: uDocVisualExtendedField[];
}
