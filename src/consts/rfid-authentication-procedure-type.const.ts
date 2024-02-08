/**
* Enumeration contains a set of constants that define the type of performed procedure of document authentication
* within the current session
* @enum {number}
*/
export enum eRfidAuthenticationProcedureType {
  /**
  * Not defined
  */
  UNDEFINED = 0,

  /**
  * Standard authentication procedure
  */
  STANDARD = 1,

  /**
  * Advanced authentication procedure
  */
  ADVANCED = 2,

  /**
  * General authentication procedure
  */
  GENERAL = 3,
}
