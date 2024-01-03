import { iImageData } from '@/models/common/image-data'
import { eGraphicFieldType } from '@/consts'


export abstract class aDocGraphicField {
  /**
  * Graphic field logical type
  * @type {eGraphicFieldType}
  * @memberof aDocGraphicField
  */
  FieldType: eGraphicFieldType

  /**
  * Graphic field symbolic name
  * @type {string}
  * @memberof aDocGraphicField
  */
  FieldName: string

  /**
  * Image data
  * @type {iImageData}
  * @memberof aDocGraphicField
  */
  image: iImageData
}
