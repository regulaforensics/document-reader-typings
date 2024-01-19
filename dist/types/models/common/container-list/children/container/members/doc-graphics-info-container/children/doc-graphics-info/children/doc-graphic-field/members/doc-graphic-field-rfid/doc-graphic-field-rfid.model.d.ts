import { eGraphicFieldType, eRfidDataGroupTypeTag } from '../../../../../../../../../../../../../consts';
import { ImageData } from '../../../../../../../../../../../image-data';
import { aDocGraphicField } from '../../doc-graphic-field.abstract';
/**
* Information about one graphic field, which is a RFID
*/
export interface iDocGraphicFieldRfid extends aDocGraphicField {
    /**
    * Data group
    * @type {eRfidDataGroupTypeTag}
    */
    RFID_OriginDG: eRfidDataGroupTypeTag;
    /**
    * Record index of the source of the image with biometric information
    * in the datagroup
    * @type {number}
    */
    RFID_OriginDGTag: number;
    /**
    * Index of the sample in the biometric data record
    * @type {number}
    */
    RFID_OriginTagEntry: number;
    /**
    * Index of the biometric data sample
    * @type {number}
    */
    RFID_OriginEntryView: number;
}
/**
* Information about one graphic field, which is a RFID
*/
export declare class DocGraphicFieldRfid extends aDocGraphicField implements iDocGraphicFieldRfid {
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
    * Data group
    * @type {eRfidDataGroupTypeTag}
    */
    RFID_OriginDG: eRfidDataGroupTypeTag;
    /**
    * Record index of the source of the image with biometric information
    * in the datagroup
    * @type {number}
    */
    RFID_OriginDGTag: number;
    /**
    * Index of the sample in the biometric data record
    * @type {number}
    */
    RFID_OriginTagEntry: number;
    /**
    * Index of the biometric data sample
    * @type {number}
    */
    RFID_OriginEntryView: number;
    /**
    * Create new instance of DocGraphicFieldRfid from plain object
    *
    * @param {unknown} input - plain object
    * @return {DocGraphicFieldRfid}
    */
    static fromPlain: (input: unknown) => DocGraphicFieldRfid;
}
