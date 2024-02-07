/**
* Enumeration contains a set of constants that define the type
* of certificate used in the procedure of document security object digital signature verification
* @enum {number}
*/
export enum eRfidCertificateType {
  /**
  * Type is not defined
  */
  UNDEFINED = 0,

  /**
  * CSCA
  */
  CSCA = 1,

  /**
  * CSCA-link
  */
  CSCA_LINK = 2,

  /**
  * DS
  */
  DS = 3,

  /**
  * Master List signer
  */
  MLS = 4,

  /**
  * Deviaton List signer
  */
  DEV_LS = 5,

  /**
  * Defect List signer
  */
  DEF_LS = 6,

  /**
  * Black List signer
  */
  BLS = 7,
}
