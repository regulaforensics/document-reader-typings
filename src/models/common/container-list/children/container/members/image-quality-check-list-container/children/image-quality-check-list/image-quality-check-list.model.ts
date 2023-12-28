import { IsDefined, IsEnum, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { CheckResult } from '@/consts'
import { IImageQualityCheck, ImageQualityCheck } from './children'


export interface IImageQualityCheckList {
  /**
  * Overall check result
  * @type {CheckResult}
  */
  result: CheckResult

  /**
  * Array of single check result pointers
  * @type {IImageQualityCheck[]}
  */
  List: IImageQualityCheck[]
}

export class ImageQualityCheckList implements IImageQualityCheckList {
  /**
  * Overall check result
  * @type {CheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  result: CheckResult

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
