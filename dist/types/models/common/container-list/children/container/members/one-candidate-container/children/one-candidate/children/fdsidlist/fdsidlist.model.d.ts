import { eDocFormat, eDocType } from '../../../../../../../../../../../consts';
/**
* Structure serves for storing additional document information and its link to
* IRS document or documents
*/
export interface iFDSIDList {
    /**
    * Document issuing country ICAO code
    * @type {string}
    */
    ICAOCode: string;
    /**
    * Number of elements in the List
    * @type {number}
    */
    Count: number;
    /**
    * Array of IRS document identifiers
    * @type {number[]}
    */
    List: number[];
    /**
    * Document type
    * @type {eDocType}
    */
    dType: eDocType;
    /**
    * Document format
    * @type {eDocFormat}
    */
    dFormat: eDocFormat;
    /**
    * Flag for MRZ presence on document
    * @type {boolean}
    */
    dMRZ: boolean;
    /**
    * Document description text
    * @type {string}
    */
    dDescription: string;
    /**
    * Document issue year
    * @type {string}
    */
    dYear: string;
    /**
    * Document issuing country name
    * @type {string}
    */
    dCountryName: string;
    /**
    * Document issuing country state code
    * @type {string|undefined}
    */
    dStateCode?: string;
    /**
    * Document issuing country state name
    * @type {string|undefined}
    */
    dStateName?: string;
    /**
    * Whether the document is deprecated
    * @type {boolean}
    */
    isDeprecated: boolean;
}
/**
* Structure serves for storing additional document information and its link to
* IRS document or documents
*/
export declare class FDSIDList implements iFDSIDList {
    /**
    * Document issuing country ICAO code
    * @type {string}
    */
    ICAOCode: string;
    /**
    * Number of elements in the List
    * @type {number}
    */
    Count: number;
    /**
    * Array of IRS document identifiers
    * @type {number[]}
    */
    List: number[];
    /**
    * Document type
    * @type {eDocType}
    */
    dType: eDocType;
    /**
    * Document format
    * @type {eDocFormat}
    */
    dFormat: eDocFormat;
    /**
    * Flag for MRZ presence on document
    * @type {boolean}
    */
    dMRZ: boolean;
    /**
    * Document description text
    * @type {string}
    */
    dDescription: string;
    /**
    * Document issue year
    * @type {string}
    */
    dYear: string;
    /**
    * Document issuing country name
    * @type {string}
    */
    dCountryName: string;
    /**
    * Document issuing country state code
    * @type {string|undefined}
    */
    dStateCode?: string;
    /**
    * Document issuing country state name
    * @type {string|undefined}
    */
    dStateName?: string;
    /**
    * Whether the document is deprecated
    * @type {boolean}
    */
    isDeprecated: boolean;
}
