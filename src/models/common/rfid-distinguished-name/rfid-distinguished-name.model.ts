import { IsArray, IsBase64, IsDefined, IsString, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { Default } from '@/decorators'
import { iTrfFtString, TrfFtString } from '@/models/common/trf-ft-string'
import { iRfidAttributeName, RfidAttributeName } from './children'

/**
* Structure contains information that serves as the distinguished name (identifier) of an object.
*/
export interface iRfidDistinguishedName {
  /**
  * Contents of the identifier in binary form. Base64 encoded.
  * @type {string}
  */
  Data: string

  /**
  * Text representation of the identifier (UTF8)
  * @type {iTrfFtString}
  */
  FriendlyName: iTrfFtString

  /**
  * List of individual attributes contained in the identifier
  * @type {iRfidAttributeName[]}
  */
  Attributes: iRfidAttributeName[]
}

/**
* Structure contains information that serves as the distinguished name (identifier) of an object.
*/
export class RfidDistinguishedName implements iRfidDistinguishedName {
  /**
  * Contents of the identifier in binary form. Base64 encoded.
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsBase64()
  @IsString()
  Data: string

  /**
  * Text representation of the identifier (UTF8)
  * @type {TrfFtString}
  */
  @Expose()
  @IsDefined()
  @Type(() => TrfFtString)
  @ValidateNested()
  FriendlyName: TrfFtString

  /**
  * List of individual attributes contained in the identifier
  * @type {iRfidAttributeName[]}
  */
  @Expose()
  @IsDefined()
  @Type(() => RfidAttributeName)
  @ValidateNested({ each: true })
  @IsArray()
  @Default([])
  Attributes: iRfidAttributeName[]
}
