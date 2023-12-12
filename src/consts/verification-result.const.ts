export enum VerificationResult {
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
  COMPARE_MATCH = 3,
  /**
  * Negative comparison result
  */
  COMPARE_NOT_MATCH = 4
}
