/**
* This model is used for storing document bounds detection result
*/
import { IsDefined, IsEnum, IsInt, IsNumber, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { eDocFormat } from '@/consts'
import { Point } from '@/models/common/point'
import { Default } from '@/decorators'


export interface iBoundsResult {
  /**
  * Document format
  * @type {eDocFormat}
  * @memberof iBoundsResult
  */
  docFormat: eDocFormat

  /**
  * Document width
  * @type {number}
  * @memberof iBoundsResult
  */
  Width: number

  /**
  * Document height
  * @type {number}
  * @memberof iBoundsResult
  */
  Height: number

  /**
  * Document center coordinates
  * @type {Point}
  * @memberof iBoundsResult
  */
  Center: Point

  /**
  * Document rotation angle
  * @type {number}
  * @memberof iBoundsResult
  */
  Angle: number

  /**
  * Document left bottom corner coordinates
  * @type {Point}
  * @memberof iBoundsResult
  */
  LeftBottom: Point

  /**
  * Document left top corner coordinates
  * @type {Point}
  * @memberof iBoundsResult
  */
  LeftTop: Point

  /**
  * Document right bottom corner coordinates
  * @type {Point}
  * @memberof iBoundsResult
  */
  RightBottom: Point

  /**
  * Document right top corner coordinates
  * @type {Point}
  * @memberof iBoundsResult
  */
  RightTop: Point

  /**
  * Resolution in dots per inch
  * @type {number}
  * @memberof iBoundsResult
  */
  Dpi: number
}

export class BoundsResult implements iBoundsResult {
  /**
  * Document format
  * @type {eDocFormat}
  * @memberof BoundsResult
  */
  @Expose()
  @IsDefined()
  @IsEnum(eDocFormat)
  @Default(eDocFormat.UNKNOWN)
  docFormat: eDocFormat

  /**
  * Document width
  * @type {number}
  * @memberof BoundsResult
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  @Default(0)
  Width: number

  /**
  * Document height
  * @type {number}
  * @memberof BoundsResult
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  @Default(0)
  Height: number

  /**
  * Document center coordinates
  * @type {Point}
  * @memberof BoundsResult
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => Point)
  Center: Point

  /**
  * Document rotation angle
  * @type {number}
  * @memberof BoundsResult
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  @Default(0)
  Angle: number

  /**
  * Document left bottom corner coordinates
  * @type {Point}
  * @memberof BoundsResult
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => Point)
  LeftBottom: Point

  /**
  * Document left top corner coordinates
  * @type {Point}
  * @memberof BoundsResult
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => Point)
  LeftTop: Point

  /**
  * Document right bottom corner coordinates
  * @type {Point}
  * @memberof BoundsResult
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => Point)
  RightBottom: Point

  /**
  * Document right top corner coordinates
  * @type {Point}
  * @memberof BoundsResult
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => Point)
  RightTop: Point

  /**
  * Resolution in dots per inch
  * @type {number}
  * @memberof BoundsResult
  */
  @Expose()
  @IsDefined()
  @IsInt()
  Dpi: number
}
