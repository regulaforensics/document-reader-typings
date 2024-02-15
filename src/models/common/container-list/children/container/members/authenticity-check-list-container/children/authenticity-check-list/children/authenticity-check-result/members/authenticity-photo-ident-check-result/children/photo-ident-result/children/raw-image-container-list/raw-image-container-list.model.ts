import { IsArray, IsDefined, IsInt, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { iImageData, ImageData } from '@/models/common/image-data'
import { Default } from '@/decorators'


/**
* Container for ImageData
*/
export interface iRawImageContainerList {
  /**
  * Number of Images
  * @type {number}
  */
  Count: number

  /**
  * Array of ImageData
  * @type {iImageData[]}
  */
  Images: iImageData[]
}

/**
* Container for ImageData
*/
export class RawImageContainerList implements iRawImageContainerList {
  /**
  * Number of Images
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  Count: number

  /**
  * Array of ImageData
  * @type {ImageData[]}
  */
  @Expose()
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImageData)
  @Default([])
  Images: ImageData[]
}
