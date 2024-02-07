import { IsArray, IsBase64, IsDefined, IsEnum, IsIn, IsNumber, IsString, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { eLDSParsingErrorCodes, eRfidCertificateOrigin, eRfidCertificateType, eRfidErrorCodes } from '@/consts'
import { Default } from '@/decorators'
import { iRfidDistinguishedName, RfidDistinguishedName } from '@/models/common/rfid-distinguished-name'
import { iTrfFtString, TrfFtString } from '@/models/common/trf-ft-string'
import { iRfidPkiExtension, iRfidValidity, RfidPkiExtension, RfidValidity, } from './children'


/**
* Structure is used to describe the certificate contents used for the digital signature verification
* of the document security object within the context of the communication session with electronic document.
*/
export interface iRfidCertificateEx {
  /**
  * Version of Certificate ASN.1 structure
  * @type {number}
  */
  Version: number

  /**
  * Certificate serial number. Base64 encoded.
  * @type {string}
  */
  SerialNumber: string

  /**
  * Certificate digital signature algorithm identifier (OID);
  * String in the format "S1 (S2)", where S1 – algorithm name, S2 – identifier (OID string).
  * @type {string}
  */
  SignatureAlgorithm: string

  /**
  * Identifier of the certificate issuer
  * @type {iRfidDistinguishedName}
  */
  Issuer: iRfidDistinguishedName

  /**
  * Certificate validity period
  * @type {iRfidValidity}
  */
  Validity: iRfidValidity

  /**
  * Identifier of the signature subject
  * @type {iRfidDistinguishedName}
  */
  Subject: iRfidDistinguishedName

  /**
  * Certificate public key algorithm identifier (OID);
  * String in the format "S1 (S2)", where S1 – algorithm name, S2 – identifier (OID string).
  * @type {string}
  */
  SubjectPKAlgorithm: string

  /**
  * List of the certificate extensions
  * @type {iRfidPkiExtension[]}
  */
  Extensions: iRfidPkiExtension[]

  /**
  * List of remarks arisen during the analysis of the certificate data
  * structure and its validity verification.
  * @type {eLDSParsingErrorCodes[]}
  */
  Notifications: eLDSParsingErrorCodes[]

  /**
  * Certificate origin
  * @type {eRfidCertificateOrigin}
  */
  Origin: eRfidCertificateOrigin

  /**
  * Certificate type
  * @type {eRfidCertificateType}
  */
  Type: eRfidCertificateType

  /**
  * The name of the certificate source file, if there is one (UTF8 string);
  * @type {iTrfFtString}
  */
  FileName: iTrfFtString

  /**
  * Result of the digital signature verification
  * @type {eRfidErrorCodes.ERROR_NOT_PERFORMED | eRfidErrorCodes.ERROR_NO_ERROR | eRfidErrorCodes.ERROR_SESSION_PA_SIGNATURE_CHECK_FAILED }
  */
  PA_Status: eRfidErrorCodes.ERROR_NOT_PERFORMED | eRfidErrorCodes.ERROR_NO_ERROR | eRfidErrorCodes.ERROR_SESSION_PA_SIGNATURE_CHECK_FAILED
}

/**
* Structure is used to describe the certificate contents used for the digital signature verification
* of the document security object within the context of the communication session with electronic document.
*/
export class RfidCertificateEx implements iRfidCertificateEx {
  /**
  * Version of Certificate ASN.1 structure
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  Version: number

  /**
  * Certificate serial number. Base64 encoded.
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsBase64()
  @IsString()
  SerialNumber: string

  /**
  * Certificate digital signature algorithm identifier (OID);
  * String in the format "S1 (S2)", where S1 – algorithm name, S2 – identifier (OID string).
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  SignatureAlgorithm: string

  /**
  * Identifier of the certificate issuer
  * @type {RfidDistinguishedName}
  */
  @Expose()
  @IsDefined()
  @Type(() => RfidDistinguishedName)
  @ValidateNested()
  Issuer: RfidDistinguishedName

  /**
  * Certificate validity period
  * @type {RfidValidity}
  */
  @Expose()
  @IsDefined()
  @Type(() => RfidValidity)
  @ValidateNested()
  Validity: RfidValidity

  /**
  * Identifier of the signature subject
  * @type {RfidDistinguishedName}
  */
  @Expose()
  @IsDefined()
  @Type(() => RfidDistinguishedName)
  @ValidateNested()
  Subject: RfidDistinguishedName

  /**
  * Certificate public key algorithm identifier (OID);
  * String in the format "S1 (S2)", where S1 – algorithm name, S2 – identifier (OID string).
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  SubjectPKAlgorithm: string

  /**
  * List of the certificate extensions
  * @type {RfidPkiExtension[]}
  */
  @Expose()
  @IsDefined()
  @Type(() => RfidPkiExtension)
  @ValidateNested({ each: true })
  @IsArray()
  @Default([])
  Extensions: RfidPkiExtension[]

  /**
  * List of remarks arisen during the analysis of the certificate data
  * structure and its validity verification.
  * @type {eLDSParsingErrorCodes[]}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eLDSParsingErrorCodes, { each: true })
  @IsArray()
  @Default([])
  Notifications: eLDSParsingErrorCodes[]

  /**
  * Certificate origin
  * @type {eRfidCertificateOrigin}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eRfidCertificateOrigin)
  @Default(eRfidCertificateOrigin.UNDEFINED)
  Origin: eRfidCertificateOrigin

  /**
  * Certificate type
  * @type {eRfidCertificateType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eRfidCertificateType)
  @Default(eRfidCertificateType.UNDEFINED)
  Type: eRfidCertificateType

  /**
  * The name of the certificate source file, if there is one (UTF8 string);
  * @type {TrfFtString}
  */
  @Expose()
  @IsDefined()
  @Type(() => TrfFtString)
  @ValidateNested()
  FileName: TrfFtString

  /**
  * Result of the digital signature verification
  * @type {eRfidErrorCodes.ERROR_NOT_PERFORMED | eRfidErrorCodes.ERROR_NO_ERROR | eRfidErrorCodes.ERROR_SESSION_PA_SIGNATURE_CHECK_FAILED }
  */
  @Expose()
  @IsDefined()
  @IsIn([eRfidErrorCodes.ERROR_NOT_PERFORMED, eRfidErrorCodes.ERROR_NO_ERROR, eRfidErrorCodes.ERROR_SESSION_PA_SIGNATURE_CHECK_FAILED])
  PA_Status: eRfidErrorCodes.ERROR_NOT_PERFORMED | eRfidErrorCodes.ERROR_NO_ERROR | eRfidErrorCodes.ERROR_SESSION_PA_SIGNATURE_CHECK_FAILED
}
