import { IsDefined, IsEnum, IsInt, ValidateNested } from 'class-validator'
import { MRZTestQuality as cMRZTestQuality } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { eCheckResult } from '@/consts'
import { StringItem } from './children'

export class MRZTestQuality implements cMRZTestQuality {
  /**
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  CHECK_SUMS: eCheckResult

  /**
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  CONTRAST_PRINT: eCheckResult

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  DOC_FORMAT: number

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  MRZ_FORMAT: number

  /**
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  PRINT_POSITION: eCheckResult

  /**
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  STAIN_MRZ: eCheckResult

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
  StrCount: number

  /**
   * @type {StringItem[]}
   */
  @IsDefined()
  @ValidateNested()
  @Type(() => StringItem)
  Strings: StringItem[]

  /**
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  TEXTUAL_FILLING: eCheckResult
}

export type { MRZTestQuality as iMRZTestQuality }
