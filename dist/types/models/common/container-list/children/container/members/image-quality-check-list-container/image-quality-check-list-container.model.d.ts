import { eResultType } from '../../../../../../../consts';
import { aContainer } from '../../container.abstract';
import { iImageQualityCheckList, ImageQualityCheckList } from './children';
/**
* Result type of ImageQualityCheckListContainer
*/
export type tImageQualityCheckListContainerResultType = eResultType.INPUT_IMAGE_QUALITY;
/**
* Container for iImageQualityCheckList
*/
export interface iImageQualityCheckListContainer extends aContainer {
    /**
    * Used for storing input image quality check results list
    * @type {iImageQualityCheckList}
    */
    ImageQualityCheckList: iImageQualityCheckList;
    /**
    * Result type stored in this container
    * @type {tImageQualityCheckListContainerResultType}
    */
    result_type: tImageQualityCheckListContainerResultType;
}
/**
* Container for ImageQualityCheckList
*/
export declare class ImageQualityCheckListContainer extends aContainer implements iImageQualityCheckListContainer {
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
    * @type {tImageQualityCheckListContainerResultType}
    */
    result_type: tImageQualityCheckListContainerResultType;
    /**
    * Used for storing input image quality check results list
    * @type {ImageQualityCheckList}
    */
    ImageQualityCheckList: ImageQualityCheckList;
    /**
    * Creates an instance of ImageQualityCheckListContainer from plain object
    *
    * @param {unknown} input - plain object
    * @returns {ImageQualityCheckListContainer}
    */
    static fromPlain: (input: unknown) => ImageQualityCheckListContainer;
    /**
    * Check if the given instance of ImageQualityCheckListContainer is valid
    *
    * @param {ImageQualityCheckListContainer} instance - instance of ImageQualityCheckListContainer to be checked
    * @throws {DocReaderTypeError}
    * @returns {true | never}
    */
    static validate: (instance: ImageQualityCheckListContainer) => true | never;
}
