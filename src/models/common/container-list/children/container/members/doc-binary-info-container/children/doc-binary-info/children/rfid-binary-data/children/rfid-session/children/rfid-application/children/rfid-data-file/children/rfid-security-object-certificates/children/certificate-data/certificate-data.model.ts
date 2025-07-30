import { IsDefined, IsNumber, IsString } from 'class-validator'
import { CertificateData as cCertificateData } from '@regulaforensics/document-reader-webclient'

/**
 * Certificate data
 */
export class CertificateData implements cCertificateData {
  /**
   * @type {string}
   */
  @IsDefined()
  @IsString()
  Data: string

  /**
   * @type {number}
   */
  @IsDefined()
  @IsNumber()
  Length: number
}
