import { eAuthenticity, eLights, eRfidPresence } from '../../../../../../../../../consts';
import { FDSIDList, iFDSIDList } from './children';
/**
* Contains information on one candidate document when determining the document type
*/
export interface iOneCandidate {
    /**
    * Document name
    * @type {string}
    */
    DocumentName: string;
    /**
    * Document type numeric code
    * @type {number}
    */
    ID: number;
    /**
    * Estimation of correct recognition probability when analyzing the given document type
    * @type {number}
    */
    P: number;
    /**
    * true if the document of the given type is rotated by 180 degrees
    * @type {boolean}
    */
    Rotated180: boolean;
    /**
    * Combination of identifiers of necessary lighting schemes to perform OCR for the given document type
    * @type {number}
    */
    NecessaryLights: number;
    /**
    * Presence of RFID-chip in the document
    * @type {eRfidPresence}
    */
    RFID_Presence: eRfidPresence;
    /**
    * Set of authenticity check options provided for the given document type
    * @type {number}
    */
    CheckAuthenticity: number;
    /**
    * Camera exposure value necessary when obtaining document images of the given type for UV lighting scheme
    * @type {number}
    */
    UVExp: number;
    /**
    * Camera exposure value necessary when obtaining document images of the given type for AXIAL lighting scheme
    * @type {number}
    */
    OVIExp: number;
    /**
    * Combination of identifiers of necessary lighting schemes
    * @see {eLights} to perform authenticity check for the
    * given document type
    * @type {number}
    */
    AuthenticityNecessaryLights: number;
    /**
    * Pointer to TFDSIDList structure containing additional
    * document information and its link to IRS
    * @type {iFDSIDList}
    */
    FDSIDList: iFDSIDList;
}
/**
* Contains information on one candidate document when determining the document type
*/
export declare class OneCandidate implements iOneCandidate {
    /**
    * Document name
    * @type {string}
    */
    DocumentName: string;
    /**
    * Document type numeric code
    * @type {number}
    */
    ID: number;
    /**
    * Estimation of correct recognition probability when analyzing the given document type
    * @type {number}
    */
    P: number;
    /**
    * true if the document of the given type is rotated by 180 degrees
    * @type {boolean}
    */
    Rotated180: boolean;
    /**
    * Combination of identifiers of necessary lighting schemes to perform OCR for the given document type
    * @type {number}
    */
    NecessaryLights: number;
    /**
    * Presence of RFID-chip in the document
    * @type {eRfidPresence}
    */
    RFID_Presence: eRfidPresence;
    /**
    * Set of authenticity check options provided for the given document type
    * @type {number}
    */
    CheckAuthenticity: number;
    /**
    * Camera exposure value necessary when obtaining document images of the given type for UV lighting scheme
    * @type {number}
    */
    UVExp: number;
    /**
    * Camera exposure value necessary when obtaining document images of the given type for AXIAL lighting scheme
    * @type {number}
    */
    OVIExp: number;
    /**
    * Combination of identifiers of necessary lighting schemes
    * @see {eLights} to perform authenticity check for the
    * given document type
    * @type {number}
    */
    AuthenticityNecessaryLights: number;
    /**
    * Pointer to TFDSIDList structure containing additional
    * document information and its link to IRS
    * @type {FDSIDList}
    */
    FDSIDList: FDSIDList;
    /**
    * Get necessary lights
    *
    * @param {OneCandidate | number} instance - instance of OneCandidate or number (NecessaryLights value)
    * @returns {eLights[]} - array of Lights
    */
    static getNecessaryLights: (instance: OneCandidate | number) => eLights[];
    /**
    * Get authenticity
    *
    * @param {OneCandidate | number} instance - instance of OneCandidate or number
    * @returns {eAuthenticity[]} - array of Authenticity
    */
    static getCheckAuthenticity: (instance: OneCandidate | number) => eAuthenticity[];
    /**
    * Get authenticity necessary lights
    *
    * @param {OneCandidate | number} instance - instance of OneCandidate or number
    * @returns {eLights[]} - array of Lights
    */
    static getAuthenticityNecessaryLights: (instance: OneCandidate | number) => eLights[];
}
