import { iRect, Rect } from '../../../../../../../../../../../../../rect';
import { iImageData, ImageData } from '../../../../../../../../../../../../../image-data';
import { eAuthenticity, eCheckDiagnose, eCheckResult, eLights } from '../../../../../../../../../../../../../../../consts';
import { iRawImageContainerList, RawImageContainerList } from './children';
export interface iPhotoIdentResult {
    Type: eAuthenticity.IPI | eAuthenticity.IR_PHOTO;
    ElementResult?: eCheckResult;
    ElementDiagnose?: eCheckDiagnose;
    LightIndex?: eLights;
    Area?: iRect;
    SourceImage?: iImageData;
    ResultImages?: iRawImageContainerList;
    FieldTypesCount?: number;
    FieldTypesList?: number[];
    Step?: number;
    Angle?: number;
    Reserved3?: number;
}
export declare class PhotoIdentResult implements iPhotoIdentResult {
    Type: eAuthenticity.IPI | eAuthenticity.IR_PHOTO;
    ElementResult?: eCheckResult;
    ElementDiagnose?: eCheckDiagnose;
    LightIndex?: eLights;
    Area?: Rect;
    SourceImage?: ImageData;
    ResultImages?: RawImageContainerList;
    FieldTypesCount?: number;
    FieldTypesList?: number[];
    Step?: number;
    Angle?: number;
    Reserved3?: number;
}
