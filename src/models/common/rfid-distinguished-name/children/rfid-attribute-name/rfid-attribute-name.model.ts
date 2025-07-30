import { IsDefined, IsString, ValidateNested } from 'class-validator'
import { RfidAttributeName as cRfidAttributeName } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { TrfFtString } from '@/models/common/trf-ft-string'

/**
 * Structure contains information that serves as the distinguished name (identifier) of an object.
 */
export class RfidAttributeName implements cRfidAttributeName {
  /**
   * Attribute identifier (OID ASCII string); contents of the identifier in the format "S1 (S2)",
   * where S1 – attribute name, S2 – identifier (OID string);
   * @type {string}
   */
  @IsDefined()
  @IsString()
  Type: string

  /**
   * Text value of the attribute (UTF8).
   * @type {TrfFtString}
   */
  @IsDefined()
  @Type(() => TrfFtString)
  @ValidateNested()
  Value: TrfFtString
}
