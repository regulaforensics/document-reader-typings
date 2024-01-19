/**
* 0 - result is negative; 1 - result is positive; 2 - сheck was not performed
* @enum {number}
*/
export enum eCheckResult {
  /**
  * Check was performed and result is NEGATIVE
  */
  ERROR = 0,

  /**
  * Check was performed and result is POSITIVE
  */
  OK = 1,

  /**
  * Check was NOT PERFORMED
  */
  WAS_NOT_DONE = 2
}



