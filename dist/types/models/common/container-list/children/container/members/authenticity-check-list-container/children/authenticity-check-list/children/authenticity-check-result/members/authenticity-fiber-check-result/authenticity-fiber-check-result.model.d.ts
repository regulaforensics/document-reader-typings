import { eAuthenticity, eCheckResult } from '../../../../../../../../../../../../../consts';
import { aAuthenticityCheckResult } from '../../authenticity-check-result.abstract';
import { FiberResult, iFiberResult } from './children';
export interface iAuthenticityFiberCheckResult extends aAuthenticityCheckResult {
    Type: eAuthenticity.UV_FIBERS | eAuthenticity.UV_BACKGROUND;
    Result: eCheckResult;
    List: iFiberResult[];
}
export declare class AuthenticityFiberCheckResult extends aAuthenticityCheckResult implements iAuthenticityFiberCheckResult {
    Type: eAuthenticity.UV_FIBERS | eAuthenticity.UV_BACKGROUND;
    Result: eCheckResult;
    List: FiberResult[];
    static fromPlain: (plain: unknown) => AuthenticityFiberCheckResult;
}
