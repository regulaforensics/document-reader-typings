/**
* The enumeration contains possible values of notification codes returned during the RFID chip processing.
* @enum {number}
*/
export enum eLDSParsingNotificationCodes {
  /**
  * ASN certificate: Incorrect version
  */
  ASN_CERTIFICATE_INCORRECT_VERSION = 0x90000001,

  /**
  * ASN certificate: Non-matching signature algorithm
  */
  ASN_CERTIFICATE_NON_MATCHING_SIGNATURE_ALGORITHM = 0x90000002,

  /**
  * ASN certificate: Incorrect time coding
  */
  ASN_CERTIFICATE_INCORRECT_TIME_CODING = 0x90000003,

  /**
  * ASN certificate: Incorrect use of generalized time
  */
  ASN_CERTIFICATE_INCORRECT_USE_OF_GENERALIZED_TIME = 0x90000004,

  /**
  * ASN certificate: Empty issuer
  */
  ASN_CERTIFICATE_EMPTY_ISSUER = 0x90000005,

  /**
  * ASN certificate: Empty subject
  */
  ASN_CERTIFICATE_EMPTY_SUBJECT = 0x90000006,

  /**
  * ASN certificate: Unsupported critical extension
  */
  ASN_CERTIFICATE_UNSUPPORTED_CRITICAL_EXTENSION = 0x90000008,

  /**
  * ASN certificate: Forced default CSCA role
  */
  ASN_CERTIFICATE_FORCED_DEFAULT_CSCA_ROLE = 0x9000000E,

  /**
  * ASN certificate: Forced Default DS role
  */
  ASN_CERTIFICATE_FORCED_DEFAULT_DS_ROLE = 0x9000000F,

  /**
  * ASN certificate: Incorrect issuer subject DS
  */
  ASN_CERTIFICATE_INCORRECT_ISSUER_SUBJECT_DS = 0x90000010,

  /**
  * ASN certificate: Duplicating extensions
  */
  ASN_CERTIFICATE_DUPLICATING_EXTENSIONS = 0x90000017,

  /**
  * ICAO certificate: Version missed
  */
  ICAO_CERTIFICATE_VERSION_MISSED = 0x90000200,

  /**
  * ICAO certificate: Version incorrect
  */
  ICAO_CERTIFICATE_VERSION_INCORRECT = 0x90000201,

  /**
  * ICAO certificate: Issuer country missed
  */
  ICAO_CERTIFICATE_ISSUER_COUNTRY_MISSED = 0x90000202,

  /**
  * ICAO certificate: Issuer common name missed
  */
  ICAO_CERTIFICATE_ISSUER_COMMON_NAME_MISSED = 0x90000203,

  /**
  * ICAO certificate: Issuer country non-compliant
  */
  ICAO_CERTIFICATE_ISSUER_COUNTRY_NON_COMPLIANT = 0x90000204,

  /**
  * ICAO certificate: Subject country missed
  */
  ICAO_CERTIFICATE_SUBJECT_COUNTRY_MISSED = 0x90000205,

  /**
  * ICAO certificate: Subject common name missed
  */
  ICAO_CERTIFICATE_SUBJECT_COMMON_NAME_MISSED = 0x90000206,

  /**
  * ICAO certificate: Subject country non-compliant
  */
  ICAO_CERTIFICATE_SUBJECT_COUNTRY_NON_COMPLIANT = 0x90000207,

  /**
  * ICAO certificate: Using non-compliant data
  */
  ICAO_CERTIFICATE_USING_NON_COMPLIANT_DATA = 0x90000208,

  /**
  * ICAO certificate: Unsupported signature algorithm
  */
  ICAO_CERTIFICATE_UNSUPPORTED_SIGNATURE_ALGORITHM = 0x90000209,

  /**
  * ICAO certificate: Unsupported public key algorithm
  */
  ICAO_CERTIFICATE_UNSUPPORTED_PUBLIC_KEY_ALGORITHM = 0x9000020A,

  /**
  * ICAO certificate: Missed extensions
  */
  ICAO_CERTIFICATE_MISSED_EXTENSIONS = 0x9000020B,

  /**
  * ICAO certificate: Validity
  */
  ICAO_CERTIFICATE_VALIDITY = 0x9000020C,

  /**
  * ICAO certificate extension: Using non-compliant data
  */
  ICAO_CERTIFICATE_EXT_USING_NON_COMPLIANT_DATA = 0x9000020D,

  /**
  * ICAO certificate extension: Key usage missed
  */
  ICAO_CERTIFICATE_EXT_KEY_USAGE_MISSED = 0x9000020E,

  /**
  * ICAO certificate extension: Key usage not critical
  */
  ICAO_CERTIFICATE_EXT_KEY_USAGE_NOT_CRITICAL = 0x9000020F,

  /**
  * ICAO certificate extension: Key usage incorrect data
  */
  ICAO_CERTIFICATE_EXT_KEY_USAGE_INCORRECT_DATA = 0x90000210,

  /**
  * ICAO certificate extension: Basic constraints missed
  */
  ICAO_CERTIFICATE_EXT_BASIC_CONSTRAINTS_MISSED = 0x90000211,

  /**
  * ICAO certificate extension: Basic constraints incorrect usage 1
  */
  ICAO_CERTIFICATE_EXT_BASIC_CONSTRAINTS_INCORRECT_USAGE_1 = 0x90000212,

  /**
  * ICAO certificate extension: Basic constraints incorrect usage 2
  */
  ICAO_CERTIFICATE_EXT_BASIC_CONSTRAINTS_INCORRECT_USAGE_2 = 0x90000213,

  /**
  * ICAO certificate extension: Basic constraints not critical
  */
  ICAO_CERTIFICATE_EXT_BASIC_CONSTRAINTS_NOT_CRITICAL = 0x90000214,

  /**
  * ICAO certificate extension: Basic constraints incorrect data
  */
  ICAO_CERTIFICATE_EXT_BASIC_CONSTRAINTS_INCORRECT_DATA = 0x90000215,

  /**
  * ICAO certificate extension: Basic constraints path LenC missed
  */
  ICAO_CERTIFICATE_EXT_BASIC_CONSTRAINTS_PATH_LENC_MISSED = 0x90000216,

  /**
  * ICAO certificate extension: Basic constraints path LenC incorrect
  */
  ICAO_CERTIFICATE_EXT_BASIC_CONSTRAINTS_PATH_LENC_INCORRECT = 0x90000217,

  /**
  * ICAO certificate extension: Ext key usage not critical
  */
  ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_NOT_CRITICAL = 0x90000218,

  /**
  * ICAO certificate extension: Ext key usage incorrect usage
  */
  ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_INCORRECT_USAGE = 0x90000219,

  /**
  * ICAO certificate extension: Ext key usage incorrect data
  */
  ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_INCORRECT_DATA = 0x9000021A,

  /**
  * ICAO certificate extension Auth key: ID missed
  */
  ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_MISSED = 0x9000021B,

  /**
  * ICAO certificate extension Auth key: Incorrect data
  */
  ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_INCORRECT_DATA = 0x9000021C,

  /**
  * ICAO certificate extension Auth key: Key ID missed
  */
  ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_KEY_ID_MISSED = 0x9000021D,

  /**
  * ICAO certificate extension: Subject key ID missed
  */
  ICAO_CERTIFICATE_EXT_SUBJECT_KEY_ID_MISSED = 0x9000021E,

  /**
  * ICAO certificate extension: Subject key ID incorrect data
  */
  ICAO_CERTIFICATE_EXT_SUBJECT_KEY_ID_INCORRECT_DATA = 0x9000021F,

  /**
  * ICAO certificate extension: Private key UP missed
  */
  ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_MISSED = 0x90000220,

  /**
  * ICAO certificate extension: Private key UP incorrect data
  */
  ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_INCORRECT_DATA = 0x90000221,

  /**
  * ICAO certificate extension: Private key UP empty
  */
  ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_EMPTY = 0x90000222,

  /**
  * ICAO certificate extension: Subject alt name missed
  */
  ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_MISSED = 0x90000223,

  /**
  * ICAO certificate extension: Subject alt name incorrect data
  */
  ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_INCORRECT_DATA = 0x90000224,

  /**
  * ICAO certificate extension: Subject alt name empty
  */
  ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_EMPTY = 0x90000225,

  /**
  * ICAO certificate extension: Subject alt name non-compliant
  */
  ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_NON_COMPLIANT = 0x90000226,

  /**
  * ICAO certificate extension: Subject alt name critical
  */
  ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_CRITICAL = 0x90000228,

  /**
  * ICAO certificate extension: Subject alt name DN empty
  */
  ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_EMPTY = 0x90000229,

  /**
  * ICAO certificate extension: Subject alt name DN incorrect
  */
  ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_INCORRECT = 0x9000022A,

  /**
  * ICAO certificate extension: Subject alt name DN non-compliant
  */
  ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_NON_COMPLIANT = 0x9000022B,

  /**
  * ICAO certificate extension: Issuer alt name missed
  */
  ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_MISSED = 0x9000022C,

  /**
  * ICAO certificate extension: Issuer alt name incorrect data
  */
  ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_INCORRECT_DATA = 0x9000022D,

  /**
  * ICAO certificate extension: Issuer alt name empty
  */
  ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_EMPTY = 0x9000022E,

  /**
  * ICAO certificate extension: Issuer alt name non-compliant
  */
  ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_NON_COMPLIANT = 0x9000022F,

  /**
  * ICAO certificate extension: Issuer alt name critical
  */
  ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_CRITICAL = 0x90000231,

  /**
  * ICAO certificate extension: Issuer alt name DN empty
  */
  ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_EMPTY = 0x90000232,

  /**
  * ICAO certificate extension: Issuer alt name DN incorrect
  */
  ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_INCORRECT = 0x90000233,

  /**
  * ICAO certificate extension: Issuer alt name DN non-compliant
  */
  ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_NON_COMPLIANT = 0x90000234,

  /**
  * ICAO certificate extension Doc type list: Missed
  */
  ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_MISSED = 0x90000235,

  /**
  * ICAO certificate extension Doc type list: Incorrect data
  */
  ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_INCORRECT_DATA = 0x90000236,

  /**
  * ICAO certificate extension Doc type list: Version
  */
  ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_VERSION = 0x90000237,

  /**
  * ICAO certificate extension Doc type list: Doc types
  */
  ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_DOC_TYPES = 0x90000238,

  /**
  * ICAO certificate extension Doc type list: Doc types empty
  */
  ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_DOC_TYPES_EMPTY = 0x90000239,

  /**
  * ICAO certificate extension: Dert policies incorrect data
  */
  ICAO_CERTIFICATE_EXT_CERT_POLICIES_INCORRECT_DATA = 0x9000023A,

  /**
  * ICAO certificate extension: Cert policies empty
  */
  ICAO_CERTIFICATE_EXT_CERT_POLICIES_EMPTY = 0x9000023B,

  /**
  * ICAO certificate extension: Cert policies policy ID missed
  */
  ICAO_CERTIFICATE_EXT_CERT_POLICIES_POLICY_ID_MISSED = 0x9000023C,

  /**
  * ICAO certificate extension: CRL dist point missed
  */
  ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_MISSED = 0x9000023D,

  /**
  * ICAO certificate extension: CRL dist point incorrect data
  */
  ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_INCORRECT_DATA = 0x9000023E,

  /**
  * ICAO certificate extension: CRL dist point empty
  */
  ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_EMPTY = 0x9000023F,

  /**
  * ICAO certificate extension: CRL dist point point missed
  */
  ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_POINT_MISSED = 0x90000240,

  /**
  * ICAO certificate: SN non-compliant
  */
  ICAO_CERTIFICATE_SN_NON_COMPLIANT = 0x90000241,

  /**
  * ICAO certificate: Issuer SN non-compliant
  */
  ICAO_CERTIFICATE_ISSUER_SN_NON_COMPLIANT = 0x90000242,

  /**
  * ICAO certificate: Subject SN non-compliant
  */
  ICAO_CERTIFICATE_SUBJECT_SN_NON_COMPLIANT = 0x90000243,

  /**
  * ICAO certificate: Issuer attribute non-compliant
  */
  ICAO_CERTIFICATE_ISSUER_ATTRIBUTE_NON_COMPLIANT = 0x90000244,

  /**
  * ICAO certificate: Subject attribute non-compliant
  */
  ICAO_CERTIFICATE_SUBJECT_ATTRIBUTE_NON_COMPLIANT = 0x90000245,

  /**
  * ICAO certificate: Issuer subject country non-matching
  */
  ICAO_CERTIFICATE_ISSUER_SUBJECT_COUNTRY_NON_MATCHING = 0x90000246,

  /**
  * ICAO certificate extension: CSCA alt names non-matching
  */
  ICAO_CERTIFICATE_EXT_CSCA_ALT_NAMES_NON_MATCHING = 0x90000247,

  /**
  * ICAO certificate extension: Name change incorrect data
  */
  ICAO_CERTIFICATE_EXT_NAME_CHANGE_INCORRECT_DATA = 0x90000248,

  /**
  * ICAO certificate extension: Name change non-compliant
  */
  ICAO_CERTIFICATE_EXT_NAME_CHANGE_NON_COMPLIANT = 0x90000249,

  /**
  * ICAO certificate extension: Name change critical
  */
  ICAO_CERTIFICATE_EXT_NAME_CHANGE_CRITICAL = 0x9000024A,

  /**
  * ICAO certificate extension Doc type list: non-compliant
  */
  ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_NON_COMPLIANT = 0x9000024B,

  /**
  * ICAO certificate extension Doc type list: Critical
  */
  ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_CRITICAL = 0x9000024C,

  /**
  * ICAO certificate extension: Optional critical
  */
  ICAO_CERTIFICATE_EXT_OPTIONAL_CRITICAL = 0x9000024D,

  /**
  * ICAO certificate: Subject non-compliant
  */
  ICAO_CERTIFICATE_SUBJECT_NON_COMPLIANT = 0x9000024E,

  /**
  * ICAO certificate: Subject common name non-compliant
  */
  ICAO_CERTIFICATE_SUBJECT_COMMON_NAME_NON_COMPLIANT = 0x9000024F,

  /**
  * ICAO COM: LDS version incorrect
  */
  ICAO_COM_LDS_VERSION_INCORRECT = 0x90000020,

  /**
  * ICAO COM: LDS version missing
  */
  ICAO_COM_LDS_VERSION_MISSING = 0x90000021,

  /**
  * ICAO COM: Unicode version incorrect
  */
  ICAO_COM_UNICODE_VERSION_INCORRECT = 0x90000022,

  /**
  * ICAO COM: Unicode version missing
  */
  ICAO_COM_UNICODE_VERSION_MISSING = 0x90000023,

  /**
  * ICAO COM: DGPM incorrect
  */
  ICAO_COM_DGPM_INCORRECT = 0x90000024,

  /**
  * ICAO COM: DGPM missing
  */
  ICAO_COM_DGPM_MISSING = 0x90000025,

  /**
  * ICAO COM: DGPM unexpected
  */
  ICAO_COM_DGPM_UNEXPECTED = 0x90000026,

  /**
  * ICAO application: LDS version unsupported
  */
  ICAO_APPLICATION_LDS_VERSION_UNSUPPORTED = 0x90000030,

  /**
  * ICAO application: Unicode version unsupported
  */
  ICAO_APPLICATION_UNICODE_VERSION_UNSUPPORTED = 0x90000031,

  /**
  * ICAO application: LDS version inconsistent
  */
  ICAO_APPLICATION_LDS_VERSION_INCONSISTENT = 0x90000032,

  /**
  * ICAO application: Unicode version inconsistent
  */
  ICAO_APPLICATION_UNICODE_VERSION_INCONSISTENT = 0x90000033,

  /**
  * ASN signed data: OID incorrect
  */
  ASN_SIGNED_DATA_OID_INCORRECT = 0x90000100,

  /**
  * ASN signed data: Version incorrect
  */
  ASN_SIGNED_DATA_VERSION_INCORRECT = 0x900001A0,

  /**
  * ASN signed data: Content OID incorrect
  */
  ASN_SIGNED_DATA_CONTENT_OID_INCORRECT = 0x900001A1,

  /**
  * ICAO signed data: Version incorrect
  */
  ICAO_SIGNED_DATA_VERSION_INCORRECT = 0x90000101,

  /**
  * ICAO signed data: Digest algorithms empty
  */
  ICAO_SIGNED_DATA_DIGEST_ALGORITHMS_EMPTY = 0x90000102,

  /**
  * ICAO signed data: Digest algorithms unsupported
  */
  ICAO_SIGNED_DATA_DIGEST_ALGORITHMS_UNSUPPORTED = 0x90000103,

  /**
  * ICAO signed data: Signer infos multiple entries
  */
  ICAO_SIGNED_DATA_SIGNER_INFOS_MULTIPLE_ENTRIES = 0x90000109,

  /**
  * ICAO signed data: Certificates missed
  */
  ICAO_SIGNED_DATA_CERTIFICATES_MISSED = 0x900001B0,

  /**
  * ICAO signed data: Certificates empty
  */
  ICAO_SIGNED_DATA_CERTIFICATES_EMPTY = 0x900001B1,

  /**
  * ICAO signed data: CRLs incorrect usage
  */
  ICAO_SIGNED_DATA_CRLS_INCORRECT_USAGE = 0x900001B2,

  /**
  * ICAO LDS object: Incorrect content OID
  */
  ICAO_LDS_OBJECT_INCORRECT_CONTENT_OID = 0x90000104,

  /**
  * ICAO LDS object: DG number incorrect
  */
  ICAO_LDS_OBJECT_DG_NUMBER_INCORRECT = 0x90000105,

  /**
  * ICAO LDS object: DG hash missing
  */
  ICAO_LDS_OBJECT_DG_HASH_MISSING = 0x90000106,

  /**
  * ICAO LDS object: DG hash extra
  */
  ICAO_LDS_OBJECT_DG_HASH_EXTRA = 0x90000107,

  /**
  * ICAO LDS object: Version incorrect
  */
  ICAO_LDS_OBJECT_VERSION_INCORRECT = 0x90000108,

  /**
  * ICAO master list: Version incorrect
  */
  ICAO_MASTER_LIST_VERSION_INCORRECT = 0x900001C0,

  /**
  * ICAO Deviation list: Version incorrect
  */
  ICAO_DEVIATION_LIST_VERSION_INCORRECT = 0x900001C8,

  /**
  * BSI: Defect  list version incorrect
  */
  BSI_DEFECT_LIST_VERSION_INCORRECT = 0x900001D0,

  /**
  * BSI: Black list version incorrect
  */
  BSI_BLACK_LIST_VERSION_INCORRECT = 0x900001D8,

  /**
  * ASN signer info: Version incorrect
  */
  ASN_SIGNER_INFO_VERSION_INCORRECT = 0x9000010A,

  /**
  * ASN signer info: SID incorrect choice
  */
  ASN_SIGNER_INFO_SID_INCORRECT_CHOICE = 0x9000010B,

  /**
  * ASN signer info: SID digest algorithm not listed
  */
  ASN_SIGNER_INFO_SID_DIGEST_ALGORITHM_NOT_LISTED = 0x9000010C,

  /**
  * ASN signer info: Message digest attr missing
  */
  ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_MISSING = 0x9000010D,

  /**
  * ASN signer info: Message digest attr data
  */
  ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_DATA = 0x9000010E,

  /**
  * ASN signer info: Message digest attr value
  */
  ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_VALUE = 0x9000010F,

  /**
  * ASN signer info: Content type attr missing
  */
  ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_MISSING = 0x90000110,

  /**
  * ASN signer info: Content type attr data
  */
  ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_DATA = 0x90000111,

  /**
  * ASN signer info: Content type attr value
  */
  ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_VALUE = 0x90000112,

  /**
  * ASN signer info: Signing time attr missing
  */
  ASN_SIGNER_INFO_SIGNING_TIME_ATTR_MISSING = 0x9000011B,

  /**
  * ASN signer info: Signing time attr data
  */
  ASN_SIGNER_INFO_SIGNING_TIME_ATTR_DATA = 0x9000011C,

  /**
  * ASN signer info: Signing time attr value
  */
  ASN_SIGNER_INFO_SIGNING_TIME_ATTR_VALUE = 0x9000011D,

  /**
  * ASN signer info: List content description attr missing
  */
  ASN_SIGNER_INFO_LIST_CONTENT_DESCRIPTION_ATTR_MISSING = 0x9000011E,

  /**
  * ASN signer info: List content description attr data
  */
  ASN_SIGNER_INFO_LIST_CONTENT_DESCRIPTION_ATTR_DATA = 0x9000011F,

  /**
  * Auth signer info: Certificate validity
  */
  AUTH_SIGNER_INFO_CERTIFICATE_VALIDITY = 0x90000115,

  /**
  * Auth signer info: Certificate root is not trusted
  */
  AUTH_SIGNER_INFO_CERTIFICATE_ROOT_IS_NOT_TRUSTED = 0x90000116,

  /**
  * Auth signer info: Certificate cannot find CSCA
  */
  AUTH_SIGNER_INFO_CERTIFICATE_CANNOT_FIND_CSCA = 0x90000117,

  /**
  * Auth signer info: Certificate revoked
  */
  AUTH_SIGNER_INFO_CERTIFICATE_REVOKED = 0x90000118,

  /**
  * Auth signer info: Certificate signature invalid
  */
  AUTH_SIGNER_INFO_CERTIFICATE_SIGNATURE_INVALID = 0x90000119,

  /**
  * Notification: Unsupported image format
  */
  UNSUPPORTED_IMAGE_FORMAT = 0x9000011A,

  /**
  * MRZ: Document type unknown
  */
  MRZ_DOCUMENT_TYPE_UNKNOWN = 0x00022008,

  /**
  * MRZ: Issuing state syntax error
  */
  MRZ_ISSUING_STATE_SYNTAX_ERROR = 0x00022009,

  /**
  * MRZ: Name is void
  */
  MRZ_NAME_IS_VOID = 0x0002200A,

  /**
  * MRZ: Number incorrect checksum
  */
  MRZ_NUMBER_INCORRECT_CHECKSUM = 0x0002200D,

  /**
  * MRZ: Nationality syntax error
  */
  MRZ_NATIONALITY_SYNTAX_ERROR = 0x0002200E,

  /**
  * MRZ: DOB syntax error
  */
  MRZ_DOB_SYNTAX_ERROR = 0x0002200F,

  /**
  * MRZ: DOB error
  */
  MRZ_DOB_ERROR = 0x00022010,

  /**
  * MRZ: DOB incorrect checksum
  */
  MRZ_DOB_INCORRECT_CHECKSUM = 0x00022011,

  /**
  * MRZ: Sex incorrect
  */
  MRZ_SEX_INCORRECT = 0x00022012,

  /**
  * MRZ: DOE syntax error
  */
  MRZ_DOE_SYNTAX_ERROR = 0x00022013,

  /**
  * MRZ: DOE error
  */
  MRZ_DOE_ERROR = 0x00022014,

  /**
  * MRZ: DOE incorrect checksum
  */
  MRZ_DOE_INCORRECT_CHECKSUM = 0x00022015,

  /**
  * MRZ: Optional data incorrect checksum
  */
  MRZ_OPTIONAL_DATA_INCORRECT_CHECKSUM = 0x00022016,

  /**
  * MRZ: Incorrect checksum
  */
  MRZ_INCORRECT_CHECKSUM = 0x00022017,

  /**
  * MRZ: Incorrect
  */
  MRZ_INCORRECT = 0x00022018,

  /**
  * Biometrics: Format owner missing
  */
  BIOMETRICS_FORMAT_OWNER_MISSING = 0x90010000,

  /**
  * Biometrics: Format owner incorrect
  */
  BIOMETRICS_FORMAT_OWNER_INCORRECT = 0x90020000,

  /**
  * Biometrics: Format type missing
  */
  BIOMETRICS_FORMAT_TYPE_MISSING = 0x90030000,

  /**
  * Biometrics: Format type incorrect
  */
  BIOMETRICS_FORMAT_TYPE_INCORRECT = 0x90040000,

  /**
  * Biometrics: Type incorrect
  */
  BIOMETRICS_TYPE_INCORRECT = 0x90050000,

  /**
  * Biometrics: Subtype missing
  */
  BIOMETRICS_SUBTYPE_MISSING = 0x90060000,

  /**
  * Biometrics: Subtype incorrect
  */
  BIOMETRICS_SUBTYPE_INCORRECT = 0x90070000,

  /**
  * Biometrics: BDB image missing
  */
  BIOMETRICS_BDB_IMAGE_MISSING = 0x90080000,

  /**
  * Biometrics: BDB format ID incorrect
  */
  BIOMETRICS_BDB_FORMAT_ID_INCORRECT = 0x90090000,

  /**
  * Biometrics: BDB version incorrect
  */
  BIOMETRICS_BDB_VERSION_INCORRECT = 0x900A0000,

  /**
  * Biometrics: BDB data length incorrect
  */
  BIOMETRICS_BDB_DATA_LENGTH_INCORRECT = 0x900B0000,

  /**
  * Biometrics: BDB Data Gender
  */
  BIOMETRICS_BDB_DATA_GENDER = 0x90100000,

  /**
  * Biometrics: BDB Data Eye Color
  */
  BIOMETRICS_BDB_DATA_EYE_COLOR = 0x90110000,

  /**
  * Biometrics: BDB Data Hair Color
  */
  BIOMETRICS_BDB_DATA_HAIR_COLOR = 0x90120000,

  /**
  * Biometrics: BDB Data Pose Angle Yaw
  */
  BIOMETRICS_BDB_DATA_POSE_ANGLE_YAW = 0x90130000,

  /**
  * Biometrics: BDB Data Pose Angle Pitch
  */
  BIOMETRICS_BDB_DATA_POSE_ANGLE_PITCH = 0x90140000,

  /**
  * Biometrics: BDB Data Pose Angle Roll
  */
  BIOMETRICS_BDB_DATA_POSE_ANGLE_ROLL = 0x90150000,

  /**
  * Biometrics: BDB Data Pose Angle U Yaw
  */
  BIOMETRICS_BDB_DATA_POSE_ANGLE_U_YAW = 0x90160000,

  /**
  * Biometrics: BDB Data Pose Angle U Pitch
  */
  BIOMETRICS_BDB_DATA_POSE_ANGLE_U_PITCH = 0x90170000,

  /**
  * Biometrics: BDB Data Pose Angle U Roll
  */
  BIOMETRICS_BDB_DATA_POSE_ANGLE_U_ROLL = 0x90180000,

  /**
  * Biometrics: BDB Data Face Image Type
  */
  BIOMETRICS_BDB_DATA_FACE_IMAGE_TYPE = 0x90190000,

  /**
  * Biometrics: BDB Data Image Data Type
  */
  BIOMETRICS_BDB_DATA_IMAGE_DATA_TYPE = 0x901A0000,

  /**
  * SI: PACE Info Unsupported Std Parameters
  */
  SI_PACE_INFO_UNSUPPORTED_STD_PARAMETERS = 0x91000000,

  /**
  * SI: PACE Info Deprecated Version
  */
  SI_PACE_INFO_DEPRECATED_VERSION = 0x91000001,

  /**
  * SI: PACE Domain Params Using Std Ref
  */
  SI_PACE_DOMAIN_PARAMS_USING_STD_REF = 0x91000002,

  /**
  * SI: PACE Domain Params Unsupported Algorithm
  */
  SI_PACE_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM = 0x91000003,

  /**
  * SI: CA Info Incorrect Version
  */
  SI_CA_INFO_INCORRECT_VERSION = 0x91000004,

  /**
  * SI: CA PublicKey Unsupported Algorithm
  */
  SI_CA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM = 0x91000005,

  /**
  * SI: CA Domain Params Unsupported Algorithm
  */
  SI_CA_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM = 0x91000006,

  /**
  * SI: TA Info Incorrect Version
  */
  SI_TA_INFO_INCORRECT_VERSION = 0x91000007,

  /**
  * SI: TA Info File ID For Version 2
  */
  SI_TA_INFO_FILE_ID_FOR_VERSION_2 = 0x91000008,

  /**
  * SI: eID Security Unsupported Digest Algorithm
  */
  SI_EID_SECURITY_UNSUPPORTED_DIGEST_ALGORITHM = 0x91000009,

  /**
  * SI: RI info incorrect version
  */
  SI_RI_INFO_INCORRECT_VERSION = 0x9100000A,

  /**
  * SI: RI domain params unsupported algorithm
  */
  SI_RI_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM = 0x9100000B,

  /**
  * SI: AA info incorrect version
  */
  SI_AA_INFO_INCORRECT_VERSION = 0x9100000C,

  /**
  * SI: AA info unsupported algorithm
  */
  SI_AA_INFO_UNSUPPORTED_ALGORITHM = 0x9100000D,

  /**
  * SI: AA info inconsistent algorithm reference
  */
  SI_AA_INFO_INCONSISTENT_ALGORITHM_REFERENCE = 0x9100000E,

  /**
  * SI: PACE Info Not Available
  */
  SI_STORAGE_PACE_INFO_NOT_AVAILABLE = 0x91000100,

  /**
  * SI: PACE Info No Std Parameters
  */
  SI_STORAGE_PACE_INFO_NO_STD_PARAMETERS = 0x91000101,

  /**
  * SI: PACE Info No Matching Domain Params
  */
  SI_STORAGE_PACE_INFO_NO_MATCHING_DOMAIN_PARAMS = 0x91000102,

  /**
  * SI: CA Info Not Available
  */
  SI_STORAGE_CA_INFO_NOT_AVAILABLE = 0x91000103,

  /**
  * SI: CA Domain Params No Required Option
  */
  SI_STORAGE_CA_DOMAIN_PARAMS_NO_REQUIRED_OPTION = 0x91000104,

  /**
  * SI: CA Domain Params Not Available
  */
  SI_STORAGE_CA_DOMAIN_PARAMS_NOT_AVAILABLE = 0x91000105,

  /**
  * SI: CA Anonymous Infos
  */
  SI_STORAGE_CA_ANONYMOUS_INFOS = 0x91000106,

  /**
  * SI: CA Info No Matching Domain Params
  */
  SI_STORAGE_CA_INFO_NO_MATCHING_DOMAIN_PARAMS = 0x91000107,

  /**
  * SI: CA Info No Matching Public Key
  */
  SI_STORAGE_CA_INFO_NO_MATCHING_PUBLIC_KEY = 0x91000108,

  /**
  * SI: CA Incorrect Infos Quantity
  */
  SI_STORAGE_CA_INCORRECT_INFOS_QUANTITY = 0x91000109,

  /**
  * SI: TA Info Not Available
  */
  SI_STORAGE_TA_INFO_NOT_AVAILABLE = 0x9100010A,

  /**
  * SI: Card Info Locator Multiple Entries
  */
  SI_STORAGE_CARD_INFO_LOCATOR_MULTIPLE_ENTRIES = 0x9100010B,

  /**
  * SI: eID Security Info Multiple Entries
  */
  SI_STORAGE_EID_SECURITY_INFO_MULTIPLE_ENTRIES = 0x9100010C,

  /**
  * SI: Privileged TI Multiple Entries
  */
  SI_STORAGE_PRIVILEGED_TI_MULTIPLE_ENTRIES = 0x9100010D,

  /**
  * SI: Privileged TI Incorrect Usage
  */
  SI_STORAGE_PRIVILEGED_TI_INCORRECT_USAGE = 0x9100010E,

  /**
  * SI: RI domain params multiple entries
  */
  SI_STORAGE_RI_DOMAIN_PARAMS_MULTIPLE_ENTRIES = 0x9100010F,

  /**
  * SI: Storage PACE Info Non Consistant
  */
  SI_STORAGE_PACE_INFO_NON_CONSISTANT = 0x91000110,

  /**
  * CV Certificate: Profile incorrect version
  */
  CV_CERTIFICATE_PROFILE_INCORRECT_VERSION = 0x91000201,

  /**
  * CV Certificate: Validity
  */
  CV_CERTIFICATE_VALIDITY = 0x91000202,

  /**
  * CV Certificate: Non CVCA domain parameters
  */
  CV_CERTIFICATE_NON_CVCA_DOMAIN_PARAMETERS = 0x91000203,

  /**
  * CV Certificate: Private key incorrect version
  */
  CV_CERTIFICATE_PRIVATE_KEY_INCORRECT_VERSION = 0x91000204,

  /**
  * TA: PACE static binding used
  */
  TA_PACE_STATIC_BINDING_USED = 0x91000300,

  /**
  * Auth ML signer info: Certificate validity
  */
  AUTH_ML_SIGNER_INFO_CERTIFICATE_VALIDITY = 0x92000115,

  /**
  * Auth ML signer info: Certificate root is not trusted
  */
  AUTH_ML_SIGNER_INFO_CERTIFICATE_ROOT_IS_NOT_TRUSTED = 0x92000116,

  /**
  * Auth ML signer info: Certificate cannot find CSCA
  */
  AUTH_ML_SIGNER_INFO_CERTIFICATE_CANNOT_FIND_CSCA = 0x92000117,

  /**
  * Auth ML signer info: Certificate revoked
  */
  AUTH_ML_SIGNER_INFO_CERTIFICATE_REVOKED = 0x92000118,

  /**
  * Auth ML signer info: Certificate signature invalid
  */
  AUTH_ML_SIGNER_INFO_CERTIFICATE_SIGNATURE_INVALID = 0x92000119,

  /**
  * Country Codes from certificate chain don't match
  */
  ICAO_CERTIFICATE_CHAIN_COUNTRY_NON_MATCHING = 0x90000250,

  /**
  * Country Codes from certificate and visual MRZ don't match
  */
  ICAO_CERTIFICATE_VISUAL_MRZ_COUNTRY_NON_MATCHING = 0x90000251,

  /**
  * Incorrect MRZ, country code doesn't match codes from Visual MRZ
  */
  MRZ_COUNTRY_CODE_VISUAL_MRZ_NON_MATCHING = 0x00022019,

  /**
  * Country Codes from certificate and DG1 MRZ don't match
  */
  ICAO_CERTIFICATE_MRZ_COUNTRY_NON_MATCHING = 0x90000252
}
