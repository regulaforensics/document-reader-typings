import { IsDefined, IsEnum, IsString, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { eCheckResult } from '@/consts'
import { iTextSource, iTextField, TextSource, TextField } from './children'


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

export class TextResult implements iTextResult {
  /**
  * Status
  * @type {eCheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  status: eCheckResult

  /**
  * Validity status
  * @type {eCheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  validityStatus: eCheckResult

  /**
  * Comparison status
  * @type {eCheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  comparisonStatus: eCheckResult

  /**
  * Date format
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  dateFormat: string

  /**
  * Fields list
  * @type {TextField[]}
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => TextField)
  fieldList: TextField[]

  /**
  * Sources list
  * @type {TextSource[]}
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => TextSource)
  availableSourceList: TextSource[]
}
