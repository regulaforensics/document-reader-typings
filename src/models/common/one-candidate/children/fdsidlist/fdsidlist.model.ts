import { IsArray, IsBoolean, IsDefined, IsEnum, IsInt, IsOptional, IsString, MaxLength } from 'class-validator'
import { FDSIDList as cFDSIDList } from '@regulaforensics/document-reader-webclient'

import { eDocFormat, eDocType } from '@/consts'

/**
 * Structure serves for storing additional document information and its link to
 * IRS document or documents
 */
export class FDSIDList implements cFDSIDList {
  /**
   * Document issuing country ICAO code
   * @type {string}
   */
  @IsString()
  @MaxLength(4)
  @IsDefined()
  ICAOCode: string

  /**
   * Number of elements in the List
   * @type {number}
   */
  @IsOptional()
  @IsInt()
  Count?: number

  /**
   * Array of IRS document identifiers
   * @type {number[]}
   */
  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  List?: number[]

  /**
   * Document type
   * @type {eDocType}
   */
  @IsDefined()
  @IsEnum(eDocType)
  dType: eDocType

  /**
   * Document format
   * @type {eDocFormat}
   */
  @IsDefined()
  @IsEnum(eDocFormat)
  dFormat: eDocFormat

  /**
   * Flag for MRZ presence on document
   * @type {boolean}
   */
  @IsDefined()
  @IsBoolean()
  dMRZ: boolean

  /**
   * Document description text
   * @type {string|undefined}
   */
  @IsOptional()
  @IsString()
  dDescription?: string

  /**
   * Document issue year
   * @type {string}
   */
  @IsOptional()
  @IsString()
  dYear?: string

  /**
   * Document issuing country name
   * @type {string}
   */
  @IsDefined()
  @IsString()
  dCountryName: string

  /**
   * Document issuing country state code
   * @type {string|undefined}
   */
  @IsOptional()
  @IsString()
  dStateCode?: string

  /**
   * Document issuing country state name
   * @type {string|undefined}
   */
  @IsOptional()
  @IsString()
  dStateName?: string

  /**
   * Whether the document is deprecated
   * @type {boolean}
   */
  @IsDefined()
  @IsBoolean()
  isDeprecated: boolean // todo: should be optional?
}
