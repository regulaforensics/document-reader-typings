import { IsArray, IsDefined, IsInt, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { iRect, Rect } from '@/models/common/rect'
import { iPointArray, PointArray } from './children'


/**
* Structure serves for storage areas and contours.
*/
export interface iAreaArray {
  /**
  * Number of elements in List and Points
  * @type {number}
  */
  Count: number

  /**
  * Array of areas
  * @type {iRect[]}
  */
  List: iRect[]

  /**
  * Array of points
  * @type {iPointArray[]}
  */
  Points: iPointArray[]
}

/**
* Structure serves for storage areas and contours.
*/
export class AreaArray implements iAreaArray {
  /**
  * Number of elements in List and Points
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  Count: number

  /**
  * Array of areas
  * @type {Rect[]}
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => Rect)
  List: Rect[]

  /**
  * Array of points
  * @type {PointArray[]}
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => PointArray)
  Points: PointArray[]
}
