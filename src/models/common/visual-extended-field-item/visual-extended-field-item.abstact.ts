import { IsDefined, IsEnum, IsInt, IsOptional, IsString, ValidateNested } from 'class-validator'
import { VisualExtendedFieldItem as cVisualExtendedFieldItem } from '@regulaforensics/document-reader-webclient'

import { eLCID, eVisualFieldType } from '@/consts'
import { Type } from 'class-transformer'
import { StringRecognitionResult } from './children'

export abstract class aVisualExtendedFieldItem implements cVisualExtendedFieldItem {
  /**
   * @type {eVisualFieldType}
   */
  @IsDefined()
  @IsEnum(eVisualFieldType)
  wFieldType: eVisualFieldType

  /**
   * Field symbolic name (null-terminated string)
   * @type {string}
   */
  @IsDefined()
  @IsString()
  FieldName: string

  /**
   * Number of StringsResult array elements
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  StringsCount: number

  /**
   * Array of recognizing probabilities for each line of text field. Only for Result.VISUAL_TEXT and Result.MRZ_TEXT results.
   * @type {StringRecognitionResult[]}
   */
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => StringRecognitionResult)
  StringsResult: StringRecognitionResult[]

  /**
   * Buf_Text text string length
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  Buf_Length: number

  /**
   * Text field data in UTF8 format. Results of reading different lines of a multi-line field are separated by \'^\'
   * @type {string}
   */
  @IsDefined()
  @IsString()
  Buf_Text: string

  /**
   * @type {string|undefined}
   */
  @IsOptional()
  @IsString()
  FieldMask?: string

  /**
   * @type {number|undefined}
   */
  @IsOptional()
  @IsInt()
  Validity?: number

  /**
   * @type {number|undefined}
   */
  @IsOptional()
  @IsInt()
  InComparison?: number

  /**
   * @type {eLCID|undefined}
   */
  @IsOptional()
  @IsEnum(eLCID)
  wLCID?: eLCID

  /**
   * @type {number|undefined}
   */
  @IsOptional()
  @IsInt()
  Reserved2?: number

  /**
   * @type {number|undefined}
   */
  @IsOptional()
  @IsInt()
  Reserved3?: number
}
