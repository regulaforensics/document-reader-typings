/**
* Specific configuration for each document
*/
export interface iPerDocumentConfig {
    /**
    * Specific template IDs, for which apply current custom configuration
    * @type {number[]|undefined}
    */
    docID?: number[];
    /**
    * Contains items from eAuthenticity as sum via OR operation
    * @type {number|undefined}
    */
    excludeAuthChecks?: number;
}
/**
* Specific configuration for each document
*/
export declare class PerDocumentConfig implements iPerDocumentConfig {
    /**
    * Specific template IDs, for which apply current custom configuration
    * @type {number[]|undefined}
    */
    docID?: number[];
    /**
    * Contains items from eAuthenticity as sum via OR operation
    * @type {number|undefined}
    */
    excludeAuthChecks?: number;
}
