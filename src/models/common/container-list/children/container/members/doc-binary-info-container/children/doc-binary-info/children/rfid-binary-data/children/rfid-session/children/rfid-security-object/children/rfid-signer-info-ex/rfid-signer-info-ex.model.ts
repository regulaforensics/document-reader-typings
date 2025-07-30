import { IsArray, IsBase64, IsDefined, IsEnum, IsInt, IsNumber, IsString, ValidateNested } from 'class-validator'
import { RfidSignerInfoEx as cRfidSignerInfoEx } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { eRfidErrorCodes } from '@/consts'
import { TrfFtBytes } from '@/models/common/trf-ft-bytes'
import { RfidDistinguishedName } from '@/models/common/rfid-distinguished-name'
import { RfidAttributeData, RfidCertificateEx } from './children'

/**
 * Structure is used to describe the contents of a single copy of
 * digital signature of the document security object and the results of its check within the
 * context of the communication session with electronic document
 */
export class RfidSignerInfoEx implements cRfidSignerInfoEx {
  /**
   * Version of SignerInfo ASN.1 structure
   * @type {number}
   */
  @IsDefined()
  @IsNumber()
  Version: number

  /**
   * Identifier of the source object of the certificate needed to verify the digital signature;
   * @type {RfidDistinguishedName}
   */
  @IsDefined()
  @Type(() => RfidDistinguishedName)
  @ValidateNested()
  Issuer: RfidDistinguishedName

  /**
   * Serial number of the necessary certificate
   * @type {TrfFtBytes}
   */
  @IsDefined()
  @Type(() => TrfFtBytes)
  @ValidateNested()
  SerialNumber: TrfFtBytes

  /**
   * Signature object identifier of the necessary certificate
   * @type {TrfFtBytes}
   */
  @IsDefined()
  @Type(() => TrfFtBytes)
  @ValidateNested()
  SubjectKeyIdentifier: TrfFtBytes

  /**
   * Hash algorithm identifier (OID) for digital signature generation
   * @type {string}
   */
  @IsDefined()
  @IsString()
  DigestAlgorithm: string

  /**
   * List of the signed attributes
   * @type {RfidAttributeData[]}
   */
  @IsDefined()
  @Type(() => RfidAttributeData)
  @ValidateNested({ each: true })
  @IsArray()
  SignedAttributes: RfidAttributeData[]

  /**
   * Digital signature algorithm identifier (OID)
   * @type {string}
   */
  @IsDefined()
  @IsString()
  SignatureAlgorithm: string

  /**
   * Binary data of the verified digital signature;
   * @type {TrfFtBytes}
   */
  @IsDefined()
  @Type(() => TrfFtBytes)
  @ValidateNested()
  Signature: TrfFtBytes

  /**
   * Result of the digital signature verification
   * @type {eRfidErrorCodes}
   */
  @IsDefined()
  @IsEnum(eRfidErrorCodes)
  PA_Status: eRfidErrorCodes

  /**
   * Certificate chain, used for the digital signature verification.
   * @type {RfidCertificateEx[]}
   */
  @IsDefined()
  @Type(() => RfidCertificateEx)
  @ValidateNested({ each: true })
  @IsArray()
  CertificateChain: RfidCertificateEx[]

  /**
   * Binary data array used to calculate the hash value for digital signature verification. Base64 encoded.
   * @type {string}
   */
  @IsDefined()
  @IsString()
  @IsBase64()
  DataToHash: string

  /**
   * List of remarks arisen during the analysis of the data structure
   * and performance of digital signature verification
   * @type {number[]}
   */
  @IsDefined()
  @IsArray()
  @IsInt({ each: true })
  Notifications: number[]
}

export type { RfidSignerInfoEx as iRfidSignerInfoEx }
