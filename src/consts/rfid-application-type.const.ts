/**
* Enumeration contains a set of constants that define the type
* of application within the context of the communication session with electronic document
* @enum {number}
*/
export enum eRfidApplicationType {
  /**
  * Not defined
  */
  UNSPECIFIED = 0,

  /**
  * ePassport application
  */
  E_PASSPORT = 1,

  /**
  * eID application
  */
  E_ID = 2,

  /**
  * eSign application
  */
  E_SIGN = 3,

  /**
  * eDL application
  */
  E_DL = 4,

  /**
   * LDS2_TRAVEL_RECORDS application
   */
  LDS2_TRAVEL_RECORDS = 5,

  /**
   * LDS2_VISA_RECORDS application
   */
  LDS2_VISA_RECORDS = 6,

  /**
   * LDS2_ADD_BIOMETRICS application
   */
  LDS2_ADD_BIOMETRICS = 7,

  /**
   * eDTC_PC application
   */
  eDTC_PC = 8,

  /**
  * Master File
  */
  ROOT_FILES = UNSPECIFIED,
}
