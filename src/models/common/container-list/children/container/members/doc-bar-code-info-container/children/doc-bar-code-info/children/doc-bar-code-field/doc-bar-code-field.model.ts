import { IsArray, IsDefined, IsEnum, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { PArrayField } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { Rect } from '@/models/common'
import { eBarCodeType, eVisualFieldType } from '@/consts'
import { TipPDF417Info, TipDecodeModule } from './children'

/**
 * Structure is a basic containing structure for DocBarCodeInfo list
 * and contains bar-code reading data
 */
export class DocBarCodeField implements PArrayField {
  /**
   * BarCode rotation angle (in radians)
   * @type {number}
   */
  @IsDefined()
  @IsNumber()
  bcAngle_DETECT: number

  /**
   * BarCode reading result
   * @type {number}
   */
  @IsDefined()
  @IsNumber()
  bcCodeResult: number

  /**
   * Number of read bar-code modules
   * @type {number}
   */
  @IsDefined()
  @IsNumber()
  bcCountModule: number

  /**
   * Results of reading data from a bar-code modules
   * @type {TipDecodeModule[]}
   */
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TipDecodeModule)
  bcDataModule: TipDecodeModule[]

  /**
   * Information on PDF417 code parameters (only for PDF417)
   * @type {TipPDF417Info|undefined}
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => TipPDF417Info)
  bcPDF417INFO?: TipPDF417Info

  /**
   * BarCode area coordinates on the image
   * @type {Rect}
   */
  @IsDefined()
  @ValidateNested()
  @Type(() => Rect)
  bcROI_DETECT: Rect

  /**
   * @type {number|undefined}
   */
  @IsOptional()
  @IsNumber()
  bcTextDecoderTypes?: number

  /**
   * @type {eVisualFieldType|undefined}
   */
  @IsOptional()
  @IsEnum(eVisualFieldType)
  bcTextFieldType?: eVisualFieldType

  /**
   * Decoded bar-code type
   * @type {eBarCodeType}
   */
  @IsDefined()
  @IsEnum(eBarCodeType)
  bcType_DECODE: eBarCodeType

  /**
   * Type of the detected bar-code
   * @type {number}
   */
  @IsDefined()
  @IsNumber()
  bcType_DETECT: number
}

export type { DocBarCodeField as iDocBarCodeField }
