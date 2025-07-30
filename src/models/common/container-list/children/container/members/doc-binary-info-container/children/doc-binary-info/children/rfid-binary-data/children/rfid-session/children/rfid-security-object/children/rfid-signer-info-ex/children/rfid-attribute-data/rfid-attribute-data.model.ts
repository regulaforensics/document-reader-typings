import { IsBase64, IsDefined, IsString } from 'class-validator'
import { RfidAttributeData as cRfidAttributeData } from '@regulaforensics/document-reader-webclient'

/**
 * Structure contains the data of one attribute of the digital signature object.
 */
export class RfidAttributeData implements cRfidAttributeData {
  /**
   * Contents of the identifier in the format "S1 (S2)", where S1 – attribute name, S2 – identifier (OID string);
   * @type {string}
   */
  @IsDefined()
  @IsString()
  Type: string

  /**
   * Attribute binary data. Base64 encoded.
   * @type {string}
   */
  @IsDefined()
  @IsString()
  @IsBase64()
  Data: string
}

export type { RfidAttributeData as iRfidAttributeData }
