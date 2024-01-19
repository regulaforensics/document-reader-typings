import { eResultType } from '../../../../../../../consts';
import { iOneCandidate, OneCandidate } from './children';
import { aContainer } from '../../container.abstract';
/**
* Result type of OneCandidateContainer
*/
export type tOneCandidateContainerResultType = eResultType.CHOSEN_DOCUMENT_TYPE_CANDIDATE;
/**
* Container for iOneCandidate
*/
export interface iOneCandidateContainer extends aContainer {
    /**
    * Contains information on one candidate document when determining the document type
    * @type {iOneCandidate|undefined}
    */
    OneCandidate?: iOneCandidate;
    /**
    * Result type stored in this container
    * @type {tOneCandidateContainerResultType}
    */
    result_type: tOneCandidateContainerResultType;
}
/**
* Container for OneCandidate
*/
export declare class OneCandidateContainer extends aContainer implements iOneCandidateContainer {
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
    * @type {tOneCandidateContainerResultType}
    */
    result_type: tOneCandidateContainerResultType;
    /**
    * Contains information on one candidate document when determining the document type
    * @type {OneCandidate|undefined}
    */
    OneCandidate?: OneCandidate;
    /**
    * Creates an instance of OneCandidateContainer from plain object
    *
    * @param {unknown} input - plain object
    * @returns {OneCandidateContainer}
    */
    static fromPlain: (input: unknown) => OneCandidateContainer;
    /**
    * Check if the given instance of OneCandidateContainer is valid
    *
    * @param {OneCandidateContainer} instance - instance of OneCandidateContainer to validate
    * @throws {DocReaderTypeError} - if the given instance of OneCandidateContainer is not valid
    * @returns {true | never} - true if OneCandidateContainer is valid
    */
    static validate: (instance: OneCandidateContainer) => true | never;
}
