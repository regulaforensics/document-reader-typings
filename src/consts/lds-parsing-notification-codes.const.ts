/**
* The enumeration contains possible values of notification codes returned during the RFID chip processing.
* @enum {number}
*/
export enum eLDSParsingNotificationCodes {
  /**
  * ASN certificate: Incorrect version
  */
  ASN_CERTIFICATE_INCORRECT_VERSION = -1879048191,

  /**
  * ASN certificate: Non-matching signature algorithm
  */
  ASN_CERTIFICATE_NON_MATCHING_SIGNATURE_ALGORITHM = -1879048190,

  /**
  * ASN certificate: Incorrect time coding
  */
  ASN_CERTIFICATE_INCORRECT_TIME_CODING = -1879048189,

  /**
  * ASN certificate: Incorrect use of generalized time
  */
  ASN_CERTIFICATE_INCORRECT_USE_OF_GENERALIZED_TIME = -1879048188,

  /**
  * ASN certificate: Empty issuer
  */
  ASN_CERTIFICATE_EMPTY_ISSUER = -1879048187,

  /**
  * ASN certificate: Empty subject
  */
  ASN_CERTIFICATE_EMPTY_SUBJECT = -1879048186,

  /**
  * ASN certificate: Unsupported critical extension
  */
  ASN_CERTIFICATE_UNSUPPORTED_CRITICAL_EXTENSION = -1879048184,

  /**
  * ASN certificate: Forced default CSCA role
  */
  ASN_CERTIFICATE_FORCED_DEFAULT_CSCA_ROLE = -1879048178,

  /**
  * ASN certificate: Forced Default DS role
  */
  ASN_CERTIFICATE_FORCED_DEFAULT_DS_ROLE = -1879048177,

  /**
  * ASN certificate: Incorrect issuer subject DS
  */
  ASN_CERTIFICATE_INCORRECT_ISSUER_SUBJECT_DS = -1879048176,

  /**
  * ASN certificate: Duplicating extensions
  */
  ASN_CERTIFICATE_DUPLICATING_EXTENSIONS = -1879048169,

  /**
  * ICAO certificate: Version missed
  */
  ICAO_CERTIFICATE_VERSION_MISSED = -1879047680,

  /**
  * ICAO certificate: Version incorrect
  */
  ICAO_CERTIFICATE_VERSION_INCORRECT = -1879047679,

  /**
  * ICAO certificate: Issuer country missed
  */
  ICAO_CERTIFICATE_ISSUER_COUNTRY_MISSED = -1879047678,

  /**
  * ICAO certificate: Issuer common name missed
  */
  ICAO_CERTIFICATE_ISSUER_COMMON_NAME_MISSED = -1879047677,

  /**
  * ICAO certificate: Issuer country non-compliant
  */
  ICAO_CERTIFICATE_ISSUER_COUNTRY_NON_COMPLIANT = -1879047676,

  /**
  * ICAO certificate: Subject country missed
  */
  ICAO_CERTIFICATE_SUBJECT_COUNTRY_MISSED = -1879047675,

  /**
  * ICAO certificate: Subject common name missed
  */
  ICAO_CERTIFICATE_SUBJECT_COMMON_NAME_MISSED = -1879047674,

  /**
  * ICAO certificate: Subject country non-compliant
  */
  ICAO_CERTIFICATE_SUBJECT_COUNTRY_NON_COMPLIANT = -1879047673,

  /**
  * ICAO certificate: Using non-compliant data
  */
  ICAO_CERTIFICATE_USING_NON_COMPLIANT_DATA = -1879047672,

  /**
  * ICAO certificate: Unsupported signature algorithm
  */
  ICAO_CERTIFICATE_UNSUPPORTED_SIGNATURE_ALGORITHM = -1879047671,

  /**
  * ICAO certificate: Unsupported public key algorithm
  */
  ICAO_CERTIFICATE_UNSUPPORTED_PUBLIC_KEY_ALGORITHM = -1879047670,

  /**
  * ICAO certificate: Missed extensions
  */
  ICAO_CERTIFICATE_MISSED_EXTENSIONS = -1879047669,

  /**
  * ICAO certificate: Validity
  */
  ICAO_CERTIFICATE_VALIDITY = -1879047668,

  /**
  * ICAO certificate extension: Using non-compliant data
  */
  ICAO_CERTIFICATE_EXT_USING_NON_COMPLIANT_DATA = -1879047667,

  /**
  * ICAO certificate extension: Key usage missed
  */
  ICAO_CERTIFICATE_EXT_KEY_USAGE_MISSED = -1879047666,

  /**
  * ICAO certificate extension: Key usage not critical
  */
  ICAO_CERTIFICATE_EXT_KEY_USAGE_NOT_CRITICAL = -1879047665,

  /**
  * ICAO certificate extension: Key usage incorrect data
  */
  ICAO_CERTIFICATE_EXT_KEY_USAGE_INCORRECT_DATA = -1879047664,

  /**
  * ICAO certificate extension: Basic constraints missed
  */
  ICAO_CERTIFICATE_EXT_BASIC_CONSTRAINTS_MISSED = -1879047663,

  /**
  * ICAO certificate extension: Basic constraints incorrect usage 1
  */
  ICAO_CERTIFICATE_EXT_BASIC_CONSTRAINTS_INCORRECT_USAGE_1 = -1879047662,

  /**
  * ICAO certificate extension: Basic constraints incorrect usage 2
  */
  ICAO_CERTIFICATE_EXT_BASIC_CONSTRAINTS_INCORRECT_USAGE_2 = -1879047661,

  /**
  * ICAO certificate extension: Basic constraints not critical
  */
  ICAO_CERTIFICATE_EXT_BASIC_CONSTRAINTS_NOT_CRITICAL = -1879047660,

  /**
  * ICAO certificate extension: Basic constraints incorrect data
  */
  ICAO_CERTIFICATE_EXT_BASIC_CONSTRAINTS_INCORRECT_DATA = -1879047659,

  /**
  * ICAO certificate extension: Basic constraints path LenC missed
  */
  ICAO_CERTIFICATE_EXT_BASIC_CONSTRAINTS_PATH_LENC_MISSED = -1879047658,

  /**
  * ICAO certificate extension: Basic constraints path LenC incorrect
  */
  ICAO_CERTIFICATE_EXT_BASIC_CONSTRAINTS_PATH_LENC_INCORRECT = -1879047657,

  /**
  * ICAO certificate extension: Ext key usage not critical
  */
  ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_NOT_CRITICAL = -1879047656,

  /**
  * ICAO certificate extension: Ext key usage incorrect usage
  */
  ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_INCORRECT_USAGE = -1879047655,

  /**
  * ICAO certificate extension: Ext key usage incorrect data
  */
  ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_INCORRECT_DATA = -1879047654,

  /**
  * ICAO certificate extension Auth key: ID missed
  */
  ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_MISSED = -1879047653,

  /**
  * ICAO certificate extension Auth key: Incorrect data
  */
  ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_INCORRECT_DATA = -1879047652,

  /**
  * ICAO certificate extension Auth key: Key ID missed
  */
  ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_KEY_ID_MISSED = -1879047651,

  /**
  * ICAO certificate extension: Subject key ID missed
  */
  ICAO_CERTIFICATE_EXT_SUBJECT_KEY_ID_MISSED = -1879047650,

  /**
  * ICAO certificate extension: Subject key ID incorrect data
  */
  ICAO_CERTIFICATE_EXT_SUBJECT_KEY_ID_INCORRECT_DATA = -1879047649,

  /**
  * ICAO certificate extension: Private key UP missed
  */
  ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_MISSED = -1879047648,

  /**
  * ICAO certificate extension: Private key UP incorrect data
  */
  ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_INCORRECT_DATA = -1879047647,

  /**
  * ICAO certificate extension: Private key UP empty
  */
  ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_EMPTY = -1879047646,

  /**
  * ICAO certificate extension: Subject alt name missed
  */
  ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_MISSED = -1879047645,

  /**
  * ICAO certificate extension: Subject alt name incorrect data
  */
  ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_INCORRECT_DATA = -1879047644,

  /**
  * ICAO certificate extension: Subject alt name empty
  */
  ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_EMPTY = -1879047643,

  /**
  * ICAO certificate extension: Subject alt name non-compliant
  */
  ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_NON_COMPLIANT = -1879047642,

  /**
  * ICAO certificate extension: Subject alt name critical
  */
  ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_CRITICAL = -1879047640,

  /**
  * ICAO certificate extension: Subject alt name DN empty
  */
  ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_EMPTY = -1879047639,

  /**
  * ICAO certificate extension: Subject alt name DN incorrect
  */
  ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_INCORRECT = -1879047638,

  /**
  * ICAO certificate extension: Subject alt name DN non-compliant
  */
  ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_NON_COMPLIANT = -1879047637,

  /**
  * ICAO certificate extension: Issuer alt name missed
  */
  ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_MISSED = -1879047636,

  /**
  * ICAO certificate extension: Issuer alt name incorrect data
  */
  ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_INCORRECT_DATA = -1879047635,

  /**
  * ICAO certificate extension: Issuer alt name empty
  */
  ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_EMPTY = -1879047634,

  /**
  * ICAO certificate extension: Issuer alt name non-compliant
  */
  ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_NON_COMPLIANT = -1879047633,

  /**
  * ICAO certificate extension: Issuer alt name critical
  */
  ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_CRITICAL = -1879047631,

  /**
  * ICAO certificate extension: Issuer alt name DN empty
  */
  ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_EMPTY = -1879047630,

  /**
  * ICAO certificate extension: Issuer alt name DN incorrect
  */
  ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_INCORRECT = -1879047629,

  /**
  * ICAO certificate extension: Issuer alt name DN non-compliant
  */
  ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_NON_COMPLIANT = -1879047628,

  /**
  * ICAO certificate extension Doc type list: Missed
  */
  ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_MISSED = -1879047627,

  /**
  * ICAO certificate extension Doc type list: Incorrect data
  */
  ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_INCORRECT_DATA = -1879047626,

  /**
  * ICAO certificate extension Doc type list: Version
  */
  ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_VERSION = -1879047625,

  /**
  * ICAO certificate extension Doc type list: Doc types
  */
  ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_DOC_TYPES = -1879047624,

  /**
  * ICAO certificate extension Doc type list: Doc types empty
  */
  ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_DOC_TYPES_EMPTY = -1879047623,

  /**
  * ICAO certificate extension: Dert policies incorrect data
  */
  ICAO_CERTIFICATE_EXT_CERT_POLICIES_INCORRECT_DATA = -1879047622,

  /**
  * ICAO certificate extension: Cert policies empty
  */
  ICAO_CERTIFICATE_EXT_CERT_POLICIES_EMPTY = -1879047621,

  /**
  * ICAO certificate extension: Cert policies policy ID missed
  */
  ICAO_CERTIFICATE_EXT_CERT_POLICIES_POLICY_ID_MISSED = -1879047620,

  /**
  * ICAO certificate extension: CRL dist point missed
  */
  ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_MISSED = -1879047619,

  /**
  * ICAO certificate extension: CRL dist point incorrect data
  */
  ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_INCORRECT_DATA = -1879047618,

  /**
  * ICAO certificate extension: CRL dist point empty
  */
  ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_EMPTY = -1879047617,

  /**
  * ICAO certificate extension: CRL dist point point missed
  */
  ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_POINT_MISSED = -1879047616,

  /**
  * ICAO certificate: SN non-compliant
  */
  ICAO_CERTIFICATE_SN_NON_COMPLIANT = -1879047615,

  /**
  * ICAO certificate: Issuer SN non-compliant
  */
  ICAO_CERTIFICATE_ISSUER_SN_NON_COMPLIANT = -1879047614,

  /**
  * ICAO certificate: Subject SN non-compliant
  */
  ICAO_CERTIFICATE_SUBJECT_SN_NON_COMPLIANT = -1879047613,

  /**
  * ICAO certificate: Issuer attribute non-compliant
  */
  ICAO_CERTIFICATE_ISSUER_ATTRIBUTE_NON_COMPLIANT = -1879047612,

  /**
  * ICAO certificate: Subject attribute non-compliant
  */
  ICAO_CERTIFICATE_SUBJECT_ATTRIBUTE_NON_COMPLIANT = -1879047611,

  /**
  * ICAO certificate: Issuer subject country non-matching
  */
  ICAO_CERTIFICATE_ISSUER_SUBJECT_COUNTRY_NON_MATCHING = -1879047610,

  /**
  * ICAO certificate extension: CSCA alt names non-matching
  */
  ICAO_CERTIFICATE_EXT_CSCA_ALT_NAMES_NON_MATCHING = -1879047609,

  /**
  * ICAO certificate extension: Name change incorrect data
  */
  ICAO_CERTIFICATE_EXT_NAME_CHANGE_INCORRECT_DATA = -1879047608,

  /**
  * ICAO certificate extension: Name change non-compliant
  */
  ICAO_CERTIFICATE_EXT_NAME_CHANGE_NON_COMPLIANT = -1879047607,

  /**
  * ICAO certificate extension: Name change critical
  */
  ICAO_CERTIFICATE_EXT_NAME_CHANGE_CRITICAL = -1879047606,

  /**
  * ICAO certificate extension Doc type list: non-compliant
  */
  ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_NON_COMPLIANT = -1879047605,

  /**
  * ICAO certificate extension Doc type list: Critical
  */
  ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_CRITICAL = -1879047604,

  /**
  * ICAO certificate extension: Optional critical
  */
  ICAO_CERTIFICATE_EXT_OPTIONAL_CRITICAL = -1879047603,

  /**
  * ICAO certificate: Subject non-compliant
  */
  ICAO_CERTIFICATE_SUBJECT_NON_COMPLIANT = -1879047602,

  /**
  * ICAO certificate: Subject common name non-compliant
  */
  ICAO_CERTIFICATE_SUBJECT_COMMON_NAME_NON_COMPLIANT = -1879047601,

  /**
  * ICAO COM: LDS version incorrect
  */
  ICAO_COM_LDS_VERSION_INCORRECT = -1879048160,

  /**
  * ICAO COM: LDS version missing
  */
  ICAO_COM_LDS_VERSION_MISSING = -1879048159,

  /**
  * ICAO COM: Unicode version incorrect
  */
  ICAO_COM_UNICODE_VERSION_INCORRECT = -1879048158,

  /**
  * ICAO COM: Unicode version missing
  */
  ICAO_COM_UNICODE_VERSION_MISSING = -1879048157,

  /**
  * ICAO COM: DGPM incorrect
  */
  ICAO_COM_DGPM_INCORRECT = -1879048156,

  /**
  * ICAO COM: DGPM missing
  */
  ICAO_COM_DGPM_MISSING = -1879048155,

  /**
  * ICAO COM: DGPM unexpected
  */
  ICAO_COM_DGPM_UNEXPECTED = -1879048154,

  /**
  * ICAO application: LDS version unsupported
  */
  ICAO_APPLICATION_LDS_VERSION_UNSUPPORTED = -1879048144,

  /**
  * ICAO application: Unicode version unsupported
  */
  ICAO_APPLICATION_UNICODE_VERSION_UNSUPPORTED = -1879048143,

  /**
  * ICAO application: LDS version inconsistent
  */
  ICAO_APPLICATION_LDS_VERSION_INCONSISTENT = -1879048142,

  /**
  * ICAO application: Unicode version inconsistent
  */
  ICAO_APPLICATION_UNICODE_VERSION_INCONSISTENT = -1879048141,

  /**
  * ASN signed data: OID incorrect
  */
  ASN_SIGNED_DATA_OID_INCORRECT = -1879047936,

  /**
  * ASN signed data: Version incorrect
  */
  ASN_SIGNED_DATA_VERSION_INCORRECT = -1879047776,

  /**
  * ASN signed data: Content OID incorrect
  */
  ASN_SIGNED_DATA_CONTENT_OID_INCORRECT = -1879047775,

  /**
  * ICAO signed data: Version incorrect
  */
  ICAO_SIGNED_DATA_VERSION_INCORRECT = -1879047935,

  /**
  * ICAO signed data: Digest algorithms empty
  */
  ICAO_SIGNED_DATA_DIGEST_ALGORITHMS_EMPTY = -1879047934,

  /**
  * ICAO signed data: Digest algorithms unsupported
  */
  ICAO_SIGNED_DATA_DIGEST_ALGORITHMS_UNSUPPORTED = -1879047933,

  /**
  * ICAO signed data: Signer infos multiple entries
  */
  ICAO_SIGNED_DATA_SIGNER_INFOS_MULTIPLE_ENTRIES = -1879047927,

  /**
  * ICAO signed data: Certificates missed
  */
  ICAO_SIGNED_DATA_CERTIFICATES_MISSED = -1879047760,

  /**
  * ICAO signed data: Certificates empty
  */
  ICAO_SIGNED_DATA_CERTIFICATES_EMPTY = -1879047759,

  /**
  * ICAO signed data: CRLs incorrect usage
  */
  ICAO_SIGNED_DATA_CRLS_INCORRECT_USAGE = -1879047758,

  /**
  * ICAO LDS object: Incorrect content OID
  */
  ICAO_LDS_OBJECT_INCORRECT_CONTENT_OID = -1879047932,

  /**
  * ICAO LDS object: DG number incorrect
  */
  ICAO_LDS_OBJECT_DG_NUMBER_INCORRECT = -1879047931,

  /**
  * ICAO LDS object: DG hash missing
  */
  ICAO_LDS_OBJECT_DG_HASH_MISSING = -1879047930,

  /**
  * ICAO LDS object: DG hash extra
  */
  ICAO_LDS_OBJECT_DG_HASH_EXTRA = -1879047929,

  /**
  * ICAO LDS object: Version incorrect
  */
  ICAO_LDS_OBJECT_VERSION_INCORRECT = -1879047928,

  /**
  * ICAO master list: Version incorrect
  */
  ICAO_MASTER_LIST_VERSION_INCORRECT = -1879047744,

  /**
  * ICAO Deviation list: Version incorrect
  */
  ICAO_DEVIATION_LIST_VERSION_INCORRECT = -1879047736,

  /**
  * BSI: Defect  list version incorrect
  */
  BSI_DEFECT_LIST_VERSION_INCORRECT = -1879047728,

  /**
  * BSI: Black list version incorrect
  */
  BSI_BLACK_LIST_VERSION_INCORRECT = -1879047720,

  /**
  * ASN signer info: Version incorrect
  */
  ASN_SIGNER_INFO_VERSION_INCORRECT = -1879047926,

  /**
  * ASN signer info: SID incorrect choice
  */
  ASN_SIGNER_INFO_SID_INCORRECT_CHOICE = -1879047925,

  /**
  * ASN signer info: SID digest algorithm not listed
  */
  ASN_SIGNER_INFO_SID_DIGEST_ALGORITHM_NOT_LISTED = -1879047924,

  /**
  * ASN signer info: Message digest attr missing
  */
  ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_MISSING = -1879047923,

  /**
  * ASN signer info: Message digest attr data
  */
  ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_DATA = -1879047922,

  /**
  * ASN signer info: Message digest attr value
  */
  ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_VALUE = -1879047921,

  /**
  * ASN signer info: Content type attr missing
  */
  ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_MISSING = -1879047920,

  /**
  * ASN signer info: Content type attr data
  */
  ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_DATA = -1879047919,

  /**
  * ASN signer info: Content type attr value
  */
  ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_VALUE = -1879047918,

  /**
  * ASN signer info: Signing time attr missing
  */
  ASN_SIGNER_INFO_SIGNING_TIME_ATTR_MISSING = -1879047909,

  /**
  * ASN signer info: Signing time attr data
  */
  ASN_SIGNER_INFO_SIGNING_TIME_ATTR_DATA = -1879047908,

  /**
  * ASN signer info: Signing time attr value
  */
  ASN_SIGNER_INFO_SIGNING_TIME_ATTR_VALUE = -1879047907,

  /**
  * ASN signer info: List content description attr missing
  */
  ASN_SIGNER_INFO_LIST_CONTENT_DESCRIPTION_ATTR_MISSING = -1879047906,

  /**
  * ASN signer info: List content description attr data
  */
  ASN_SIGNER_INFO_LIST_CONTENT_DESCRIPTION_ATTR_DATA = -1879047905,

  /**
  * Auth signer info: Certificate validity
  */
  AUTH_SIGNER_INFO_CERTIFICATE_VALIDITY = -1879047915,

  /**
  * Auth signer info: Certificate root is not trusted
  */
  AUTH_SIGNER_INFO_CERTIFICATE_ROOT_IS_NOT_TRUSTED = -1879047914,

  /**
  * Auth signer info: Certificate cannot find CSCA
  */
  AUTH_SIGNER_INFO_CERTIFICATE_CANNOT_FIND_CSCA = -1879047913,

  /**
  * Auth signer info: Certificate revoked
  */
  AUTH_SIGNER_INFO_CERTIFICATE_REVOKED = -1879047912,

  /**
  * Auth signer info: Certificate signature invalid
  */
  AUTH_SIGNER_INFO_CERTIFICATE_SIGNATURE_INVALID = -1879047911,

  /**
  * Notification: Unsupported image format
  */
  UNSUPPORTED_IMAGE_FORMAT = -1879047910,

  /**
  * MRZ: Document type unknown
  */
  MRZ_DOCUMENT_TYPE_UNKNOWN = 139272,

  /**
  * MRZ: Issuing state syntax error
  */
  MRZ_ISSUING_STATE_SYNTAX_ERROR = 139273,

  /**
  * MRZ: Name is void
  */
  MRZ_NAME_IS_VOID = 139274,

  /**
  * MRZ: Number incorrect checksum
  */
  MRZ_NUMBER_INCORRECT_CHECKSUM = 139277,

  /**
  * MRZ: Nationality syntax error
  */
  MRZ_NATIONALITY_SYNTAX_ERROR = 139278,

  /**
  * MRZ: DOB syntax error
  */
  MRZ_DOB_SYNTAX_ERROR = 139279,

  /**
  * MRZ: DOB error
  */
  MRZ_DOB_ERROR = 139280,

  /**
  * MRZ: DOB incorrect checksum
  */
  MRZ_DOB_INCORRECT_CHECKSUM = 139281,

  /**
  * MRZ: Sex incorrect
  */
  MRZ_SEX_INCORRECT = 139282,

  /**
  * MRZ: DOE syntax error
  */
  MRZ_DOE_SYNTAX_ERROR = 139283,

  /**
  * MRZ: DOE error
  */
  MRZ_DOE_ERROR = 139284,

  /**
  * MRZ: DOE incorrect checksum
  */
  MRZ_DOE_INCORRECT_CHECKSUM = 139285,

  /**
  * MRZ: Optional data incorrect checksum
  */
  MRZ_OPTIONAL_DATA_INCORRECT_CHECKSUM = 139286,

  /**
  * MRZ: Incorrect checksum
  */
  MRZ_INCORRECT_CHECKSUM = 139287,

  /**
  * MRZ: Incorrect
  */
  MRZ_INCORRECT = 139288,

  /**
  * Biometrics: Format owner missing
  */
  BIOMETRICS_FORMAT_OWNER_MISSING = -1878982656,

  /**
  * Biometrics: Format owner incorrect
  */
  BIOMETRICS_FORMAT_OWNER_INCORRECT = -1878917120,

  /**
  * Biometrics: Format type missing
  */
  BIOMETRICS_FORMAT_TYPE_MISSING = -1878851584,

  /**
  * Biometrics: Format type incorrect
  */
  BIOMETRICS_FORMAT_TYPE_INCORRECT = -1878786048,

  /**
  * Biometrics: Type incorrect
  */
  BIOMETRICS_TYPE_INCORRECT = -1878720512,

  /**
  * Biometrics: Subtype missing
  */
  BIOMETRICS_SUBTYPE_MISSING = -1878654976,

  /**
  * Biometrics: Subtype incorrect
  */
  BIOMETRICS_SUBTYPE_INCORRECT = -1878589440,

  /**
  * Biometrics: BDB image missing
  */
  BIOMETRICS_BDB_IMAGE_MISSING = -1878523904,

  /**
  * Biometrics: BDB format ID incorrect
  */
  BIOMETRICS_BDB_FORMAT_ID_INCORRECT = -1878458368,

  /**
  * Biometrics: BDB version incorrect
  */
  BIOMETRICS_BDB_VERSION_INCORRECT = -1878392832,

  /**
  * Biometrics: BDB data length incorrect
  */
  BIOMETRICS_BDB_DATA_LENGTH_INCORRECT = -1878327296,

  /**
  * Biometrics: BDB Data Gender
  */
  BIOMETRICS_BDB_DATA_GENDER = -1877999616,

  /**
  * Biometrics: BDB Data Eye Color
  */
  BIOMETRICS_BDB_DATA_EYE_COLOR = -1877934080,

  /**
  * Biometrics: BDB Data Hair Color
  */
  BIOMETRICS_BDB_DATA_HAIR_COLOR = -1877868544,

  /**
  * Biometrics: BDB Data Pose Angle Yaw
  */
  BIOMETRICS_BDB_DATA_POSE_ANGLE_YAW = -1877803008,

  /**
  * Biometrics: BDB Data Pose Angle Pitch
  */
  BIOMETRICS_BDB_DATA_POSE_ANGLE_PITCH = -1877737472,

  /**
  * Biometrics: BDB Data Pose Angle Roll
  */
  BIOMETRICS_BDB_DATA_POSE_ANGLE_ROLL = -1877671936,

  /**
  * Biometrics: BDB Data Pose Angle U Yaw
  */
  BIOMETRICS_BDB_DATA_POSE_ANGLE_U_YAW = -1877606400,

  /**
  * Biometrics: BDB Data Pose Angle U Pitch
  */
  BIOMETRICS_BDB_DATA_POSE_ANGLE_U_PITCH = -1877540864,

  /**
  * Biometrics: BDB Data Pose Angle U Roll
  */
  BIOMETRICS_BDB_DATA_POSE_ANGLE_U_ROLL = -1877475328,

  /**
  * Biometrics: BDB Data Face Image Type
  */
  BIOMETRICS_BDB_DATA_FACE_IMAGE_TYPE = -1877409792,

  /**
  * Biometrics: BDB Data Image Data Type
  */
  BIOMETRICS_BDB_DATA_IMAGE_DATA_TYPE = -1877344256,

  /**
  * SI: PACE Info Unsupported Std Parameters
  */
  SI_PACE_INFO_UNSUPPORTED_STD_PARAMETERS = -1862270976,

  /**
  * SI: PACE Info Deprecated Version
  */
  SI_PACE_INFO_DEPRECATED_VERSION = -1862270975,

  /**
  * SI: PACE Domain Params Using Std Ref
  */
  SI_PACE_DOMAIN_PARAMS_USING_STD_REF = -1862270974,

  /**
  * SI: PACE Domain Params Unsupported Algorithm
  */
  SI_PACE_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM = -1862270973,

  /**
  * SI: CA Info Incorrect Version
  */
  SI_CA_INFO_INCORRECT_VERSION = -1862270972,

  /**
  * SI: CA PublicKey Unsupported Algorithm
  */
  SI_CA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM = -1862270971,

  /**
  * SI: CA Domain Params Unsupported Algorithm
  */
  SI_CA_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM = -1862270970,

  /**
  * SI: TA Info Incorrect Version
  */
  SI_TA_INFO_INCORRECT_VERSION = -1862270969,

  /**
  * SI: TA Info File ID For Version 2
  */
  SI_TA_INFO_FILE_ID_FOR_VERSION_2 = -1862270968,

  /**
  * SI: eID Security Unsupported Digest Algorithm
  */
  SI_EID_SECURITY_UNSUPPORTED_DIGEST_ALGORITHM = -1862270967,

  /**
  * SI: RI info incorrect version
  */
  SI_RI_INFO_INCORRECT_VERSION = -1862270966,

  /**
  * SI: RI domain params unsupported algorithm
  */
  SI_RI_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM = -1862270965,

  /**
  * SI: AA info incorrect version
  */
  SI_AA_INFO_INCORRECT_VERSION = -1862270964,

  /**
  * SI: AA info unsupported algorithm
  */
  SI_AA_INFO_UNSUPPORTED_ALGORITHM = -1862270963,

  /**
  * SI: AA info inconsistent algorithm reference
  */
  SI_AA_INFO_INCONSISTENT_ALGORITHM_REFERENCE = -1862270962,

  /**
  * SI: PACE Info Not Available
  */
  SI_STORAGE_PACE_INFO_NOT_AVAILABLE = -1862270720,

  /**
  * SI: PACE Info No Std Parameters
  */
  SI_STORAGE_PACE_INFO_NO_STD_PARAMETERS = -1862270719,

  /**
  * SI: PACE Info No Matching Domain Params
  */
  SI_STORAGE_PACE_INFO_NO_MATCHING_DOMAIN_PARAMS = -1862270718,

  /**
  * SI: CA Info Not Available
  */
  SI_STORAGE_CA_INFO_NOT_AVAILABLE = -1862270717,

  /**
  * SI: CA Domain Params No Required Option
  */
  SI_STORAGE_CA_DOMAIN_PARAMS_NO_REQUIRED_OPTION = -1862270716,

  /**
  * SI: CA Domain Params Not Available
  */
  SI_STORAGE_CA_DOMAIN_PARAMS_NOT_AVAILABLE = -1862270715,

  /**
  * SI: CA Anonymous Infos
  */
  SI_STORAGE_CA_ANONYMOUS_INFOS = -1862270714,

  /**
  * SI: CA Info No Matching Domain Params
  */
  SI_STORAGE_CA_INFO_NO_MATCHING_DOMAIN_PARAMS = -1862270713,

  /**
  * SI: CA Info No Matching Public Key
  */
  SI_STORAGE_CA_INFO_NO_MATCHING_PUBLIC_KEY = -1862270712,

  /**
  * SI: CA Incorrect Infos Quantity
  */
  SI_STORAGE_CA_INCORRECT_INFOS_QUANTITY = -1862270711,

  /**
  * SI: TA Info Not Available
  */
  SI_STORAGE_TA_INFO_NOT_AVAILABLE = -1862270710,

  /**
  * SI: Card Info Locator Multiple Entries
  */
  SI_STORAGE_CARD_INFO_LOCATOR_MULTIPLE_ENTRIES = -1862270709,

  /**
  * SI: eID Security Info Multiple Entries
  */
  SI_STORAGE_EID_SECURITY_INFO_MULTIPLE_ENTRIES = -1862270708,

  /**
  * SI: Privileged TI Multiple Entries
  */
  SI_STORAGE_PRIVILEGED_TI_MULTIPLE_ENTRIES = -1862270707,

  /**
  * SI: Privileged TI Incorrect Usage
  */
  SI_STORAGE_PRIVILEGED_TI_INCORRECT_USAGE = -1862270706,

  /**
  * SI: RI domain params multiple entries
  */
  SI_STORAGE_RI_DOMAIN_PARAMS_MULTIPLE_ENTRIES = -1862270705,

  /**
  * SI: Storage PACE Info Non Consistant
  */
  SI_STORAGE_PACE_INFO_NON_CONSISTANT = -1862270704,

  /**
  * CV Certificate: Profile incorrect version
  */
  CV_CERTIFICATE_PROFILE_INCORRECT_VERSION = -1862270463,

  /**
  * CV Certificate: Validity
  */
  CV_CERTIFICATE_VALIDITY = -1862270462,

  /**
  * CV Certificate: Non CVCA domain parameters
  */
  CV_CERTIFICATE_NON_CVCA_DOMAIN_PARAMETERS = -1862270461,

  /**
  * CV Certificate: Private key incorrect version
  */
  CV_CERTIFICATE_PRIVATE_KEY_INCORRECT_VERSION = -1862270460,

  /**
  * TA: PACE static binding used
  */
  TA_PACE_STATIC_BINDING_USED = -1862270208,

  /**
  * Auth ML signer info: Certificate validity
  */
  AUTH_ML_SIGNER_INFO_CERTIFICATE_VALIDITY = -1845493483,

  /**
  * Auth ML signer info: Certificate root is not trusted
  */
  AUTH_ML_SIGNER_INFO_CERTIFICATE_ROOT_IS_NOT_TRUSTED = -1845493482,

  /**
  * Auth ML signer info: Certificate cannot find CSCA
  */
  AUTH_ML_SIGNER_INFO_CERTIFICATE_CANNOT_FIND_CSCA = -1845493481,

  /**
  * Auth ML signer info: Certificate revoked
  */
  AUTH_ML_SIGNER_INFO_CERTIFICATE_REVOKED = -1845493480,

  /**
  * Auth ML signer info: Certificate signature invalid
  */
  AUTH_ML_SIGNER_INFO_CERTIFICATE_SIGNATURE_INVALID = -1845493479,

  /**
  * Country Codes from certificate chain don't match
  */
  ICAO_CERTIFICATE_CHAIN_COUNTRY_NON_MATCHING = -1879047600,

  /**
  * Country Codes from certificate and visual MRZ don't match
  */
  ICAO_CERTIFICATE_VISUAL_MRZ_COUNTRY_NON_MATCHING = -1879047599,

  /**
  * Incorrect MRZ, country code doesn't match codes from Visual MRZ
  */
  MRZ_COUNTRY_CODE_VISUAL_MRZ_NON_MATCHING = 139289,

  /**
  * Country Codes from certificate and DG1 MRZ don't match
  */
  ICAO_CERTIFICATE_MRZ_COUNTRY_NON_MATCHING = -1879047598
}
