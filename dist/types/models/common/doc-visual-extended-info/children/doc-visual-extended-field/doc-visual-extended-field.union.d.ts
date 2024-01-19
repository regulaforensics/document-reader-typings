import { DocVisualExtendedField1, DocVisualExtendedField2, DocVisualExtendedField3, DocVisualExtendedField4, iDocVisualExtendedField1, iDocVisualExtendedField2, iDocVisualExtendedField3, iDocVisualExtendedField4 } from './members';
/**
* Union of all possible variants of DocVisualExtendedField.
* In typescript you can't have multiple unions inside a class (as in C), so we are forced to make one union that will
* support all possible variants.
* You can distinguish them from each other using instanceof operator.
* For example:
*  const item: uDocVisualExtendedField = ...
*  if (item instanceof DocVisualExtendedField1) {
*    // do something
*  }
*/
export type uDocVisualExtendedField = DocVisualExtendedField1 | DocVisualExtendedField2 | DocVisualExtendedField3 | DocVisualExtendedField4;
/**
* Union of all possible variants of DocVisualExtendedField in plain object form.
*/
export type iuDocVisualExtendedField = iDocVisualExtendedField1 | iDocVisualExtendedField2 | iDocVisualExtendedField3 | iDocVisualExtendedField4;
/**
* Union of all possible variants of DocVisualExtendedField in plain object form.
*/
export declare namespace uDocVisualExtendedField {
    /**
    * Transform list of unknown items to list of uDocVisualExtendedField
    * @internal
    * @param {unknown[]} list - list of unknown items
    * @returns {uDocVisualExtendedField[]}
    */
    const transformList: (list: unknown[]) => (DocVisualExtendedField1 | DocVisualExtendedField2 | DocVisualExtendedField3 | DocVisualExtendedField4)[];
    /**
    * Transform unknown item to uDocVisualExtendedField
    * @internal
    * @param {unknown} item - unknown item
    * @returns {uDocVisualExtendedField}
    */
    const transform: (item: unknown) => DocVisualExtendedField1 | DocVisualExtendedField2 | DocVisualExtendedField3 | DocVisualExtendedField4;
}
