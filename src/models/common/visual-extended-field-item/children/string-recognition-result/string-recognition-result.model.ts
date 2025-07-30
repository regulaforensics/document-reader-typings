import { IsDefined, IsInt, IsOptional, IsString, ValidateNested } from 'class-validator'
import { StringRecognitionResult as cStringRecognitionResult } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { SymbolRecognitionResult } from './children'

export class StringRecognitionResult implements cStringRecognitionResult {
  /**
   * Number of StringResult array elements
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  SymbolsCount: number

  /**
   * Array of recognition results for individual characters of a string
   * @type {SymbolRecognitionResult[]}
   */
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => SymbolRecognitionResult)
  StringResult: SymbolRecognitionResult[]

  /**
   * Buf_Text text string length
   * @type {number}
   */
  @IsOptional()
  @IsInt()
  Buf_Length?: number

  /**
   * Text field data in UTF8 format. Results of reading different lines of a multi-line field are separated by \'^\'
   * @type {string}
   */
  @IsOptional()
  @IsString()
  Buf_Text?: string

  /**
   * @type {number}
   */
  @IsOptional()
  @IsInt()
  Reserved?: number
}

export type { StringRecognitionResult as iStringRecognitionResult }
