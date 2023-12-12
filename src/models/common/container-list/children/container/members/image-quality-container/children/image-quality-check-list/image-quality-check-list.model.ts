import { IsDefined, IsEnum, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { CheckResult } from '~src/distinct/consts'
import { IImageQualityCheck, ImageQualityCheck } from './children'


export interface IImageQualityCheckList {
  result: CheckResult
  List: IImageQualityCheck[]
}

export class ImageQualityCheckList implements IImageQualityCheckList {
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  result: CheckResult

  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => ImageQualityCheck)
  List: ImageQualityCheck[]
}
