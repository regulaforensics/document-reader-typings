import { eAuthenticity, eCheckResult } from '@/consts'


/**
* Abstract class for AuthenticityCheckResult
*/
export abstract class aAuthenticityCheckResult {
  /**
  * Type of the performed check (eAuthenticity)
  * @type {eAuthenticity}
  */
  Type: eAuthenticity

  /**
  * Overall checking result
  * @type {eCheckResult}
  */
  Result: eCheckResult

  /**
  * Number of List items
  * @type {number}
  */
  Count: number
}
