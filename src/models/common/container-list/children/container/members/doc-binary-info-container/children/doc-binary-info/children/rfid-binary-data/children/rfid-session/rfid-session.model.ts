import { IsDefined, IsIn, IsInt, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { Default } from '@/decorators'
import { eRfidErrorCodes } from '@/consts'
import {
  iRfidAccessControlInfo,
  iRfidApplication,
  iRfidCardPropertiesExt,
  RfidAccessControlInfo,
  RfidApplication,
  RfidCardPropertiesExt,
} from './children'

/**
* Structure is used to describe the results of work with the SDK within the context of the current communication
* session with electronic document
*/
export interface iRfidSession {
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
}

/**
* Structure is used to describe the results of work with the SDK within the context of the current communication
* session with electronic document
*/
export class RfidSession implements iRfidSession {
  /**
  * List of containers to store information about the involved applications of electronic document
  * @type {RfidApplication[]}
  */
  @Expose()
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
  @Expose()
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
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => RfidCardPropertiesExt)
  CardProperties: RfidCardPropertiesExt

  /**
  * Sign of support of RFID-chip for extended length commands of reading
  * @type {eRfidErrorCodes.ERROR_NOT_PERFORMED | eRfidErrorCodes.ERROR_NOT_AVAILABLE | eRfidErrorCodes.ERROR_NO_ERROR}
  */
  @Expose()
  @IsDefined()
  @IsIn([
    eRfidErrorCodes.ERROR_NOT_PERFORMED,
    eRfidErrorCodes.ERROR_NOT_AVAILABLE,
    eRfidErrorCodes.ERROR_NO_ERROR
  ])
  @Default(eRfidErrorCodes.ERROR_NO_ERROR)
  ExtLeSupport: eRfidErrorCodes.ERROR_NOT_PERFORMED | eRfidErrorCodes.ERROR_NOT_AVAILABLE | eRfidErrorCodes.ERROR_NO_ERROR

  /**
  * Time of processing, milliseconds
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  ProcessTime: number

  /**
  * List of containers to store information about the read files of the root Master File
  * @type {any[]}
  */
  @Expose()
  @Default([])
  RootFiles: any[]

}
