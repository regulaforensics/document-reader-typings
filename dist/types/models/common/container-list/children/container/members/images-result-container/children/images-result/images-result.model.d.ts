import { iImageSource, iImageField, ImageSource, ImageField } from './children';
/**
* Structure is used for representation of all graphic results
*/
export interface iImagesResult {
    /**
    * Fields count
    * @type {number}
    */
    fieldCount: number;
    /**
    * Available sources count
    * @type {number}
    */
    availableSourceCount: number;
    /**
    * Available sources list
    * @type {iImageSource[]}
    */
    availableSourceList: iImageSource[];
    /**
    * Fields list
    * @type {iImageField[]}
    */
    fieldList: iImageField[];
}
/**
* Structure is used for representation of all graphic results
*/
export declare class ImagesResult implements iImagesResult {
    /**
    * Fields count
    * @type {number}
    */
    fieldCount: number;
    /**
    * Available sources count
    * @type {number}
    */
    availableSourceCount: number;
    /**
    * Available sources list
    * @type {ImageSource[]}
    */
    availableSourceList: ImageSource[];
    /**
    * Fields list
    * @type {ImageField[]}
    */
    fieldList: ImageField[];
}
