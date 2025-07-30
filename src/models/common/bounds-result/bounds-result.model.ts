import { IsDefined, IsEnum, IsInt, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { DocumentPosition } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { eDocFormat } from '@/consts'
import { Point } from '@/models/common/point'

/**
 * This model is used for storing document bounds detection result
 */
export class BoundsResult implements DocumentPosition {
  /**
   * Document format
   * @type {eDocFormat}
   */
  @IsDefined()
  @IsEnum(eDocFormat)
  docFormat: eDocFormat

  /**
   * Document rotation angle
   * @type {number}
   */
  @IsDefined()
  @IsNumber()
  Angle: number

  /**
   * Document width
   * @type {number}
   */
  @IsDefined()
  @IsNumber()
  Width: number

  /**
   * Document height
   * @type {number}
   */
  @IsDefined()
  @IsNumber()
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

  /**
   * @type {number|undefined}
   */
  @IsOptional()
  @IsInt()
  Inverse?: number

  /**
   * @type {number|undefined}
   */
  @IsOptional()
  @IsInt()
  ObjArea?: number

  /**
   * @type {number|undefined}
   */
  @IsOptional()
  @IsInt()
  ObjIntAngleDev?: number

  /**
   * @type {number|undefined}
   */
  @IsOptional()
  @IsInt()
  PerspectiveTr?: number

  /**
   * @type {number|undefined}
   */
  @IsOptional()
  @IsInt()
  ResultStatus?: number
}

export type { BoundsResult as iBoundsResult }
