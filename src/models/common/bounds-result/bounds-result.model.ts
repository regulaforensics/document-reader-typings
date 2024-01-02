/**
* This model is used for storing document bounds detection result
*/
import { IsDefined, IsEnum, IsInt, IsNumber, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { DocFormat } from '@/consts'
import { Point } from '@/models/common/point'
import { Default } from '@/decorators'


export interface IBoundsResult {
  /**
  * Document format
  * @type {DocFormat}
  */
  docFormat: DocFormat

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

export class BoundsResult implements IBoundsResult {
  /**
  * Document format
  * @type {DocFormat}
  */
  @Expose()
  @IsDefined()
  @IsEnum(DocFormat)
  @Default(DocFormat.UNKNOWN)
  docFormat: DocFormat

  /**
  * Document width
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  @Default(0)
  Width: number

  /**
  * Document height
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  @Default(0)
  Height: number

  /**
  * Document center coordinates
  * @type {Point}
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => Point)
  Center: Point

  /**
  * Document rotation angle
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  @Default(0)
  Angle: number

  /**
  * Document left bottom corner coordinates
  * @type {Point}
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => Point)
  LeftBottom: Point

  /**
  * Document left top corner coordinates
  * @type {Point}
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => Point)
  LeftTop: Point

  /**
  * Document right bottom corner coordinates
  * @type {Point}
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => Point)
  RightBottom: Point

  /**
  * Document right top corner coordinates
  * @type {Point}
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => Point)
  RightTop: Point

  /**
  * Resolution in dots per inch
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  Dpi: number
}
