import { eResultType } from '../../../../../../../consts';
import { aContainer } from '../../container.abstract';
import { AuthenticityCheckList, iAuthenticityCheckList } from './children';
/**
* Result type of AuthenticityCheckListContainer
*/
export type tAuthenticityCheckListContainerResultType = eResultType.AUTHENTICITY | eResultType.FINGER_PRINT_COMPARISON | eResultType.PORTRAIT_COMPARISON;
/**
* Container for iAuthenticityCheckList
*/
export interface iAuthenticityCheckListContainer extends aContainer {
    /**
    * Structure serves for storing the result of document authenticity check using the images for different lighting
    * schemes and passing it to the user application.
    * @type {iAuthenticityCheckList}
    */
    AuthenticityCheckList: iAuthenticityCheckList;
    /**
    * Result type stored in this container
    * @type {tAuthenticityCheckListContainerResultType}
    */
    result_type: tAuthenticityCheckListContainerResultType;
}
/**
* Container for iAuthenticityCheckList
*/
export declare class AuthenticityCheckListContainer extends aContainer implements iAuthenticityCheckListContainer {
    /**
    * Lighting scheme code for the given result (used only for images)
    * @type {number}
    */
    light: number;
    /**
    * @internal
    */
    list_idx: number;
    /**
    * Page index (when working with multi-page document)
    * @type {number}
    */
    page_idx: number;
    /**
    * @internal
    */
    buf_length: number;
    /**
    * Result type stored in this container
    * @type {tAuthenticityCheckListContainerResultType}
    */
    result_type: tAuthenticityCheckListContainerResultType;
    /**
    * Structure serves for storing the result of document authenticity check using the images for different lighting
    * schemes and passing it to the user application.
    * @type {AuthenticityCheckList}
    */
    AuthenticityCheckList: AuthenticityCheckList;
    /**
    * Create new instance of AuthenticityCheckListContainer from plain object
    *
    * @param {unknown} input - plain object
    * @returns {AuthenticityCheckListContainer}
    */
    static fromPlain: (input: unknown) => AuthenticityCheckListContainer;
    /**
    * Check if the given instance is a valid AuthenticityCheckListContainer
    *
    * @param {AuthenticityCheckListContainer} instance - instance to check
    * @throws {DocReaderTypeError}
    * @returns {true | never}
    */
    static validate: (instance: AuthenticityCheckListContainer) => true | never;
}
