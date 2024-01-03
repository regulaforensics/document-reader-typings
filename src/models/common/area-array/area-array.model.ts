import { IsArray, IsDefined, IsInt, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { iRectangleCoordinates, RectangleCoordinates } from '@/models/common/rectangle-coordinates'
import { iPointArray, PointArray } from './children'


export interface iAreaArray {
  /**
  * Number of elements in List and Points
  * @type {number}
  * @memberof iAreaArray
  */
  Count: number

  /**
  * Array of areas
  * @type {iRectangleCoordinates[]}
  * @memberof iAreaArray
  */
  List: iRectangleCoordinates[]

  /**
  * Array of points
  * @type {iPointArray[]}
  * @memberof iAreaArray
  */
  Points: iPointArray[]
}

export class AreaArray implements iAreaArray {
  /**
  * Number of elements in List and Points
  * @type {number}
  * @memberof iAreaArray
  */
  @Expose()
  @IsDefined()
  @IsInt()
  Count: number

  /**
  * Array of areas
  * @type {iRectangleCoordinates[]}
  * @memberof iAreaArray
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
  * @memberof iAreaArray
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => PointArray)
  Points: PointArray[]
}
