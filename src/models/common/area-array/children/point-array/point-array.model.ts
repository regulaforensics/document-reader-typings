import { IsArray, IsDefined, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { IPoint, Point } from '@/models/common/point'


export interface IPointArray {
  /**
  * Array of coordinates of points
  * @type {IPoint[]}
  */
  PointsList: IPoint[]
}

export class PointArray implements IPointArray {
  /**
  * Array of coordinates of points
  * @type {IPoint[]}
  */
  @Expose()
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Point)
  PointsList: Point[]
}
