/**
* Structure is used for electronic document data source description
*/
export interface iRfidOrigin {
    /**
    * Data group number
    * @type {number}
    */
    dg: number;
    /**
    * Data group tag number
    * @type {number}
    */
    dgTag: number;
    /**
    * Tag entry
    * @type {number}
    */
    tagEntry: number;
    /**
    * Entry view
    * @type {number}
    */
    entryView: number;
}
/**
* Structure is used for electronic document data source description
*/
export declare class RfidOrigin implements iRfidOrigin {
    /**
    * Data group number
    * @type {number}
    */
    dg: number;
    /**
    * Data group tag number
    * @type {number}
    */
    dgTag: number;
    /**
    * Tag entry
    * @type {number}
    */
    tagEntry: number;
    /**
    * Entry view
    * @type {number}
    */
    entryView: number;
}
