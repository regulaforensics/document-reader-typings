import { IsDefined, IsNumber, IsString } from 'class-validator'
import { CertificateData as iCertificateData } from '@regulaforensics/document-reader-webclient'

/**
 * Certificate data
 */
export class CertificateData implements iCertificateData {
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

export type { iCertificateData }
