import { eResultType } from '../../../../../../../consts';
import { aContainer } from '../../container.abstract';
/**
* Result type of LicenseContainer
*/
export type tLicenseContainerResultType = eResultType.LICENSE;
/**
* Container for License base64 string
*/
export interface iLicenseContainer extends aContainer {
    /**
    * License base64 encoded string
    * @type {string}
    */
    License: string;
    /**
    * Result type stored in this container
    * @type {tLicenseContainerResultType}
    */
    result_type: tLicenseContainerResultType;
}
/**
* Container for License
*/
export declare class LicenseContainer extends aContainer implements iLicenseContainer {
    /**
    * Lighting scheme code for the given result (used only for images)
    * @type {number}
    */
    light: number;
    /**
    * @internal
    * @type {number}
    */
    list_idx: number;
    /**
    * Page index (when working with multi-page document)
    * @type {number}
    */
    page_idx: number;
    /**
    * @internal
    * @type {number}
    */
    buf_length: number;
    /**
    * Result type stored in this container
    * @type {tLicenseContainerResultType}
    */
    result_type: tLicenseContainerResultType;
    /**
    * License base64 encoded string
    * @type {string}
    */
    License: string;
    /**
    * Creates an instance of LicenseContainer from plain object
    *
    * @param {unknown} input - plain object
    * @returns {LicenseContainer}
    */
    static fromPlain: (input: unknown) => LicenseContainer;
    /**
    * Check if the given instance of LicenseContainer is valid
    *
    * @param {LicenseContainer} instance - instance of LicenseContainer to be checked
    * @throws {DocReaderTypeError} - if the given instance of LicenseContainer is not valid
    * @returns {true | never} - true if the given instance of LicenseContainer is valid
    */
    static validate: (instance: LicenseContainer) => true | never;
}
