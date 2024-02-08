import { IsDefined, IsString, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { iTrfFtString, TrfFtString } from '@/models/common/trf-ft-string'

/**
* Structure contains information that serves as the distinguished name (identifier) of an object.
*/
export interface iRfidAttributeName {
  /**
  * Attribute identifier (OID ASCII string); contents of the identifier in the format "S1 (S2)",
  * where S1 – attribute name, S2 – identifier (OID string);
  * @type {string}
  */
  Type: string

  /**
  * Text value of the attribute (UTF8).
  * @type {iTrfFtString}
  */
  Value: iTrfFtString
}

/**
* Structure contains information that serves as the distinguished name (identifier) of an object.
*/
export class RfidAttributeName implements iRfidAttributeName {
  /**
  * Attribute identifier (OID ASCII string); contents of the identifier in the format "S1 (S2)",
  * where S1 – attribute name, S2 – identifier (OID string);
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  Type: string

  /**
  * Text value of the attribute (UTF8).
  * @type {TrfFtString}
  */
  @Expose()
  @IsDefined()
  @Type(() => TrfFtString)
  @ValidateNested()
  Value: TrfFtString
}
