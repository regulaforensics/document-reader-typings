import { DocGraphicFieldRect, DocGraphicFieldRfid, iDocGraphicFieldRect, iDocGraphicFieldRfid } from './members';
/**
* Union of all possible graphic fields
*/
export type uDocGraphicField = DocGraphicFieldRect | DocGraphicFieldRfid;
/**
* Union of all possible graphic fields
*/
export type iuDocGraphicField = iDocGraphicFieldRect | iDocGraphicFieldRfid;
/**
* Union of all possible graphic fields
*/
export declare namespace uDocGraphicField {
    /**
    * Transform list of items to list of DocGraphicFieldUnion
    * @internal
    * @param {unknown[]} items - list of items
    * @returns {uDocGraphicField[]}
    */
    const transformList: (items: unknown[]) => uDocGraphicField[];
}
