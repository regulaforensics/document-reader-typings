import { DocGraphicFieldRect, DocGraphicFieldRfid, iDocGraphicFieldRect, iDocGraphicFieldRfid } from './members'
import { isObject } from '@/helpers'


/**
* Union of all possible graphic fields
*/
export type uDocGraphicField =
  DocGraphicFieldRect |
  DocGraphicFieldRfid

/**
* Union of all possible graphic fields
*/
export type iuDocGraphicField =
  iDocGraphicFieldRect |
  iDocGraphicFieldRfid

/**
* Union of all possible graphic fields
*/
export namespace uDocGraphicField {
  /**
  * Transform list of items to list of DocGraphicFieldUnion
  * @internal
  * @param {unknown[]} items - list of items
  * @returns {uDocGraphicField[]}
  */
  export const transformList = (items: unknown[]) => {
    const result: uDocGraphicField[] = []

    if (!Array.isArray(items)) {
      return result
    }

    for (const item of items) {
      if (isObject(item) && item.hasOwnProperty('FieldRect')) {
        result.push(DocGraphicFieldRect.fromPlain(item))
        break
      }

      if (isObject(item) && item.hasOwnProperty('RFID_OriginDG')) {
        result.push(DocGraphicFieldRfid.fromPlain(item))
        break
      }
    }

    return result
  }
}
