import { IsDefined, IsEnum, IsInt, IsOptional, IsString, Min, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { ProcessingStatus, RfidLocation } from '~/src/consts'
import { IsStringObjectRecord } from '~/src/validators'
import { DocReaderTypeError } from '~src/errors'
import { ContainerList, IContainerList } from '~src/models/common'
import { ITransactionInfo, TransactionInfo } from './children'


export interface IProcessResponse {
  ChipPage?: RfidLocation
  ProcessingFinished: ProcessingStatus
  ContainerList: IContainerList
  TransactionInfo: ITransactionInfo
  log?: string
  passBackObject?: Record<string, object>
  morePagesAvailable?: number
  elapsedTime?: number
}

export class ProcessResponse implements IProcessResponse {
  @Expose()
  @IsOptional()
  @IsEnum(RfidLocation)
  ChipPage?: RfidLocation

  @Expose()
  @IsDefined()
  @IsEnum(ProcessingStatus)
  ProcessingFinished: ProcessingStatus

  @Expose()
  @ValidateNested()
  @Type(() => ContainerList)
  ContainerList: ContainerList

  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => TransactionInfo)
  TransactionInfo: TransactionInfo

  @Expose()
  @IsOptional()
  @IsString()
  log?: string

  @Expose()
  @IsOptional()
  @IsStringObjectRecord()
  passBackObject?: Record<string, object>

  @Expose()
  @IsOptional()
  @IsInt()
  @Min(0)
  morePagesAvailable?: number

  @Expose()
  @IsOptional()
  @IsInt()
  @Min(0)
  elapsedTime?: number

  static fromPlain = (input: unknown): ProcessResponse | never => plainToClass(ProcessResponse, input)

  static isValid = (instance: ProcessResponse): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('ProcessResponse validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
