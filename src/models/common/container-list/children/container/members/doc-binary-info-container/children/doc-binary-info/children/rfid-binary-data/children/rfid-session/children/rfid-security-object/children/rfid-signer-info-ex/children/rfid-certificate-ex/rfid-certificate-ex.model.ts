import { IsArray, IsBase64, IsDefined, IsEnum, IsInt, IsNumber, IsString, ValidateNested } from 'class-validator'
import { RfidCertificateEx as cRfidCertificateEx } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { eRfidCertificateOrigin, eRfidCertificateType, eRfidErrorCodes } from '@/consts'
import { RfidDistinguishedName } from '@/models/common/rfid-distinguished-name'
import { TrfFtString } from '@/models/common/trf-ft-string'
import { RfidPkiExtension, RfidValidity } from './children'

/**
 * Structure is used to describe the certificate contents used for the digital signature verification
 * of the document security object within the context of the communication session with electronic document.
 */
export class RfidCertificateEx implements cRfidCertificateEx {
  /**
   * Version of Certificate ASN.1 structure
   * @type {number}
   */
  @IsDefined()
  @IsNumber()
  Version: number

  /**
   * Certificate serial number. Base64 encoded.
   * @type {string}
   */
  @IsDefined()
  @IsBase64()
  @IsString()
  SerialNumber: string

  /**
   * Certificate digital signature algorithm identifier (OID);
   * String in the format "S1 (S2)", where S1 – algorithm name, S2 – identifier (OID string).
   * @type {string}
   */
  @IsDefined()
  @IsString()
  SignatureAlgorithm: string

  /**
   * Identifier of the certificate issuer
   * @type {RfidDistinguishedName}
   */
  @IsDefined()
  @Type(() => RfidDistinguishedName)
  @ValidateNested()
  Issuer: RfidDistinguishedName

  /**
   * Certificate validity period
   * @type {RfidValidity}
   */
  @IsDefined()
  @Type(() => RfidValidity)
  @ValidateNested()
  Validity: RfidValidity

  /**
   * Identifier of the signature subject
   * @type {RfidDistinguishedName}
   */
  @IsDefined()
  @Type(() => RfidDistinguishedName)
  @ValidateNested()
  Subject: RfidDistinguishedName

  /**
   * Certificate public key algorithm identifier (OID);
   * String in the format "S1 (S2)", where S1 – algorithm name, S2 – identifier (OID string).
   * @type {string}
   */
  @IsDefined()
  @IsString()
  SubjectPKAlgorithm: string

  /**
   * List of the certificate extensions
   * @type {RfidPkiExtension[]}
   */
  @IsDefined()
  @Type(() => RfidPkiExtension)
  @ValidateNested({ each: true })
  @IsArray()
  Extensions: RfidPkiExtension[]

  /**
   * List of remarks arisen during the analysis of the certificate data
   * structure and its validity verification.
   * @type {number[]}
   */
  @IsDefined()
  @IsArray()
  @IsInt({ each: true })
  Notifications: number[]

  /**
   * Certificate origin
   * @type {eRfidCertificateOrigin}
   */
  @IsDefined()
  @IsEnum(eRfidCertificateOrigin)
  Origin: eRfidCertificateOrigin

  /**
   * Certificate type
   * @type {eRfidCertificateType}
   */
  @IsDefined()
  @IsEnum(eRfidCertificateType)
  Type: eRfidCertificateType

  /**
   * The name of the certificate source file, if there is one (UTF8 string);
   * @type {TrfFtString}
   */
  @IsDefined()
  @Type(() => TrfFtString)
  @ValidateNested()
  FileName: TrfFtString

  /**
   * Result of the digital signature verification
   * @type {eRfidErrorCodes}
   */
  @IsDefined()
  @IsEnum(eRfidErrorCodes)
  PA_Status: eRfidErrorCodes
}

export type { RfidCertificateEx as iRfidCertificateEx }
