import { IsDefined, IsNumber, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'
import { Default } from '@/decorators'


export interface ITipPDF417Info {
  /**
  * Code decoding rotation angle (in radians)
  */
  Angle: number

  /**
  * Number of columns in the bar-code
  */
  bcColumn: number

  /**
  * BarCode error correction level
  */
  bcErrorLevel: number

  /**
  * Number of rows in a bar-code
  */
  bcRow: number

  /**
  * Width of the minimum bar-code element on the image, in pixels
  */
  minX: number

  /**
  * Height of the minimum bar-code element on the image, in pixels
  */
  minY: number
}

export class TipPDF417Info implements ITipPDF417Info {
  /**
  * Code decoding rotation angle (in radians)
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  @Default(0)
  Angle: number

  /**
  * Number of columns in the bar-code
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  @Default(1)
  bcColumn: number

  /**
  * BarCode error correction level
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  @Default(0)
  bcErrorLevel: number

  /**
  * Number of rows in a bar-code
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  @Default(1)
  bcRow: number

  /**
  * Width of the minimum bar-code element on the image, in pixels
  */
  @Expose()
  @IsOptional()
  @IsNumber()
  @Default(0)
  minX: number

  /**
  * Height of the minimum bar-code element on the image, in pixels
  */
  @Expose()
  @IsOptional()
  @IsNumber()
  @Default(0)
  minY: number
}
