import { IsArray, IsDefined, IsInt, ValidateNested } from 'class-validator'
import { AreaContainer } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { Rect } from '@/models/common/rect'
import { PointArray } from './children'

/**
 * Structure serves for storage areas and contours.
 */
export class AreaArray implements AreaContainer {
  /**
   * Number of elements in List and Points
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  Count: number

  /**
   * Array of areas
   * @type {Rect[]}
   */
  @IsDefined()
  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => Rect)
  List: Rect[]

  /**
   * Array of points
   * @type {PointArray[]}
   */
  @IsDefined()
  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => PointArray)
  Points: PointArray[]
}
