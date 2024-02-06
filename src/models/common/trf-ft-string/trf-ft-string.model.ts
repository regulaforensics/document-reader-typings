import { IsDefined, IsIn, IsString } from 'class-validator'
import { Expose } from 'class-transformer'

import { eGraphicFieldType, eLDSParsingErrorCodes, eLDSParsingNotificationCodes, eVisualFieldType } from '@/consts'
import { Default } from '@/decorators'


/**
* Structure is used to store information about the numeric field (4 bytes) that is a part of one of the informational
* data groups.
*/
export interface iTrfFtString {
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
  * Mask of format of text information (for example, «YYMMDD» for date of birth)
  * @type {string}
  */
  Format: string

  /**
  * Numeric value.
  * @type {string}
  */
  Data: string
}

/**
* Structure is used to store information about the numeric field (4 bytes) that is a part of one of the informational
* data groups.
*/
export class TrfFtString implements iTrfFtString {
  /**
  * Logical type of the field
  * @type {eGraphicFieldType | eVisualFieldType}
  */
  @Expose()
  @IsDefined()
  @IsIn([...Object.values(eGraphicFieldType), ...Object.values(eVisualFieldType)])
  Type: eGraphicFieldType | eVisualFieldType

  /**
  * Result of logical analysis of compliance of the contents of the field
  * with the requirements of the specification
  * @type {eLDSParsingNotificationCodes | eLDSParsingErrorCodes.OK}
  */
  @Expose()
  @IsDefined()
  @IsIn([...Object.values(eLDSParsingNotificationCodes), eLDSParsingErrorCodes.OK])
  @Default(eLDSParsingErrorCodes.OK)
  Status: eLDSParsingNotificationCodes | eLDSParsingErrorCodes.OK

  /**
  * Mask of format of text information (for example, «YYMMDD» for date of birth)
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  @Default('')
  Format: string

  /**
  * Numeric value.
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  @Default('')
  Data: string
}
