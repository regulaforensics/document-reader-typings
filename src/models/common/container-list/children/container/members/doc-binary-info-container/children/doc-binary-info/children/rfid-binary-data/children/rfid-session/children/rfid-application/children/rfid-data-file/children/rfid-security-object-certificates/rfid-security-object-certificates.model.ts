import { IsOptional, ValidateNested } from 'class-validator'
import { SecurityObjectCertificates } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { CertificateData } from './children'

/**
 * Security object certificates
 */
export class RfidSecurityObjectCertificates implements SecurityObjectCertificates {
  /**
   * @type {CertificateData}
   */
  @IsOptional()
  @Type(() => CertificateData)
  @ValidateNested()
  Certificate_Data?: CertificateData
}

export type { RfidSecurityObjectCertificates as iSecurityObjectCertificates }
