import { IsDefined, IsNumber, IsOptional } from 'class-validator'
import { BcPDF417INFO as iTipPDF417Info } from '@regulaforensics/document-reader-webclient'

/**
 * Structure is used for storing additional information on parameters
 * of PDF417 format bar-codes
 */
export class TipPDF417Info implements iTipPDF417Info {
  /**
   * Code decoding rotation angle (in radians)
   * @type {number}
   */
  @IsDefined()
  @IsNumber()
  Angle: number

  /**
   * Number of columns in the bar-code
   * @type {number}
   */
  @IsDefined()
  @IsNumber()
  bcColumn: number

  /**
   * BarCode error correction level
   * @type {number}
   */
  @IsDefined()
  @IsNumber()
  bcErrorLevel: number

  /**
   * Number of rows in a bar-code
   * @type {number}
   */
  @IsDefined()
  @IsNumber()
  bcRow: number

  /**
   * Width of the minimum bar-code element on the image, in pixels
   * @type {number}
   */
  @IsOptional()
  @IsNumber()
  minX: number

  /**
   * Height of the minimum bar-code element on the image, in pixels
   * @type {number}
   */
  @IsOptional()
  @IsNumber()
  minY: number
}

export type { iTipPDF417Info }
