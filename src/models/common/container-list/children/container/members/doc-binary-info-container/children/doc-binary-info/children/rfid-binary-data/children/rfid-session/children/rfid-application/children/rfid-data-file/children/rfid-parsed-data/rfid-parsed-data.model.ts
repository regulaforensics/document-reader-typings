import { IsDefined, IsEnum } from 'class-validator'

import { eLDSParsingNotificationCodes } from '@/consts'

/**
* Logically parsed data
*/
export interface iRfidParsedData {
  /**
  * List of remarks arisen when making logical analysis of the data contents
  * @type {eLDSParsingNotificationCodes[]}
  */
  ParsingNotifications: eLDSParsingNotificationCodes[]
}

/**
* Logically parsed data
*/
export class RfidParsedData implements iRfidParsedData {
  /**
  * List of remarks arisen when making logical analysis of the data contents
  * @type {eLDSParsingNotificationCodes[]}
  */
  @IsDefined()
  @IsEnum(eLDSParsingNotificationCodes, { each: true })
  ParsingNotifications: eLDSParsingNotificationCodes[]
}
