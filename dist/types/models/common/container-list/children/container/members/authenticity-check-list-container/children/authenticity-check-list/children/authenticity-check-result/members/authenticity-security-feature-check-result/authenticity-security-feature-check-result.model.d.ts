import { eAuthenticity, eCheckResult } from '../../../../../../../../../../../../../consts';
import { aAuthenticityCheckResult } from '../../authenticity-check-result.abstract';
import { iSecurityFeatureResult, SecurityFeatureResult } from './children';
export interface iAuthenticitySecurityFeatureCheckResult extends aAuthenticityCheckResult {
    Type: eAuthenticity.UV_LUMINESCENCE | eAuthenticity.IR_B900 | eAuthenticity.AXIAL_PROTECTION | eAuthenticity.PHOTO_EMBED_TYPE | eAuthenticity.HOLOGRAMS | eAuthenticity.PHOTO_AREA | eAuthenticity.BARCODE_FORMAT_CHECK | eAuthenticity.EXTENDED_OCR_CHECK | eAuthenticity.EXTENDED_MRZ_CHECK | eAuthenticity.STATUS_ONLY;
    Result: eCheckResult;
    List: iSecurityFeatureResult[];
}
export declare class AuthenticitySecurityFeatureCheckResult extends aAuthenticityCheckResult implements iAuthenticitySecurityFeatureCheckResult {
    Type: eAuthenticity.UV_LUMINESCENCE | eAuthenticity.IR_B900 | eAuthenticity.AXIAL_PROTECTION | eAuthenticity.PHOTO_EMBED_TYPE | eAuthenticity.HOLOGRAMS | eAuthenticity.PHOTO_AREA | eAuthenticity.BARCODE_FORMAT_CHECK | eAuthenticity.EXTENDED_OCR_CHECK | eAuthenticity.EXTENDED_MRZ_CHECK | eAuthenticity.STATUS_ONLY;
    Result: eCheckResult;
    List: SecurityFeatureResult[];
    static fromPlain: (plain: unknown) => AuthenticitySecurityFeatureCheckResult;
}
