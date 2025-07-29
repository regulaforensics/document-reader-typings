import { IsDefined, IsEnum, IsNumber } from 'class-validator'
import { ImagesAvailableSource as iImageSource } from '@regulaforensics/document-reader-webclient'

import { eSource } from '@/consts'

/**
 * Used for graphic information source description
 */
export class ImageSource implements iImageSource {
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

export type { iImageSource }
