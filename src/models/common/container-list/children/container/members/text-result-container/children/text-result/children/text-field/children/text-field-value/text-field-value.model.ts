import { IsDefined, IsEnum, IsInt, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { iRectangleCoordinates, RectangleCoordinates } from '@/models/common/rectangle-coordinates'
import { iRfidOrigin, RfidOrigin } from '@/models/common/rfid-origin'
import { eCheckResult, eSource } from '@/consts'
import { Default } from '@/decorators'
import { iTextSymbol, TextSymbol } from './children'


export interface iTextFieldValue {
  /**
  * Source
  * @type {eSource}
  */
  source: eSource

  /**
  * Field value in current provision of information format
  * @type {string}
  */
  value: string

  /**
  * Field original value
  * @type {string}
  */
  originalValue?: string

  /**
  * Original validity
  * @type {eCheckResult}
  */
  originalValidity: eCheckResult

  /**
  * Page index
  * @type {number}
  */
  pageIndex: number

  /**
  * Field rectangular area
  * @type {iRectangleCoordinates}
  */
  fieldRect?: iRectangleCoordinates

  /**
  * Field source from electronic document
  * @type {iRfidOrigin}
  */
  rfidOrigin?: iRfidOrigin

  /**
  * Field recognition probability
  * @type {number}
  */
  probability: number

  /**
  * Original symbols
  * @type {iTextSymbol[]}
  */
  originalSymbols?: iTextSymbol[]
}

export class TextFieldValue implements iTextFieldValue {
  /**
  * Source
  * @type {eSource}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eSource)
  source: eSource

  /**
  * Field value in current provision of information format
  * @type {string}
  */
  @Expose()
  @IsString()
  @IsDefined()
  value: string

  /**
  * Field original value
  * @type {string}
  */
  @Expose()
  @IsOptional()
  @IsString()
  originalValue?: string

  /**
  * Original validity
  * @type {eCheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  originalValidity: eCheckResult

  /**
  * Page index
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  pageIndex: number

  /**
  * Field rectangular area
  * @type {RectangleCoordinates}
  */
  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => RectangleCoordinates)
  fieldRect?: RectangleCoordinates

  /**
  * Field source from electronic document
  * @type {RfidOrigin}
  */
  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => RfidOrigin)
  rfidOrigin?: RfidOrigin

  /**
  * Field recognition probability
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  @Default(0)
  probability: number

  /**
  * Original symbols
  * @type {TextSymbol[]}
  */
  @Expose()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => TextSymbol)
  originalSymbols?: TextSymbol[]
}
