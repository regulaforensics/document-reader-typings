import { IsDefined, IsNumber, IsOptional } from 'class-validator'
import { Point as cPoint } from '@regulaforensics/document-reader-webclient'

/**
 * Point coordinates
 */
export class Point implements cPoint {
  /**
   * X coordinate
   * @param {number} [x=0]
   */
  @IsDefined()
  @IsNumber()
  x: number

  /**
   * Y coordinate
   * @param {number} [y=0]
   */
  @IsOptional()
  @IsNumber()
  y: number
}

export type { Point as iPoint }
