import { eResultType } from '../../../../../../../consts';
import { aContainer } from '../../container.abstract';
import { iStatus, Status } from './children';
/**
* Result type of StatusContainer
*/
export type tStatusContainerResultType = eResultType.STATUS;
/**
* Container for iStatus
*/
export interface iStatusContainer extends aContainer {
    /**
    * Status of the document check.
    * @type {iStatus}
    */
    Status: iStatus;
    /**
    * Result type stored in this container
    * @type {tStatusContainerResultType}
    */
    result_type: tStatusContainerResultType;
}
/**
* Container for Status
*/
export declare class StatusContainer extends aContainer implements iStatusContainer {
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
    * @type {tStatusContainerResultType}
    */
    result_type: tStatusContainerResultType;
    /**
    * Status of the document check.
    * @type {Status}
    */
    Status: Status;
    /**
    * Transform plain object to StatusContainer instance.
    * @param {unknown} input - plain object
    * @returns {StatusContainer}
    */
    static fromPlain: (input: unknown) => StatusContainer;
    /**
    * Validate instance of StatusContainer for conformance with the schema.
    * @param {StatusContainer} instance - instance of StatusContainer
    * @throws {DocReaderTypeError}
    * @returns {true} if object satisfies StatusContainer schema
    */
    static validate: (instance: StatusContainer) => true | never;
}
