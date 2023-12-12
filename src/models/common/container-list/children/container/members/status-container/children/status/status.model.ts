import { IsDefined, IsEnum, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { CheckResult } from '~src/distinct/consts'
import { DetailsRFID, IDetailsRFID, DetailsOptical, IDetailsOptical } from './children'


export interface IStatus {
  overallStatus: CheckResult
  optical: CheckResult
  portrait?: CheckResult
  rfid?: CheckResult
  stopList?: CheckResult
  detailsRFID?: IDetailsRFID
  detailsOptical: IDetailsOptical
}

export class Status implements IStatus {
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  overallStatus: CheckResult

  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  optical: CheckResult

  @Expose()
  @IsOptional()
  @IsEnum(CheckResult)
  portrait?: CheckResult

  @Expose()
  @IsOptional()
  @IsEnum(CheckResult)
  rfid?: CheckResult

  @Expose()
  @IsOptional()
  @IsEnum(CheckResult)
  stopList?: CheckResult

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => DetailsRFID)
  detailsRFID?: DetailsRFID

  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => DetailsOptical)
  detailsOptical: DetailsOptical
}
