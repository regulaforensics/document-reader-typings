import { IsDefined, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator'

import { eCheckResult, eSource } from '@/consts'
import { Type } from 'class-transformer'
import { RfidOrigin, Rect } from '@/models'

/**
 * Source, value and check result of a text data field
 */
export interface iRTextDataSource {
  /**
   * Source of the text data field
   * @type {eSource}
   */
  source: eSource

  /**
   * Check result of the text data field
   * @type {eCheckResult}
   */
  checkResult: eCheckResult

  /**
   * Value of the text data field
   * @type {string}
   */
  value: string

  /**
   * Field recognition probability
   * @type {number}
   */
  probability: number

  /**
   * Page index
   * @type {number}
   */
  pageIndex: number

  /**
   * Rect
   * @type {Rect|undefined}
   */
  rect?: Rect

  /**
   * RFID origin
   * @type {RfidOrigin|undefined}
   */
  rfidOrigin?: RfidOrigin
}

/**
 * Source, value and check result of a text data field
 */
export class RTextDataSource implements iRTextDataSource {
  /**
   * Source of the text data field
   * @type {eSource}
   */
  @IsDefined()
  @IsEnum(eSource)
  source: eSource

  /**
   * Check result of the text data field
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  checkResult: eCheckResult

  /**
   * Value of the text data field
   * @type {string}
   */
  @IsDefined()
  @IsString()
  value: string

  /**
   * Field recognition probability
   * @type {number}
   */
  @IsDefined()
  probability: number

  /**
   * Page index
   * @type {number}
   */
  @IsDefined()
  pageIndex: number

  /**
   * Rect
   * @type {Rect|undefined}
   */
  @IsOptional()
  @Type(() => Rect)
  @ValidateNested()
  rect?: Rect

  /**
   * RFID origin
   * @type {RfidOrigin|undefined}
   */
  @IsOptional()
  @Type(() => RfidOrigin)
  @ValidateNested()
  rfidOrigin?: RfidOrigin
}
