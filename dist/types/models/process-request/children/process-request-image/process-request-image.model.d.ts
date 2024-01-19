import { iImageData, ImageData } from '../../../common';
import { eLights } from '../../../../consts';
/**
* Image data
*/
export interface iProcessRequestImage {
    /**
    * Image data
    * @type {iImageData}
    */
    ImageData: iImageData;
    /**
    * Lighting scheme code
    * @type {eLights|undefined}
    */
    light?: eLights;
    /**
    * Page index (when working with multi-page document)
    * @type {number|undefined}
    */
    page_idx?: number;
}
/**
* Image data
*/
export declare class ProcessRequestImage implements iProcessRequestImage {
    /**
    * Image data
    * @type {iImageData}
    */
    ImageData: ImageData;
    /**
    * Lighting scheme code
    * @type {eLights|undefined}
    */
    light?: eLights;
    /**
    * Page index (when working with multi-page document)
    * @type {number|undefined}
    */
    page_idx?: number;
}
