import { IsBase64, IsDefined, IsEnum, IsInt, IsOptional, IsString, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { eLights, eResultType, eSource } from '@/consts'
import { iRfidOrigin, RfidOrigin } from '@/models/common/rfid-origin'
import { iRect, Rect } from '@/models/common/rect'
import { Default } from '@/decorators'


/**
* Image representation
*/
export interface iImageFieldValue {
  /**
  * Image file in Base64 representation
  * @type {string|undefined}
  */
  value?: string

  /**
  * Original image file in Base64 representation
  * @type {string|undefined}
  */
  originalValue?: string

  /**
  * Source
  * @type {eSource}
  */
  source: eSource

  /**
  * Container type
  * @type {eResultType}
  */
  containerType: eResultType

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
  * @type {iRect|undefined}
  */
  fieldRect?: iRect

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

/**
* Image representation
*/
export class ImageFieldValue implements iImageFieldValue {
  /**
  * Image file in Base64 representation
  * @type {string|undefined}
  */
  @Expose()
  @IsOptional()
  @IsString()
  @IsBase64()
  value?: string

  /**
  * Original image file in Base64 representation
  * @type {string|undefined}
  */
  @Expose()
  @IsOptional()
  @IsString()
  @IsBase64()
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
  * @type {eResultType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eResultType)
  containerType: eResultType

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
  @Default(eLights.OFF)
  lightIndex: eLights

  /**
  * Field rectangular area
  * @type {iRect|undefined}
  */
  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => Rect)
  fieldRect?: Rect

  /**
  * Field source from electronic document
  * @type {RfidOrigin|undefined}
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
