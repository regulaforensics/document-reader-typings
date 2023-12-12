import { IsDefined, IsEnum } from 'class-validator'
import { Expose } from 'class-transformer'

import { CheckResult } from '~src/consts'


export interface IDetailsRFID {
  overallStatus: CheckResult
  AA: CheckResult
  BAC: CheckResult
  CA: CheckResult
  PA: CheckResult
  PACE: CheckResult
  TA: CheckResult
}

export class DetailsRFID implements IDetailsRFID {
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  overallStatus: CheckResult

  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  AA: CheckResult

  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  BAC: CheckResult

  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  CA: CheckResult

  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  PA: CheckResult

  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  PACE: CheckResult

  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  TA: CheckResult
}
