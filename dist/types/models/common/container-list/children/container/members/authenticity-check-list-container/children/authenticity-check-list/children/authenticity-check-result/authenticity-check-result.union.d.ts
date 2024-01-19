import { AuthenticityFiberCheckResult, AuthenticityIdentCheckResult, AuthenticityOCRSecurityTextCheckResult, AuthenticityPhotoIdentCheckResult, AuthenticitySecurityFeatureCheckResult, iAuthenticityFiberCheckResult, iAuthenticityIdentCheckResult, iAuthenticityOCRSecurityTextCheckResult, iAuthenticityPhotoIdentCheckResult, iAuthenticitySecurityFeatureCheckResult } from './members';
/**
* Structure serves for storing the results of a single type
* document authenticity check
*/
export type uAuthenticityCheckResult = AuthenticityFiberCheckResult | AuthenticityIdentCheckResult | AuthenticityOCRSecurityTextCheckResult | AuthenticityPhotoIdentCheckResult | AuthenticitySecurityFeatureCheckResult;
/**
* Structure serves for storing the results of a single type
* document authenticity check
*/
export type iuAuthenticityCheckResult = iAuthenticityFiberCheckResult | iAuthenticityIdentCheckResult | iAuthenticityOCRSecurityTextCheckResult | iAuthenticityPhotoIdentCheckResult | iAuthenticitySecurityFeatureCheckResult;
/**
* Structure serves for storing the results of a single type
* document authenticity check
*/
export declare namespace uAuthenticityCheckResult {
    /**
    * Transform list of unknown items to list of uAuthenticityCheckResult
    * @internal
    * @param {unknown[]} items - list of unknown items
    * @returns {uAuthenticityCheckResult[]} - list of uAuthenticityCheckResult
    */
    const transformList: (items: unknown[]) => uAuthenticityCheckResult[];
}
