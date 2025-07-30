import { IsOptional, IsEnum } from 'class-validator'
import { ParsedData } from '@regulaforensics/document-reader-webclient'

import { eLDSParsingNotificationCodes } from '@/consts'

/**
 * Logically parsed data
 */
export class RfidParsedData implements ParsedData {
  /**
   * List of remarks arisen when making logical analysis of the data contents
   * @type {eLDSParsingNotificationCodes[]}
   */
  @IsOptional()
  @IsEnum(eLDSParsingNotificationCodes, { each: true })
  ParsingNotifications?: eLDSParsingNotificationCodes[]
}
