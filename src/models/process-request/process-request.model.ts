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


export interface iProcessRequest {
  tag?: string
  processParam: iProcessParams
  List?: iProcessRequestImage[]
  livePortrait?: string
  extPortrait?: string
  ContainerList?: iContainerList
  systemInfo?: iProcessSystemInfo
  passBackObject?: Record<string, object>
}

export class ProcessRequest implements iProcessRequest {
  @Expose()
  @IsString()
  @IsOptional()
  tag?: string

  @Expose()
  @ValidateNested()
  @IsDefined()
  @Type(() => ProcessParams)
  processParam: ProcessParams

  @Expose()
  @ValidateNested({ each: true })
  @IsOptional()
  @Type(() => ProcessRequestImage)
  List?: ProcessRequestImage[]

  @Expose()
  @IsOptional()
  @IsString()
  livePortrait?: string

  @Expose()
  @IsOptional()
  @IsString()
  extPortrait?: string

  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => ContainerList)
  ContainerList: ContainerList

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => ProcessSystemInfo)
  systemInfo?: ProcessSystemInfo

  @Expose()
  @IsOptional()
  @IsStringObjectRecord()
  passBackObject?: Record<string, object>

  static fromPlain = (input: unknown): ProcessRequest => plainToClass(ProcessRequest, input)

  static isValid = (instance: ProcessRequest): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('ProcessRequest validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
