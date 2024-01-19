import { eCheckResult, eLCID } from '../../../../../consts';
/**
* Name and surname, LCID and check result
* If check result is ERROR - value will be UNKNOWN and LCID will be 1033 (English - United States)
*/
export interface iRNameSurnameLCID {
    /**
    * Name and surname
    * @type {string}
    */
    value: string;
    /**
    * Check result
    * @type {eCheckResult}
    */
    checkResult: eCheckResult;
    /**
    * LCID
    * @type {eLCID}
    */
    lcid: eLCID;
}
/**
* Name and surname, LCID and check result
* If check result is ERROR - value will be UNKNOWN and LCID will be 1033 (English - United States)
*/
export declare class RNameSurnameLCID implements iRNameSurnameLCID {
    /**
    * Name and surname
    * @type {string}
    */
    value: string;
    /**
    * Check result
    * @type {eCheckResult}
    */
    checkResult: eCheckResult;
    /**
    * LCID
    * @type {eLCID}
    */
    lcid: eLCID;
    /**
    * Create new RNameSurnameLCID instance from plain object
    * @param {unknown} input - plain object
    * @returns {RNameSurnameLCID}
    */
    static fromPlain: (input: unknown) => RNameSurnameLCID;
    /**
    * Validate RNameSurnameLCID instance
    * @param {RNameSurnameLCID} input - instance to validate
    * @throws {DocReaderTypeError} - if the given instance is not valid
    * @returns {true | never}
    */
    static validate: (input: RNameSurnameLCID) => true | never;
}
