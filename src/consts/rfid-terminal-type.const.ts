/**
* Enumeration contains a set of constants that define the type
* of terminal within the context of the communication session with electronic document
* @enum {number}
*/
export enum eRfidTerminalType {
  /**
  * Not defined
  */
  UNDEFINED = 0,

  /**
  * Inspection system
  */
  INSPECTION_SYSTEM = 1,

  /**
  * Authentication terminal
  */
  AUTHENTICATION_TERMINAL = 2,

  /**
  * Signature terminal
  */
  SIGNATURE_TERMINAL = 3,

  /**
  * Unauthenticated terminal
  */
  UNAUTHENTICATED_TERMINAL = 4,
}
