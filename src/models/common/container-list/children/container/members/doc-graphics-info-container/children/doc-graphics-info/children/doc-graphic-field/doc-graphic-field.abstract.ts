import { iImageData } from '@/models/common/image-data'
import { eGraphicFieldType } from '@/consts'


export abstract class aDocGraphicField {
  /**
  * Graphic field logical type
  * @type {eGraphicFieldType}
  */
  FieldType: eGraphicFieldType

  /**
  * Graphic field symbolic name
  * @type {string}
  */
  FieldName: string

  /**
  * Image data
  * @type {iImageData}
  */
  image: iImageData
}
