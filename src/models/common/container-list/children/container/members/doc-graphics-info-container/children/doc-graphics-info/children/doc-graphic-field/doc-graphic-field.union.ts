import { DocGraphicFieldRect, DocGraphicFieldRfid, iDocGraphicFieldRect, iDocGraphicFieldRfid } from './members'
import { isObject } from '@/helpers'


export type uDocGraphicField =
  DocGraphicFieldRect |
  DocGraphicFieldRfid

export type iuDocGraphicField =
  iDocGraphicFieldRect |
  iDocGraphicFieldRfid

export namespace uDocGraphicField {
  /**
  * Transform list of items to list of DocGraphicFieldUnion
  *
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
