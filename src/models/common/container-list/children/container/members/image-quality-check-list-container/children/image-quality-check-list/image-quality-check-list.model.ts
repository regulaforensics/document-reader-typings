import { IsDefined, IsEnum, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { eCheckResult } from '@/consts'
import { iImageQualityCheck, ImageQualityCheck } from './children'


export interface iImageQualityCheckList {
  /**
  * Overall check result
  * @type {eCheckResult}
  * @memberof iImageQualityCheckList
  */
  result: eCheckResult

  /**
  * Array of single check result pointers
  * @type {iImageQualityCheck[]}
  * @memberof iImageQualityCheckList
  */
  List: iImageQualityCheck[]
}

export class ImageQualityCheckList implements iImageQualityCheckList {
  /**
  * Overall check result
  * @type {eCheckResult}
  * @memberof ImageQualityCheckList
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  result: eCheckResult

  /**
  * Array of single check result pointers
  * @type {ImageQualityCheck[]}
  * @memberof ImageQualityCheckList
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => ImageQualityCheck)
  List: ImageQualityCheck[]
}
