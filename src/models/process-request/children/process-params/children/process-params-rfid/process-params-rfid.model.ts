import { IsArray, IsEnum, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'

import { eLDSParsingNotificationCodes } from '@/consts'


/**
* Params for the RFID chip data reprocessing
*/
export interface iProcessParamsRfid {
  /**
  * A list of notification codes that should be ignored during passive authentication (PA)
  * @type {eLDSParsingNotificationCodes[]|undefined}
  */
  paSensitiveCodesDisable?: eLDSParsingNotificationCodes[]
}

/**
* Params for the RFID chip data reprocessing
*/
export class ProcessParamsRfid implements iProcessParamsRfid {
  /**
  * A list of notification codes that should be ignored during passive authentication (PA)
  * @type {eLDSParsingNotificationCodes[]|undefined}
  */
  @Expose()
  @IsOptional()
  @IsEnum(eLDSParsingNotificationCodes, { each: true })
  @IsArray()
  paSensitiveCodesDisable?: eLDSParsingNotificationCodes[]
}
