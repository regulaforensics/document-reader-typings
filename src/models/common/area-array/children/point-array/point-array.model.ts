import { IsArray, IsDefined, ValidateNested } from 'class-validator'
import { PointsContainer } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { Point } from '@/models/common/point'

/**
 * Structure serves for storage areas
 */
export class PointArray implements PointsContainer {
  /**
   * Array of coordinates of points
   * @type {Point[]}
   */
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Point)
  PointsList: Point[]
}
