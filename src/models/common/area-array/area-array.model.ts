import { IsArray, IsDefined, IsInt, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { iRectangleCoordinates, RectangleCoordinates } from '@/models/common/rectangle-coordinates'
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
  * @type {iRectangleCoordinates[]}
  */
  List: iRectangleCoordinates[]

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
  * @type {iRectangleCoordinates[]}
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => RectangleCoordinates)
  List: RectangleCoordinates[]

  /**
  * Array of points
  * @type {iPointArray[]}
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => PointArray)
  Points: PointArray[]
}
