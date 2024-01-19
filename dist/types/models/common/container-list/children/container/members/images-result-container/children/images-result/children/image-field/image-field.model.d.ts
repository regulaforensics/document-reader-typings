import { eGraphicFieldType } from '../../../../../../../../../../../consts';
import { iImageFieldValue, ImageFieldValue } from './children';
/**
* Used for provision of one image or graphic field
*/
export interface iImageField {
    /**
    * Field name
    * @type {string}
    */
    fieldName: string;
    /**
    * Field type
    * @type {eGraphicFieldType}
    */
    fieldType: eGraphicFieldType;
    /**
    * Field value list
    * @type {iImageFieldValue[]}
    */
    valueList: iImageFieldValue[];
    /**
    * Field value count
    * @type {number}
    */
    valueCount: number;
}
/**
* Used for provision of one image or graphic field
*/
export declare class ImageField implements iImageField {
    /**
    * Field name
    * @type {string}
    */
    fieldName: string;
    /**
    * Field type
    * @type {eGraphicFieldType}
    */
    fieldType: eGraphicFieldType;
    /**
    * Field value list
    * @type {ImageFieldValue[]}
    */
    valueList: ImageFieldValue[];
    /**
    * Field value count
    * @type {number}
    */
    valueCount: number;
}
