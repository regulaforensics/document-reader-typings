import { Authenticity, CheckResult } from '@/consts'


export abstract class AuthenticityCheckResultAbstract {
  Type: Authenticity
  Result: CheckResult
}
