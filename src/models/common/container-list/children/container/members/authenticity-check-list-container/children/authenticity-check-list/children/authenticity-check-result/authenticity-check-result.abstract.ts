import { eAuthenticity, eCheckResult } from '@/consts'


export abstract class aAuthenticityCheckResult {
  Type: eAuthenticity
  Result: eCheckResult
}
