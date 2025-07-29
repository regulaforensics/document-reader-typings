import { IsArray, IsDefined, IsEnum, IsInt, ValidateNested } from 'class-validator'
import { ImageQualityCheckList as iImageQualityCheckList } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { eCheckResult } from '@/consts'
import { ImageQualityCheck } from './children'

/**
 * Structure is used for storing input image quality check results list
 */
export class ImageQualityCheckList implements iImageQualityCheckList {
  /**
   * Overall check result
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  result: eCheckResult

  /**
   * Array of single check result pointers
   * @type {ImageQualityCheck[]}
   */
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => ImageQualityCheck)
  @IsArray()
  List: ImageQualityCheck[]

  /**
   * Number of List array elements
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  Count: number
}

export type { iImageQualityCheckList }
