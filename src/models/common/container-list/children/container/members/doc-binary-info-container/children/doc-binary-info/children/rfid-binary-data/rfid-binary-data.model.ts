import { IsDefined, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { iRfidDG1, iRfidSession, RfidDG1, RfidSession } from './children'


/**
* Structure is used for storing the results of one bar-code module reading.
*/
export interface iBinaryData {
  /**
  * Structure used to store the contents of EF.DG1 informational data group of
  * ePassport application – document MRZ data
  * @type {iRfidDG1}
  */
  RFID_DG1: iRfidDG1

  /**
  * Structure is used to describe the results of work with the SDK within the context of the current communication
  * session with electronic document
  * @type {iRfidSession}
  */
  RFID_Session_Data: iRfidSession
}

/**
* Structure is used for storing the results of one bar-code module reading.
*/
export class BinaryData implements iBinaryData {
  /**
  * Structure used to store the contents of EF.DG1 informational data group of
  * ePassport application – document MRZ data
  * @type {RfidDG1}
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => RfidDG1)
  RFID_DG1: RfidDG1

  /**
  * Structure is used to describe the results of work with the SDK within the context of the current communication
  * session with electronic document
  * @type {RfidSession}
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => RfidSession)
  RFID_Session_Data: RfidSession
}
