import { IsOptional, IsEnum } from 'class-validator'
import { ParsedData as iRfidParsedData } from '@regulaforensics/document-reader-webclient'

import { eLDSParsingNotificationCodes } from '@/consts'

/**
 * Logically parsed data
 */
export class RfidParsedData implements iRfidParsedData {
  /**
   * List of remarks arisen when making logical analysis of the data contents
   * @type {eLDSParsingNotificationCodes[]}
   */
  @IsOptional()
  @IsEnum(eLDSParsingNotificationCodes, { each: true })
  ParsingNotifications?: eLDSParsingNotificationCodes[]
}

export type { iRfidParsedData }
