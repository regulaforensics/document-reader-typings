import { IsArray, IsDefined, IsInt, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

import { Default } from '@/decorators'
import { iVerifiedFieldMap, VerifiedFieldMap } from './children'


/**
* Structure serves for storing the results of comparing the MRZ
* text data, document filling area data, bar-codes data and data retrieved from RFID-chip
* memory (used together with RFID-Chip Reader SDK) and passing it to the user application
*/
export interface iListVerifiedFields {
  /**
  * Number of pFieldMaps array elements
  * @type {number}
  */
  Count: number

  /**
  * Array of results of document filling text fields’ data analysis
  * @type {iVerifiedFieldMap[]}
  */
  pFieldMaps: iVerifiedFieldMap[]
}

/**
* Structure serves for storing the results of comparing the MRZ
* text data, document filling area data, bar-codes data and data retrieved from RFID-chip
* memory (used together with RFID-Chip Reader SDK) and passing it to the user application
*/
export class ListVerifiedFields implements iListVerifiedFields {
  /**
  * Number of pFieldMaps array elements
  * @type {number}
  */
  @IsDefined()
  @IsInt()
  Count: number

  /**
  * Array of results of document filling text fields’ data analysis
  * @type {VerifiedFieldMap[]}
  */
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => VerifiedFieldMap)
  @Default([])
  pFieldMaps: VerifiedFieldMap[]
}
