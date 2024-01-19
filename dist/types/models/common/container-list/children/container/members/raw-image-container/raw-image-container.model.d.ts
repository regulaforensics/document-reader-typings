import { eResultType } from '../../../../../../../consts';
import { iImageData, ImageData } from '../../../../../image-data';
import { aContainer } from '../../container.abstract';
/**
* Result type of RawImageContainer
*/
export type tRawImageContainerResultType = eResultType.RAW_UNCROPPED_IMAGE;
/**
* Container for iImageData
* Contains cropped and rotated with perspective compensation image of document.
* Single input image can contain multiple document side/pages, which will be returned as separated results.
* Most of coordinates in other types defined on that image
*/
export interface iRawImageContainer extends aContainer {
    /**
    * Structure is used for storing a graphic image
    * @type {iImageData}
    */
    RawImageContainer: iImageData;
    /**
    * Result type stored in this container
    * @type {tRawImageContainerResultType}
    */
    result_type: tRawImageContainerResultType;
}
/**
* Container for ImageData
*/
export declare class RawImageContainer extends aContainer implements iRawImageContainer {
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
    * @type {tRawImageContainerResultType}
    */
    result_type: tRawImageContainerResultType;
    /**
    * Structure is used for storing a graphic image
    * @type {ImageData}
    */
    RawImageContainer: ImageData;
    /**
    * Creates an instance of RawImageContainer from plain object
    *
    * @param {unknown} input - plain object
    * @returns {RawImageContainer}
    */
    static fromPlain: (input: unknown) => RawImageContainer;
    /**
    * Check if the given instance is valid RawImageContainer
    *
    * @param {RawImageContainer} instance - instance to check
    * @throws {DocReaderTypeError}
    * @returns {true | never}
    */
    static validate: (instance: RawImageContainer) => true | never;
}
