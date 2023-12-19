import { IsArray, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { IPoint, Point } from 'models/common/point'


export interface IPointsContainer {
  PointCount?: number
  PointsList?: IPoint[]
}

export class PointsContainer implements IPointsContainer {
  @Expose()
  @IsOptional()
  @IsInt()
  PointCount?: number

  @Expose()
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Point)
  PointsList?: Point[]
}
