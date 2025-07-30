import { IsArray, IsDefined, IsInt, IsOptional, IsString, ValidateNested } from 'class-validator'
import { ListVerifiedFields as cListVerifiedFields } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { VerifiedFieldMap } from './children'

/**
 * Structure serves for storing the results of comparing the MRZ
 * text data, document filling area data, bar-codes data and data retrieved from RFID-chip
 * memory (used together with RFID-Chip Reader SDK) and passing it to the user application
 */
export class ListVerifiedFields implements cListVerifiedFields {
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
  pFieldMaps: VerifiedFieldMap[]

  /**
   * @type {string}
   */
  @IsOptional()
  @IsString()
  pDateFormat?: string
}

export type { ListVerifiedFields as iListVerifiedFields }
