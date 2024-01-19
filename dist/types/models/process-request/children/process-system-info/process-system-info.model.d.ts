/**
* System info
*/
export interface iProcessSystemInfo {
    /**
    * Base64 encoded license file
    * @type {string|undefined}
    */
    license?: string;
    /**
    * For internal use. Demo-sites recaptcha token.
    * @type {string|undefined}
    * @internal
    */
    recaptcha_token?: string;
}
/**
* System info
*/
export declare class ProcessSystemInfo implements iProcessSystemInfo {
    /**
    * Base64 encoded license file
    * @type {string|undefined}
    */
    license?: string;
    /**
    * For internal use. Demo-sites recaptcha token.
    * @type {string|undefined}
    * @internal
    */
    recaptcha_token?: string;
}
