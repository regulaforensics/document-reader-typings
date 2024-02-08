/**
* Enumeration contains a set of constants that define the source of certificate used in the procedure
* of document security object digital signature verification
* @enum {number}
*/
export enum eRfidCertificateOrigin {
  /**
  * The source is not defined
  */
  UNDEFINED = 0,

  /**
  * Local PKD
  */
  PKD = 1,

  /**
  * Document security object
  */
  SECURITY_OBJECT = 2,

  /**
  * User-defined
  */
  USER_DEFINED = 3,

  /**
  * Contents of the Master List
  */
  MASTER_LIST_PKD = 4,

  /**
  * Security object of the Master List
  */
  MASTER_LIST_SO = 5,

  /**
  * Security object of the Defect List
  */
  DEFECT_LIST_SO = 6,

  /**
  * Security object of the Deviation List
  */
  DEVIATION_LIST_SO = 7,

  /**
  * Security object of the Black List
  */
  BLACK_LIST_SO = 8,
}
