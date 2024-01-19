import { eResultType } from '../../../../../../../consts';
import { aContainer } from '../../container.abstract';
import { iListVerifiedFields, ListVerifiedFields } from './children';
/**
* Result type of ListVerifiedFieldContainer
*/
export type tListVerifiedFieldContainerResultType = eResultType.LEXICAL_ANALYSIS;
/**
* Container for iListVerifiedFields
*/
export interface iListVerifiedFieldContainer extends aContainer {
    /**
    * Structure serves for storing the results of comparing the MRZ
    * text data, document filling area data, bar-codes data and data retrieved from RFID-chip
    * memory (used together with RFID-Chip Reader SDK) and passing it to the user application
    * @type {iListVerifiedFields|undefined}
    */
    ListVerifiedFields?: iListVerifiedFields;
    /**
    * Result type stored in this container
    * @type {tListVerifiedFieldContainerResultType}
    */
    result_type: tListVerifiedFieldContainerResultType;
}
/**
* Container for ListVerifiedFields
*/
export declare class ListVerifiedFieldContainer extends aContainer implements iListVerifiedFieldContainer {
    /**
    * Lighting scheme code for the given result (used only for images)
    * @type {number}
    */
    light: number;
    /**
    * @internal
    * @type {number}
    */
    list_idx: number;
    /**
    * Page index (when working with multi-page document)
    * @type {number}
    */
    page_idx: number;
    /**
    * @internal
    * @type {number}
    */
    buf_length: number;
    /**
    * Result type stored in this container
    * @type {tListVerifiedFieldContainerResultType}
    */
    result_type: tListVerifiedFieldContainerResultType;
    /**
    * Structure serves for storing the results of comparing the MRZ
    * text data, document filling area data, bar-codes data and data retrieved from RFID-chip
    * memory (used together with RFID-Chip Reader SDK) and passing it to the user application
    * @type {ListVerifiedFields|undefined}
    */
    ListVerifiedFields?: ListVerifiedFields;
    /**
    * Creates an instance of ListVerifiedFieldContainer from plain
    *
    * @param {unknown} input - plain object
    * @return {ListVerifiedFieldContainer}
    */
    static fromPlain: (input: unknown) => ListVerifiedFieldContainer;
    /**
    * Check if the given instance of LexicalAnalysisContainer is valid
    *
    * @param {ListVerifiedFieldContainer} instance - instance of LexicalAnalysisContainer to be checked
    * @throws {DocReaderTypeError} - if the given instance of LexicalAnalysisContainer is not valid
    * @return {true | never} - true if the given instance of LexicalAnalysisContainer is valid
    */
    static validate: (instance: ListVerifiedFieldContainer) => true | never;
}
