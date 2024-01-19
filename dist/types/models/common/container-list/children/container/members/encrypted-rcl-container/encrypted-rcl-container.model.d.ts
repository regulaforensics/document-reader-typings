import { eResultType } from '../../../../../../../consts';
import { aContainer } from '../../container.abstract';
/**
* Result type of EncryptedRCLContainer
*/
export type tEncryptedRCLContainerResultType = eResultType.ENCRYPTED_RCL;
/**
* Container for EncryptedRCL base64 string
*/
export interface iEncryptedRCLContainer extends aContainer {
    /**
    * EncryptedRCL base64 string
    * @type {string}
    */
    EncryptedRCL: string;
    /**
    * Result type stored in this container
    * @type {tEncryptedRCLContainerResultType}
    */
    result_type: tEncryptedRCLContainerResultType;
}
/**
* Container for EncryptedRCL
*/
export declare class EncryptedRCLContainer extends aContainer implements iEncryptedRCLContainer {
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
    * @type {tEncryptedRCLContainerResultType}
    */
    result_type: tEncryptedRCLContainerResultType;
    /**
    * EncryptedRCL base64 string
    * @type {string}
    */
    EncryptedRCL: string;
    /**
    * Creates an instance of EncryptedRCLContainer from plain
    *
    * @param {unknown} input - plain object
    * @returns {EncryptedRCLContainer}
    */
    static fromPlain: (input: unknown) => EncryptedRCLContainer;
    /**
    * Check if the given instance of EncryptedRCLContainer is valid
    *
    * @param {EncryptedRCLContainer} instance - instance to check
    * @throws {DocReaderTypeError}
    * @returns {true | never}
    */
    static validate: (instance: EncryptedRCLContainer) => true | never;
}
