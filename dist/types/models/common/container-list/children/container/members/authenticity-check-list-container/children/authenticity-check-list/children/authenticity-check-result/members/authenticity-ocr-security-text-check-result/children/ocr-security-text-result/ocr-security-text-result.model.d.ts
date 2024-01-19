import { iRect, Rect } from '../../../../../../../../../../../../../rect';
import { eAuthenticity, eCheckDiagnose, eCheckResult, eSecurityCriticalFlag, eLights } from '../../../../../../../../../../../../../../../consts';
export interface iOCRSecurityTextResult {
    Type: eAuthenticity.OCR_SECURITY_TEXT;
    ElementResult?: eCheckResult;
    ElementDiagnose?: eCheckDiagnose;
    CriticalFlag?: eSecurityCriticalFlag;
    LightType?: eLights;
    FieldRect?: iRect;
    EtalonResultType?: number;
    EtalonFieldType?: number;
    EtalonLightType?: number;
    SecurityTextResultOCR?: string;
    EtalonResultOCR?: string;
    Reserved1?: number;
    Reserved2?: number;
}
export declare class OCRSecurityTextResult implements iOCRSecurityTextResult {
    Type: eAuthenticity.OCR_SECURITY_TEXT;
    ElementResult?: eCheckResult;
    ElementDiagnose?: eCheckDiagnose;
    CriticalFlag?: eSecurityCriticalFlag;
    LightType?: eLights;
    FieldRect?: Rect;
    EtalonResultType?: number;
    EtalonFieldType?: number;
    EtalonLightType?: number;
    SecurityTextResultOCR?: string;
    EtalonResultOCR?: string;
    Reserved1?: number;
    Reserved2?: number;
}
