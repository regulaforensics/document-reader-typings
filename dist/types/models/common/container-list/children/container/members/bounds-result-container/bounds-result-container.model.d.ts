import { eResultType } from '../../../../../../../consts';
import { BoundsResult, iBoundsResult } from '../../../../../bounds-result';
import { aContainer } from '../../container.abstract';
/**
* Result type of BoundsResultContainer
*/
export type tBoundsResultContainerResultType = eResultType.DOCUMENT_POSITION | eResultType.MRZ_POSITION | eResultType.BARCODE_POSITION;
/**
* Container for iBoundsResult
*/
export interface iBoundsResultContainer extends aContainer {
    /**
    * Document position
    * @type {iBoundsResult}
    */
    DocumentPosition: iBoundsResult;
    /**
    * Result type stored in this container
    * @type {tBoundsResultContainerResultType}
    */
    result_type: tBoundsResultContainerResultType;
}
/**
* Container for BoundsResult
*/
export declare class BoundsResultContainer extends aContainer implements iBoundsResultContainer {
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
    * @type {tBoundsResultContainerResultType}
    */
    result_type: tBoundsResultContainerResultType;
    /**
    * Document position
    * @type {BoundsResult}
    */
    DocumentPosition: BoundsResult;
    /**
    * Create new instance of BoundsResultContainer from plain object
    *
    * @param {unknown} input - plain object
    * @return {BoundsResultContainer}
    */
    static fromPlain: (input: unknown) => BoundsResultContainer;
    /**
    * Check if the given instance of BoundsResultContainer is valid
    *
    * @param {BoundsResultContainer} instance - instance of BoundsResultContainer to validate
    * @throws {DocReaderTypeError} - if BoundsResultContainer is not valid
    * @return {true | never} - true if BoundsResultContainer is valid, never otherwise
    */
    static validate: (instance: BoundsResultContainer) => true | never;
}
