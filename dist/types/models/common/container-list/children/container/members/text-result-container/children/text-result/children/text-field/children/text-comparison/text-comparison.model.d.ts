import { eCheckResult, eSource } from '../../../../../../../../../../../../../consts';
/**
* Used for comparison of text results
*/
export interface iTextComparison {
    /**
    * Source left
    * @type {eSource}
    */
    sourceLeft: eSource;
    /**
    * Source right
    * @type {eSource}
    */
    sourceRight: eSource;
    /**
    * Comparison status
    * @type {eCheckResult}
    */
    status: eCheckResult;
}
/**
* Used for comparison of text results
*/
export declare class TextComparison implements iTextComparison {
    /**
    * Source left
    * @type {eSource}
    */
    sourceLeft: eSource;
    /**
    * Source right
    * @type {eSource}
    */
    sourceRight: eSource;
    /**
    * Comparison status
    * @type {eCheckResult}
    */
    status: eCheckResult;
}
