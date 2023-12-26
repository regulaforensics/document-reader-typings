import { DocGraphicFieldRect, DocGraphicFieldRfid, IDocGraphicFieldRect, IDocGraphicFieldRfid } from './members'
import { isObject } from '@/helpers'


export type DocGraphicFieldUnion =
  DocGraphicFieldRect |
  DocGraphicFieldRfid

export type IDocGraphicFieldUnion =
  IDocGraphicFieldRect |
  IDocGraphicFieldRfid

export namespace DocGraphicFieldUnion {
  export const transformList = (items: unknown[]) => {
    const result: DocGraphicFieldUnion[] = []

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
