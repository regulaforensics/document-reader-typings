import {
  DocVisualExtendedField1,
  DocVisualExtendedField2,
  DocVisualExtendedField3,
  DocVisualExtendedField4,
  IDocVisualExtendedField1,
  IDocVisualExtendedField2,
  IDocVisualExtendedField3,
  IDocVisualExtendedField4,
} from './members'
import { isObject } from '@/helpers'


/**
* In typescript you can't have multiple unions inside a class (as in C), so we are forced to make one union that will
* support all possible variants.
* You can distinguish them from each other using instanceof operator.
* For example:
*  const item: DocVisualExtendedFieldUnion = ...
*  if (item instanceof DocVisualExtendedField1) {
*    // do something
*  }
*/
export type DocVisualExtendedFieldUnion =
  DocVisualExtendedField1 |
  DocVisualExtendedField2 |
  DocVisualExtendedField3 |
  DocVisualExtendedField4

export type IDocVisualExtendedFieldUnion =
  IDocVisualExtendedField1 |
  IDocVisualExtendedField2 |
  IDocVisualExtendedField3 |
  IDocVisualExtendedField4

export namespace DocVisualExtendedFieldUnion {
  export const transformList = (list: unknown[]) => list.map(item => transform(item))

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
