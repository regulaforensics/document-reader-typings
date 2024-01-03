import { IsDefined, IsEnum, IsInt, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { eLights, eSource } from '@/consts'
import { iRfidOrigin, RfidOrigin } from '@/models/common/rfid-origin'
import { iRectangleCoordinates, RectangleCoordinates } from '@/models/common/rectangle-coordinates'


export interface iImageFieldValue {
  /**
  * Image file in Base64 representation
  * @type {string}
  * @memberof iImageFieldValue
  */
  value: string

  /**
  * Original image file in Base64 representation
  * @type {string}
  * @memberof iImageFieldValue
  */
  originalValue: string

  /**
  * Source
  * @type {eSource}
  * @memberof iImageFieldValue
  */
  source: eSource

  /**
  * Container type
  * @type {number}
  * @memberof iImageFieldValue
  */
  containerType: number

  /**
  * Page index
  * @type {number}
  * @memberof iImageFieldValue
  */
  pageIndex: number

  /**
  * Light index
  * @type {eLights}
  * @memberof iImageFieldValue
  */
  lightIndex: eLights

  /**
  * Field rectangular area
  * @type {iRectangleCoordinates}
  * @memberof iImageFieldValue
  */
  fieldRect: iRectangleCoordinates

  /**
  * Field source from electronic document
  * @type {iRfidOrigin|undefined}
  * @memberof iImageFieldValue
  */
  rfidOrigin?: iRfidOrigin

  /**
  * Original page index
  * @type {number|undefined}
  * @memberof iImageFieldValue
  */
  originalPageIndex?: number
}

export class ImageFieldValue implements iImageFieldValue {
  /**
  * Image file in Base64 representation
  * @type {string}
  * @memberof ImageFieldValue
  */
  @Expose()
  @IsDefined()
  @IsString()
  value: string

  /**
  * Original image file in Base64 representation
  * @type {string}
  * @memberof ImageFieldValue
  */
  @Expose()
  @IsDefined()
  @IsString()
  originalValue: string

  /**
  * Source
  * @type {eSource}
  * @memberof ImageFieldValue
  */
  @Expose()
  @IsDefined()
  @IsEnum(eSource)
  source: eSource

  /**
  * Container type
  * @type {number}
  * @memberof ImageFieldValue
  */
  @Expose()
  @IsDefined()
  @IsInt()
  containerType: number

  /**
  * Page index
  * @type {number}
  * @memberof ImageFieldValue
  */
  @Expose()
  @IsDefined()
  @IsInt()
  pageIndex: number

  /**
  * Light index
  * @type {eLights}
  * @memberof ImageFieldValue
  */
  @Expose()
  @IsDefined()
  @IsEnum(eLights)
  lightIndex: eLights

  /**
  * Field rectangular area
  * @type {iRectangleCoordinates}
  * @memberof ImageFieldValue
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => RectangleCoordinates)
  fieldRect: RectangleCoordinates

  /**
  * Field source from electronic document
  * @type {iRfidOrigin|undefined}
  * @memberof ImageFieldValue
  */
  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => RfidOrigin)
  rfidOrigin?: RfidOrigin

  /**
  * Original page index
  * @type {number|undefined}
  * @memberof ImageFieldValue
  */
  @Expose()
  @IsOptional()
  @IsInt()
  originalPageIndex?: number
}
