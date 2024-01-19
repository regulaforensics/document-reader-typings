/**
* Transaction info
*/
export interface iTransactionInfo {
    /**
    * Name of the computer
    * @type {string|undefined}
    */
    ComputerName?: string;
    /**
    * Date and time of the transaction
    * @type {string|undefined}
    */
    DateTime?: string;
    /**
    * ID of the transaction
    * @type {string|undefined}
    */
    TransactionID?: string;
    /**
    * Name of the user
    * @type {string|undefined}
    */
    UserName?: string;
}
/**
* Transaction info
*/
export declare class TransactionInfo implements iTransactionInfo {
    /**
    * Name of the computer
    * @type {string|undefined}
    */
    ComputerName?: string;
    /**
    * Date and time of the transaction
    * @type {string|undefined}
    */
    DateTime?: string;
    /**
    * ID of the transaction
    * @type {string|undefined}
    */
    TransactionID?: string;
    /**
    * Name of the user
    * @type {string|undefined}
    */
    UserName?: string;
}
