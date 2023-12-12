import { AuthenticityResultType, CheckResult } from '~src/consts'


export abstract class AuthenticityCheckResultAbstract {
  Type: AuthenticityResultType
  Result: CheckResult
}
