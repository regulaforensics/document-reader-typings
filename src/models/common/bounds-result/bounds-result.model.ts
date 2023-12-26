/**
* This model is used for storing document bounds detection result
*/
import { IsDefined, IsEnum, IsInt, IsNumber, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { DocumentFormat } from '@/consts'
import { Point } from '@/models/common/point'
import { Default } from '@/decorators'


export interface IBoundsResult {
  /**
  * Document format
  */
  docFormat: DocumentFormat

  /**
  * Document width
  */
  Width: number

  /**
  * Document height
  */
  Height: number

  /**
  * Document center coordinates
  */
  Center: Point

  /**
  * Document rotation angle
  */
  Angle: number

  /**
  * Document left bottom corner coordinates
  */
  LeftBottom: Point

  /**
  * Document left top corner coordinates
  */
  LeftTop: Point

  /**
  * Document right bottom corner coordinates
  */
  RightBottom: Point

  /**
  * Document right top corner coordinates
  */
  RightTop: Point

  /**
  * Resolution in dots per inch
  */
  Dpi: number
}

export class BoundsResult implements IBoundsResult {
  /**
  * Document format
  */
  @Expose()
  @IsDefined()
  @IsEnum(DocumentFormat)
  @Default(DocumentFormat.UNKNOWN)
  docFormat: DocumentFormat

  /**
  * Document width
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  @Default(0)
  Width: number

  /**
  * Document height
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  @Default(0)
  Height: number

  /**
  * Document center coordinates
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => Point)
  Center: Point

  /**
  * Document rotation angle
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  @Default(0)
  Angle: number

  /**
  * Document left bottom corner coordinates
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => Point)
  LeftBottom: Point

  /**
  * Document left top corner coordinates
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => Point)
  LeftTop: Point

  /**
  * Document right bottom corner coordinates
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => Point)
  RightBottom: Point

  /**
  * Document right top corner coordinates
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => Point)
  RightTop: Point

  /**
  * Resolution in dots per inch
  */
  @Expose()
  @IsDefined()
  @IsInt()
  Dpi: number
}
