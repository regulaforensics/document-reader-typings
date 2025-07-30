import { IsArray, IsDefined, IsInt, IsNumber, IsString } from 'class-validator'
import { RfidSecurityObject as cRfidSecurityObject } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { RfidSignerInfoEx } from './children'

/**
 * Structure is used to describe the contents of a single document security object (SO) and the results of its check
 * within the context of the communication session with electronic document
 */
export class RfidSecurityObject implements cRfidSecurityObject {
  /**
   * Security object version
   * @type {number}
   */
  @IsDefined()
  @IsNumber()
  Version: number

  /**
   * Identifier of the security object
   * @type {string}
   */
  @IsDefined()
  @IsString()
  ObjectType: string

  /**
   * Reference to the source file of the security object data
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  FileReference: number

  /**
   * List of remarks arisen during the analysis of SO data structure.
   * @type {number[]}
   */
  @IsDefined()
  @IsArray()
  @IsInt({ each: true })
  Notifications: number[]

  /**
   * List of containers to store information about digital signature objects contained in the SO
   * @type {RfidSignerInfoEx[]}
   */
  @IsDefined()
  @Type(() => RfidSignerInfoEx)
  @IsArray()
  SignerInfos: RfidSignerInfoEx[]
}
