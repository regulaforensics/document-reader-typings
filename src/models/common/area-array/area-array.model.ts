import { IsArray, IsDefined, IsInt, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

import { iRect, Rect } from '@/models/common/rect'
import { Default } from '@/decorators'
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
  @Default([])
  List: Rect[]

  /**
  * Array of points
  * @type {PointArray[]}
  */
  @IsDefined()
  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => PointArray)
  @Default([])
  Points: PointArray[]
}
