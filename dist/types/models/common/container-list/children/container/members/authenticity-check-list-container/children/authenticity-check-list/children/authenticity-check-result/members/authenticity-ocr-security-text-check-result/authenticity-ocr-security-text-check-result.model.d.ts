import { eAuthenticity, eCheckResult } from '../../../../../../../../../../../../../consts';
import { aAuthenticityCheckResult } from '../../authenticity-check-result.abstract';
import { iOCRSecurityTextResult, OCRSecurityTextResult } from './children';
export interface iAuthenticityOCRSecurityTextCheckResult extends aAuthenticityCheckResult {
    Type: eAuthenticity.OCR_SECURITY_TEXT;
    Result: eCheckResult;
    List: iOCRSecurityTextResult[];
}
export declare class AuthenticityOCRSecurityTextCheckResult extends aAuthenticityCheckResult implements iAuthenticityOCRSecurityTextCheckResult {
    Type: eAuthenticity.OCR_SECURITY_TEXT;
    Result: eCheckResult;
    List: OCRSecurityTextResult[];
    static fromPlain: (plain: unknown) => AuthenticityOCRSecurityTextCheckResult;
}
