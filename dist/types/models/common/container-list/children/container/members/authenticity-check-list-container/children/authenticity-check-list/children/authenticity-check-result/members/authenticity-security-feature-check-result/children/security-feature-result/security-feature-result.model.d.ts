import { AreaArray, iAreaArray } from '../../../../../../../../../../../../../area-array';
import { iRect, Rect } from '../../../../../../../../../../../../../rect';
import { eAuthenticity, eCheckDiagnose, eCheckResult, eSecurityCriticalFlag, eSecurityFeatureType, eIRVisibilityFlag } from '../../../../../../../../../../../../../../../consts';
export interface iSecurityFeatureResult {
    Type: eAuthenticity.UV_LUMINESCENCE | eAuthenticity.IR_B900 | eAuthenticity.AXIAL_PROTECTION | eAuthenticity.PHOTO_EMBED_TYPE | eAuthenticity.HOLOGRAMS | eAuthenticity.PHOTO_AREA | eAuthenticity.BARCODE_FORMAT_CHECK | eAuthenticity.EXTENDED_OCR_CHECK | eAuthenticity.EXTENDED_MRZ_CHECK | eAuthenticity.STATUS_ONLY;
    ElementResult?: eCheckResult;
    ElementDiagnose?: eCheckDiagnose;
    ElementType?: eSecurityFeatureType;
    ElementRect?: iRect;
    Visibility?: eIRVisibilityFlag;
    CriticalFlag?: eSecurityCriticalFlag;
    AreaList?: iAreaArray;
    Reserved2?: number;
}
export declare class SecurityFeatureResult implements iSecurityFeatureResult {
    Type: eAuthenticity.UV_LUMINESCENCE | eAuthenticity.IR_B900 | eAuthenticity.AXIAL_PROTECTION | eAuthenticity.PHOTO_EMBED_TYPE | eAuthenticity.HOLOGRAMS | eAuthenticity.PHOTO_AREA | eAuthenticity.BARCODE_FORMAT_CHECK | eAuthenticity.EXTENDED_OCR_CHECK | eAuthenticity.EXTENDED_MRZ_CHECK | eAuthenticity.STATUS_ONLY;
    ElementResult?: eCheckResult;
    ElementDiagnose?: eCheckDiagnose;
    ElementType?: eSecurityFeatureType;
    ElementRect?: Rect;
    Visibility?: eIRVisibilityFlag;
    CriticalFlag?: eSecurityCriticalFlag;
    AreaList?: AreaArray;
    Reserved2?: number;
}
