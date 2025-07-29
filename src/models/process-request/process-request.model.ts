import { IsArray, IsDefined, IsInt, IsOptional, IsString, ValidateNested, validateSync } from 'class-validator'
import { ProcessRequest as iProcessRequest } from '@regulaforensics/document-reader-webclient'
import { Expose, instanceToPlain, plainToClass, Type } from 'class-transformer'

import { IsStringObjectRecord } from '@/validators'
import { DocReaderTypeError } from '@/errors'
import { ContainerList } from '@/models/common'
import { ProcessParams, ProcessRequestImage, ProcessSystemInfo } from './children'

@Expose()
export class ProcessRequest implements iProcessRequest {
  /**
   * Process params
   * @type {ProcessParams}
   */
  @ValidateNested()
  @IsDefined()
  @Type(() => ProcessParams)
  processParam: ProcessParams

  /**
   * List of images
   * @type {ProcessRequestImage[]|undefined}
   */
  @ValidateNested({ each: true })
  @IsOptional()
  @Type(() => ProcessRequestImage)
  List?: ProcessRequestImage[]

  /**
   * Session id
   * @type {string|undefined}
   */
  @IsString()
  @IsOptional()
  tag?: string

  /**
   * Customer name
   * @type {string|undefined}
   */
  @IsString()
  @IsOptional()
  tenant?: string

  /**
   * Environment type
   * @type {string|undefined}
   */
  @IsString()
  @IsOptional()
  env?: string

  /**
   * Live portrait photo
   * @type {string|undefined}
   */
  @IsOptional()
  @IsString()
  livePortrait?: string

  /**
   * Portrait photo from an external source
   * @type {string|undefined}
   */
  @IsOptional()
  @IsString()
  extPortrait?: string

  /**
   * List of containers
   * @type {ContainerList|undefined}
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ContainerList)
  ContainerList?: ContainerList

  /**
   * System info
   * @type {ProcessSystemInfo|undefined}
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ProcessSystemInfo)
  systemInfo?: ProcessSystemInfo

  /**
   * Free-form object to be included in response. Must be object, not list or simple value.
   * Do not affect document processing. Use it freely to pass your app params. Stored in process logs.
   * @type {Record<string, object>|undefined}
   */
  @IsOptional()
  @IsStringObjectRecord()
  passBackObject?: Record<string, object>

  /**
   * Portrait photo from an external source
   * @type {string|undefined}
   */
  @IsOptional()
  @IsString()
  dtc?: string

  /**
   * URLs to the document images for processing.
   * @type {string[]|undefined}
   */
  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  ImageUrls?: string[]

  /**
   * Creates an instance of ProcessRequest from plain object
   * @param {unknown} input - plain object
   * @returns {ProcessRequest}
   */
  static fromPlain = (input: unknown): ProcessRequest => plainToClass(ProcessRequest, input)

  /**
   * Create plain object from ProcessRequest
   * @param {iProcessRequest} input - instance of ProcessRequest
   * @returns {ProcessRequest}
   */
  static toPlain = (input: ProcessRequest): iProcessRequest =>
    instanceToPlain(input, { excludeExtraneousValues: true }) as iProcessRequest

  /**
   * Check if the given instance of ProcessRequest is valid
   * @param {ProcessRequest} instance - instance of ProcessRequest to be checked
   * @throws {DocReaderTypeError} - if the given instance is not valid
   * @returns {true | never}
   */
  static validate = (instance: ProcessRequest): true | never => {
    const errors = validateSync(ProcessRequest.toPlain(instance))

    if (errors.length) {
      throw new DocReaderTypeError(
        'ProcessRequest validation error: the data received does not match model structure!',
        errors,
      )
    }

    return true
  }
}

export type { iProcessRequest }
