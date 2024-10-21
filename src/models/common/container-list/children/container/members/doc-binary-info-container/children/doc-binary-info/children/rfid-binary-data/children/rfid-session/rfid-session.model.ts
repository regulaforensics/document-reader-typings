import { IsDefined, IsEnum, IsIn, IsInt, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

import { Default } from '@/decorators'
import { eRfidAuthenticationProcedureType, eRfidErrorCodes } from '@/consts'
import {
  iRfidAccessControlInfo,
  iRfidAccessKey,
  iRfidApplication,
  iRfidCardPropertiesExt,
  iRfidSecurityObject,
  iRfidTerminal,
  RfidAccessControlInfo,
  RfidAccessKey,
  RfidApplication,
  RfidCardPropertiesExt,
  RfidSecurityObject,
  RfidTerminal,
} from './children'

/**
* Structure is used to describe the results of work with the SDK within the context of the current communication
* session with electronic document
*/
export interface iRfidSession {
  /**
  * Sign of virtual session when working with loaded data from a previous communication session
  * with the electronic document
  * @type {any}
  * @internal
  */
  VirtualMode: any

  /**
  * Text SDKVersion value in format 'A.B' (e.g. "3.1")
  * @type {any}
  * @internal
  */
  SDKVersion: any

  /**
  * Text DriverVersion value in format ‘A.B.C.D’ (e.g. "6.2.5.4")
  * @type {any}
  * @internal
  */
  DriverVersion: any

  /**
  * Text FirmwareVersion value in format 'A.B' (e.g. "5.19")
  * @type {any}
  * @internal
  */
  FirmwareVersion: any

  /**
  * List of containers to store information about the involved applications of electronic document
  * @type {iRfidApplication[]}
  */
  Applications: iRfidApplication[]

  /**
  * List of containers to store information about the supported procedures of authentication and secure data access
  * within the context of the session
  * @type {iRfidAccessControlInfo[]}
  */
  AccessControls: iRfidAccessControlInfo[]

  /**
  * Structure is used to store extended information about the characteristics of the RFID-chip located in the scope
  * of the reader
  * @type {iRfidCardPropertiesExt}
  */
  CardProperties: iRfidCardPropertiesExt

  /**
  * Sign of support of RFID-chip for extended length commands of reading
  * @type {eRfidErrorCodes.ERROR_NOT_PERFORMED | eRfidErrorCodes.ERROR_NOT_AVAILABLE | eRfidErrorCodes.ERROR_NO_ERROR}
  */
  ExtLeSupport: eRfidErrorCodes.ERROR_NOT_PERFORMED | eRfidErrorCodes.ERROR_NOT_AVAILABLE | eRfidErrorCodes.ERROR_NO_ERROR

  /**
  * Time of processing, milliseconds
  * @type {number}
  */
  ProcessTime: number

  /**
  * List of containers to store information about the read files of the root Master File
  * @type {any[]}
  */
  RootFiles: any[]

  /**
  * Total number of bytes transmitted to the RFID-chip during the whole session
  * @type {number}
  */
  TotalBytesSent: number

  /**
  * Total number of bytes received from the RFID-chip during the whole session
  * @type {number}
  */
  TotalBytesReceived: number

  /**
  * Used secure data access key
  * @type {iRfidAccessKey}
  */
  Session_key: iRfidAccessKey

  /**
  * Terminal configuration
  * @type {iRfidTerminal}
  */
  Session_terminal: iRfidTerminal

  /**
  * Type of performed document authentication procedure
  * @type {eRfidAuthenticationProcedureType}
  */
  Session_procedure: eRfidAuthenticationProcedureType

  /**
  * List of containers to store information about the detected document security objects
  * @type {iRfidSecurityObject[]}
  */
  SecurityObjects: iRfidSecurityObject[]
}

/**
* Structure is used to describe the results of work with the SDK within the context of the current communication
* session with electronic document
*/
export class RfidSession implements iRfidSession {
  /**
  * Sign of virtual session when working with loaded data from a previous communication session
  * with the electronic document
  * @type {any}
  * @internal
  */
  VirtualMode: any

  /**
  * Text SDKVersion value in format 'A.B' (e.g. "3.1")
  * @type {any}
  * @internal
  */
  SDKVersion: any

  /**
  * Text DriverVersion value in format ‘A.B.C.D’ (e.g. "6.2.5.4")
  * @type {any}
  * @internal
  */
  DriverVersion: any

  /**
  * Text FirmwareVersion value in format 'A.B' (e.g. "5.19")
  * @type {any}
  * @internal
  */
  FirmwareVersion: any

  /**
  * List of containers to store information about the involved applications of electronic document
  * @type {RfidApplication[]}
  */
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => RfidApplication)
  @Default([])
  Applications: RfidApplication[]

  /**
  * List of containers to store information about the supported procedures of authentication and secure data access
  * within the context of the session
  * @type {RfidAccessControlInfo[]}
  */
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => RfidAccessControlInfo)
  @Default([])
  AccessControls: RfidAccessControlInfo[]

  /**
  * Structure is used to store extended information about the characteristics of the RFID-chip located in the scope
  * of the reader
  * @type {RfidCardPropertiesExt}
  */
  @IsDefined()
  @ValidateNested()
  @Type(() => RfidCardPropertiesExt)
  CardProperties: RfidCardPropertiesExt

  /**
  * Sign of support of RFID-chip for extended length commands of reading
  * @type {eRfidErrorCodes.ERROR_NOT_PERFORMED | eRfidErrorCodes.ERROR_NOT_AVAILABLE | eRfidErrorCodes.ERROR_NO_ERROR}
  */
  @IsDefined()
  @IsIn([
    eRfidErrorCodes.ERROR_NOT_PERFORMED,
    eRfidErrorCodes.ERROR_NOT_AVAILABLE,
    eRfidErrorCodes.ERROR_NO_ERROR
  ])
  @Default(eRfidErrorCodes.ERROR_NOT_PERFORMED)
  ExtLeSupport: eRfidErrorCodes.ERROR_NOT_PERFORMED | eRfidErrorCodes.ERROR_NOT_AVAILABLE | eRfidErrorCodes.ERROR_NO_ERROR

  /**
  * Time of processing, milliseconds
  * @type {number}
  */
  @IsDefined()
  @IsInt()
  ProcessTime: number

  /**
  * List of containers to store information about the read files of the root Master File
  * @type {any[]}
  */
  @Default([])
  RootFiles: any[]

  /**
  * Total number of bytes transmitted to the RFID-chip during the whole session
  * @type {number}
  */
  @IsDefined()
  @IsInt()
  TotalBytesSent: number

  /**
  * Total number of bytes received from the RFID-chip during the whole session
  * @type {number}
  */
  @IsDefined()
  @IsInt()
  TotalBytesReceived: number

  /**
  * Used secure data access key
  * @type {RfidAccessKey}
  */
  @IsDefined()
  @ValidateNested()
  @Type(() => RfidAccessKey)
  Session_key: RfidAccessKey

  /**
  * Terminal configuration
  * @type {RfidTerminal}
  */
  @IsDefined()
  @ValidateNested()
  @Type(() => RfidTerminal)
  Session_terminal: RfidTerminal

  /**
  * Type of performed document authentication procedure
  * @type {eRfidAuthenticationProcedureType}
  */
  @IsDefined()
  @IsEnum(eRfidAuthenticationProcedureType)
  @Default(eRfidAuthenticationProcedureType.UNDEFINED)
  Session_procedure: eRfidAuthenticationProcedureType

  /**
  * List of containers to store information about the detected document security objects
  * @type {RfidSecurityObject[]}
  */
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => RfidSecurityObject)
  SecurityObjects: RfidSecurityObject[]
}
