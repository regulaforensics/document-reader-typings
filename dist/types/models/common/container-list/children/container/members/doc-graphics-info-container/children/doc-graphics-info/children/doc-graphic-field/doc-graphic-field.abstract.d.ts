import { iImageData } from '../../../../../../../../../image-data';
import { eGraphicFieldType } from '../../../../../../../../../../../consts';
/**
* Information about one graphic field - abstract class
*/
export declare abstract class aDocGraphicField {
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
    * @type {iImageData}
    */
    image: iImageData;
}
