import { IsArray, IsBase64, IsDefined, IsString, ValidateNested } from 'class-validator'
import { RfidDistinguishedName as cRfidDistinguishedName } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { TrfFtString } from '@/models/common/trf-ft-string'
import { iRfidAttributeName, RfidAttributeName } from './children'

/**
 * Structure contains information that serves as the distinguished name (identifier) of an object.
 */
export class RfidDistinguishedName implements cRfidDistinguishedName {
  /**
   * Contents of the identifier in binary form. Base64 encoded.
   * @type {string}
   */
  @IsDefined()
  @IsBase64()
  @IsString()
  Data: string

  /**
   * Text representation of the identifier (UTF8)
   * @type {TrfFtString}
   */
  @IsDefined()
  @Type(() => TrfFtString)
  @ValidateNested()
  FriendlyName: TrfFtString

  /**
   * List of individual attributes contained in the identifier
   * @type {iRfidAttributeName[]}
   */
  @IsDefined()
  @Type(() => RfidAttributeName)
  @ValidateNested({ each: true })
  @IsArray()
  Attributes: iRfidAttributeName[]
}

export type { RfidDistinguishedName as iRfidDistinguishedName }
