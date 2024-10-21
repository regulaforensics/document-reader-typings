import { IsBase64, IsDefined, IsString } from 'class-validator'

/**
* Structure contains the data of a certificate extension.
*/
export interface iRfidPkiExtension {
  /**
  * Extension identifier (OID, ASCII string);
  * Contents of the identifier in the format "S1 (S2)", where S1 – attribute name, S2 – identifier (OID string);
  * @type {string}
  */
  Type: string

  /**
  * Extension binary data. Base64 encoded.
  * @type {string}
  */
  Data: string
}

/**
* Structure contains the data of a certificate extension.
*/
export class RfidPkiExtension implements iRfidPkiExtension {
  /**
  * Extension identifier (OID, ASCII string);
  * Contents of the identifier in the format "S1 (S2)", where S1 – attribute name, S2 – identifier (OID string);
  * @type {string}
  */
  @IsDefined()
  @IsString()
  Type: string

  /**
  * Extension binary data. Base64 encoded.
  * @type {string}
  */
  @IsDefined()
  @IsString()
  @IsBase64()
  Data: string
}
