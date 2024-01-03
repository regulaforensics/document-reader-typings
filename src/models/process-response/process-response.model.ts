import { IsDefined, IsEnum, IsInt, IsOptional, IsString, Min, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { eProcessingStatus, eRfidPresence } from '@/consts'
import { IsStringObjectRecord } from '@/validators'
import { DocReaderTypeError } from '@/errors'
import { ContainerList, iContainerList } from '@/models/common'
import { iTransactionInfo, TransactionInfo } from './children'


export interface iProcessResponse {
  ChipPage?: eRfidPresence
  ProcessingFinished: eProcessingStatus
  ContainerList: iContainerList
  TransactionInfo: iTransactionInfo
  log?: string
  passBackObject?: Record<string, object>
  morePagesAvailable?: number
  elapsedTime?: number
}

export class ProcessResponse implements iProcessResponse {
  @Expose()
  @IsOptional()
  @IsEnum(eRfidPresence)
  ChipPage?: eRfidPresence

  @Expose()
  @IsDefined()
  @IsEnum(eProcessingStatus)
  ProcessingFinished: eProcessingStatus

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

  static fromPlain = (input: unknown): ProcessResponse | never => plainToClass(ProcessResponse, input, { strategy: 'excludeAll' })

  static isValid = (instance: ProcessResponse): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('ProcessResponse validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
