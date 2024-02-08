import { IsArray, IsDefined, IsEnum, IsInt, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { eCheckResult } from '@/consts'
import { iImageQualityCheck, ImageQualityCheck } from './children'
import { Default } from '@/decorators'


/**
* Structure is used for storing input image quality check results list
*/
export interface iImageQualityCheckList {
  /**
  * Overall check result
  * @type {eCheckResult}
  */
  result: eCheckResult

  /**
  * Array of single check result pointers
  * @type {iImageQualityCheck[]}
  */
  List: iImageQualityCheck[]

  /**
  * Number of List array elements
  * @type {number}
  */
  Count: number
}

/**
* Structure is used for storing input image quality check results list
*/
export class ImageQualityCheckList implements iImageQualityCheckList {
  /**
  * Overall check result
  * @type {eCheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  result: eCheckResult

  /**
  * Array of single check result pointers
  * @type {ImageQualityCheck[]}
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => ImageQualityCheck)
  @IsArray()
  @Default([])
  List: ImageQualityCheck[]

  /**
  * Number of List array elements
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  Count: number
}
