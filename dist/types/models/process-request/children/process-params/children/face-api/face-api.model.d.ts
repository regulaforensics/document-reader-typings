import { FaceApiSearch, iFaceApiSearch } from './children';
/**
* Face API parameters
*/
export interface iFaceApi {
    /**
    * The URL of the Regula Face Web service to be used.
    * @type {string|undefined}
    */
    url?: string;
    /**
    * The processing mode: "match" or "match+search"
    * @type {string|undefined}
    */
    mode?: string;
    /**
    * Face search filter
    * @type {iFaceApiSearch|undefined}
    */
    search?: iFaceApiSearch;
    /**
    * The similarity threshold, 0-100. Above 75 means that the faces' similarity is verified, below 75 is not.
    * @type {number|undefined}
    */
    threshold?: number;
    /**
    * The timeout for the service request, milliseconds
    * @type {number|undefined}
    */
    serviceTimeout?: number;
    /**
    * Proxy to use, should be set according to the
    * @see {https://curl.se/libcurl/c/CURLOPT_PROXY.html} cURL standard.
    * @type {string|undefined}
    */
    proxy?: string;
    /**
    * Proxy userpwd to use, should be set according to the
    * @see {https://curl.se/libcurl/c/CURLOPT_PROXYUSERPWD.html} cURL standard.
    * @type {string|undefined}
    */
    proxy_userpwd?: string;
    /**
    * Proxy type to use, should be set according to the
    * @see {https://curl.se/libcurl/c/CURLOPT_PROXYTYPE.html} cURL standard.
    * @type {number|undefined}
    */
    proxy_type?: number;
}
/**
* Face API parameters
*/
export declare class FaceApi implements iFaceApi {
    /**
    * The URL of the Regula Face Web service to be used.
    * @type {string|undefined}
    */
    url?: string;
    /**
    * The processing mode: "match" or "match+search"
    * @type {string|undefined}
    */
    mode?: string;
    /**
    * Face search filter
    * @type {FaceApiSearch|undefined}
    */
    search?: FaceApiSearch;
    /**
    * The similarity threshold, 0-100. Above 75 means that the faces' similarity is verified, below 75 is not.
    * @type {number|undefined}
    */
    threshold?: number;
    /**
    * The timeout for the service request, milliseconds
    * @type {number|undefined}
    */
    serviceTimeout?: number;
    /**
    * Proxy to use, should be set according to the
    * @see {https://curl.se/libcurl/c/CURLOPT_PROXY.html} cURL standard.
    * @type {string|undefined}
    */
    proxy?: string;
    /**
    * Proxy userpwd to use, should be set according to the
    * @see {https://curl.se/libcurl/c/CURLOPT_PROXYUSERPWD.html} cURL standard.
    * @type {string|undefined}
    */
    proxy_userpwd?: string;
    /**
    * Proxy type to use, should be set according to the
    * @see {https://curl.se/libcurl/c/CURLOPT_PROXYTYPE.html} cURL standard.
    * @type {number|undefined}
    */
    proxy_type?: number;
}
