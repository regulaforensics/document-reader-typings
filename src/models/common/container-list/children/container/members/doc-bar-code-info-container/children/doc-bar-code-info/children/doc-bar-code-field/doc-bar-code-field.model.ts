import { IsArray, IsDefined, IsEnum, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { IRectangleCoordinates, RectangleCoordinates } from '@/models/common'
import { Default } from '@/decorators'
import { BarCodeDetectionType, BarCodeResultCodes, BarCodeType } from '@/consts'
import { TipPDF417Info, TipDecodeModule, ITipPDF417Info, ITipDecodeModule } from './children'


export interface IDocBarCodeField {
  /**
  * BarCode rotation angle (in radians)
  * @type {number}
  */
  bcAngle_DETECT: number

  /**
  * BarCode reading result
  * @type {BarCodeResultCodes}
  */
  bcCodeResult: BarCodeResultCodes

  /**
  * Number of read bar-code modules
  * @type {number}
  */
  bcCountModule: number

  /**
  * Results of reading data from a bar-code modules
  * @type {ITipDecodeModule[]}
  */
  bcDataModule: ITipDecodeModule[]

  /**
  * Information on PDF417 code parameters (only for PDF417)
  * @type {ITipPDF417Info}
  */
  bcPDF417INFO?: ITipPDF417Info

  /**
  * BarCode area coordinates on the image
  * @type {IRectangleCoordinates}
  */
  bcROI_DETECT: IRectangleCoordinates

  /**
  * Decoded bar-code type
  * @type {BarCodeType}
  */
  bcType_DECODE: BarCodeType

  /**
  * Type of the detected bar-code
  * @type {BarCodeDetectionType}
  */
  bcType_DETECT: BarCodeDetectionType

  /**
  * @internal
  */
  bcReserved1?: unknown

  /**
  * @internal
  */
  bcReserved2?: unknown

  /**
  * @internal
  */
  bcReserved3?: unknown
}

export class DocBarCodeField implements IDocBarCodeField {
  /**
  * BarCode rotation angle (in radians)
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  @Default(0)
  bcAngle_DETECT: number

  /**
  * BarCode reading result
  * @type {BarCodeResultCodes}
  */
  @Expose()
  @IsDefined()
  @IsEnum(BarCodeResultCodes)
  @Default(BarCodeResultCodes.NO_ERR)
  bcCodeResult: BarCodeResultCodes

  /**
  * Number of read bar-code modules
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  bcCountModule: number

  /**
  * Results of reading data from a bar-code modules
  * @type {ITipDecodeModule[]}
  */
  @Expose()
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TipDecodeModule)
  @Default([])
  bcDataModule: TipDecodeModule[]

  /**
  * Information on PDF417 code parameters (only for PDF417)
  * @type {ITipPDF417Info}
  */
  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => TipPDF417Info)
  bcPDF417INFO?: TipPDF417Info

  /**
  * BarCode area coordinates on the image
  * @type {IRectangleCoordinates}
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => RectangleCoordinates)
  bcROI_DETECT: RectangleCoordinates

  /**
  * Decoded bar-code type
  * @type {BarCodeType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(BarCodeType)
  @Default(BarCodeType.UNKNOWN)
  bcType_DECODE: BarCodeType

  /**
  * Type of the detected bar-code
  * @type {BarCodeDetectionType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(BarCodeDetectionType)
  @Default(BarCodeDetectionType.LINEAR)
  bcType_DETECT: BarCodeDetectionType

  /**
  * @internal
  */
  @Expose()
  @IsOptional()
  bcReserved1?: unknown

  /**
  * @internal
  */
  @Expose()
  @IsOptional()
  bcReserved2?: unknown

  /**
  * @internal
  */
  @Expose()
  @IsOptional()
  bcReserved3?: unknown
}
