import { IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { IRectangleCoordinates, RectangleCoordinates } from '~src/distinct/models/common/rectangle-coordinates'
import { IPointArray, PointArray } from './children'


export interface IAreaArray {
  List?: IRectangleCoordinates[]
  Points?: IPointArray[]
}

export class AreaArray implements IAreaArray {
  @Expose()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => RectangleCoordinates)
  List?: RectangleCoordinates[]

  @Expose()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => PointArray)
  Points?: PointArray[]
}
