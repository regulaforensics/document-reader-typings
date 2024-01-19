import { eAuthenticity, eCheckResult } from '../../../../../../../../../../../../../consts';
import { aAuthenticityCheckResult } from '../../authenticity-check-result.abstract';
import { iPhotoIdentResult, PhotoIdentResult } from './children';
export interface iAuthenticityPhotoIdentCheckResult extends aAuthenticityCheckResult {
    Type: eAuthenticity.IPI | eAuthenticity.IR_PHOTO;
    Result: eCheckResult;
    List: iPhotoIdentResult[];
}
export declare class AuthenticityPhotoIdentCheckResult extends aAuthenticityCheckResult implements iAuthenticityPhotoIdentCheckResult {
    Type: eAuthenticity.IPI | eAuthenticity.IR_PHOTO;
    Result: eCheckResult;
    List: PhotoIdentResult[];
    static fromPlain: (plain: unknown) => AuthenticityPhotoIdentCheckResult;
}
