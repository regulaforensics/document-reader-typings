import { eCheckResult } from '../../../../../../../../../consts';
import { iImageQualityCheck, ImageQualityCheck } from './children';
/**
* Structure is used for storing input image quality check results list
*/
export interface iImageQualityCheckList {
    /**
    * Overall check result
    * @type {eCheckResult}
    */
    result: eCheckResult;
    /**
    * Array of single check result pointers
    * @type {iImageQualityCheck[]}
    */
    List: iImageQualityCheck[];
    /**
    * Number of List array elements
    * @type {number}
    */
    Count: number;
}
/**
* Structure is used for storing input image quality check results list
*/
export declare class ImageQualityCheckList implements iImageQualityCheckList {
    /**
    * Overall check result
    * @type {eCheckResult}
    */
    result: eCheckResult;
    /**
    * Array of single check result pointers
    * @type {ImageQualityCheck[]}
    */
    List: ImageQualityCheck[];
    /**
    * Number of List array elements
    * @type {number}
    */
    Count: number;
}
