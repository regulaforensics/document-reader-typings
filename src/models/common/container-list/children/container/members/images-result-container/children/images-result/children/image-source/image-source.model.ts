import { IsDefined, IsEnum, IsNumber } from 'class-validator'
import { ImagesAvailableSource } from '@regulaforensics/document-reader-webclient'

import { eSource } from '@/consts'

/**
 * Used for graphic information source description
 */
export class ImageSource implements ImagesAvailableSource {
  /**
   * Container type
   * @type {number}
   */
  @IsDefined()
  @IsNumber()
  containerType: number

  /**
   * Source
   * @type {eSource}
   */
  @IsDefined()
  @IsEnum(eSource)
  source: eSource
}
