import { IsArray, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { IRectangleCoordinates, RectangleCoordinates } from '~src/models/common/rectangle-coordinates'
import { IPointsContainer, PointsContainer } from './children'


export interface IAreaContainer {
  Count?: number
  List?: IRectangleCoordinates[]
  Points?: IPointsContainer[]
}

export class AreaContainer implements IAreaContainer {
  @Expose()
  @IsOptional()
  @IsInt()
  Count?: number

  @Expose()
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RectangleCoordinates)
  List?: RectangleCoordinates[]

  @Expose()
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PointsContainer)
  Points?: PointsContainer[]
}
