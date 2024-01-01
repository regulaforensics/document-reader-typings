/**
* Enumeration contains identifiers determining verification and comparison of text fields.
* @enum {number}
*/
export enum FieldVerificationResult {
  /**
  * Comparison result unknown
  */
  DISABLED = 0,

  /**
  * Verification passed
  */
  VERIFIED = 1,

  /**
  * Verification failed
  */
  NOT_VERIFIED = 2,

  /**
  * Positive comparison result
  */
  COMPARE_TRUE = 3,

  /**
  * Negative comparison result
  */
  COMPARE_FALSE = 4
}
