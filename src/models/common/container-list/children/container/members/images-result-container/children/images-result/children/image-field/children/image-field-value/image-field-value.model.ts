import { IsDefined, IsEnum, IsInt, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { Lights, Source } from '@/consts'
import { IRfidOrigin, RfidOrigin } from '@/models/common/rfid-origin'
import { IRectangleCoordinates, RectangleCoordinates } from '@/models/common/rectangle-coordinates'


export interface IImageFieldValue {
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
  * @type {Source}
  */
  source: Source

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
  * @type {Lights}
  */
  lightIndex: Lights

  /**
  * Field rectangular area
  * @type {IRectangleCoordinates}
  */
  fieldRect: IRectangleCoordinates

  /**
  * Field source from electronic document
  * @type {IRfidOrigin|undefined}
  */
  rfidOrigin?: IRfidOrigin

  /**
  * Original page index
  * @type {number|undefined}
  */
  originalPageIndex?: number
}

export class ImageFieldValue implements IImageFieldValue {
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
  * @type {Source}
  */
  @Expose()
  @IsDefined()
  @IsEnum(Source)
  source: Source

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
  * @type {Lights}
  */
  @Expose()
  @IsDefined()
  @IsEnum(Lights)
  lightIndex: Lights

  /**
  * Field rectangular area
  * @type {IRectangleCoordinates}
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => RectangleCoordinates)
  fieldRect: RectangleCoordinates

  /**
  * Field source from electronic document
  * @type {IRfidOrigin|undefined}
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
