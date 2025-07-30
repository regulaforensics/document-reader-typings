import { IsBase64, IsDefined, IsEnum, IsInt, IsOptional, IsString, ValidateNested } from 'class-validator'
import { ImagesFieldValue } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { eLights, eSource } from '@/consts'
import { RfidOrigin } from '@/models/common/rfid-origin'
import { Rect } from '@/models/common/rect'

/**
 * Image representation
 */
export class ImageFieldValue implements ImagesFieldValue {
  /**
   * Source
   * @type {eSource}
   */
  @IsDefined()
  @IsEnum(eSource)
  source: eSource

  /**
   * Image file in Base64 representation
   * @type {string|undefined}
   */
  @IsOptional()
  @IsString()
  @IsBase64()
  value?: string

  /**
   * Original image file in Base64 representation
   * @type {string|undefined}
   */
  @IsOptional()
  @IsString()
  @IsBase64()
  originalValue?: string

  /**
   * Original page index
   * @type {number|undefined}
   */
  @IsOptional()
  @IsInt()
  originalPageIndex?: number

  /**
   * Page index
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  pageIndex: number

  /**
   * Light index
   * @type {eLights}
   */
  @IsDefined()
  @IsEnum(eLights)
  lightIndex: eLights

  /**
   * Container type
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  containerType: number

  /**
   * Field rectangular area
   * @type {Rect|undefined}
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Rect)
  fieldRect?: Rect

  /**
   * Field source from electronic document
   * @type {RfidOrigin|undefined}
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => RfidOrigin)
  rfidOrigin?: RfidOrigin
}
