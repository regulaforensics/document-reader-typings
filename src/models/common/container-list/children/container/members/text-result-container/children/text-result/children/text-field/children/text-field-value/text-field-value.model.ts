import { IsDefined, IsEnum, IsInt, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { IRectangleCoordinates, RectangleCoordinates } from '@/models/common/rectangle-coordinates'
import { IRfidOrigin, RfidOrigin } from '@/models/common/rfid-origin'
import { CheckResult, Source } from '@/consts'
import { Default } from '@/decorators'
import { ITextSymbol, TextSymbol } from './children'


export interface ITextFieldValue {
  /**
  * Source
  * @type {Source}
  */
  source: Source

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
  * @type {CheckResult}
  */
  originalValidity: CheckResult

  /**
  * Page index
  * @type {number}
  */
  pageIndex: number

  /**
  * Field rectangular area
  * @type {IRectangleCoordinates}
  */
  fieldRect?: IRectangleCoordinates

  /**
  * Field source from electronic document
  * @type {IRfidOrigin}
  */
  rfidOrigin?: IRfidOrigin

  /**
  * Field recognition probability
  * @type {number}
  */
  probability: number

  /**
  * Original symbols
  * @type {ITextSymbol[]}
  */
  originalSymbols?: ITextSymbol[]
}

export class TextFieldValue implements ITextFieldValue {
  /**
  * Source
  * @type {Source}
  */
  @Expose()
  @IsDefined()
  @IsEnum(Source)
  source: Source

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
  * @type {CheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  originalValidity: CheckResult

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
  */
  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => RfidOrigin)
  rfidOrigin?: RfidOrigin

  /**
  * Field recognition probability
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  @Default(0)
  probability: number

  /**
  * Original symbols
  */
  @Expose()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => TextSymbol)
  originalSymbols?: TextSymbol[]
}
