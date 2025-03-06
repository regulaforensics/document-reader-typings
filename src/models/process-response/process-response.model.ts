import {
  IsBase64,
  IsDefined,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
  validateSync, ValidationError
} from 'class-validator'
import { plainToClass, Type } from 'class-transformer'

import { eProcessingStatus, eRfidPresence } from '@/consts'
import { IsStringObjectRecord } from '@/validators'
import { Default } from '@/decorators'
import { DocReaderTypeError } from '@/errors'
import { ContainerList, iContainerList } from '@/models/common'
import { iTransactionInfo, TransactionInfo } from './children'
import { decode } from '@/helpers'
import { merge, values } from 'lodash'


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

  /**
  * Transaction info
  * @type {iTransactionInfo}
  */
  TransactionInfo: iTransactionInfo

  /**
  * Base64 encoded transaction processing log
  * @type {string|undefined}
  */
  log?: string

  /**
  * Free-form object provided in request. See passBackObject property of ProcessRequest.
  * @type {Record<string, object>|undefined}
  */
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
  @IsDefined()
  @IsEnum(eRfidPresence)
  @Default(eRfidPresence.NONE)
  ChipPage: eRfidPresence

  /**
  * Document processing finish status
  * @type {eProcessingStatus}
  */
  @IsDefined()
  @IsEnum(eProcessingStatus)
  @Default(eProcessingStatus.NOT_FINISHED)
  ProcessingFinished: eProcessingStatus

  /**
  * List of containers with results
  * @type {ContainerList}
  */
  @ValidateNested()
  @Type(() => ContainerList)
  ContainerList: ContainerList

  /**
  * Transaction info
  * @type {TransactionInfo}
  */
  @IsDefined()
  @ValidateNested()
  @Type(() => TransactionInfo)
  TransactionInfo: TransactionInfo

  /**
  * Base64 encoded transaction processing log
  * @type {string|undefined}
  */
  @IsOptional()
  @IsString()
  @IsBase64()
  log?: string

  /**
  * Free-form object provided in request. See passBackObject property of ProcessRequest.
  * @type {Record<string, object>|undefined}
  */
  @IsOptional()
  @IsStringObjectRecord()
  passBackObject?: Record<string, object>

  /**
  * Indicates how many pages of a document remains to process. Requires Document Type recognition, otherwise 0 by default
  * @type {number}
  */
  @IsOptional()
  @IsInt()
  @Min(0)
  @Default(0)
  morePagesAvailable: number

  /**
  * Indicates how much time has been required for document processing, milliseconds
  * @type {number}
  */
  @IsOptional()
  @IsInt()
  @Min(0)
  @Default(0)
  elapsedTime: number

  /**
  * Creates an instance of ProcessResponse from plain object
  * @param {unknown} input - plain object
  * @returns {ProcessResponse}
  */
  static fromPlain = (input: unknown): ProcessResponse => {
    const instance = plainToClass(ProcessResponse, input, { exposeUnsetFields: false })

    ProcessResponse.inform(instance)

    return instance
  }

  /**
  * Check if the given instance of ProcessResponse is valid
  * @param {ProcessResponse} instance - instance of ProcessResponse to be checked
  * @throws {DocReaderTypeError} - if the given instance is not valid
  * @returns {true | never}
  */
  static validate = (instance: ProcessResponse): true | never => {
    const errors = validateSync(ProcessResponse.fromPlain(instance))

    if (errors.length) {
      throw new DocReaderTypeError('ProcessResponse validation error: the data received does not match model structure!', errors)
    }

    return true
  }

  /**
  * Check if the given instance is valid ProcessResponse
  * @param {ProcessResponse} instance - instance to check
  * @returns {boolean} - true if ProcessResponse is valid
  */
  static isValid = (instance: ProcessResponse): boolean => {
    try {
      ProcessResponse.validate(instance)
      return true
    } catch {
      return false
    }
  }

  /**
  * Decode log from base64
  * @param {string|ProcessResponse} input - base64 encoded log or ProcessResponse
  * @returns {string} - decoded log
  */
  static decodeLog = (input?: string | ProcessResponse): string => {
    if (typeof input === 'string') {
      return decode(input)
    }

    if (!input || !input.log) {
      return ''
    }

    return decode(input.log)
  }

  private static inform = (response: ProcessResponse): void => {
    if (!response || !(response instanceof ProcessResponse)) {
      return
    }

    const errors = validateSync(response)
    const simplifiedErrors = ProcessResponse.simplifyErrors('', errors)

    for (const [path, messages] of Object.entries(simplifiedErrors)) {
      console.info(`Error in ${path}: ${messages.join(', ')}`)
    }
  }

  private static simplifyErrors = (
    property: string,
    errors: ValidationError[]
  ): { [path: string]: string[] } => {
    let result: any = {}

    for (let i: number = 0; i < errors.length; i++) {
      const subProperty: string = errors[i].property
      const fieldPath: string = property ? `${property}.${subProperty}` : subProperty

      if (errors[i].children && errors[i].children?.length) {
        result = merge(result, ProcessResponse.simplifyErrors(fieldPath, errors[i].children!))
      }

      if (errors[i].constraints) {
        result[fieldPath] = values(merge(errors[i].constraints, result[fieldPath]))
      }
    }

    return result
  }
}
