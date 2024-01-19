import { eCheckResult } from '../../../../../../../../../../../consts';
/**
* Interface for DetailsRFID model.
* The summary of all RFID checks.
*/
export interface iDetailsRFID {
    /**
    * The summary of all RFID checks.
    * @type {eCheckResult}
    */
    overallStatus: eCheckResult;
    /**
    * The Active Authentication status.
    * @see {@link https://docs.regulaforensics.com/develop/doc-reader-sdk/overview/security-mechanisms-for-electronic-documents/#active-authentication}
    * @type {eCheckResult}
    */
    AA: eCheckResult;
    /**
    * The Basic Access Control status
    * @type {eCheckResult}
    */
    BAC: eCheckResult;
    /**
    * The Chip Authentication status.
    * @see {@link https://docs.regulaforensics.com/develop/doc-reader-sdk/overview/security-mechanisms-for-electronic-documents/#chip-authentication}
    * @type {eCheckResult}
    */
    CA: eCheckResult;
    /**
    * The Passive Authentication status.
    * @see {@link https://docs.regulaforensics.com/develop/doc-reader-sdk/overview/security-mechanisms-for-electronic-documents/#passive-authentication}
    * @type {eCheckResult}
    */
    PA: eCheckResult;
    /**
    * The Password Authenticated Connection Establishment status.
    * @see {@link https://docs.regulaforensics.com/develop/doc-reader-sdk/overview/security-mechanisms-for-electronic-documents/#password-authenticated-connection-establishment}
    * @type {eCheckResult}
    */
    PACE: eCheckResult;
    /**
    * The Terminal Authentication status.
    * @see {@link https://docs.regulaforensics.com/develop/doc-reader-sdk/overview/security-mechanisms-for-electronic-documents/#terminal-authentication}
    * @type {eCheckResult}
    */
    TA: eCheckResult;
}
/**
* The summary of all RFID checks.
*/
export declare class DetailsRFID implements iDetailsRFID {
    /**
    * The summary of all RFID checks.
    * @type {eCheckResult}
    */
    overallStatus: eCheckResult;
    /**
    * The Active Authentication status.
    * @see {@link https://docs.regulaforensics.com/develop/doc-reader-sdk/overview/security-mechanisms-for-electronic-documents/#active-authentication}
    * @type {eCheckResult}
    */
    AA: eCheckResult;
    /**
    * The Basic Access Control status
    * @type {eCheckResult}
    */
    BAC: eCheckResult;
    /**
    * The Chip Authentication status.
    * @see {@link https://docs.regulaforensics.com/develop/doc-reader-sdk/overview/security-mechanisms-for-electronic-documents/#chip-authentication}
    * @type {eCheckResult}
    */
    CA: eCheckResult;
    /**
    * The Passive Authentication status.
    * @see {@link https://docs.regulaforensics.com/develop/doc-reader-sdk/overview/security-mechanisms-for-electronic-documents/#passive-authentication}
    * @type {eCheckResult}
    */
    PA: eCheckResult;
    /**
    * The Password Authenticated Connection Establishment status.
    * @see {@link https://docs.regulaforensics.com/develop/doc-reader-sdk/overview/security-mechanisms-for-electronic-documents/#password-authenticated-connection-establishment}
    * @type {eCheckResult}
    */
    PACE: eCheckResult;
    /**
    * The Terminal Authentication status.
    * @see {@link https://docs.regulaforensics.com/develop/doc-reader-sdk/overview/security-mechanisms-for-electronic-documents/#terminal-authentication}
    * @type {eCheckResult}
    */
    TA: eCheckResult;
}
