import { eParsingNotificationCodes } from '../../../../../../consts';
/**
* Params for the RFID chip data reprocessing
*/
export interface iProcessParamsRfid {
    /**
    * A list of notification codes that should be ignored during passive authentication (PA)
    * @type {eParsingNotificationCodes[]|undefined}
    */
    paSensitiveCodesDisable?: eParsingNotificationCodes[];
}
/**
* Params for the RFID chip data reprocessing
*/
export declare class ProcessParamsRfid implements iProcessParamsRfid {
    /**
    * A list of notification codes that should be ignored during passive authentication (PA)
    * @type {eParsingNotificationCodes[]|undefined}
    */
    paSensitiveCodesDisable?: eParsingNotificationCodes[];
}
