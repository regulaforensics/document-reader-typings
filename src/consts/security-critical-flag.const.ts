/**
* Enumeration contains identifiers determining the criticality of the security element
* @enum {number}
*/
export enum eSecurityCriticalFlag {
  /**
  * Security element may be absent in a valid document
  */
  NOT_CRITICAL = 0,

  /**
  * Security element must be present in a valid document
  */
  CRITICAL = 1
}
