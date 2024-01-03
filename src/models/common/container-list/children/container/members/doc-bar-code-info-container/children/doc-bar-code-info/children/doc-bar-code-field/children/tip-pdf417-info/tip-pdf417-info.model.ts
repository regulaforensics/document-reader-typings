import { IsDefined, IsNumber, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'
import { Default } from '@/decorators'


export interface iTipPDF417Info {
  /**
  * Code decoding rotation angle (in radians)
  * @type {number}
  * @memberof iTipPDF417Info
  */
  Angle: number

  /**
  * Number of columns in the bar-code
  * @type {number}
  * @memberof iTipPDF417Info
  */
  bcColumn: number

  /**
  * BarCode error correction level
  * @type {number}
  * @memberof iTipPDF417Info
  */
  bcErrorLevel: number

  /**
  * Number of rows in a bar-code
  * @type {number}
  * @memberof iTipPDF417Info
  */
  bcRow: number

  /**
  * Width of the minimum bar-code element on the image, in pixels
  * @type {number}
  * @memberof iTipPDF417Info
  */
  minX: number

  /**
  * Height of the minimum bar-code element on the image, in pixels
  * @type {number}
  * @memberof iTipPDF417Info
  */
  minY: number
}

export class TipPDF417Info implements iTipPDF417Info {
  /**
  * Code decoding rotation angle (in radians)
  * @type {number}
  * @memberof TipPDF417Info
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  @Default(0)
  Angle: number

  /**
  * Number of columns in the bar-code
  * @type {number}
  * @memberof TipPDF417Info
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  @Default(1)
  bcColumn: number

  /**
  * BarCode error correction level
  * @type {number}
  * @memberof TipPDF417Info
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  @Default(0)
  bcErrorLevel: number

  /**
  * Number of rows in a bar-code
  * @type {number}
  * @memberof TipPDF417Info
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  @Default(1)
  bcRow: number

  /**
  * Width of the minimum bar-code element on the image, in pixels
  * @type {number}
  * @memberof TipPDF417Info
  */
  @Expose()
  @IsOptional()
  @IsNumber()
  @Default(0)
  minX: number

  /**
  * Height of the minimum bar-code element on the image, in pixels
  * @type {number}
  * @memberof TipPDF417Info
  */
  @Expose()
  @IsOptional()
  @IsNumber()
  @Default(0)
  minY: number
}
