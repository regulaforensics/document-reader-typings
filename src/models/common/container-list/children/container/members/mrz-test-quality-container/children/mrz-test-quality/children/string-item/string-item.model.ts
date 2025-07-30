import { IsArray, IsDefined, IsEnum, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { StringItem as cStringItem } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { eCheckResult } from '@/consts'
import { Rect } from '@/models'
import { ErrorCoordinates, FieldItem, SymbolEstimationItem } from './children'

export class StringItem implements cStringItem {
  /**
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  ALIGNMENT_SYMBOLS_IN_STRING: eCheckResult

  /**
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  CHECK_SUMS: eCheckResult

  /**
   * @type {ErrorCoordinates}
   */
  @IsDefined()
  @ValidateNested()
  @Type(() => ErrorCoordinates)
  ErrorPOSITION: ErrorCoordinates

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  FieldCount: number

  /**
   * @type {FieldItem[]}
   */
  @IsDefined()
  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => FieldItem)
  Fields: FieldItem[]

  /**
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  STRINGS_DISTANCE: eCheckResult

  /**
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  STRINGS_INTERVAL: eCheckResult

  /**
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  STRING_FILLING: eCheckResult

  /**
   * @type {eCheckResult}
   */
  @IsOptional()
  @IsEnum(eCheckResult)
  STRINGS_POSITION?: eCheckResult

  /**
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  SYMBOLS_PARAM: eCheckResult

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  SizeError_ALIGNMENT: number

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  SizeError_DISTANCE: number

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  SizeError_INTERVAL: number

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  StringAngle: number

  /**
   * @type {Rect}
   */
  @IsDefined()
  @ValidateNested()
  @Type(() => Rect)
  StringBorders: Rect

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  SymbolsCount: number

  /**
   * @type {SymbolEstimationItem[]}
   */
  @IsDefined()
  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => SymbolEstimationItem)
  SymbolsEstimations: SymbolEstimationItem[]
}
