import { IsDefined, IsEnum, IsInt, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { eLights, eSource } from '@/consts'
import { iRfidOrigin, RfidOrigin } from '@/models/common/rfid-origin'
import { iRectangleCoordinates, RectangleCoordinates } from '@/models/common/rectangle-coordinates'


export interface iImageFieldValue {
  /**
  * Image file in Base64 representation
  * @type {string}
  */
  value: string

  /**
  * Original image file in Base64 representation
  * @type {string}
  */
  originalValue: string

  /**
  * Source
  * @type {eSource}
  */
  source: eSource

  /**
  * Container type
  * @type {number}
  */
  containerType: number

  /**
  * Page index
  * @type {number}
  */
  pageIndex: number

  /**
  * Light index
  * @type {eLights}
  */
  lightIndex: eLights

  /**
  * Field rectangular area
  * @type {iRectangleCoordinates}
  */
  fieldRect: iRectangleCoordinates

  /**
  * Field source from electronic document
  * @type {iRfidOrigin|undefined}
  */
  rfidOrigin?: iRfidOrigin

  /**
  * Original page index
  * @type {number|undefined}
  */
  originalPageIndex?: number
}

export class ImageFieldValue implements iImageFieldValue {
  /**
  * Image file in Base64 representation
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  value: string

  /**
  * Original image file in Base64 representation
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  originalValue: string

  /**
  * Source
  * @type {eSource}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eSource)
  source: eSource

  /**
  * Container type
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  containerType: number

  /**
  * Page index
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  pageIndex: number

  /**
  * Light index
  * @type {eLights}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eLights)
  lightIndex: eLights

  /**
  * Field rectangular area
  * @type {iRectangleCoordinates}
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => RectangleCoordinates)
  fieldRect: RectangleCoordinates

  /**
  * Field source from electronic document
  * @type {iRfidOrigin|undefined}
  */
  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => RfidOrigin)
  rfidOrigin?: RfidOrigin

  /**
  * Original page index
  * @type {number|undefined}
  */
  @Expose()
  @IsOptional()
  @IsInt()
  originalPageIndex?: number
}
