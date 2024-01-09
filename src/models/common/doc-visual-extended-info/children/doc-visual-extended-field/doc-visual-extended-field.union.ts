import {
  DocVisualExtendedField1,
  DocVisualExtendedField2,
  DocVisualExtendedField3,
  DocVisualExtendedField4,
  iDocVisualExtendedField1,
  iDocVisualExtendedField2,
  iDocVisualExtendedField3,
  iDocVisualExtendedField4,
} from './members'
import { isObject } from '@/helpers'


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
export type uDocVisualExtendedField =
  DocVisualExtendedField1 |
  DocVisualExtendedField2 |
  DocVisualExtendedField3 |
  DocVisualExtendedField4

/**
* Union of all possible variants of DocVisualExtendedField in plain object form.
*/
export type iuDocVisualExtendedField =
  iDocVisualExtendedField1 |
  iDocVisualExtendedField2 |
  iDocVisualExtendedField3 |
  iDocVisualExtendedField4

/**
* Union of all possible variants of DocVisualExtendedField in plain object form.
*/
export namespace uDocVisualExtendedField {
  /**
  * Transform list of unknown items to list of uDocVisualExtendedField
  * @internal
  * @param {unknown[]} list - list of unknown items
  * @returns {uDocVisualExtendedField[]}
  */
  export const transformList = (list: unknown[]) => list.map(item => transform(item))

  /**
  * Transform unknown item to uDocVisualExtendedField
  * @internal
  * @param {unknown} item - unknown item
  * @returns {uDocVisualExtendedField}
  */
  export const transform = (item: unknown) => {
    if (isObject(item)) {
      if (item.hasOwnProperty('FieldType') && item.hasOwnProperty('FieldRect')) {
        return DocVisualExtendedField1.fromPlain(item)
      }

      if (item.hasOwnProperty('FieldType') && item.hasOwnProperty('RFID_OriginDG')) {
        return DocVisualExtendedField2.fromPlain(item)
      }

      if (item.hasOwnProperty('wFieldType') && item.hasOwnProperty('FieldRect')) {
        return DocVisualExtendedField3.fromPlain(item)
      }
    }

    return DocVisualExtendedField4.fromPlain(item)
  }
}
