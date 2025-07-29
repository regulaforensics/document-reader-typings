import { IsDefined, IsNumber, IsOptional, IsString } from 'class-validator'
import { TrfFtString as iTrfFtString } from '@regulaforensics/document-reader-webclient'

/**
 * Structure is used to store information about the numeric field (4 bytes) that is a part of one of the informational
 * data groups.
 */
export class TrfFtString implements iTrfFtString {
  /**
   * Logical type of the field
   * @type {number}
   */
  @IsOptional()
  @IsNumber()
  Type?: number

  /**
   * Result of logical analysis of compliance of the contents of the field
   * with the requirements of the specification
   * @type {number}
   */
  @IsOptional()
  @IsNumber()
  Status?: number

  /**
   * Mask of format of text information (for example, «YYMMDD» for date of birth)
   * @type {string}
   */
  @IsOptional()
  @IsString()
  Format?: string

  /**
   * Numeric value.
   * @type {string}
   */
  @IsDefined()
  @IsString()
  Data: string
}

export type { iTrfFtString }
