import { iRect, Rect } from '../../../../../../../../../../../../../rect';
/**
* Used for storing symbol reading result
*/
export interface iTextSymbol {
    /**
    * Symbol code
    * @type {number}
    */
    code: number;
    /**
    * Recognition probability
    * @type {number}
    */
    probability: number;
    /**
    * Symbol rectangular area
    * @type {iRect|undefined}
    */
    rect?: iRect;
}
/**
* Used for storing symbol reading result
*/
export declare class TextSymbol implements iTextSymbol {
    /**
    * Symbol code
    * @type {number}
    */
    code: number;
    /**
    * Recognition probability
    * @type {number}
    */
    probability: number;
    /**
    * Symbol rectangular area
    * @type {Rect|undefined}
    */
    rect?: Rect;
}
