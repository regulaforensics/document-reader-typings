import { IsArray, IsDefined, IsEnum, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { iRect, Rect } from '@/models/common'
import { Default } from '@/decorators'
import { eBarCodeDetectionType, eBarCodeResultCodes, eBarCodeType } from '@/consts'
import { TipPDF417Info, TipDecodeModule, iTipPDF417Info, iTipDecodeModule } from './children'


/**
* Structure is a basic containing structure for iDocBarCodeInfo list
* and contains bar-code reading data
*/
export interface iDocBarCodeField {
  /**
  * BarCode rotation angle (in radians)
  * @type {number}
  */
  bcAngle_DETECT: number

  /**
  * BarCode reading result
  * @type {eBarCodeResultCodes}
  */
  bcCodeResult: eBarCodeResultCodes

  /**
  * Number of read bar-code modules
  * @type {number}
  */
  bcCountModule: number

  /**
  * Results of reading data from a bar-code modules
  * @type {iTipDecodeModule[]}
  */
  bcDataModule: iTipDecodeModule[]

  /**
  * Information on PDF417 code parameters (only for PDF417)
  * @type {iTipPDF417Info|undefined}
  */
  bcPDF417INFO?: iTipPDF417Info

  /**
  * BarCode area coordinates on the image
  * @type {iRect}
  */
  bcROI_DETECT: iRect

  /**
  * Decoded bar-code type
  * @type {eBarCodeType}
  */
  bcType_DECODE: eBarCodeType

  /**
  * Type of the detected bar-code
  * @type {eBarCodeDetectionType}
  */
  bcType_DETECT: eBarCodeDetectionType

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

/**
* Structure is a basic containing structure for DocBarCodeInfo list
* and contains bar-code reading data
*/
export class DocBarCodeField implements iDocBarCodeField {
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
  * @type {eBarCodeResultCodes}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eBarCodeResultCodes)
  @Default(eBarCodeResultCodes.NO_ERR)
  bcCodeResult: eBarCodeResultCodes

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
  * @type {TipDecodeModule[]}
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
  * @type {TipPDF417Info|undefined}
  */
  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => TipPDF417Info)
  bcPDF417INFO?: TipPDF417Info

  /**
  * BarCode area coordinates on the image
  * @type {Rect}
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => Rect)
  bcROI_DETECT: Rect

  /**
  * Decoded bar-code type
  * @type {eBarCodeType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eBarCodeType)
  @Default(eBarCodeType.UNKNOWN)
  bcType_DECODE: eBarCodeType

  /**
  * Type of the detected bar-code
  * @type {eBarCodeDetectionType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eBarCodeDetectionType)
  @Default(eBarCodeDetectionType.LINEAR)
  bcType_DETECT: eBarCodeDetectionType

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
