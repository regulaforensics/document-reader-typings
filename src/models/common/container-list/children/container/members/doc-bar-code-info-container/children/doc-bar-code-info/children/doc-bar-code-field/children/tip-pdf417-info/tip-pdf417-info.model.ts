import { IsDefined, IsNumber, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'
import { Default } from '@/decorators'


/**
* Structure is used for storing additional information on parameters
* of PDF417 format bar-codes
*/
export interface iTipPDF417Info {
  /**
  * Code decoding rotation angle (in radians)
  * @type {number}
  */
  Angle: number

  /**
  * Number of columns in the bar-code
  * @type {number}
  */
  bcColumn: number

  /**
  * BarCode error correction level
  * @type {number}
  */
  bcErrorLevel: number

  /**
  * Number of rows in a bar-code
  * @type {number}
  */
  bcRow: number

  /**
  * Width of the minimum bar-code element on the image, in pixels
  * @type {number}
  */
  minX: number

  /**
  * Height of the minimum bar-code element on the image, in pixels
  * @type {number}
  */
  minY: number
}

/**
* Structure is used for storing additional information on parameters
* of PDF417 format bar-codes
*/
export class TipPDF417Info implements iTipPDF417Info {
  /**
  * Code decoding rotation angle (in radians)
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  @Default(0)
  Angle: number

  /**
  * Number of columns in the bar-code
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  @Default(1)
  bcColumn: number

  /**
  * BarCode error correction level
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  @Default(0)
  bcErrorLevel: number

  /**
  * Number of rows in a bar-code
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  @Default(1)
  bcRow: number

  /**
  * Width of the minimum bar-code element on the image, in pixels
  * @type {number}
  */
  @Expose()
  @IsOptional()
  @IsNumber()
  @Default(0)
  minX: number

  /**
  * Height of the minimum bar-code element on the image, in pixels
  * @type {number}
  */
  @Expose()
  @IsOptional()
  @IsNumber()
  @Default(0)
  minY: number
}
