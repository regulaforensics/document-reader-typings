import { eAuthenticity, eCheckResult } from '@/consts'


export abstract class aAuthenticityCheck {
  /**
  * Check type
  * @type {eAuthenticity}
  */
  checkType: eAuthenticity

  /**
  * Overall checking result
  * @type {eCheckResult}
  */
  checkResult: eCheckResult
}
