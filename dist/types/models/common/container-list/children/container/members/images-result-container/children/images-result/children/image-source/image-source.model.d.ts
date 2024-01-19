import { eSource } from '../../../../../../../../../../../consts';
/**
* Used for graphic information source description
*/
export interface iImageSource {
    /**
    * Container type
    * @type {number}
    */
    containerType: number;
    /**
    * Source
    * @type {eSource}
    */
    source: eSource;
}
/**
* Used for graphic information source description
*/
export declare class ImageSource implements iImageSource {
    /**
    * Container type
    * @type {number}
    */
    containerType: number;
    /**
    * Source
    * @type {eSource}
    */
    source: eSource;
}
