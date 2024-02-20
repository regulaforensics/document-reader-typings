/**
* Enumeration contains a set of constants that
* define the type of authentication or secure data access procedure
* @enum {number}
*/
export enum eRfidAccessControlProcedureType {
  /**
  * Type is not defined
  */
  UNDEFINED = 0,

  /**
  * BAC/BAP
  */
  BAC = 1,

  /**
  * PACE
  */
  PACE = 2,

  /**
  * CA
  */
  CA = 3,

  /**
  * TA
  */
  TA = 4,

  /**
  * AA
  */
  AA = 5,

  /**
  * RI
  */
  RI = 6,

  /**
  * Card info
  */
  CARD_INFO = 10
}
