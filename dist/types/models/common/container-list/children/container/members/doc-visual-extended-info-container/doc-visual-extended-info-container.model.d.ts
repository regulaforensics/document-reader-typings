import { eResultType } from '../../../../../../../consts';
import { DocVisualExtendedInfo, iDocVisualExtendedInfo } from '../../../../../doc-visual-extended-info';
import { aContainer } from '../../container.abstract';
/**
* Result type of DocVisualExtendedInfoContainer
*/
export type tDocVisualExtendedInfoContainerResultType = eResultType.VISUAL_OCR_EXTENDED | eResultType.MRZ_OCR_EXTENDED | eResultType.BARCODES_TEXT_DATA | eResultType.MAGNETIC_STRIPE_TEXT_DATA;
/**
* Container for iDocVisualExtendedInfo
*/
export interface iDocVisualExtendedInfoContainer extends aContainer {
    /**
    * Structure serves for storing text results of MRZ, document filling and bar-codes reading
    * @type {iDocVisualExtendedInfo|undefined}
    */
    DocVisualExtendedInfo?: iDocVisualExtendedInfo;
    /**
    * Result type stored in this container
    * @type {tDocVisualExtendedInfoContainerResultType}
    */
    result_type: tDocVisualExtendedInfoContainerResultType;
}
/**
* Container for DocVisualExtendedInfo
*/
export declare class DocVisualExtendedInfoContainer extends aContainer implements iDocVisualExtendedInfoContainer {
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
    * @type {tDocVisualExtendedInfoContainerResultType}
    */
    result_type: tDocVisualExtendedInfoContainerResultType;
    /**
    * Structure serves for storing text results of MRZ, document filling and bar-codes reading
    * @type {DocVisualExtendedInfo|undefined}
    */
    DocVisualExtendedInfo?: DocVisualExtendedInfo;
    /**
    * Creates an instance of DocVisualExtendedInfoContainer from plain object
    *
    * @param {unknown} input - plain object
    * @returns {DocVisualExtendedInfoContainer}
    */
    static fromPlain: (input: unknown) => DocVisualExtendedInfoContainer;
    /**
    * Check if the given instance of DocVisualExtendedInfoContainer is valid
    *
    * @param {DocVisualExtendedInfoContainer} instance - instance of DocVisualExtendedInfoContainer to be checked
    * @throws {DocReaderTypeError}
    * @returns {true | never}
    */
    static validate: (instance: DocVisualExtendedInfoContainer) => true | never;
}
