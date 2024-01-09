import { IsArray, IsDefined, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { iPoint, Point } from '@/models/common/point'


/**
* Structure serves for storage areas
*/
export interface iPointArray {
  /**
  * Array of coordinates of points
  * @type {iPoint[]}
  */
  PointsList: iPoint[]
}

/**
* Structure serves for storage areas
*/
export class PointArray implements iPointArray {
  /**
  * Array of coordinates of points
  * @type {Point[]}
  */
  @Expose()
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Point)
  PointsList: Point[]
}
