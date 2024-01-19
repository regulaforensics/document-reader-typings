import { eBarCodeModuleType } from '../../../../../../../../../../../../../consts';
/**
* Structure is used for storing the results of one bar-code module reading.
*/
export interface iTipDecodeModule {
    /**
    * Read module data
    * @type {string}
    */
    mData: string;
    /**
    * Number of significant elements of mData
    * @type {number}
    */
    mLength: number;
    /**
    * @internal
    * @type {unknown}
    */
    mReserved1?: unknown;
    /**
    * @internal
    * @type {unknown}
    */
    mReserver2?: unknown;
    /**
    * Module type
    * @type {eBarCodeModuleType}
    */
    mType: eBarCodeModuleType;
}
/**
* Structure is used for storing the results of one bar-code module reading.
*/
export declare class TipDecodeModule implements iTipDecodeModule {
    /**
    * Read module data
    * @type {string}
    */
    mData: string;
    /**
    * Number of significant elements of mData
    * @type {number}
    */
    mLength: number;
    /**
    * @internal
    * @type {unknown}
    */
    mReserved1?: unknown;
    /**
    * @internal
    * @type {unknown}
    */
    mReserver2?: unknown;
    /**
    * Module type
    * @type {eBarCodeModuleType}
    */
    mType: eBarCodeModuleType;
}
