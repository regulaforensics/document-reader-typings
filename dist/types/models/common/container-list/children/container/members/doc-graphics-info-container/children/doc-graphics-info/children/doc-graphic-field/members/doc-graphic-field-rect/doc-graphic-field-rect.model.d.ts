import { eGraphicFieldType } from '../../../../../../../../../../../../../consts';
import { ImageData } from '../../../../../../../../../../../image-data';
import { iRect, Rect } from '../../../../../../../../../../../rect';
import { aDocGraphicField } from '../../doc-graphic-field.abstract';
/**
* Information about one graphic field, which is a rectangle
*/
export interface iDocGraphicFieldRect extends aDocGraphicField {
    /**
    * Field area coordinates on the general image
    * @type {iRect}
    */
    FieldRect: iRect;
}
/**
* Information about one graphic field, which is a rectangle
*/
export declare class DocGraphicFieldRect extends aDocGraphicField implements iDocGraphicFieldRect {
    /**
    * Graphic field logical type
    * @type {eGraphicFieldType}
    */
    FieldType: eGraphicFieldType;
    /**
    * Graphic field symbolic name
    * @type {string}
    */
    FieldName: string;
    /**
    * Image data
    * @type {ImageData}
    */
    image: ImageData;
    /**
    * Field area coordinates on the general image
    * @type {Rect}
    */
    FieldRect: Rect;
    /**
    * Create new instance of DocGraphicFieldRect from plain object
    *
    * @param {unknown} input - plain object
    * @return {DocGraphicFieldRect}
    */
    static fromPlain: (input: unknown) => DocGraphicFieldRect;
}
