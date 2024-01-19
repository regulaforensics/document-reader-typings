import { eCheckResult, eSource } from '../../../../../../../../../../../consts';
/**
* Used for description of text data source
*/
export interface iTextSource {
    /**
    * Source name
    * @type {eSource}
    */
    source: eSource;
    /**
    * Source validity status
    * @type {eCheckResult}
    */
    validityStatus: eCheckResult;
    /**
    * Container type
    * @type {number|undefined}
    */
    containerType?: number;
}
/**
* Used for description of text data source
*/
export declare class TextSource implements iTextSource {
    /**
    * Source name
    * @type {eSource}
    */
    source: eSource;
    /**
    * Source validity status
    * @type {eCheckResult}
    */
    validityStatus: eCheckResult;
    /**
    * Container type
    * @type {number|undefined}
    */
    containerType?: number;
}
