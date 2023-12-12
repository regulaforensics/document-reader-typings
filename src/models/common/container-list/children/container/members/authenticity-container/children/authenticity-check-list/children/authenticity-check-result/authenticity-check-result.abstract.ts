import { AuthenticityResultType, CheckResult } from '~src/distinct/consts'


export abstract class AuthenticityCheckResultAbstract {
  Type: AuthenticityResultType
  Result: CheckResult
}
