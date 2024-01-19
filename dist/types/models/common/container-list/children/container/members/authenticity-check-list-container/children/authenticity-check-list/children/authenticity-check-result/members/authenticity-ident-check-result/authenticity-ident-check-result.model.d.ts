import { eAuthenticity, eCheckResult } from '../../../../../../../../../../../../../consts';
import { aAuthenticityCheckResult } from '../../authenticity-check-result.abstract';
import { IdentResult, iIdentResult } from './children';
export interface iAuthenticityIdentCheckResult extends aAuthenticityCheckResult {
    Type: eAuthenticity.IMAGE_PATTERN | eAuthenticity.IR_VISIBILITY | eAuthenticity.OVI | eAuthenticity.IR_LUMINESCENCE | eAuthenticity.PORTRAIT_COMPARISON | eAuthenticity.KINEGRAM | eAuthenticity.LETTER_SCREEN | eAuthenticity.HOLOGRAM_DETECTION | eAuthenticity.FINGERPRINT_COMPARISON | eAuthenticity.LIVENESS;
    Result: eCheckResult;
    List: iIdentResult[];
}
export declare class AuthenticityIdentCheckResult extends aAuthenticityCheckResult implements iAuthenticityIdentCheckResult {
    Type: eAuthenticity.IMAGE_PATTERN | eAuthenticity.IR_VISIBILITY | eAuthenticity.OVI | eAuthenticity.IR_LUMINESCENCE | eAuthenticity.PORTRAIT_COMPARISON | eAuthenticity.KINEGRAM | eAuthenticity.LETTER_SCREEN | eAuthenticity.HOLOGRAM_DETECTION | eAuthenticity.FINGERPRINT_COMPARISON | eAuthenticity.LIVENESS;
    Result: eCheckResult;
    List: IdentResult[];
    static fromPlain: (plain: unknown) => AuthenticityIdentCheckResult;
}
