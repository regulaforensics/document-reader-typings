import { IsDefined, IsEnum, IsInt } from 'class-validator'
import { Expose } from 'class-transformer'

import { CheckResult } from '~src/distinct/consts'


export interface IDetailsOptical {
  overallStatus: CheckResult
  docType: CheckResult
  expiry: CheckResult
  imageQA: CheckResult
  mrz: CheckResult
  pagesCount: number
  security: CheckResult
  text: CheckResult
}

export class DetailsOptical implements IDetailsOptical {
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  overallStatus: CheckResult

  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  docType: CheckResult

  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  expiry: CheckResult

  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  imageQA: CheckResult

  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  mrz: CheckResult

  @Expose()
  @IsDefined()
  @IsInt()
  pagesCount: number

  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  security: CheckResult

  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  text: CheckResult
}
