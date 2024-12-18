import { IsDefined, IsEnum, IsInt, IsNumber, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

import { eDocFormat } from '@/consts'
import { Point } from '@/models/common/point'
import { Default } from '@/decorators'

/**
* Structure is used for storing document bounds detection result
*/
export interface iBoundsResult {
  /**
  * Document format
  * @type {eDocFormat}
  */
  docFormat: eDocFormat

  /**
  * Document width
  * @type {number}
  */
  Width: number

  /**
  * Document height
  * @type {number}
  */
  Height: number

  /**
  * Document center coordinates
  * @type {Point}
  */
  Center: Point

  /**
  * Document rotation angle
  * @type {number}
  */
  Angle: number

  /**
  * Document left bottom corner coordinates
  * @type {Point}
  */
  LeftBottom: Point

  /**
  * Document left top corner coordinates
  * @type {Point}
  */
  LeftTop: Point

  /**
  * Document right bottom corner coordinates
  * @type {Point}
  */
  RightBottom: Point

  /**
  * Document right top corner coordinates
  * @type {Point}
  */
  RightTop: Point

  /**
  * Resolution in dots per inch
  * @type {number}
  */
  Dpi: number
}

/**
* This model is used for storing document bounds detection result
*/
export class BoundsResult implements iBoundsResult {
  /**
  * Document format
  * @type {eDocFormat}
  */
  @IsDefined()
  @IsEnum(eDocFormat)
  @Default(eDocFormat.UNKNOWN)
  docFormat: eDocFormat

  /**
  * Document width
  * @type {number}
  */
  @IsDefined()
  @IsNumber()
  @Default(0)
  Width: number

  /**
  * Document height
  * @type {number}
  */
  @IsDefined()
  @IsNumber()
  @Default(0)
  Height: number

  /**
  * Document center coordinates
  * @type {Point}
  */
  @IsDefined()
  @ValidateNested()
  @Type(() => Point)
  Center: Point

  /**
  * Document rotation angle
  * @type {number}
  */
  @IsDefined()
  @IsNumber()
  @Default(0)
  Angle: number

  /**
  * Document left bottom corner coordinates
  * @type {Point}
  */
  @IsDefined()
  @ValidateNested()
  @Type(() => Point)
  LeftBottom: Point

  /**
  * Document left top corner coordinates
  * @type {Point}
  */
  @IsDefined()
  @ValidateNested()
  @Type(() => Point)
  LeftTop: Point

  /**
  * Document right bottom corner coordinates
  * @type {Point}
  */
  @IsDefined()
  @ValidateNested()
  @Type(() => Point)
  RightBottom: Point

  /**
  * Document right top corner coordinates
  * @type {Point}
  */
  @IsDefined()
  @ValidateNested()
  @Type(() => Point)
  RightTop: Point

  /**
  * Resolution in dots per inch
  * @type {number}
  */
  @IsDefined()
  @IsInt()
  Dpi: number
}
