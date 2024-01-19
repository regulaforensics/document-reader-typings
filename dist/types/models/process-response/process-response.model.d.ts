import { eProcessingStatus, eRfidPresence } from '../../consts';
import { ContainerList, iContainerList } from '../common';
import { iTransactionInfo, TransactionInfo } from './children';
export interface iProcessResponse {
    /**
    * Indicates which page of the document contains an RFID chip (0 if there’s no page containing it). Requires document
    * type recognition, otherwise 1 by default
    * @type {eRfidPresence}
    */
    ChipPage: eRfidPresence;
    /**
    * Document processing finish status
    * @type {eProcessingStatus}
    */
    ProcessingFinished: eProcessingStatus;
    /**
    * List of containers with results
    * @type {iContainerList}
    */
    ContainerList: iContainerList;
    /**
    * Transaction info
    * @type {iTransactionInfo}
    */
    TransactionInfo: iTransactionInfo;
    /**
    * Base64 encoded transaction processing log
    * @type {string|undefined}
    */
    log?: string;
    /**
    * Free-form object provided in request. See passBackObject property of ProcessRequest.
    * @type {Record<string, object>|undefined}
    */
    passBackObject?: Record<string, object>;
    /**
    * Indicates how many pages of a document remains to process. Requires Document Type recognition, otherwise 0 by default
    * @type {number}
    */
    morePagesAvailable: number;
    /**
    * Indicates how much time has been required for document processing, milliseconds
    * @type {number}
    */
    elapsedTime: number;
}
export declare class ProcessResponse implements iProcessResponse {
    /**
    * Indicates which page of the document contains an RFID chip (0 if there’s no page containing it). Requires document
    * type recognition, otherwise 1 by default
    * @type {eRfidPresence}
    */
    ChipPage: eRfidPresence;
    /**
    * Document processing finish status
    * @type {eProcessingStatus}
    */
    ProcessingFinished: eProcessingStatus;
    /**
    * List of containers with results
    * @type {ContainerList}
    */
    ContainerList: ContainerList;
    /**
    * Transaction info
    * @type {TransactionInfo}
    */
    TransactionInfo: TransactionInfo;
    /**
    * Base64 encoded transaction processing log
    * @type {string|undefined}
    */
    log?: string;
    /**
    * Free-form object provided in request. See passBackObject property of ProcessRequest.
    * @type {Record<string, object>|undefined}
    */
    passBackObject?: Record<string, object>;
    /**
    * Indicates how many pages of a document remains to process. Requires Document Type recognition, otherwise 0 by default
    * @type {number}
    */
    morePagesAvailable: number;
    /**
    * Indicates how much time has been required for document processing, milliseconds
    * @type {number}
    */
    elapsedTime: number;
    /**
    * Creates an instance of ProcessResponse from plain object
    * @param {unknown} input - plain object
    * @returns {ProcessResponse}
    */
    static fromPlain: (input: unknown) => ProcessResponse | never;
    /**
    * Check if the given instance of ProcessResponse is valid
    * @param {ProcessResponse} instance - instance of ProcessResponse to be checked
    * @throws {DocReaderTypeError} - if the given instance is not valid
    * @returns {true | never}
    */
    static validate: (instance: ProcessResponse) => true | never;
}
