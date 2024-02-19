import { IsBase64, IsDefined, IsIn, IsInt, IsNumber, IsString } from 'class-validator'
import { Expose } from 'class-transformer'

import { eGraphicFieldType, eLDSParsingErrorCodes, eLDSParsingNotificationCodes, eVisualFieldType } from '@/consts'
import { Default } from '@/decorators'


/**
* Structure is used to store an array of binary information that is a part of one of the informational data groups
*/
export interface iTrfFtBytes {
  /**
  * Logical type of the field
  * @type {eGraphicFieldType | eVisualFieldType}
  */
  Type: eGraphicFieldType | eVisualFieldType

  /**
  * Result of logical analysis of compliance of the contents of the field
  * with the requirements of the specification
  * @type {number}
  */
  Status: number

  /**
  * Length of Data array
  * @type {number}
  */
  Length: number

  /**
  * Binary data array. Base64 encoded.
  * @type {string}
  */
  Data: string
}

/**
* Structure is used to store an array of binary information that is a part of one of the informational data groups
*/
export class TrfFtBytes implements iTrfFtBytes {
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
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  @Default(1)
  Status: number

  /**
  * Length of Data array
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  Length: number

  /**
  * Binary data array. Base64 encoded.
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  @IsBase64()
  Data: string
}
