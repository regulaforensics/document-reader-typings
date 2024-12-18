import { IsArray, IsDefined, IsEnum, IsInt, IsNumber, IsString } from 'class-validator'
import { Type } from 'class-transformer'

import { eLDSParsingErrorCodes } from '@/consts'
import { Default } from '@/decorators'
import { iRfidSignerInfoEx, RfidSignerInfoEx } from './children'

/**
* Structure is used to describe the contents of a single document security object (SO) and the results of its check
* within the context of the communication session with electronic document
*/
export interface iRfidSecurityObject {
  /**
  * Security object version
  * @type {number}
  */
  Version: number

  /**
  * Identifier of the security object
  * @type {string}
  */
  ObjectType: string

  /**
  * Reference to the source file of the security object data
  * @type {number}
  */
  FileReference: number

  /**
  * List of remarks arisen during the analysis of SO data structure.
  * @type {eLDSParsingErrorCodes[]}
  */
  Notifications: eLDSParsingErrorCodes[]

  /**
  * List of containers to store information about digital signature objects contained in the SO
  * @type {iRfidSignerInfoEx[]}
  */
  SignerInfos: iRfidSignerInfoEx[]
}

/**
* Structure is used to describe the contents of a single document security object (SO) and the results of its check
* within the context of the communication session with electronic document
*/
export class RfidSecurityObject implements iRfidSecurityObject {
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
  * @type {eLDSParsingErrorCodes[]}
  */
  @IsDefined()
  @IsEnum(eLDSParsingErrorCodes, { each: true })
  @Default([])
  @IsArray()
  Notifications: eLDSParsingErrorCodes[]

  /**
  * List of containers to store information about digital signature objects contained in the SO
  * @type {RfidSignerInfoEx[]}
  */
  @IsDefined()
  @Type(() => RfidSignerInfoEx)
  @IsArray()
  @Default([])
  SignerInfos: RfidSignerInfoEx[]
}
