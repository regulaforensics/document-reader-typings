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
  */
  source: Source

  /**
  * Field value in current provision of information format
  */
  value: string

  /**
  * Field original value
  */
  originalValue?: string

  /**
  * Original validity
  */
  originalValidity: CheckResult

  /**
  * Page index
  */
  pageIndex: number

  /**
  * Field rectangular area
  */
  fieldRect?: IRectangleCoordinates

  /**
  * Field source from electronic document
  */
  rfidOrigin?: IRfidOrigin

  /**
  * Field recognition probability
  */
  probability: number

  /**
  * Original symbols
  */
  originalSymbols?: ITextSymbol[]
}

export class TextFieldValue implements ITextFieldValue {
  /**
  * Source
  */
  @Expose()
  @IsDefined()
  @IsEnum(Source)
  source: Source

  /**
  * Field value in current provision of information format
  */
  @Expose()
  @IsString()
  @IsDefined()
  value: string

  /**
  * Field original value
  */
  @Expose()
  @IsOptional()
  @IsString()
  originalValue?: string

  /**
  * Original validity
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  originalValidity: CheckResult

  /**
  * Page index
  */
  @Expose()
  @IsDefined()
  @IsInt()
  pageIndex: number

  /**
  * Field rectangular area
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
