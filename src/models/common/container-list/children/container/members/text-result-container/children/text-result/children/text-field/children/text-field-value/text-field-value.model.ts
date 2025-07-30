import { IsArray, IsDefined, IsEnum, IsInt, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator'
import { TextFieldValue as cTextFieldValue } from '@regulaforensics/document-reader-webclient'
import { Transform, Type } from 'class-transformer'

import { Rect } from '@/models/common/rect'
import { RfidOrigin } from '@/models/common/rfid-origin'
import { eCheckResult, eSource } from '@/consts'
import { TextSymbol } from './children'

/**
 * Used for storing text field values
 */
export class TextFieldValue implements cTextFieldValue {
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
  @Transform(({ value }) => (value ? String(value) : ''))
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
  originalValidity: eCheckResult

  /**
   * Original symbols
   * @type {TextSymbol[]|undefined}
   */
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => TextSymbol)
  @IsArray()
  originalSymbols?: TextSymbol[]

  /**
   * Page index
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  pageIndex: number

  /**
   * Field recognition probability
   * @type {number}
   */
  @IsDefined()
  @IsNumber()
  probability: number

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
   * Same as Result type, but used for safe parsing of not-described values. See Result type.
   * @type {number|undefined}
   */
  @IsOptional()
  @IsInt()
  containerType?: number
}
