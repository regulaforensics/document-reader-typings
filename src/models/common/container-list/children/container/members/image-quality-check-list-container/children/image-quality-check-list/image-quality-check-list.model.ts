import { IsDefined, IsEnum, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { eCheckResult } from '@/consts'
import { iImageQualityCheck, ImageQualityCheck } from './children'


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
}

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
  List: ImageQualityCheck[]
}
