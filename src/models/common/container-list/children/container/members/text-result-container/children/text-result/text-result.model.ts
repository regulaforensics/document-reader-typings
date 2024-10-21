import { IsArray, IsDefined, IsEnum, IsString, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

import { eCheckResult } from '@/consts'
import { Default } from '@/decorators'
import { iTextField, iTextSource, TextField, TextSource } from './children'


/**
* Used for storing text result
*/
export interface iTextResult {
  /**
  * Status
  * @type {eCheckResult}
  */
  status: eCheckResult

  /**
  * Validity status
  * @type {eCheckResult}
  */
  validityStatus: eCheckResult

  /**
  * Comparison status
  * @type {eCheckResult}
  */
  comparisonStatus: eCheckResult

  /**
  * Date format
  * @type {string}
  */
  dateFormat: string

  /**
  * Fields list
  * @type {iTextField[]}
  */
  fieldList: iTextField[]

  /**
  * Sources list
  * @type {iTextSource[]}
  */
  availableSourceList: iTextSource[]
}

/**
* Used for storing text result
*/
export class TextResult implements iTextResult {
  /**
  * Status
  * @type {eCheckResult}
  */
  @IsDefined()
  @IsEnum(eCheckResult)
  @Default(eCheckResult.WAS_NOT_DONE)
  status: eCheckResult

  /**
  * Validity status
  * @type {eCheckResult}
  */
  @IsDefined()
  @IsEnum(eCheckResult)
  @Default(eCheckResult.WAS_NOT_DONE)
  validityStatus: eCheckResult

  /**
  * Comparison status
  * @type {eCheckResult}
  */
  @IsDefined()
  @IsEnum(eCheckResult)
  @Default(eCheckResult.WAS_NOT_DONE)
  comparisonStatus: eCheckResult

  /**
  * Date format
  * @type {string}
  */
  @IsDefined()
  @IsString()
  dateFormat: string

  /**
  * Fields list
  * @type {TextField[]}
  */
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => TextField)
  @Default([])
  @IsArray()
  fieldList: TextField[]

  /**
  * Sources list
  * @type {TextSource[]}
  */
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => TextSource)
  @Default([])
  @IsArray()
  availableSourceList: TextSource[]
}
