import { IsDefined, IsEnum, IsInt, IsOptional, IsString, Min, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { eProcessingStatus, eRfidPresence } from '@/consts'
import { IsStringObjectRecord } from '@/validators'
import { Default } from '@/decorators'
import { DocReaderTypeError } from '@/errors'
import { ContainerList, iContainerList } from '@/models/common'
import { iTransactionInfo, TransactionInfo } from './children'


export interface iProcessResponse {
  /**
  * Indicates which page of the document contains an RFID chip (0 if there’s no page containing it). Requires document
  * type recognition, otherwise 1 by default
  * @type {eRfidPresence}
  */
  ChipPage: eRfidPresence

  /**
  * Document processing finish status
  * @type {eProcessingStatus}
  */
  ProcessingFinished: eProcessingStatus

  /**
  * List of containers with results
  * @type {iContainerList}
  */
  ContainerList: iContainerList

  TransactionInfo: iTransactionInfo


  log?: string


  passBackObject?: Record<string, object>

  /**
  * Indicates how many pages of a document remains to process. Requires Document Type recognition, otherwise 0 by default
  * @type {number}
  */
  morePagesAvailable: number

  /**
  * Indicates how much time has been required for document processing, milliseconds
  * @type {number}
  */
  elapsedTime: number
}

export class ProcessResponse implements iProcessResponse {
  /**
  * Indicates which page of the document contains an RFID chip (0 if there’s no page containing it). Requires document
  * type recognition, otherwise 1 by default
  * @type {eRfidPresence}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eRfidPresence)
  @Default(eRfidPresence.NONE)
  ChipPage: eRfidPresence

  /**
  * Document processing finish status
  * @type {eProcessingStatus}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eProcessingStatus)
  @Default(eProcessingStatus.NOT_FINISHED)
  ProcessingFinished: eProcessingStatus

  /**
  * List of containers with results
  * @type {ContainerList}
  */
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

  /**
  * Indicates how many pages of a document remains to process. Requires Document Type recognition, otherwise 0 by default
  * @type {number}
  */
  @Expose()
  @IsOptional()
  @IsInt()
  @Min(0)
  @Default(0)
  morePagesAvailable: number

  /**
  * Indicates how much time has been required for document processing, milliseconds
  * @type {number}
  */
  @Expose()
  @IsOptional()
  @IsInt()
  @Min(0)
  @Default(0)
  elapsedTime: number

  static fromPlain = (input: unknown): ProcessResponse | never => plainToClass(ProcessResponse, input, { strategy: 'excludeAll' })

  static isValid = (instance: ProcessResponse): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('ProcessResponse validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
