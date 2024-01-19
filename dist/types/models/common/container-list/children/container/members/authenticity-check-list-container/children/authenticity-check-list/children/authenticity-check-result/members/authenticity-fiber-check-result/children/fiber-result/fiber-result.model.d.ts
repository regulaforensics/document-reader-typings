import { iRect, Rect } from '../../../../../../../../../../../../../rect';
import { eAuthenticity, eCheckDiagnose, eCheckResult, eLights } from '../../../../../../../../../../../../../../../consts';
export interface iFiberResult {
    Type: eAuthenticity.UV_FIBERS | eAuthenticity.UV_BACKGROUND;
    ElementResult?: eCheckResult;
    ElementDiagnose?: eCheckDiagnose;
    RectCount?: number;
    ExpectedCount?: number;
    LightValue?: eLights;
    LightDisp?: number;
    RectArray?: iRect[];
    Width?: number[];
    Length?: number[];
    Area?: number[];
    ColorValues?: number[];
}
export declare class FiberResult implements iFiberResult {
    Type: eAuthenticity.UV_FIBERS | eAuthenticity.UV_BACKGROUND;
    ElementResult?: eCheckResult;
    ElementDiagnose?: eCheckDiagnose;
    RectCount?: number;
    ExpectedCount?: number;
    LightValue?: eLights;
    LightDisp?: number;
    RectArray?: Rect[];
    Width?: number[];
    Length?: number[];
    Area?: number[];
}
