import { IsArray, IsDefined, IsEnum, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { iRectangleCoordinates, RectangleCoordinates } from '@/models/common'
import { Default } from '@/decorators'
import { eBarCodeDetectionType, eBarCodeResultCodes, eBarCodeType } from '@/consts'
import { TipPDF417Info, TipDecodeModule, iTipPDF417Info, iTipDecodeModule } from './children'


export interface iDocBarCodeField {
  /**
  * BarCode rotation angle (in radians)
  * @type {number}
  * @memberof iBoundsResult
  */
  bcAngle_DETECT: number

  /**
  * BarCode reading result
  * @type {eBarCodeResultCodes}
  * @memberof iDocBarCodeField
  */
  bcCodeResult: eBarCodeResultCodes

  /**
  * Number of read bar-code modules
  * @type {number}
  * @memberof iDocBarCodeField
  */
  bcCountModule: number

  /**
  * Results of reading data from a bar-code modules
  * @type {iTipDecodeModule[]}
  * @memberof iDocBarCodeField
  */
  bcDataModule: iTipDecodeModule[]

  /**
  * Information on PDF417 code parameters (only for PDF417)
  * @type {iTipPDF417Info}
  * @memberof iDocBarCodeField
  */
  bcPDF417INFO?: iTipPDF417Info

  /**
  * BarCode area coordinates on the image
  * @type {iRectangleCoordinates}
  * @memberof iDocBarCodeField
  */
  bcROI_DETECT: iRectangleCoordinates

  /**
  * Decoded bar-code type
  * @type {eBarCodeType}
  * @memberof iDocBarCodeField
  */
  bcType_DECODE: eBarCodeType

  /**
  * Type of the detected bar-code
  * @type {eBarCodeDetectionType}
  * @memberof iDocBarCodeField
  */
  bcType_DETECT: eBarCodeDetectionType

  /**
  * @internal
  * @memberof iDocBarCodeField
  */
  bcReserved1?: unknown

  /**
  * @internal
  * @memberof iDocBarCodeField
  */
  bcReserved2?: unknown

  /**
  * @internal
  * @memberof iDocBarCodeField
  */
  bcReserved3?: unknown
}

export class DocBarCodeField implements iDocBarCodeField {
  /**
  * BarCode rotation angle (in radians)
  * @type {number}
  * @memberof DocBarCodeField
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  @Default(0)
  bcAngle_DETECT: number

  /**
  * BarCode reading result
  * @type {eBarCodeResultCodes}
  * @memberof DocBarCodeField
  */
  @Expose()
  @IsDefined()
  @IsEnum(eBarCodeResultCodes)
  @Default(eBarCodeResultCodes.NO_ERR)
  bcCodeResult: eBarCodeResultCodes

  /**
  * Number of read bar-code modules
  * @type {number}
  * @memberof DocBarCodeField
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  bcCountModule: number

  /**
  * Results of reading data from a bar-code modules
  * @type {TipDecodeModule[]}
  * @memberof DocBarCodeField
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
  * @type {TipPDF417Info}
  * @memberof DocBarCodeField
  */
  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => TipPDF417Info)
  bcPDF417INFO?: TipPDF417Info

  /**
  * BarCode area coordinates on the image
  * @type {RectangleCoordinates}
  * @memberof DocBarCodeField
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => RectangleCoordinates)
  bcROI_DETECT: RectangleCoordinates

  /**
  * Decoded bar-code type
  * @type {eBarCodeType}
  * @memberof DocBarCodeField
  */
  @Expose()
  @IsDefined()
  @IsEnum(eBarCodeType)
  @Default(eBarCodeType.UNKNOWN)
  bcType_DECODE: eBarCodeType

  /**
  * Type of the detected bar-code
  * @type {eBarCodeDetectionType}
  * @memberof DocBarCodeField
  */
  @Expose()
  @IsDefined()
  @IsEnum(eBarCodeDetectionType)
  @Default(eBarCodeDetectionType.LINEAR)
  bcType_DETECT: eBarCodeDetectionType

  /**
  * @internal
  * @memberof DocBarCodeField
  */
  @Expose()
  @IsOptional()
  bcReserved1?: unknown

  /**
  * @internal
  * @memberof DocBarCodeField
  */
  @Expose()
  @IsOptional()
  bcReserved2?: unknown

  /**
  * @internal
  * @memberof DocBarCodeField
  */
  @Expose()
  @IsOptional()
  bcReserved3?: unknown
}
