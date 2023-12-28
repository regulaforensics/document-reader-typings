import { IsArray, IsDefined, IsInt, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { IRectangleCoordinates, RectangleCoordinates } from '@/models/common/rectangle-coordinates'
import { IPointArray, PointArray } from './children'


export interface IAreaArray {
  /**
  * Number of elements in List and Points
  * @type {number}
  */
  Count: number

  /**
  * Array of areas
  * @type {IRectangleCoordinates[]}
  */
  List: IRectangleCoordinates[]

  /**
  * Array of points
  * @type {IPointArray[]}
  */
  Points: IPointArray[]
}

export class AreaArray implements IAreaArray {
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
  * @type {IRectangleCoordinates[]}
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => RectangleCoordinates)
  List: RectangleCoordinates[]

  /**
  * Array of points
  * @type {IPointArray[]}
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => PointArray)
  Points: PointArray[]
}
