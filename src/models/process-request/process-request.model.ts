import { IsDefined, IsOptional, IsString, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { IsStringObjectRecord } from '@/validators'
import { DocReaderTypeError } from '@/errors'
import { ContainerList, iContainerList } from '@/models/common'
import {
  iProcessParams,
  iProcessRequestImage,
  iProcessSystemInfo,
  ProcessParams,
  ProcessRequestImage,
  ProcessSystemInfo
} from './children'


/**
* Process request
*/
export interface iProcessRequest {
  /**
  * Session id
  * @type {string|undefined}
  */
  tag?: string

  /**
  * Process params
  * @type {iProcessParams}
  */
  processParam: iProcessParams

  /**
  * List of images
  * @type {iProcessRequestImage[]|undefined}
  */
  List?: iProcessRequestImage[]

  /**
  * Live portrait photo
  * @type {string|undefined}
  */
  livePortrait?: string

  /**
  * Portrait photo from an external source
  * @type {string|undefined}
  */
  extPortrait?: string

  /**
  * List of containers
  * @type {iContainerList|undefined}
  */
  ContainerList?: iContainerList

  /**
  * System info
  * @type {iProcessSystemInfo|undefined}
  */
  systemInfo?: iProcessSystemInfo

  /**
  * Free-form object to be included in response. Must be object, not list or simple value.
  * Do not affect document processing. Use it freely to pass your app params. Stored in process logs.
  * @type {Record<string, object>|undefined}
  */
  passBackObject?: Record<string, object>
}

export class ProcessRequest implements iProcessRequest {
  /**
  * Session id
  * @type {string|undefined}
  */
  @Expose()
  @IsString()
  @IsOptional()
  tag?: string

  /**
  * Process params
  * @type {ProcessParams}
  */
  @Expose()
  @ValidateNested()
  @IsDefined()
  @Type(() => ProcessParams)
  processParam: ProcessParams

  /**
  * List of images
  * @type {ProcessRequestImage[]|undefined}
  */
  @Expose()
  @ValidateNested({ each: true })
  @IsOptional()
  @Type(() => ProcessRequestImage)
  List?: ProcessRequestImage[]

  /**
  * Live portrait photo
  * @type {string|undefined}
  */
  @Expose()
  @IsOptional()
  @IsString()
  livePortrait?: string

  /**
  * Portrait photo from an external source
  * @type {string|undefined}
  */
  @Expose()
  @IsOptional()
  @IsString()
  extPortrait?: string

  /**
  * List of containers
  * @type {ContainerList|undefined}
  */
  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => ContainerList)
  ContainerList?: ContainerList

  /**
  * System info
  * @type {ProcessSystemInfo|undefined}
  */
  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => ProcessSystemInfo)
  systemInfo?: ProcessSystemInfo

  /**
  * Free-form object to be included in response. Must be object, not list or simple value.
  * Do not affect document processing. Use it freely to pass your app params. Stored in process logs.
  * @type {Record<string, object>|undefined}
  */
  @Expose()
  @IsOptional()
  @IsStringObjectRecord()
  passBackObject?: Record<string, object>

  /**
  * Creates an instance of ProcessRequest from plain object
  * @param {unknown} input - plain object
  * @returns {ProcessRequest}
  */
  static fromPlain = (input: unknown): ProcessRequest => plainToClass(ProcessRequest, input)

  /**
  * Check if the given instance of ProcessRequest is valid
  * @param {ProcessRequest} instance - instance of ProcessRequest to be checked
  * @throws {DocReaderTypeError} - if the given instance is not valid
  * @returns {true | never}
  */
  static validate = (instance: ProcessRequest): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('ProcessRequest validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
