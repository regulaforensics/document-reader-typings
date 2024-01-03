import { IsArray, IsDefined, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { iPoint, Point } from '@/models/common/point'


export interface iPointArray {
  /**
  * Array of coordinates of points
  * @type {iPoint[]}
  * @memberof iPointArray
  */
  PointsList: iPoint[]
}

export class PointArray implements iPointArray {
  /**
  * Array of coordinates of points
  * @type {iPoint[]}
  * @memberof iPointArray
  */
  @Expose()
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Point)
  PointsList: Point[]
}
