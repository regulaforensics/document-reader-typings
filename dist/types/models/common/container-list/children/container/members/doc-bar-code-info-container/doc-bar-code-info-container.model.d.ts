import { eResultType } from '../../../../../../../consts';
import { aContainer } from '../../container.abstract';
import { DocBarCodeInfo, iDocBarCodeInfo } from './children';
/**
* Result type of DocBarCodeInfoContainer
*/
export type tDocBarCodeInfoContainerResultType = eResultType.BARCODES;
/**
* Container for iDocBarCodeInfo
*/
export interface iDocBarCodeInfoContainer extends aContainer {
    /**
    * Structure serves for storing and passing to the user application of results of bar-codes areas search on the
    * scanned document page and their reading in binary non-formatted code.
    * @type {iDocBarCodeInfo|undefined}
    */
    DocBarCodeInfo?: iDocBarCodeInfo;
    /**
    * Result type stored in this container
    * @type {tDocBarCodeInfoContainerResultType}
    */
    result_type: tDocBarCodeInfoContainerResultType;
}
/**
* Container for DocBarCodeInfo
*/
export declare class DocBarCodeInfoContainer extends aContainer implements iDocBarCodeInfoContainer {
    /**
    * Lighting scheme code for the given result (used only for images)
    * @type {number}
    */
    light: number;
    /**
    * @internal
    */
    list_idx: number;
    /**
    * Page index (when working with multi-page document)
    * @type {number}
    */
    page_idx: number;
    /**
    * @internal
    */
    buf_length: number;
    /**
    * Result type stored in this container
    * @type {tDocBarCodeInfoContainerResultType}
    */
    result_type: tDocBarCodeInfoContainerResultType;
    /**
    * Structure serves for storing and passing to the user application of results of bar-codes areas search on the
    * scanned document page and their reading in binary non-formatted code.
    * @type {DocBarCodeInfo|undefined}
    */
    DocBarCodeInfo?: DocBarCodeInfo;
    /**
    * Creates an instance of DocBarCodeInfoContainer from plain object
    *
    * @param {unknown} input - plain object
    * @returns {DocBarCodeInfoContainer}
    */
    static fromPlain: (input: unknown) => DocBarCodeInfoContainer;
    /**
    * Check if the given instance is a valid DocBarCodeInfoContainer
    *
    * @param {DocBarCodeInfoContainer} instance - instance to check
    * @throws {DocReaderTypeError}
    * @returns {true | never}
    */
    static validate: (instance: DocBarCodeInfoContainer) => true | never;
}
