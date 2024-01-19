import { eResultType } from '../../../../../../../consts';
import { aContainer } from '../../container.abstract';
import { DocGraphicsInfo, iDocGraphicsInfo } from './children';
/**
* Result type of DocGraphicsInfoContainer
*/
export type tDocGraphicsInfoContainerResultType = eResultType.GRAPHICS | eResultType.BARCODES_IMAGE_DATA | eResultType.LIVE_PORTRAIT | eResultType.EXT_PORTRAIT | eResultType.FINGERPRINTS;
/**
* Container for iDocGraphicsInfo
*/
export interface iDocGraphicsInfoContainer extends aContainer {
    /**
    * Model serves for storing graphic results of document filling area and bar-codes reading
    * @type {iDocGraphicsInfo|undefined}
    */
    DocGraphicsInfo?: iDocGraphicsInfo;
    /**
    * Result type stored in this container
    * @type {tDocGraphicsInfoContainerResultType}
    */
    result_type: tDocGraphicsInfoContainerResultType;
}
/**
* Container for DocGraphicsInfo
*/
export declare class DocGraphicsInfoContainer extends aContainer implements iDocGraphicsInfoContainer {
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
    * @type {tDocGraphicsInfoContainerResultType}
    */
    result_type: tDocGraphicsInfoContainerResultType;
    /**
    * Model serves for storing graphic results of document filling area and bar-codes reading
    * @type {DocGraphicsInfo|undefined}
    */
    DocGraphicsInfo?: DocGraphicsInfo;
    /**
    * Creates an instance of DocGraphicsInfoContainer from plain object
    *
    * @param {unknown} input - plain object
    * @returns {DocGraphicsInfoContainer}
    */
    static fromPlain: (input: unknown) => DocGraphicsInfoContainer;
    /**
    * Check if the given instance is valid DocGraphicsInfoContainer
    *
    * @param {DocGraphicsInfoContainer} instance - instance to check
    * @throws {DocReaderTypeError}
    * @returns {true | never}
    */
    static validate: (instance: DocGraphicsInfoContainer) => true | never;
}
