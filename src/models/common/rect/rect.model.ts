import { RectangleCoordinates } from '@regulaforensics/document-reader-webclient'
import { IsDefined, IsNumber } from 'class-validator'

/**
 * Rectangle coordinates
 */
export class Rect implements RectangleCoordinates {
  /**
   * Left
   * @param {number}
   */
  @IsDefined()
  @IsNumber()
  left: number

  /**
   * Top
   * @param {number}
   */
  @IsDefined()
  @IsNumber()
  top: number

  /**
   * Right
   * @param {number}
   */
  @IsDefined()
  @IsNumber()
  right: number

  /**
   * Bottom
   * @param {number}
   */
  @IsDefined()
  @IsNumber()
  bottom: number
}
