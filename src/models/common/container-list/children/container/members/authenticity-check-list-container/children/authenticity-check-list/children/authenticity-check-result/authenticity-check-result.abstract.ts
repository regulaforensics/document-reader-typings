import { AuthenticityResultType, CheckResult } from 'consts'


export abstract class AuthenticityCheckResultAbstract {
  Type: AuthenticityResultType
  Result: CheckResult
}
