import { IsEnum, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'

import { eParsingNotificationCodes } from '@/consts'


/**
* Params for the RFID chip data reprocessing
*/
export interface iProcessParamsRfid {
  /**
  * A list of notification codes that should be ignored during passive authentication (PA)
  * @type {eParsingNotificationCodes[]|undefined}
  */
  paSensitiveCodesDisable?: eParsingNotificationCodes[]
}

/**
* Params for the RFID chip data reprocessing
*/
export class ProcessParamsRfid implements iProcessParamsRfid {
  /**
  * A list of notification codes that should be ignored during passive authentication (PA)
  * @type {eParsingNotificationCodes[]|undefined}
  */
  @Expose()
  @IsOptional()
  @IsEnum(eParsingNotificationCodes, { each: true })
  paSensitiveCodesDisable?: eParsingNotificationCodes[]
}
