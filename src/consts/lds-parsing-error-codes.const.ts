/**
* Enumeration contains a set of critical remarks detected during analysis of data structure used during SDK work.
* @enum {number}
*/
export enum eLDSParsingErrorCodes {
  /**
  * No remarks.
  */
  OK = 0x00000001,

  /**
  * Provided ASN.1-data are incorrect (common case – impossible to form elementary ASN.1-objects).
  */
  ASN_INCORRECT_DATA = 0x80000001,

  /**
  * Provided ASN.1-data are incorrect (not enough data).
  */
  ASN_NOT_ENOUGH_DATA = 0x80000002,

  /**
  * Other contents expected for complex ASN.1-object components by the structure, number of elements.
  */
  ASN_CONTENTS_UNEXPECTED_DATA = 0x80000003,

  /**
  * Incorrect format of ASN.1-object SignedData, which is the content of the document security object – common case.
  */
  ASN_SIGNED_DATA_INCORRECT_DATA = 0x80000008,

  /**
  * Incorrect format of encapsulated data of encapContentInfo ASN.1-object SignedData, which is the content of the
  * document security object.
  */
  ASN_SIGNED_DATA_ENCAP_CONTENTS_INCORRECT_DATA = 0x80000009,

  /**
  * Invalid version field format of SignedData ASN.1-object SignedData , which is the content of the document security
  * object.
  */
  ASN_SIGNED_DATA_VERSION_INCORRECT_DATA = 0x8000000A,

  /**
  * Invalid format of digestAlgorithms field of SignedData ASN.1-object, which is the content of the document security
  * object.
  */
  ASN_SIGNED_DATA_DIGEST_ALGORITHMS_INCORRECT_DATA = 0x80000011,

  /**
  * Incorrect format of LDSSecurityObject ASN.1-object, encapsulated in EF.SOD document security object.
  */
  ASN_LDS_OBJECT_INCORRECT_DATA = 0x80000013,

  /**
  * Incorrect format of version field of LDSSecurityObject ASN.1-object, encapsulated in EF.SOD document security
  * object.
  */
  ASN_LDS_OBJECT_VERSION_INCORRECT_DATA = 0x80000014,

  /**
  * Incorrect format of hashAlgorithm field of LDSSecurityObject ASN.1-object, encapsulated in EF.SOD document security
  * object.
  */
  ASN_LDS_OBJECT_DIGEST_ALGORITHM_INCORRECT_DATA = 0x80000015,

  /**
  * Incorrect format of dataGroupHashes field of LDSSecurityObject ASN.1-object, encapsulated in EF.SOD document
  * security object.
  */
  ASN_LDS_OBJECT_DG_HASHES_INCORRECT_DATA = 0x80000016,

  /**
  * Incorrect format of ldsVersionInfo field of LDSSecurityObject ASN.1-object, encapsulated in EF.SOD document
  * security object (for LDS version 1.8).
  */
  ASN_LDS_OBJECT_VERSION_INFO_INCORRECT_DATA = 0x80000012,

  /**
  * Incorrect format of Certificate ASN.1-object.
  */
  ASN_CERTIFICATE_INCORRECT_DATA = 0x80000017,

  /**
  * Incorrect format of version field of TBSCertificate ASN.1-object.
  */
  ASN_CERTIFICATE_VERSION_INCORRECT_DATA = 0x80000018,

  /**
  * Incorrect format of serialNumber field of TBSCertificate ASN.1-object.
  */
  ASN_CERTIFICATE_SN_INCORRECT_DATA = 0x80000019,

  /**
  * Incorrect format of signature field of TBSCertificate ASN.1-object.
  */
  ASN_CERTIFICATE_SIGNATURE_INCORRECT_DATA = 0x8000001A,

  /**
  * Incorrect format of issuer field of TBSCertificate ASN.1-object.
  */
  ASN_CERTIFICATE_ISSUER_INCORRECT_DATA = 0x8000001B,

  /**
  * Incorrect format of validity field of TBSCertificate ASN.1-object.
  */
  ASN_CERTIFICATE_VALIDITY_INCORRECT_DATA = 0x8000001C,

  /**
  * Incorrect format of subject field of TBSCertificate ASN.1-object.
  */
  ASN_CERTIFICATE_SUBJECT_INCORRECT_DATA = 0x8000001D,

  /**
  * Incorrect format of subjectPublicKeyInfo field of TBSCertificate ASN.1-object.
  */
  ASN_CERTIFICATE_SUBJECT_PK_INCORRECT_DATA = 0x8000001E,

  /**
  * Incorrect format of extensions field of TBSCertificate ASN.1-object.
  */
  ASN_CERTIFICATE_EXTENSIONS_INCORRECT_DATA = 0x8000001F,

  /**
  * Incorrect format of signerInfos field of SignedData ASN.1-object, which is the
  * contents of the document security object.
  */
  ASN_SIGNER_INFO_INCORRECT_DATA = 0x80000020,

  /**
  * Incorrect format of version field of SignedInfo ASN.1-object, containing data
  * of digital signature of the document security object.
  */
  ASN_SIGNER_INFO_VERSION_INCORRECT_DATA = 0x80000021,

  /**
  * Incorrect format of sid field of SignedInfo ASN.1-object, containing data of
  * digital signature of the document security object.
  */
  ASN_SIGNER_INFO_SID_INCORRECT_DATA = 0x80000022,

  /**
  * Incorrect format of digestAlgorithm field of SignedInfo ASN.1-object, containing data of digital signature
  * of the document security object.
  */
  ASN_SIGNER_INFO_DIGEST_ALG_INCORRECT_DATA = 0x80000023,

  /**
  * Incorrect format of signedAttrs field of SignedInfo ASN.1-object, containing
  * data of digital signature of the document security object.
  */
  ASN_SIGNER_INFO_SIGNED_ATTRS_INCORRECT_DATA = 0x80000024,

  /**
  * Incorrect format of signatureAlgorithm field of SignedInfo ASN.1-object,
  * containing data of digital signature of the document security object.
  */
  ASN_SIGNER_INFO_SIGN_ALG_INCORRECT_DATA = 0x80000025,

  /**
  * Incorrect format of signature field of SignedInfo ASN.1-object, containing data of digital signature
  * of the document security object.
  */
  ASN_SIGNER_INFO_SIGNATURE_INCORRECT_DATA = 0x80000026,

  /**
  * Incorrect format of unsignedAttrs field of SignedInfo ASN.1-object, containing data of digital signature
  * of the document security object.
  */
  ASN_SIGNER_INFO_UNSIGNED_ATTRS_INCORRECT_DATA = 0x80000027,

  /**
  * hashAlgorithm field of LDSSecurityObject ASN.1-object, encapsulated in EF.SOD
  * document security object, contains identifier (OID) of the unsupported
  * hash algorithm.
  */
  ICAO_LDS_OBJECT_UNSUPPORTED_DIGEST_ALGORITHM = 0x80000030,

  /**
  * No digital signature data object was found in the structure of the document security object.
  */
  ICAO_SIGNED_DATA_SIGNER_INFOS_EMPTY = 0x80000031,

  /**
  * digestAlgorithm field of SignerInfo ASN.1-object of document security object digital signature contains
  * identifier (OID) of unsupported hash algorithm.
  */
  ICAO_SIGNER_INFO_UNSUPPORTED_DIGEST_ALGORITHM = 0x80000032,

  /**
  * signatureAlgorithm field of SignerInfo ASN.1-object of document security object
  * digital signature contains identifier (OID) of unsupported digital signature algorithm.
  */
  ICAO_SIGNER_INFO_UNSUPPORTED_SIGNATURE_ALGORITHM = 0x80000033,

  /**
  * Message digest error
  */
  ICAO_SIGNER_INFO_MESSAGE_DIGEST_ERROR = 0x80000034,

  /**
  * Mandatory signedAttrs field of SignerInfo ASN.1-object of EF.SOD document security object is not found.
  */
  ICAO_SIGNER_INFO_SIGNED_ATTRS_MISSED = 0x80000036,

  /**
  * DS-certificate to verify the digital signature is not found.
  */
  AUTH_SIGNER_INFO_CANT_FIND_CERTIFICATE = 0x80000035,

  /**
  * Digital signature verification failed (common case).
  */
  AUTH_ERROR = 0x80000050,

  /**
  * Unsupported digital signature algorithm.
  */
  AUTH_UNSUPPORTED_SIGNATURE_ALGORITHM = 0x80000051,

  /**
  * Unsupported digital signature public key algorithm.
  */
  AUTH_UNSUPPORTED_PUBLIC_KEY_ALGORITHM = 0x80000052,

  /**
  * Digital signature algorithm does not correspond to the public key algorithm.
  */
  AUTH_MESSED_ALGORITHMS = 0x80000053,

  /**
  * Incorrect format of the public key data.
  */
  AUTH_PUBLIC_KEY_DATA_INVALID = 0x80000054,

  /**
  * Incorrect format of the public key parameters data.
  */
  AUTH_ALGORITHM_PARAMETERS_DATA_INVALID = 0x80000055,

  /**
  * Incorrect format of the digital signature data.
  */
  AUTH_SIGNATURE_DATA_INVALID = 0x80000056,

  /**
  * Unsupported data hash algorithm for the digital signature verification.
  */
  AUTH_UNSUPPORTED_DIGEST_ALGORITHM = 0x80000057,

  /**
  * Incorrect data of the digital signature (by length or compliance with a range of valid values).
  */
  AUTH_SIGNATURE_DATA_INCORRECT = 0x80000058,

  /**
  * ECDSA public key parameters are not defined. According to they are defined by
  * EcpkParameters ASN.1-object by one of three possible ways: explicitly, by the named
  * curve identifier, and can also be known a priori. In the case when the parameters are assigned implicity
  * or the specified identifier of the curve is not supported, a procedure of
  * verifying the digital signature becomes impossible.
  */
  AUTH_ALGORITHM_PARAMETERS_NOT_DEFINED = 0x80000059,

  /**
  * Digital signature verification failed.
  */
  AUTH_SIGNATURE_CHECK_FAILED = 0x8000005A,

  /**
  * Incorrect file ASN.1-data tag – the actual value is not as expected.
  */
  DG_WRONG_TAG = 0x80000070,

  /**
  * Incorrect format of the file ASN.1-data.
  */
  DG_CONTENTS_UNEXPECTED_DATA = 0x80000071,

  /**
  * Can't create specified cypher object for BAP procedure.
  */
  BAP_SYMMETRIC_CYPHER_CANT_INITIALIZE = 0x81000011,

  /**
  * PACE parameters are not defined at the time of the procedure – the corresponding PACEInfo is not found
  */
  PACE_INFO_NOT_AVAILABLE = 0x81000020,

  /**
  * Error of symmetric cipher object creating for PACE
  */
  PACE_SYMMETRIC_CYPHER_CANT_INITIALIZE = 0x81000021,

  /**
  * Error of key agreement object creating for PACE
  */
  PACE_KEY_AGREEMENT_CANT_INITIALIZE = 0x81000022,

  /**
  * Error of creating a pair of ephemeral keys for PACE
  */
  PACE_EPHEMERAL_KEYS_CANT_CREATE = 0x81000023,

  /**
  * Error of nonce decoding, received from the chip, for use in the mapping operation
  */
  PACE_MAPPING_CANT_DECODE_NONCE = 0x81000024,

  /**
  * Error of computing shared secret for PACE procedure.
  */
  PACE_SHARED_SECRET_CANT_CREATE = 0x81000025,

  /**
  * The parameters of ECDH public key it is allowed to use only
  * prime-curves with unpacked points.
  */
  PACE_DOMAIN_PARAMS_UNSUPPORTED_FORMAT = 0x81000026,

  /**
  * PACE ephemeral public keys (terminal and chip) differ in the length or the same
  */
  PACE_EPHEMERAL_KEYS_INCORRECT = 0x81000027,

  /**
  * PACE ephemeral public keys (terminal and chip) for use in the mapping operation differ in the length.
  */
  PACE_MAPPING_EPHEMERAL_KEYS_INCORRECT = 0x81000028,

  /**
  * Error of PACE mapping operation – failed to compute the new key pair
  */
  PACE_MAPPING_CANT_PERFORM = 0x81000029,

  /**
  * PACE authentication tokens of terminal and chip are different
  */
  PACE_NON_MATCHING_AUTH_TOKENS = 0x8100002A,

  /**
  * Incorrect PACE-CAM data received from the chip
  */
  PACE_CAM_DATA_INCORRECT = 0x8100002B,

  /**
  * PACE-CAM data verification failed
  */
  PACE_CAM_DATA_CANT_VERIFY = 0x8100002C,

  /**
  * PACE-CAM data verification failed (length, contents).
  */
  PACE_CAM_DATA_NON_MATCHING = 0x8100002D,

  /**
  * Incorrect Integrated Mapping scheme (allowed Elliptic Curves only)
  */
  PACE_IM_SCHEME_INCORRECT = 0x8100002E,

  /**
  * Can't perform Pseudo Random Mapping
  */
  PACE_IM_RANDOM_MAPPING_FAILED = 0x8100002F,

  /**
  * CA public key parameters are not defined at the time of the procedure – the corresponding
  * ChipAuthenticationPublicKeyInfo is not found
  */
  CA_CANT_FIND_PUBLIC_KEY = 0x81000030,

  /**
  * CA parameters (for version 2) are not defined at the time of the procedure –
  * the corresponding ChipAuthenticationInfo is not found
  */
  CA_CANT_FIND_INFO = 0x81000031,

  /**
  * Unsupported CA version in ChipAuthenticationInfo field of the ASN.1-object. The
  * values 1 or 2 are allowed&.
  */
  CA_INCORRECT_VERSION = 0x81000032,

  /**
  * Impossible to define the CA public key parameters at the time of the procedure.
  */
  CA_CANT_FIND_DOMAIN_PARAMETERS = 0x81000033,

  /**
  * Error of key object agreement creation for CA
  */
  CA_KEY_AGREEMENT_CANT_INITIALIZE = 0x81000034,

  /**
  * Unsupported CA public key algorithm
  */
  CA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM = 0x81000035,

  /**
  * Error of creating a pair of ephemeral keys for CA
  */
  CA_EPHEMERAL_KEYS_CANT_CREATE = 0x81000036,

  /**
  * Error of computing shared secret for CA
  */
  CA_SHARED_SECRET_CANT_CREATE = 0x81000037,

  /**
  * CA authentication tokens of terminal and chip are different
  */
  CA_NON_MATCHING_AUTH_TOKENS = 0x81000038,

  /**
  * Unsupported TA version in TerminalAuthenticationInfo field of the ASN.1-object.
  * The values 1 or 2 are allowed
  */
  TA_INCORRECT_VERSION = 0x81000040,

  /**
  * Error of building a certificate chain. DV- and terminal certificate must be present at least.
  */
  TA_CANT_BUILD_CERTIFICATE_CHAIN = 0x81000041,

  /**
  * Data of private key corresponding to the terminal certificate not found.
  */
  TA_CANT_FIND_IS_PRIVATE_KEY = 0x81000042,

  /**
  * Unsupported TA public key algorithm
  */
  TA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM = 0x81000043,

  /**
  * Error of TA digital signature calculation
  */
  TA_SIGNATURE_BUILDING_ERROR = 0x81000044,

  /**
  * Incorrect TA public key parameters
  */
  TA_INVALID_KEY_ALGORITHM_PARAMETERS = 0x81000045,

  /**
  * Unsupported AA public key algorithm
  */
  AA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM = 0x81000050,

  /**
  * Incorrect format of AA public key data
  */
  AA_PUBLIC_KEY_INCORRECT_DATA = 0x81000051,

  /**
  * Incorrect format of AA public key parameters data
  */
  AA_PUBLIC_KEY_INCORRECT_PARAMETERS = 0x81000052,

  /**
  * ECDSA public key parameters are not defined. According to they are defined by
  * EcpkParameters ASN.1-object by one of three possible ways: explicitly, by the named
  * curve identifier, can also be known a priori. In the case when the parameters are assigned
  * implicity or the specified identifier of the curve is not supported, a procedure of AA becomes impossible.
  */
  AA_PUBLIC_KEY_UNDEFINED_PARAMETERS = 0x81000053,

  /**
  * Incorrect data of AA digital signature (by length or compliance with a range of valid values).
  */
  AA_SIGNATURE_INCORRECT_DATA = 0x81000054,

  /**
  * Unsupported message recovery scheme. According to only algorithm of partial recovery is supported.
  */
  AA_UNSUPPORTED_RECOVERY_SCHEME = 0x81000055,

  /**
  * Unsupported trailer of recovered data – only ‘BC’ and ‘CC’ values are supported
  */
  AA_INCORRECT_TRAILER = 0x81000056,

  /**
  * Unsupported data hash algorithm
  */
  AA_UNSUPPORTED_DIGEST_ALGORITHM = 0x81000057,

  /**
  * It is impossible to find the sector public key data for RI
  */
  RI_SECTOR_KEY_CANT_FIND = 0x81000070,

  /**
  * Incorrect sector public key data
  */
  RI_SECTOR_KEY_INCORRECT_DATA = 0x81000071,

  /**
  * All RI sector public key key parameters must be defined explicitly
  */
  RI_SECTOR_KEY_INCOMPLETE_DATA = 0x81000072,

  /**
  * Absence of mandatory data fields in the structure of CV-certificate public key object
  */
  CV_CERTIFICATE_MISSING_MANDATORY_DATA_PK = 0x81000060,

  /**
  * Unsupported public key format in the CV-certificate (for TA) (See also description of
  * CA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM)
  */
  CV_CERTIFICATE_PUBLIC_KEY_UNSUPPORTED = 0x81000062,

  /**
  * Unsupported type of terminal in the CV-certificate
  */
  CV_CERTIFICATE_CHAT_UNSUPPORTED_TERMINAL_TYPE = 0x81000063,

  /**
  * Unsupported key algorithm in the terminal private key data
  */
  CV_CERTIFICATE_PRIVATE_KEY_UNSUPPORTED = 0x81000064,

  /**
  * Incorrect terminal private key parameters data
  */
  CV_CERTIFICATE_PRIVATE_KEY_INVALID_PARAMS = 0x81000065,

  /**
  * Incorrect format of CV-certificate TLV-data
  */
  CV_CERTIFICATE_INCORRECT_DATA = 0x81000160,

  /**
  * Incorrect format of the CV-certificate "Certificate Profile Identifier" field
  */
  CV_CERTIFICATE_CPI_INCORRECT_DATA = 0x81000161,

  /**
  * Incorrect format of the CV-certificate "Certificate Authority Reference" field
  */
  CV_CERTIFICATE_CAR_INCORRECT_DATA = 0x81000162,

  /**
  * Incorrect format of the CV-certificate public key data
  */
  CV_CERTIFICATE_PUBLIC_KEY_INCORRECT_DATA = 0x81000163,

  /**
  * Incorrect format of the CV-certificate "Certificate Holder Reference" field
  */
  CV_CERTIFICATE_CHR_INCORRECT_DATA = 0x81000164,

  /**
  * Incorrect format of the CV-certificate "Certificate Holder Authorization Template" field.
  */
  CV_CERTIFICATE_CHAT_INCORRECT_DATA = 0x81000165,

  /**
  * Invalid format of "Certificate Effective Date" field in CV-certificate
  */
  CV_CERTIFICATE_VALID_FROM_INCORRECT_DATA = 0x81000166,

  /**
  * Incorrect format of the CV-certificate "Certificate Effective Date" field
  */
  CV_CERTIFICATE_VALID_TO_INCORRECT_DATA = 0x81000167,

  /**
  * Incorrect format of the CV-certificate extensions
  */
  CV_CERTIFICATE_EXTENSIONS_INCORRECT_DATA = 0x81000168,

  /**
  * Incorrect format of the private key data
  */
  CV_CERTIFICATE_PRIVATE_KEY_INCORRECT_DATA = 0x81000169,

  /**
  * Corresponding private key is not found for the terminal certificate
  */
  CV_CERTIFICATE_PRIVATE_KEY_MISSING = 0x8100016A,
}
