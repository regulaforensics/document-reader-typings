import { eResultType } from '../../../../../../../consts';
import { aContainer } from '../../container.abstract';
import { iTextResult, TextResult } from './children';
/**
* Result type of TextResultContainer
*/
export type tTextResultContainerResultType = eResultType.TEXT;
/**
* Container for iTextResult
*/
export interface iTextResultContainer extends aContainer {
    /**
    * Text result
    * @type {iTextResult}
    */
    Text: iTextResult;
    /**
    * Result type stored in this container
    * @type {tTextResultContainerResultType}
    */
    result_type: tTextResultContainerResultType;
}
/**
* Container for TextResult
*/
export declare class TextResultContainer extends aContainer implements iTextResultContainer {
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
    * @type {tTextResultContainerResultType}
    */
    result_type: tTextResultContainerResultType;
    /**
    * Text result
    * @type {TextResult}
    */
    Text: TextResult;
    /**
    * Creates an instance of TextContainer from plain object
    *
    * @param {unknown} input - plain object
    * @returns {TextResultContainer}
    */
    static fromPlain: (input: unknown) => TextResultContainer;
    /**
    * Check if the given instance of TextContainer is valid
    *
    * @param {TextResultContainer} instance - instance of TextContainer to validate
    * @throws {DocReaderTypeError}
    * @returns {true | never}
    */
    static validate: (instance: TextResultContainer) => true | never;
}
