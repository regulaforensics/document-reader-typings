import { IsDefined, IsEnum, IsInt, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'

import { eLDSParsingErrorCodes, eRfidAccessControlProcedureType, eRfidErrorCodes } from '@/consts'
import { Default } from '@/decorators'

/**
* Structure is used to describe the results of a single authentication procedure or a procedure of secure data access
* within the context of the communication session with electronic document
*/
export interface iRfidAccessControlInfo {
  /**
  * Procedure type
  * @type {eRfidAccessControlProcedureType}
  */
  Type: eRfidAccessControlProcedureType

  /**
  * Procedure status
  * @type {eRfidErrorCodes}
  */
  Status: eRfidErrorCodes

  /**
  * Index of the active variant of the procedure
  * @type {number}
  */
  ActiveOptionIdx?: number

  /**
  * List of remarks arisen during the procedure.
  * @type {eLDSParsingErrorCodes[]}
  */
  Notifications: eLDSParsingErrorCodes[]

  /**
  * List of structures with are used to describe the variants of the authentication or secure data access procedure
  * performance within the context of the communication session with electronic document
  * @type {any[]}
  */
  AccessControlOptions?: any[]
}

/**
* Structure is used to describe the results of a single authentication procedure or a procedure of secure data access
* within the context of the communication session with electronic document
*/
export class RfidAccessControlInfo implements iRfidAccessControlInfo {
  /**
  * Procedure type
  * @type {eRfidAccessControlProcedureType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eRfidAccessControlProcedureType)
  @Default(eRfidAccessControlProcedureType.UNDEFINED)
  Type: eRfidAccessControlProcedureType

  /**
  * Procedure status
  * @type {eRfidErrorCodes}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eRfidErrorCodes)
  @Default(eRfidErrorCodes.ERROR_NO_ERROR)
  Status: eRfidErrorCodes

  /**
  * Index of the active variant of the procedure
  * @type {number}
  */
  @Expose()
  @IsOptional()
  @IsInt()
  ActiveOptionIdx?: number

  /**
  * List of remarks arisen during the procedure.
  * @type {eLDSParsingErrorCodes[]}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eLDSParsingErrorCodes, { each: true })
  @Default([])
  Notifications: eLDSParsingErrorCodes[]

  /**
  * List of structures with are used to describe the variants of the authentication or secure data access procedure
  * performance within the context of the communication session with electronic document
  * @type {any[]}
  */
  @Expose()
  AccessControlOptions?: any[]
}
