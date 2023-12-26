import { IImageData } from '@/models/common/image-data'
import { GraphicFieldType } from '@/consts'


export abstract class DocGraphicField {
  /**
  * Graphic field logical type
  */
  FieldType: GraphicFieldType

  /**
  * Graphic field symbolic name
  */
  FieldName: string

  /**
  * Image data
  */
  image: IImageData
}
