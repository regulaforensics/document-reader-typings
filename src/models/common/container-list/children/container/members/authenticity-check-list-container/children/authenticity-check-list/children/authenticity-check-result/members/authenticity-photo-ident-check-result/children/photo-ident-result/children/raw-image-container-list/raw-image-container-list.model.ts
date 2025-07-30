import { IsArray, IsDefined, IsInt, ValidateNested } from 'class-validator'
import { RawImageContainerList as cRawImageContainerList } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { ImageData } from '@/models/common/image-data'

/**
 * Container for ImageData
 */
export class RawImageContainerList implements cRawImageContainerList {
  /**
   * Number of Images
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  Count: number

  /**
   * Array of ImageData
   * @type {ImageData[]}
   */
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImageData)
  Images: ImageData[]
}

export type { RawImageContainerList as iRawImageContainerList }
