import { iRect, Rect } from '../../../../../../../../../../../../../rect';
import { iImageData, ImageData } from '../../../../../../../../../../../../../image-data';
import { AreaArray, iAreaArray } from '../../../../../../../../../../../../../area-array';
import { eAuthenticity, eCheckDiagnose, eCheckResult, eLights, eSecurityFeatureType } from '../../../../../../../../../../../../../../../consts';
export interface iIdentResult {
    Type: eAuthenticity.IMAGE_PATTERN | eAuthenticity.IR_VISIBILITY | eAuthenticity.OVI | eAuthenticity.IR_LUMINESCENCE | eAuthenticity.PORTRAIT_COMPARISON | eAuthenticity.KINEGRAM | eAuthenticity.LETTER_SCREEN | eAuthenticity.HOLOGRAM_DETECTION | eAuthenticity.FINGERPRINT_COMPARISON | eAuthenticity.LIVENESS;
    ElementResult?: eCheckResult;
    ElementDiagnose?: eCheckDiagnose;
    ElementType?: eSecurityFeatureType;
    LightIndex?: eLights;
    Area?: iRect;
    Image?: iImageData;
    EtalonImage?: iImageData;
    PercentValue?: number;
    AreaList?: iAreaArray;
}
export declare class IdentResult implements iIdentResult {
    Type: eAuthenticity.IMAGE_PATTERN | eAuthenticity.IR_VISIBILITY | eAuthenticity.OVI | eAuthenticity.IR_LUMINESCENCE | eAuthenticity.PORTRAIT_COMPARISON | eAuthenticity.KINEGRAM | eAuthenticity.LETTER_SCREEN | eAuthenticity.HOLOGRAM_DETECTION | eAuthenticity.FINGERPRINT_COMPARISON | eAuthenticity.LIVENESS;
    ElementResult?: eCheckResult;
    ElementDiagnose?: eCheckDiagnose;
    ElementType?: eSecurityFeatureType;
    LightIndex?: eLights;
    Area?: Rect;
    Image?: ImageData;
    EtalonImage?: ImageData;
    PercentValue?: number;
    AreaList?: AreaArray;
}
