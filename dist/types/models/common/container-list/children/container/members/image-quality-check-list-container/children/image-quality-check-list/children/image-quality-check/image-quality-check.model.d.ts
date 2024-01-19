import { eCheckResult, eImageQualityCheckType, eSecurityFeatureType } from '../../../../../../../../../../../consts';
import { AreaArray, iAreaArray } from '../../../../../../../../../area-array';
/**
* Structure is used for storing input image quality check result
*/
export interface iImageQualityCheck {
    /**
    * Check result type
    * @type {eImageQualityCheckType}
    */
    type: eImageQualityCheckType;
    /**
    * Check result
    * @type {eCheckResult}
    */
    result: eCheckResult;
    /**
    * Security feature type
    * @type {eSecurityFeatureType}
    */
    featureType: eSecurityFeatureType;
    /**
    * Anomalous image areas
    * @type {iAreaArray}
    */
    areas: iAreaArray;
    /**
    * Check mean value
    * @type {number}
    */
    mean: number;
    /**
    * Check deviation value
    * @type {number}
    */
    std_dev: number;
    /**
    * Check probability value
    * @type {number}
    */
    probability: number;
}
/**
* Structure is used for storing input image quality check result
*/
export declare class ImageQualityCheck implements iImageQualityCheck {
    /**
    * Check result type
    * @type {eImageQualityCheckType}
    */
    type: eImageQualityCheckType;
    /**
    * Check result
    * @type {eCheckResult}
    */
    result: eCheckResult;
    /**
    * Security feature type
    * @type {eSecurityFeatureType}
    */
    featureType: eSecurityFeatureType;
    /**
    * Anomalous image areas
    * @type {AreaArray}
    */
    areas: AreaArray;
    /**
    * Check mean value
    * @type {number}
    */
    mean: number;
    /**
    * Check deviation value
    * @type {number}
    */
    std_dev: number;
    /**
    * Check probability value
    * @type {number}
    */
    probability: number;
}
