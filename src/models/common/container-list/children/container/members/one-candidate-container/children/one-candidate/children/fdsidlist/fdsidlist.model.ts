import { IsArray, IsBoolean, IsDefined, IsEnum, IsInt, IsOptional, IsString, MaxLength } from 'class-validator'

import { eDocFormat, eDocType } from '@/consts'
import { Default } from '@/decorators'


/**
* Structure serves for storing additional document information and its link to
* IRS document or documents
*/
export interface iFDSIDList {
  /**
  * Document issuing country ICAO code
  * @type {string}
  */
  ICAOCode: string

  /**
  * Number of elements in the List
  * @type {number}
  */
  Count: number

  /**
  * Array of IRS document identifiers
  * @type {number[]}
  */
  List: number[]

  /**
  * Document type
  * @type {eDocType}
  */
  dType: eDocType

  /**
  * Document format
  * @type {eDocFormat}
  */
  dFormat: eDocFormat

  /**
  * Flag for MRZ presence on document
  * @type {boolean}
  */
  dMRZ: boolean

  /**
  * Document description text
  * @type {string|undefined}
  */
  dDescription?: string

  /**
  * Document issue year
  * @type {string}
  */
  dYear: string

  /**
  * Document issuing country name
  * @type {string}
  */
  dCountryName: string

  /**
  * Document issuing country state code
  * @type {string|undefined}
  */
  dStateCode?: string

  /**
  * Document issuing country state name
  * @type {string|undefined}
  */
  dStateName?: string

  /**
  * Whether the document is deprecated
  * @type {boolean}
  */
  isDeprecated: boolean
}

/**
* Structure serves for storing additional document information and its link to
* IRS document or documents
*/
export class FDSIDList implements iFDSIDList {
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
  @IsDefined()
  @IsInt()
  Count: number

  /**
  * Array of IRS document identifiers
  * @type {number[]}
  */
  @IsDefined()
  @IsArray()
  @IsInt({ each: true })
  @Default([])
  List: number[]

  /**
  * Document type
  * @type {eDocType}
  */
  @IsDefined()
  @IsEnum(eDocType)
  @Default(eDocType.NOT_DEFINED)
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
  @Default(false)
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
  @IsDefined()
  @IsString()
  dYear: string

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
  @Default(false)
  isDeprecated: boolean
}
