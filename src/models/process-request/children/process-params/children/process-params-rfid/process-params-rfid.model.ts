import { IsArray, IsEnum, IsOptional } from 'class-validator'
import { ProcessParamsRfid as iProcessParamsRfid } from '@regulaforensics/document-reader-webclient'

import { eLDSParsingNotificationCodes } from '@/consts'

/**
 * Params for the RFID chip data reprocessing
 */
export class ProcessParamsRfid implements iProcessParamsRfid {
  /**
   * A list of notification codes that should be ignored during passive authentication (PA)
   * @type {eLDSParsingNotificationCodes[]|undefined}
   */
  @IsOptional()
  @IsEnum(eLDSParsingNotificationCodes, { each: true })
  @IsArray()
  paIgnoreNotificationCodes?: eLDSParsingNotificationCodes[]
}
