import { IsOptional, ValidateNested } from 'class-validator'
import { SecurityObjectCertificates as iSecurityObjectCertificates } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { CertificateData } from './children'

/**
 * Security object certificates
 */
export class RfidSecurityObjectCertificates implements iSecurityObjectCertificates {
  /**
   * @type {CertificateData}
   */
  @IsOptional()
  @Type(() => CertificateData)
  @ValidateNested()
  Certificate_Data?: CertificateData
}

export type { iSecurityObjectCertificates }
