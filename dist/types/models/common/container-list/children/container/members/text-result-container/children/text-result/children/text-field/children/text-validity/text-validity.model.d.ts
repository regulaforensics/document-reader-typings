import { eCheckResult, eSource } from '../../../../../../../../../../../../../consts';
/**
* Structure is used for storing specified source text field validity results
*/
export interface iTextValidity {
    /**
    * Source name
    * @type {eSource}
    */
    source: eSource;
    /**
    * Validity status
    * @type {eCheckResult}
    */
    status: eCheckResult;
}
/**
* Structure is used for storing specified source text field validity results
*/
export declare class TextValidity implements iTextValidity {
    /**
    * Source name
    * @type {eSource}
    */
    source: eSource;
    /**
    * Validity status
    * @type {eCheckResult}
    */
    status: eCheckResult;
}
