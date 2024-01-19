import { eResultType } from '../../../../../../../consts';
import { aContainer } from '../../container.abstract';
import { iImagesResult, ImagesResult } from './children';
/**
* Result type of ImagesResultContainer
*/
export type tImagesResultContainerResultType = eResultType.IMAGES;
/**
* Container for iImagesResult
*/
export interface iImagesResultContainer extends aContainer {
    /**
    * Used for representation of all graphic results
    * @type {iImagesResult}
    */
    Images: iImagesResult;
    /**
    * Result type stored in this container
    * @type {tImagesResultContainerResultType}
    */
    result_type: tImagesResultContainerResultType;
}
/**
* Container for ImagesResult
*/
export declare class ImagesResultContainer extends aContainer implements iImagesResultContainer {
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
    * @type {tImagesResultContainerResultType}
    */
    result_type: tImagesResultContainerResultType;
    /**
    * Images result
    * @type {ImagesResult}
    */
    Images: ImagesResult;
    /**
    * Create new instance of ImagesResultContainer from plain object
    *
    * @param {unknown} input - plain object
    * @returns {ImagesResultContainer}
    */
    static fromPlain: (input: unknown) => ImagesResultContainer;
    /**
    * Check if the given instance satisfies the ImagesResultContainer interface
    *
    * @param {ImagesResultContainer} instance - instance to be checked
    * @throws {DocReaderTypeError}
    * @returns {true | never}
    */
    static validate: (instance: ImagesResultContainer) => true | never;
}
