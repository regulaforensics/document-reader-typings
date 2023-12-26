import { IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { IPoint, Point } from '@/models/common/point'


export interface IPointArray {
  PointsList?: IPoint[]
}

export class PointArray implements IPointArray {
  @Expose()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => Point)
  PointsList?: Point[]
}
