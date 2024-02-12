import { IsArray, IsBase64, IsDefined, IsEnum, IsIn, IsNumber, IsString, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { eLDSParsingErrorCodes, eRfidErrorCodes } from '@/consts'
import { Default } from '@/decorators'
import { iTrfFtBytes, TrfFtBytes } from '@/models/common/trf-ft-bytes'
import { iRfidDistinguishedName, RfidDistinguishedName } from '@/models/common/rfid-distinguished-name'
import { iRfidAttributeData, RfidAttributeData, iRfidCertificateEx, RfidCertificateEx } from './children'

/**
* Structure is used to describe the contents of a single copy of
* digital signature of the document security object and the results of its check within the
* context of the communication session with electronic document
*/
export interface iRfidSignerInfoEx {
  /**
  * Version of SignerInfo ASN.1 structure
  * @type {number}
  */
  Version: number

  /**
  * Identifier of the source object of the certificate needed to verify the digital signature;
  * @type {iRfidDistinguishedName}
  */
  Issuer: iRfidDistinguishedName

  /**
  * Serial number of the necessary certificate
  * @type {iTrfFtBytes}
  */
  SerialNumber: iTrfFtBytes

  /**
  * Signature object identifier of the necessary certificate
  * @type {iTrfFtBytes}
  */
  SubjectKeyIdentifier: iTrfFtBytes

  /**
  * Hash algorithm identifier (OID) for digital signature generation
  * @type {string}
  */
  DigestAlgorithm: string

  /**
  * List of the signed attributes
  * @type {iRfidAttributeData[]}
  */
  SignedAttributes: iRfidAttributeData[]

  /**
  * Digital signature algorithm identifier (OID)
  * @type {string}
  */
  SignatureAlgorithm: string

  /**
  * Binary data of the verified digital signature;
  * @type {iTrfFtBytes}
  */
  Signature: iTrfFtBytes

  /**
  * Result of the digital signature verification
  * @type {eRfidErrorCodes.ERROR_NOT_PERFORMED | eRfidErrorCodes.ERROR_FAILED | eRfidErrorCodes.ERROR_NO_ERROR}
  */
  PA_Status: eRfidErrorCodes.ERROR_NOT_PERFORMED | eRfidErrorCodes.ERROR_FAILED | eRfidErrorCodes.ERROR_NO_ERROR

  /**
  * Certificate chain, used for the digital signature verification.
  * @type {iRfidCertificateEx[]}
  */
  CertificateChain: iRfidCertificateEx[]

  /**
  * Binary data array used to calculate the hash value for digital signature verification. Base64 encoded.
  * @type {string}
  */
  DataToHash: string

  /**
  * List of remarks arisen during the analysis of the data structure
  * and performance of digital signature verification
  * @type {eLDSParsingErrorCodes[]}
  */
  Notifications: eLDSParsingErrorCodes[]
}

/**
* Structure is used to describe the contents of a single copy of
* digital signature of the document security object and the results of its check within the
* context of the communication session with electronic document
*/
export class RfidSignerInfoEx implements iRfidSignerInfoEx {
  /**
  * Version of SignerInfo ASN.1 structure
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  Version: number

  /**
  * Identifier of the source object of the certificate needed to verify the digital signature;
  * @type {RfidDistinguishedName}
  */
  @Expose()
  @IsDefined()
  @Type(() => RfidDistinguishedName)
  @ValidateNested()
  Issuer: RfidDistinguishedName

  /**
  * Serial number of the necessary certificate
  * @type {TrfFtBytes}
  */
  @Expose()
  @IsDefined()
  @Type(() => TrfFtBytes)
  @ValidateNested()
  SerialNumber: TrfFtBytes

  /**
  * Signature object identifier of the necessary certificate
  * @type {TrfFtBytes}
  */
  @Expose()
  @IsDefined()
  @Type(() => TrfFtBytes)
  @ValidateNested()
  SubjectKeyIdentifier: TrfFtBytes

  /**
  * Hash algorithm identifier (OID) for digital signature generation
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  DigestAlgorithm: string

  /**
  * List of the signed attributes
  * @type {RfidAttributeData[]}
  */
  @Expose()
  @IsDefined()
  @Type(() => RfidAttributeData)
  @ValidateNested({ each: true })
  @Default([])
  @IsArray()
  SignedAttributes: RfidAttributeData[]

  /**
  * Digital signature algorithm identifier (OID)
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  SignatureAlgorithm: string

  /**
  * Binary data of the verified digital signature;
  * @type {TrfFtBytes}
  */
  @Expose()
  @IsDefined()
  @Type(() => TrfFtBytes)
  @ValidateNested()
  Signature: TrfFtBytes

  /**
  * Result of the digital signature verification
  * @type {eRfidErrorCodes.ERROR_NOT_PERFORMED | eRfidErrorCodes.ERROR_FAILED | eRfidErrorCodes.ERROR_NO_ERROR}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eRfidErrorCodes)
  @Default(eRfidErrorCodes.ERROR_NOT_PERFORMED)
  @IsIn([
    eRfidErrorCodes.ERROR_NOT_PERFORMED,
    eRfidErrorCodes.ERROR_FAILED,
    eRfidErrorCodes.ERROR_NO_ERROR
  ])
  PA_Status: eRfidErrorCodes.ERROR_NOT_PERFORMED | eRfidErrorCodes.ERROR_FAILED | eRfidErrorCodes.ERROR_NO_ERROR

  /**
  * Certificate chain, used for the digital signature verification.
  * @type {RfidCertificateEx[]}
  */
  @Expose()
  @IsDefined()
  @Type(() => RfidCertificateEx)
  @ValidateNested({ each: true })
  @IsArray()
  @Default([])
  CertificateChain: RfidCertificateEx[]

  /**
  * Binary data array used to calculate the hash value for digital signature verification. Base64 encoded.
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  @IsBase64()
  DataToHash: string

  /**
  * List of remarks arisen during the analysis of the data structure
  * and performance of digital signature verification
  * @type {eLDSParsingErrorCodes[]}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eLDSParsingErrorCodes, { each: true })
  @Default([])
  @IsArray()
  Notifications: eLDSParsingErrorCodes[]
}
