/**
* Enumeration contains a set of constants that define scanning process completion status.
* @enum {number}
*/
export declare enum eProcessingStatus {
    /**
    * Processing was not finished
    */
    NOT_FINISHED = 0,
    /**
    * Processing finished
    */
    FINISHED = 1,
    /**
    * Processing finished by timeout
    */
    TIMEOUT = 2
}
