import { IsArray, IsDefined, IsEnum, IsInt, ValidateNested } from 'class-validator'
import { FaceItem as cFaceItem } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { eLights } from '@/consts'
import { Rect, Point } from '@/models'

export class FaceItem implements cFaceItem {
  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  CoincidenceToPhotoArea: number

  /**
   * @type {Rect}
   */
  @IsDefined()
  @ValidateNested()
  @Type(() => Rect)
  FaceRect: Rect // todo: should be optional?

  /**
   * @type {Rect}
   */
  @IsDefined()
  @ValidateNested()
  @Type(() => Rect)
  FieldRect: Rect // todo: should be optional?

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  GraphFieldNumber: number // todo: should be optional?

  /**
   * @type {Point[]}
   */
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => Point)
  @IsArray()
  Landmarks: Point[] // todo: should be optional?

  /**
   * @type {eLights}
   */
  @IsDefined()
  @IsEnum(eLights)
  LightType: eLights

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  Orientation: number

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  Probability: number
}

export type { FaceItem as iFaceItem }
