import { IsArray, IsDefined, IsEnum, IsInt, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator'
import { Transform, Type } from 'class-transformer'

import { iRect, Rect } from '@/models/common/rect'
import { iRfidOrigin, RfidOrigin } from '@/models/common/rfid-origin'
import { eCheckResult, eSource } from '@/consts'
import { Default } from '@/decorators'
import { iTextSymbol, TextSymbol } from './children'


/**
* Used for storing text field values
*/
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
  * @type {string|undefined}
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
  * @type {iRect|undefined}
  */
  fieldRect?: iRect

  /**
  * Field source from electronic document
  * @type {iRfidOrigin|undefined}
  */
  rfidOrigin?: iRfidOrigin

  /**
  * Field recognition probability
  * @type {number}
  */
  probability: number

  /**
  * Original symbols
  * @type {iTextSymbol[]|undefined}
  */
  originalSymbols?: iTextSymbol[]
}

/**
* Used for storing text field values
*/
export class TextFieldValue implements iTextFieldValue {
  /**
  * Source
  * @type {eSource}
  */
  @IsDefined()
  @IsEnum(eSource)
  source: eSource

  /**
  * Field value in current provision of information format
  * @type {string}
  */
  @IsString()
  @IsDefined()
  @Transform(({ value }) => value ? String(value) : '')
  value: string

  /**
  * Field original value
  * @type {string|undefined}
  */
  @IsOptional()
  @IsString()
  originalValue?: string

  /**
  * Original validity
  * @type {eCheckResult}
  */
  @IsDefined()
  @IsEnum(eCheckResult)
  @Default(eCheckResult.WAS_NOT_DONE)
  originalValidity: eCheckResult

  /**
  * Page index
  * @type {number}
  */
  @IsDefined()
  @IsInt()
  pageIndex: number

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

  /**
  * Field recognition probability
  * @type {number}
  */
  @IsDefined()
  @IsNumber()
  @Default(0)
  probability: number

  /**
  * Original symbols
  * @type {TextSymbol[]|undefined}
  */
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => TextSymbol)
  @IsArray()
  originalSymbols?: TextSymbol[]
}
