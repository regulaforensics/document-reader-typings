import { IsArray, IsDefined, IsEnum, IsInt, IsOptional } from 'class-validator'
import { RfidAccessControlInfo as cRfidAccessControlInfo } from '@regulaforensics/document-reader-webclient'

import { eRfidAccessControlProcedureType, eRfidErrorCodes } from '@/consts'

/**
 * Structure is used to describe the results of a single authentication procedure or a procedure of secure data access
 * within the context of the communication session with electronic document
 */
export class RfidAccessControlInfo implements cRfidAccessControlInfo {
  /**
   * Procedure type
   * @type {eRfidAccessControlProcedureType}
   */
  @IsDefined()
  @IsEnum(eRfidAccessControlProcedureType)
  Type: eRfidAccessControlProcedureType

  /**
   * Procedure status
   * @type {eRfidErrorCodes}
   */
  @IsDefined()
  @IsEnum(eRfidErrorCodes)
  Status: eRfidErrorCodes

  /**
   * Index of the active variant of the procedure
   * @type {number}
   */
  @IsOptional()
  @IsInt()
  ActiveOptionIdx?: number

  /**
   * List of remarks arisen during the procedure.
   * @type {number[]}
   */
  @IsDefined()
  @IsArray()
  @IsInt({ each: true })
  Notifications: number[]

  /**
   * List of structures with are used to describe the variants of the authentication or secure data access procedure
   * performance within the context of the communication session with electronic document
   * @type {any[]}
   */
  @IsOptional()
  @IsArray()
  AccessControlOptions?: any[]
}

export type { RfidAccessControlInfo as iRfidAccessControlInfo }
