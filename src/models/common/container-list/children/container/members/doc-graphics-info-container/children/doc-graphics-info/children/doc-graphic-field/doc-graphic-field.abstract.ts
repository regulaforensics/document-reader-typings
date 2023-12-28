import { IImageData } from '@/models/common/image-data'
import { GraphicFieldType } from '@/consts'


export abstract class DocGraphicField {
  /**
  * Graphic field logical type
  * @type {GraphicFieldType}
  */
  FieldType: GraphicFieldType

  /**
  * Graphic field symbolic name
  * @type {string}
  */
  FieldName: string

  /**
  * Image data
  * @type {IImageData}
  */
  image: IImageData
}
