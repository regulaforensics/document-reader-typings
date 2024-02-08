import { IsBase64, IsDefined, IsString } from 'class-validator'
import { Expose } from 'class-transformer'

/**
* Structure contains the data of one attribute of the digital signature object.
*/
export interface iRfidAttributeData {
  /**
  * Contents of the identifier in the format "S1 (S2)", where S1 – attribute name, S2 – identifier (OID string);
  * @type {string}
  */
  Type: string

  /**
  * Attribute binary data. Base64 encoded.
  * @type {string}
  */
  Data: string
}

/**
* Structure contains the data of one attribute of the digital signature object.
*/
export class RfidAttributeData implements iRfidAttributeData {
  /**
  * Contents of the identifier in the format "S1 (S2)", where S1 – attribute name, S2 – identifier (OID string);
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  Type: string

  /**
  * Attribute binary data. Base64 encoded.
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  @IsBase64()
  Data: string
}
