import { IsArray, IsBoolean, IsDefined, IsEnum, IsInt, IsOptional, IsString, MaxLength } from 'class-validator'
import { Expose } from 'class-transformer'

import { DocFormat, DocType } from '@/consts'
import { Default } from '@/decorators'


export interface IFDSIDList {
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
  * @type {DocType}
  */
  dType: DocType

  /**
  * Document format
  * @type {DocFormat}
  */
  dFormat: DocFormat

  /**
  * Flag for MRZ presence on document
  * @type {boolean}
  */
  dMRZ: boolean

  /**
  * Document description text
  * @type {string}
  */
  dDescription: string

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

export class FDSIDList implements IFDSIDList {
  /**
  * Document issuing country ICAO code
  * @type {string}
  */
  @Expose()
  @IsString()
  @MaxLength(4)
  @IsDefined()
  ICAOCode: string

  /**
  * Number of elements in the List
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  Count: number

  /**
  * Array of IRS document identifiers
  * @type {number[]}
  */
  @Expose()
  @IsDefined()
  @IsArray()
  @IsInt({ each: true })
  List: number[]

  /**
  * Document type
  * @type {DocType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(DocType)
  dType: DocType

  /**
  * Document format
  * @type {DocFormat}
  */
  @Expose()
  @IsDefined()
  @IsEnum(DocFormat)
  dFormat: DocFormat

  /**
  * Flag for MRZ presence on document
  * @type {boolean}
  */
  @Expose()
  @IsDefined()
  @IsBoolean()
  @Default(false)
  dMRZ: boolean

  /**
  * Document description text
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  dDescription: string

  /**
  * Document issue year
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  dYear: string

  /**
  * Document issuing country name
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  dCountryName: string

  /**
  * Document issuing country state code
  * @type {string|undefined}
  */
  @Expose()
  @IsOptional()
  @IsString()
  dStateCode?: string

  /**
  * Document issuing country state name
  * @type {string|undefined}
  */
  @Expose()
  @IsOptional()
  @IsString()
  dStateName?: string

  /**
  * Whether the document is deprecated
  * @type {boolean}
  */
  @Expose()
  @IsDefined()
  @IsBoolean()
  @Default(false)
  isDeprecated: boolean
}
