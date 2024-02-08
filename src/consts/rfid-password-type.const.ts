/**
* Enumeration contains a set of constants that define the type of
* key to access the protected data
* @enum {number}
*/
export enum eRfidPasswordType {
  /**
  * Unknown type
  */
  UNKNOWN = 0,

  /**
  * MRZ
  */
  MRZ = 1,

  /**
  * CAN
  */
  CAN = 2,

  /**
  * PIN
  */
  PIN = 3,

  /**
  * PUK
  */
  PUK = 4,

  /**
  * eSign-PIN
  */
  PIN_E_SIGN = 5,

  /**
  * Scanning Area Identifier (for eDL application)
  */
  SAI = 6,
}
