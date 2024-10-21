import { IsDefined, IsIn, IsNumber } from 'class-validator'

import { eGraphicFieldType, eLDSParsingErrorCodes, eLDSParsingNotificationCodes, eVisualFieldType } from '@/consts'
import { Default } from '@/decorators'


/**
* Structure is used to store information about the numeric field (4 bytes) that is a part of one of the informational
* data groups.
*/
export interface iTrfFtNumber {
  /**
  * Logical type of the field
  * @type {eGraphicFieldType | eVisualFieldType}
  */
  Type: eGraphicFieldType | eVisualFieldType

  /**
  * Result of logical analysis of compliance of the contents of the field
  * with the requirements of the specification
  * @type {eLDSParsingNotificationCodes | eLDSParsingErrorCodes.OK}
  */
  Status: eLDSParsingNotificationCodes | eLDSParsingErrorCodes.OK

  /**
  * Numeric value.
  * @type {number}
  */
  Data: number
}

/**
* Structure is used to store information about the numeric field (4 bytes) that is a part of one of the informational
* data groups.
*/
export class TrfFtNumber implements iTrfFtNumber {
  /**
  * Logical type of the field
  * @type {eGraphicFieldType | eVisualFieldType}
  */
  @IsDefined()
  @IsIn([...Object.values(eGraphicFieldType), ...Object.values(eVisualFieldType)])
  Type: eGraphicFieldType | eVisualFieldType

  /**
  * Result of logical analysis of compliance of the contents of the field
  * with the requirements of the specification
  * @type {eLDSParsingNotificationCodes | eLDSParsingErrorCodes.OK}
  */
  @IsDefined()
  @IsIn([...Object.values(eLDSParsingNotificationCodes), eLDSParsingErrorCodes.OK])
  @Default(eLDSParsingErrorCodes.OK)
  Status: eLDSParsingNotificationCodes | eLDSParsingErrorCodes.OK

  /**
  * Numeric value.
  * @type {number}
  */
  @IsDefined()
  @IsNumber()
  Data: number
}
