export enum TextFieldType {
  /**
  * Document class code
  */
  DOCUMENT_CLASS_CODE = 0,
  /**
  * Issuing state code
  */
  ISSUING_STATE_CODE = 1,
  /**
  * Document number
  */
  DOCUMENT_NUMBER = 2,
  /**
  * Date of expiry
  */
  DATE_OF_EXPIRY = 3,
  /**
  * Date of issue
  */
  DATE_OF_ISSUE = 4,
  /**
  * Date of birth
  */
  DATE_OF_BIRTH = 5,
  /**
  * Place of birth
  */
  PLACE_OF_BIRTH = 6,
  /**
  * Personal number
  */
  PERSONAL_NUMBER = 7,
  /**
  * Surname
  */
  SURNAME = 8,
  /**
  * Given name(s)
  */
  GIVEN_NAMES = 9,
  /**
  * Mother&#39;s name
  */
  MOTHERS_NAME = 10,
  /**
  * Nationality
  */
  NATIONALITY = 11,
  /**
  * Sex
  */
  SEX = 12,
  /**
  * Height
  */
  HEIGHT = 13,
  /**
  * Weight
  */
  WEIGHT = 14,
  /**
  * Eyes color
  */
  EYES_COLOR = 15,
  /**
  * Hair color
  */
  HAIR_COLOR = 16,
  /**
  * Address
  */
  ADDRESS = 17,
  /**
  * Donor
  */
  DONOR = 18,
  /**
  * Social security number
  */
  SOCIAL_SECURITY_NUMBER = 19,
  /**
  * DL class
  */
  DL_CLASS = 20,
  /**
  * DL endorsement code
  */
  DL_ENDORSED = 21,
  /**
  * DL restriction code
  */
  DL_RESTRICTION_CODE = 22,
  /**
  * Date of 21st birthday
  */
  DL_UNDER_21_DATE = 23,
  /**
  * Issuing authority
  */
  AUTHORITY = 24,
  /**
  * Surname and given names
  */
  SURNAME_AND_GIVEN_NAMES = 25,
  /**
  * Nationality code
  */
  NATIONALITY_CODE = 26,
  /**
  * Passport number
  */
  PASSPORT_NUMBER = 27,
  /**
  * Invitation number
  */
  INVITATION_NUMBER = 28,
  /**
  * Visa ID
  */
  VISA_ID = 29,
  /**
  * Visa class
  */
  VISA_CLASS = 30,
  /**
  * Visa subclass
  */
  VISA_SUBCLASS = 31,
  /**
  * MRZ type
  */
  MRZ_TYPE = 35,
  /**
  * Optional data
  */
  OPTIONAL_DATA = 36,
  /**
  * Document class name
  */
  DOCUMENT_CLASS_NAME = 37,
  /**
  * Issuing state name
  */
  ISSUING_STATE_NAME = 38,
  /**
  * Place of issue
  */
  PLACE_OF_ISSUE = 39,
  /**
  * Document number checksum
  */
  DOCUMENT_NUMBER_CHECKSUM = 40,
  /**
  * Date of birth checksum
  */
  DATE_OF_BIRTH_CHECKSUM = 41,
  /**
  * Date of expiry checksum
  */
  DATE_OF_EXPIRY_CHECKSUM = 42,
  /**
  * Personal number checksum
  */
  PERSONAL_NUMBER_CHECKSUM = 43,
  /**
  * Final checksum
  */
  FINAL_CHECKSUM = 44,
  /**
  * Passport number checksum
  */
  PASSPORT_NUMBER_CHECKSUM = 45,
  /**
  * Invitation number checksum
  */
  INVITATION_NUMBER_CHECKSUM = 46,
  /**
  * Visa ID checksum
  */
  VISA_ID_CHECKSUM = 47,
  /**
  * Surname and given names checksum
  */
  SURNAME_AND_GIVEN_NAMES_CHECKSUM = 48,
  /**
  * Visa valid until checksum
  */
  VISA_VALID_UNTIL_CHECKSUM = 49,
  /**
  * Other
  */
  OTHER = 50,
  /**
  * MRZ strings
  */
  MRZ_STRINGS = 51,
  /**
  * Name suffix
  */
  NAME_SUFFIX = 52,
  /**
  * Name prefix
  */
  NAME_PREFIX = 53,
  /**
  * Date of issue checksum
  */
  DATE_OF_ISSUE_CHECKSUM = 54,
  /**
  * Date of issue check digit
  */
  DATE_OF_ISSUE_CHECK_DIGIT = 55,
  /**
  * Document series
  */
  DOCUMENT_SERIES = 56,
  /**
  * Registration number
  */
  REG_CERT_REG_NUMBER = 57,
  /**
  * Vehicle model
  */
  REG_CERT_CAR_MODEL = 58,
  /**
  * Vehicle color
  */
  REG_CERT_CAR_COLOR = 59,
  /**
  * Vehicle body number
  */
  REG_CERT_BODY_NUMBER = 60,
  /**
  * Vehicle type
  */
  REG_CERT_CAR_TYPE = 61,
  /**
  * Max permissible weight
  */
  REG_CERT_MAX_WEIGHT = 62,
  /**
  * Unladen mass
  */
  REG_CERT_WEIGHT = 63,
  /**
  * Address: area
  */
  ADDRESS_AREA = 64,
  /**
  * Address: state
  */
  ADDRESS_STATE = 65,
  /**
  * Address: building
  */
  ADDRESS_BUILDING = 66,
  /**
  * Address: house
  */
  ADDRESS_HOUSE = 67,
  /**
  * Address: flat
  */
  ADDRESS_FLAT = 68,
  /**
  * Place of registration
  */
  PLACE_OF_REGISTRATION = 69,
  /**
  * Date of registration
  */
  DATE_OF_REGISTRATION = 70,
  /**
  * Resident from
  */
  RESIDENT_FROM = 71,
  /**
  * Resident until
  */
  RESIDENT_UNTIL = 72,
  /**
  * Issuing authority code
  */
  AUTHORITY_CODE = 73,
  /**
  * Place of birth: area
  */
  PLACE_OF_BIRTH_AREA = 74,
  /**
  * Place of birth: state code
  */
  PLACE_OF_BIRTH_STATE_CODE = 75,
  /**
  * Address: street
  */
  ADDRESS_STREET = 76,
  /**
  * Address: city
  */
  ADDRESS_CITY = 77,
  /**
  * Address: jurisdiction code
  */
  ADDRESS_JURISDICTION_CODE = 78,
  /**
  * Address: postal code
  */
  ADDRESS_POSTAL_CODE = 79,
  /**
  * Document number check digit
  */
  DOCUMENT_NUMBER_CHECK_DIGIT = 80,
  /**
  * Date of birth check digit
  */
  DATE_OF_BIRTH_CHECK_DIGIT = 81,
  /**
  * Date of expiry check digit
  */
  DATE_OF_EXPIRY_CHECK_DIGIT = 82,
  /**
  * Personal number check digit
  */
  PERSONAL_NUMBER_CHECK_DIGIT = 83,
  /**
  * Final check digit
  */
  FINAL_CHECK_DIGIT = 84,
  /**
  * Passport number check digit
  */
  PASSPORT_NUMBER_CHECK_DIGIT = 85,
  /**
  * Invitation number check digit
  */
  INVITATION_NUMBER_CHECK_DIGIT = 86,
  /**
  * Visa ID check digit
  */
  VISA_ID_CHECK_DIGIT = 87,
  /**
  * Surname and given names check digit
  */
  SURNAME_AND_GIVEN_NAMES_CHECK_DIGIT = 88,
  /**
  * Visa valid until check digit
  */
  VISA_VALID_UNTIL_CHECK_DIGIT = 89,
  /**
  * Permit class
  */
  PERMIT_DL_CLASS = 90,
  /**
  * Permit expiry date
  */
  PERMIT_DATE_OF_EXPIRY = 91,
  /**
  * Permit identifier
  */
  PERMIT_IDENTIFIER = 92,
  /**
  * Permit issue date
  */
  PERMIT_DATE_OF_ISSUE = 93,
  /**
  * Permit restriction code
  */
  PERMIT_RESTRICTION_CODE = 94,
  /**
  * Permit endorsement code
  */
  PERMIT_ENDORSED = 95,
  /**
  * Issue timestamp
  */
  ISSUE_TIMESTAMP = 96,
  /**
  * Number of duplicates
  */
  NUMBER_OF_DUPLICATES = 97,
  /**
  * Medical indicator codes
  */
  MEDICAL_INDICATOR_CODES = 98,
  /**
  * Non-resident indicator
  */
  NON_RESIDENT_INDICATOR = 99,
  /**
  * Visa type
  */
  VISA_TYPE = 100,
  /**
  * Visa valid from
  */
  VISA_VALID_FROM = 101,
  /**
  * Visa valid until
  */
  VISA_VALID_UNTIL = 102,
  /**
  * Duration of stay
  */
  DURATION_OF_STAY = 103,
  /**
  * Number of entries
  */
  NUMBER_OF_ENTRIES = 104,
  /**
  * Day
  */
  DAY = 105,
  /**
  * Month
  */
  MONTH = 106,
  /**
  * Year
  */
  YEAR = 107,
  /**
  * Unique customer identifier
  */
  UNIQUE_CUSTOMER_IDENTIFIER = 108,
  /**
  * Commercial vehicle code
  */
  COMMERCIAL_VEHICLE_CODES = 109,
  /**
  * AKA: date of birth
  */
  AKA_DATE_OF_BIRTH = 110,
  /**
  * AKA: social insurance number
  */
  AKA_SOCIAL_SECURITY_NUMBER = 111,
  /**
  * AKA: surname
  */
  AKA_SURNAME = 112,
  /**
  * AKA: given name(s)
  */
  AKA_GIVEN_NAMES = 113,
  /**
  * AKA: name suffix
  */
  AKA_NAME_SUFFIX = 114,
  /**
  * AKA: name prefix
  */
  AKA_NAME_PREFIX = 115,
  /**
  * Mailing address: street
  */
  MAILING_ADDRESS_STREET = 116,
  /**
  * Mailing address: city
  */
  MAILING_ADDRESS_CITY = 117,
  /**
  * Mailing address: jurisdiction code
  */
  MAILING_ADDRESS_JURISDICTION_CODE = 118,
  /**
  * Mailing address: postal code
  */
  MAILING_ADDRESS_POSTAL_CODE = 119,
  /**
  * Number for validation
  */
  AUDIT_INFORMATION = 120,
  /**
  * Inventory number
  */
  INVENTORY_NUMBER = 121,
  /**
  * Race ethnicity
  */
  RACE_ETHNICITY = 122,
  /**
  * Jurisdiction vehicle class
  */
  JURISDICTION_VEHICLE_CLASS = 123,
  /**
  * Jurisdiction endorsement code
  */
  JURISDICTION_ENDORSEMENT_CODE = 124,
  /**
  * Jurisdiction restriction code
  */
  JURISDICTION_RESTRICTION_CODE = 125,
  /**
  * Family name
  */
  FAMILY_NAME = 126,
  /**
  * Given name(s) (national)
  */
  GIVEN_NAMES_RUS = 127,
  /**
  * Visa ID (national)
  */
  VISA_ID_RUS = 128,
  /**
  * Father&#39;s name
  */
  FATHERS_NAME = 129,
  /**
  * Father&#39;s name (national)
  */
  FATHERS_NAME_RUS = 130,
  /**
  * Surname and given names (national)
  */
  SURNAME_AND_GIVEN_NAMES_RUS = 131,
  /**
  * Place of birth (national)
  */
  PLACE_OF_BIRTH_RUS = 132,
  /**
  * Issuing authority (national)
  */
  AUTHORITY_RUS = 133,
  /**
  * Issuing state code (numeric)
  */
  ISSUING_STATE_CODE_NUMERIC = 134,
  /**
  * Nationality code (numeric)
  */
  NATIONALITY_CODE_NUMERIC = 135,
  /**
  * Engine power
  */
  ENGINE_POWER = 136,
  /**
  * Engine volume
  */
  ENGINE_VOLUME = 137,
  /**
  * Chassis number
  */
  CHASSIS_NUMBER = 138,
  /**
  * Engine number
  */
  ENGINE_NUMBER = 139,
  /**
  * Engine model
  */
  ENGINE_MODEL = 140,
  /**
  * Vehicle category
  */
  VEHICLE_CATEGORY = 141,
  /**
  * Identity card number
  */
  IDENTITY_CARD_NUMBER = 142,
  /**
  * Control number
  */
  CONTROL_NUMBER = 143,
  /**
  * Parents&#39; given names
  */
  PARENTS_GIVEN_NAMES = 144,
  /**
  * Second surname
  */
  SECOND_SURNAME = 145,
  /**
  * Middle name
  */
  MIDDLE_NAME = 146,
  /**
  * Vehicle identification number
  */
  REG_CERT_VIN = 147,
  /**
  * VIN check digit
  */
  REG_CERT_VIN_CHECK_DIGIT = 148,
  /**
  * VIN checksum
  */
  REG_CERT_VIN_CHECKSUM = 149,
  /**
  * Line 1 check digit
  */
  LINE_1_CHECK_DIGIT = 150,
  /**
  * Line 2 check digit
  */
  LINE_2_CHECK_DIGIT = 151,
  /**
  * Line 3 check digit
  */
  LINE_3_CHECK_DIGIT = 152,
  /**
  * Line 1 checksum
  */
  LINE_1_CHECKSUM = 153,
  /**
  * Line 2 checksum
  */
  LINE_2_CHECKSUM = 154,
  /**
  * Line 3 checksum
  */
  LINE_3_CHECKSUM = 155,
  /**
  * Registration number check digit
  */
  REG_CERT_REG_NUMBER_CHECK_DIGIT = 156,
  /**
  * Registration number checksum
  */
  REG_CERT_REG_NUMBER_CHECKSUM = 157,
  /**
  * Vehicle ITS code
  */
  REG_CERT_VEHICLE_ITS_CODE = 158,
  /**
  * Card access number
  */
  CARD_ACCESS_NUMBER = 159,
  /**
  * Marital status
  */
  MARITAL_STATUS = 160,
  /**
  * Company name
  */
  COMPANY_NAME = 161,
  /**
  * Special notes
  */
  SPECIAL_NOTES = 162,
  /**
  * Spouse&#39;s surname
  */
  SURNAME_OF_SPOUSE = 163,
  /**
  * Tracking number
  */
  TRACKING_NUMBER = 164,
  /**
  * Booklet number
  */
  BOOKLET_NUMBER = 165,
  /**
  * Children
  */
  CHILDREN = 166,
  /**
  * Copy
  */
  COPY = 167,
  /**
  * Serial number
  */
  SERIAL_NUMBER = 168,
  /**
  * Dossier number
  */
  DOSSIER_NUMBER = 169,
  /**
  * AKA: surname and given names
  */
  AKA_SURNAME_AND_GIVEN_NAMES = 170,
  /**
  * Territorial validity
  */
  TERRITORIAL_VALIDITY = 171,
  /**
  * MRZ strings with correct checksums
  */
  MRZ_STRINGS_WITH_CORRECT_CHECK_SUMS = 172,
  /**
  * CDL restriction code
  */
  DL_CDL_RESTRICTION_CODE = 173,
  /**
  * Date of 18th birthday
  */
  DL_UNDER_18_DATE = 174,
  /**
  * DL record created
  */
  DL_RECORD_CREATED = 175,
  /**
  * DL date of duplicate issue
  */
  DL_DUPLICATE_DATE = 176,
  /**
  * Card type
  */
  DL_ISSUE_TYPE = 177,
  /**
  * Military ID number
  */
  MILITARY_BOOK_NUMBER = 178,
  /**
  * Destination
  */
  DESTINATION = 179,
  /**
  * Blood group
  */
  BLOOD_GROUP = 180,
  /**
  * Sequence number
  */
  SEQUENCE_NUMBER = 181,
  /**
  * Body type
  */
  REG_CERT_BODY_TYPE = 182,
  /**
  * Vehicle make
  */
  REG_CERT_CAR_MARK = 183,
  /**
  * Transaction number
  */
  TRANSACTION_NUMBER = 184,
  /**
  * Age
  */
  AGE = 185,
  /**
  * Folio number
  */
  FOLIO_NUMBER = 186,
  /**
  * Voter key
  */
  VOTER_KEY = 187,
  /**
  * Address: municipality
  */
  ADDRESS_MUNICIPALITY = 188,
  /**
  * Address: location
  */
  ADDRESS_LOCATION = 189,
  /**
  * Section
  */
  SECTION = 190,
  /**
  * OCR number
  */
  OCR_NUMBER = 191,
  /**
  * Federal elections
  */
  FEDERAL_ELECTIONS = 192,
  /**
  * Reference number
  */
  REFERENCE_NUMBER = 193,
  /**
  * Optional data checksum
  */
  OPTIONAL_DATA_CHECKSUM = 194,
  /**
  * Optional data check digit
  */
  OPTIONAL_DATA_CHECK_DIGIT = 195,
  /**
  * Visa number
  */
  VISA_NUMBER = 196,
  /**
  * Visa number checksum
  */
  VISA_NUMBER_CHECKSUM = 197,
  /**
  * Visa number check digit
  */
  VISA_NUMBER_CHECK_DIGIT = 198,
  /**
  * Voter
  */
  VOTER = 199,
  /**
  * Type of the previous document
  */
  PREVIOUS_TYPE = 200,
  /**
  * Field from MRZ
  */
  FIELD_FROM_MRZ = 220,
  /**
  * Current date
  */
  CURRENT_DATE = 221,
  /**
  * Status date of expiry
  */
  STATUS_DATE_OF_EXPIRY = 251,
  /**
  * Banknote number
  */
  BANKNOTE_NUMBER = 252,
  /**
  * CSC code
  */
  CSC_CODE = 253,
  /**
  * Pseudonym
  */
  ARTISTIC_NAME = 254,
  /**
  * Academic title
  */
  ACADEMIC_TITLE = 255,
  /**
  * Address country
  */
  ADDRESS_COUNTRY = 256,
  /**
  * Address ZIP code
  */
  ADDRESS_ZIP_CODE = 257,
  /**
  * eID residence permit 1
  */
  E_ID_RESIDENCE_PERMIT_1 = 258,
  /**
  * eID residence permit 2
  */
  E_ID_RESIDENCE_PERMIT_2 = 259,
  /**
  * eID place of birth: street
  */
  E_ID_PLACE_OF_BIRTH_STREET = 260,
  /**
  * eID place of birth: city
  */
  E_ID_PLACE_OF_BIRTH_CITY = 261,
  /**
  * eID place of birth: state
  */
  E_ID_PLACE_OF_BIRTH_STATE = 262,
  /**
  * eID place of birth: country
  */
  E_ID_PLACE_OF_BIRTH_COUNTRY = 263,
  /**
  * eID place of birth: postal code
  */
  E_ID_PLACE_OF_BIRTH_ZIP_CODE = 264,
  /**
  * CDL class
  */
  CDL_CLASS = 265,
  /**
  * Date of 19th birthday
  */
  DL_UNDER_19_DATE = 266,
  /**
  * Weight (pound)
  */
  WEIGHT_POUNDS = 267,
  /**
  * Indicator of document limited duration
  */
  LIMITED_DURATION_DOCUMENT_INDICATOR = 268,
  /**
  * Endorsement expiration date
  */
  ENDORSEMENT_EXPIRATION_DATE = 269,
  /**
  * Revision date
  */
  REVISION_DATE = 270,
  /**
  * Compliance type
  */
  COMPLIANCE_TYPE = 271,
  /**
  * Family name truncation
  */
  FAMILY_NAME_TRUNCATION = 272,
  /**
  * First name truncation
  */
  FIRST_NAME_TRUNCATION = 273,
  /**
  * Middle name truncation
  */
  MIDDLE_NAME_TRUNCATION = 274,
  /**
  * Exam date
  */
  EXAM_DATE = 275,
  /**
  * Organization
  */
  ORGANIZATION = 276,
  /**
  * Department
  */
  DEPARTMENT = 277,
  /**
  * Pay grade
  */
  PAY_GRADE = 278,
  /**
  * Rank
  */
  RANK = 279,
  /**
  * Benefits number
  */
  BENEFITS_NUMBER = 280,
  /**
  * Sponsor service
  */
  SPONSOR_SERVICE = 281,
  /**
  * Sponsor status
  */
  SPONSOR_STATUS = 282,
  /**
  * Sponsor
  */
  SPONSOR = 283,
  /**
  * Relationship
  */
  RELATIONSHIP = 284,
  /**
  * USCIS
  */
  USCIS = 285,
  /**
  * Category
  */
  CATEGORY = 286,
  /**
  * Conditions
  */
  CONDITIONS = 287,
  /**
  * Identifier
  */
  IDENTIFIER = 288,
  /**
  * Configuration
  */
  CONFIGURATION = 289,
  /**
  * Discretionary data
  */
  DISCRETIONARY_DATA = 290,
  /**
  * Line 1 optional data
  */
  LINE_1_OPTIONAL_DATA = 291,
  /**
  * Line 2 optional data
  */
  LINE_2_OPTIONAL_DATA = 292,
  /**
  * Line 3 optional data
  */
  LINE_3_OPTIONAL_DATA = 293,
  /**
  * EQV code
  */
  EQV_CODE = 294,
  /**
  * ALT code
  */
  ALT_CODE = 295,
  /**
  * Binary code
  */
  BINARY_CODE = 296,
  /**
  * Pseudo code
  */
  PSEUDO_CODE = 297,
  /**
  * Fee
  */
  FEE = 298,
  /**
  * Stamp number
  */
  STAMP_NUMBER = 299,
  /**
  * SBH security options
  */
  SBH_SECURITY_OPTIONS = 300,
  /**
  * SBH integrity options
  */
  SBH_INTEGRITY_OPTIONS = 301,
  /**
  * Date of creation
  */
  DATE_OF_CREATION = 302,
  /**
  * Validity period
  */
  VALIDITY_PERIOD = 303,
  /**
  * Patron header version
  */
  PATRON_HEADER_VERSION = 304,
  /**
  * BDB type
  */
  BDB_TYPE = 305,
  /**
  * Biometric type
  */
  BIOMETRIC_TYPE = 306,
  /**
  * Biometric subtype
  */
  BIOMETRIC_SUBTYPE = 307,
  /**
  * Biometric product ID
  */
  BIOMETRIC_PRODUCT_ID = 308,
  /**
  * Biometric format owner
  */
  BIOMETRIC_FORMAT_OWNER = 309,
  /**
  * Biometric format type
  */
  BIOMETRIC_FORMAT_TYPE = 310,
  /**
  * Phone
  */
  PHONE = 311,
  /**
  * Profession
  */
  PROFESSION = 312,
  /**
  * Position
  */
  TITLE = 313,
  /**
  * Personal data summary
  */
  PERSONAL_SUMMARY = 314,
  /**
  * Other valid ID
  */
  OTHER_VALID_ID = 315,
  /**
  * Custody info
  */
  CUSTODY_INFO = 316,
  /**
  * Other name
  */
  OTHER_NAME = 317,
  /**
  * Observations
  */
  OBSERVATIONS = 318,
  /**
  * Tax
  */
  TAX = 319,
  /**
  * Personalization date
  */
  DATE_OF_PERSONALIZATION = 320,
  /**
  * Personalization SN
  */
  PERSONALIZATION_SN = 321,
  /**
  * Other person name
  */
  OTHER_PERSON_NAME = 322,
  /**
  * Notify person: date of record
  */
  PERSON_TO_NOTIFY_DATE_OF_RECORD = 323,
  /**
  * Notify person: name
  */
  PERSON_TO_NOTIFY_NAME = 324,
  /**
  * Notify person: phone
  */
  PERSON_TO_NOTIFY_PHONE = 325,
  /**
  * Notify person: address
  */
  PERSON_TO_NOTIFY_ADDRESS = 326,
  /**
  * DS certificate issuer
  */
  DS_CERTIFICATE_ISSUER = 327,
  /**
  * DS certificate subject
  */
  DS_CERTIFICATE_SUBJECT = 328,
  /**
  * DS certificate valid from
  */
  DS_CERTIFICATE_VALID_FROM = 329,
  /**
  * DS certificate valid to
  */
  DS_CERTIFICATE_VALID_TO = 330,
  /**
  * Vehicle data from the DG1 data group
  */
  VRC_DATA_OBJECT_ENTRY = 331,
  /**
  * Type of approval number
  */
  TYPE_APPROVAL_NUMBER = 332,
  /**
  * Administrative number
  */
  ADMINISTRATIVE_NUMBER = 333,
  /**
  * Document discriminator
  */
  DOCUMENT_DISCRIMINATOR = 334,
  /**
  * Data discriminator
  */
  DATA_DISCRIMINATOR = 335,
  /**
  * ID number of ISO issuer
  */
  ISO_ISSUER_ID_NUMBER = 336,
  /**
  * GNIB number
  */
  GNIB_NUMBER = 340,
  /**
  * Department number
  */
  DEPT_NUMBER = 341,
  /**
  * Telegraph code
  */
  TELEX_CODE = 342,
  /**
  * Allergies
  */
  ALLERGIES = 343,
  /**
  * Special code
  */
  SP_CODE = 344,
  /**
  * Court code
  */
  COURT_CODE = 345,
  /**
  * County
  */
  CTY = 346,
  /**
  * Sponsor SSN
  */
  SPONSOR_SSN = 347,
  /**
  * DoD number
  */
  DOD_NUMBER = 348,
  /**
  * Expiry date of Motorcycle Novice status
  */
  MC_NOVICE_DATE = 349,
  /**
  * DUF number
  */
  DUF_NUMBER = 350,
  /**
  * AGY
  */
  AGY = 351,
  /**
  * PNR code
  */
  PNR_CODE = 352,
  /**
  * Code of the airport of departure
  */
  FROM_AIRPORT_CODE = 353,
  /**
  * Code of the airport of arrival
  */
  TO_AIRPORT_CODE = 354,
  /**
  * Flight number
  */
  FLIGHT_NUMBER = 355,
  /**
  * Date of flight
  */
  DATE_OF_FLIGHT = 356,
  /**
  * Seat number
  */
  SEAT_NUMBER = 357,
  /**
  * Date of boarding pass issue
  */
  DATE_OF_ISSUE_BOARDING_PASS = 358,
  /**
  * CCW until
  */
  CCW_UNTIL = 359,
  /**
  * Reference number checksum
  */
  REFERENCE_NUMBER_CHECKSUM = 360,
  /**
  * Reference number check digit
  */
  REFERENCE_NUMBER_CHECK_DIGIT = 361,
  /**
  * Room number
  */
  ROOM_NUMBER = 362,
  /**
  * Religion
  */
  RELIGION = 363,
  /**
  * Months to expire
  */
  REMAINDER_TERM = 364,
  /**
  * Electronic ticket indicator
  */
  ELECTRONIC_TICKET_INDICATOR = 365,
  /**
  * Compartment code
  */
  COMPARTMENT_CODE = 366,
  /**
  * Check-in sequence number
  */
  CHECK_IN_SEQUENCE_NUMBER = 367,
  /**
  * Airline designator of boarding pass issuer
  */
  AIRLINE_DESIGNATOR_OF_BOARDING_PASS_ISSUER = 368,
  /**
  * Airline numeric code
  */
  AIRLINE_NUMERIC_CODE = 369,
  /**
  * Ticket number
  */
  TICKET_NUMBER = 370,
  /**
  * Frequent flyer airline designator
  */
  FREQUENT_FLYER_AIRLINE_DESIGNATOR = 371,
  /**
  * Frequent flyer number
  */
  FREQUENT_FLYER_NUMBER = 372,
  /**
  * Free baggage allowance
  */
  FREE_BAGGAGE_ALLOWANCE = 373,
  /**
  * PDF417 codec
  */
  PDF417_CODEC = 374,
  /**
  * Identity card number checksum
  */
  IDENTITY_CARD_NUMBER_CHECKSUM = 375,
  /**
  * Identity card number check digit
  */
  IDENTITY_CARD_NUMBER_CHECK_DIGIT = 376,
  /**
  * Veteran
  */
  VETERAN = 377,
  /**
  * DL category A1 valid from
  */
  DL_CLASS_CODE_A1_FROM = 378,
  /**
  * DL category A1 valid to
  */
  DL_CLASS_CODE_A1_TO = 379,
  /**
  * DL category A1 codes
  */
  DL_CLASS_CODE_A1_NOTES = 380,
  /**
  * DL category A valid from
  */
  DL_CLASS_CODE_A_FROM = 381,
  /**
  * DL category A valid to
  */
  DL_CLASS_CODE_A_TO = 382,
  /**
  * DL category A codes
  */
  DL_CLASS_CODE_A_NOTES = 383,
  /**
  * DL category B valid from
  */
  DL_CLASS_CODE_B_FROM = 384,
  /**
  * DL category B valid to
  */
  DL_CLASS_CODE_B_TO = 385,
  /**
  * DL category B codes
  */
  DL_CLASS_CODE_B_NOTES = 386,
  /**
  * DL category C1 valid from
  */
  DL_CLASS_CODE_C1_FROM = 387,
  /**
  * DL category C1 valid to
  */
  DL_CLASS_CODE_C1_TO = 388,
  /**
  * DL category C1 codes
  */
  DL_CLASS_CODE_C1_NOTES = 389,
  /**
  * DL category C valid from
  */
  DL_CLASS_CODE_C_FROM = 390,
  /**
  * DL category C valid to
  */
  DL_CLASS_CODE_C_TO = 391,
  /**
  * DL category C codes
  */
  DL_CLASS_CODE_C_NOTES = 392,
  /**
  * DL category D1 valid from
  */
  DL_CLASS_CODE_D1_FROM = 393,
  /**
  * DL category D1 valid to
  */
  DL_CLASS_CODE_D1_TO = 394,
  /**
  * DL category D1 codes
  */
  DL_CLASS_CODE_D1_NOTES = 395,
  /**
  * DL category D valid from
  */
  DL_CLASS_CODE_D_FROM = 396,
  /**
  * DL category D valid to
  */
  DL_CLASS_CODE_D_TO = 397,
  /**
  * DL category D codes
  */
  DL_CLASS_CODE_D_NOTES = 398,
  /**
  * DL category BE valid from
  */
  DL_CLASS_CODE_BE_FROM = 399,
  /**
  * DL category BE valid to
  */
  DL_CLASS_CODE_BE_TO = 400,
  /**
  * DL category BE codes
  */
  DL_CLASS_CODE_BE_NOTES = 401,
  /**
  * DL category C1E valid from
  */
  DL_CLASS_CODE_C1E_FROM = 402,
  /**
  * DL category C1E valid to
  */
  DL_CLASS_CODE_C1E_TO = 403,
  /**
  * DL category C1E codes
  */
  DL_CLASS_CODE_C1E_NOTES = 404,
  /**
  * DL category CE valid from
  */
  DL_CLASS_CODE_CE_FROM = 405,
  /**
  * DL category CE valid to
  */
  DL_CLASS_CODE_CE_TO = 406,
  /**
  * DL category CE codes
  */
  DL_CLASS_CODE_CE_NOTES = 407,
  /**
  * DL category D1E valid from
  */
  DL_CLASS_CODE_D1E_FROM = 408,
  /**
  * DL category D1E valid to
  */
  DL_CLASS_CODE_D1E_TO = 409,
  /**
  * DL category D1E codes
  */
  DL_CLASS_CODE_D1E_NOTES = 410,
  /**
  * DL category DE valid from
  */
  DL_CLASS_CODE_DE_FROM = 411,
  /**
  * DL category DE valid to
  */
  DL_CLASS_CODE_DE_TO = 412,
  /**
  * DL category DE codes
  */
  DL_CLASS_CODE_DE_NOTES = 413,
  /**
  * DL category M valid from
  */
  DL_CLASS_CODE_M_FROM = 414,
  /**
  * DL category M valid to
  */
  DL_CLASS_CODE_M_TO = 415,
  /**
  * DL category M codes
  */
  DL_CLASS_CODE_M_NOTES = 416,
  /**
  * DL category L valid from
  */
  DL_CLASS_CODE_L_FROM = 417,
  /**
  * DL category L valid to
  */
  DL_CLASS_CODE_L_TO = 418,
  /**
  * DL category L codes
  */
  DL_CLASS_CODE_L_NOTES = 419,
  /**
  * DL category T valid from
  */
  DL_CLASS_CODE_T_FROM = 420,
  /**
  * DL category T valid to
  */
  DL_CLASS_CODE_T_TO = 421,
  /**
  * DL category T codes
  */
  DL_CLASS_CODE_T_NOTES = 422,
  /**
  * DL category AM valid from
  */
  DL_CLASS_CODE_AM_FROM = 423,
  /**
  * DL category AM valid to
  */
  DL_CLASS_CODE_AM_TO = 424,
  /**
  * DL category AM codes
  */
  DL_CLASS_CODE_AM_NOTES = 425,
  /**
  * DL category A2 valid from
  */
  DL_CLASS_CODE_A2_FROM = 426,
  /**
  * DL category A2 valid to
  */
  DL_CLASS_CODE_A2_TO = 427,
  /**
  * DL category A2 codes
  */
  DL_CLASS_CODE_A2_NOTES = 428,
  /**
  * DL category B1 valid from
  */
  DL_CLASS_CODE_B1_FROM = 429,
  /**
  * DL category B1 valid to
  */
  DL_CLASS_CODE_B1_TO = 430,
  /**
  * DL category B1 codes
  */
  DL_CLASS_CODE_B1_NOTES = 431,
  /**
  * Surname at birth
  */
  SURNAME_AT_BIRTH = 432,
  /**
  * Civil status
  */
  CIVIL_STATUS = 433,
  /**
  * Number of seats
  */
  NUMBER_OF_SEATS = 434,
  /**
  * Number of standing places
  */
  NUMBER_OF_STANDING_PLACES = 435,
  /**
  * Max speed
  */
  MAX_SPEED = 436,
  /**
  * Fuel type
  */
  FUEL_TYPE = 437,
  /**
  * Vehicle environmental type
  */
  EC_ENVIRONMENTAL_TYPE = 438,
  /**
  * Power-to-weight ratio
  */
  POWER_WEIGHT_RATIO = 439,
  /**
  * Max mass of trailer (braked)
  */
  MAX_MASS_OF_TRAILER_BRAKED = 440,
  /**
  * Max mass of trailer (unbraked)
  */
  MAX_MASS_OF_TRAILER_UNBRAKED = 441,
  /**
  * Transmission type
  */
  TRANSMISSION_TYPE = 442,
  /**
  * Trailer hitch
  */
  TRAILER_HITCH = 443,
  /**
  * Accompanied by
  */
  ACCOMPANIED_BY = 444,
  /**
  * Police district
  */
  POLICE_DISTRICT = 445,
  /**
  * First issue date
  */
  FIRST_ISSUE_DATE = 446,
  /**
  * Payload capacity
  */
  PAYLOAD_CAPACITY = 447,
  /**
  * Number of axles
  */
  NUMBER_OF_AXLES = 448,
  /**
  * Permissible axle load
  */
  PERMISSIBLE_AXLE_LOAD = 449,
  /**
  * Precinct
  */
  PRECINCT = 450,
  /**
  * Invited by
  */
  INVITED_BY = 451,
  /**
  * Purpose of entry
  */
  PURPOSE_OF_ENTRY = 452,
  /**
  * Skin color
  */
  SKIN_COLOR = 453,
  /**
  * Complexion
  */
  COMPLEXION = 454,
  /**
  * Airport of departure
  */
  AIRPORT_FROM = 455,
  /**
  * Airport of arrival
  */
  AIRPORT_TO = 456,
  /**
  * Airline name
  */
  AIRLINE_NAME = 457,
  /**
  * Airline loyalty program for frequent flyers
  */
  AIRLINE_NAME_FREQUENT_FLYER = 458,
  /**
  * License number
  */
  LICENSE_NUMBER = 459,
  /**
  * In tanks
  */
  IN_TANKS = 460,
  /**
  * Other than tanks
  */
  EXCEPT_IN_TANKS = 461,
  /**
  * Fast Track service
  */
  FAST_TRACK = 462,
  /**
  * Owner
  */
  OWNER = 463,
  /**
  * MRZ strings from ICAO RFID
  */
  MRZ_STRINGS_ICAO_RFID = 464,
  /**
  * Number of card issuances
  */
  NUMBER_OF_CARD_ISSUANCE = 465,
  /**
  * Number of card issuances checksum
  */
  NUMBER_OF_CARD_ISSUANCE_CHECKSUM = 466,
  /**
  * Number of card issuances check digit
  */
  NUMBER_OF_CARD_ISSUANCE_CHECK_DIGIT = 467,
  /**
  * Century of birth
  */
  CENTURY_DATE_OF_BIRTH = 468,
  /**
  * DL category A3 valid from
  */
  DL_CLASS_CODE_A3_FROM = 469,
  /**
  * DL category A3 valid to
  */
  DL_CLASS_CODE_A3_TO = 470,
  /**
  * DL category A3 codes
  */
  DL_CLASS_CODE_A3_NOTES = 471,
  /**
  * DL category C2 valid from
  */
  DL_CLASS_CODE_C2_FROM = 472,
  /**
  * DL category C2 valid to
  */
  DL_CLASS_CODE_C2_TO = 473,
  /**
  * DL category C2 codes
  */
  DL_CLASS_CODE_C2_NOTES = 474,
  /**
  * DL category B2 valid from
  */
  DL_CLASS_CODE_B2_FROM = 475,
  /**
  * DL category B2 valid to
  */
  DL_CLASS_CODE_B2_TO = 476,
  /**
  * DL category B2 codes
  */
  DL_CLASS_CODE_B2_NOTES = 477,
  /**
  * DL category D2 valid from
  */
  DL_CLASS_CODE_D2_FROM = 478,
  /**
  * DL category D2 valid to
  */
  DL_CLASS_CODE_D2_TO = 479,
  /**
  * DL category D2 codes
  */
  DL_CLASS_CODE_D2_NOTES = 480,
  /**
  * DL category B2E valid from
  */
  DL_CLASS_CODE_B2E_FROM = 481,
  /**
  * DL category B2E valid to
  */
  DL_CLASS_CODE_B2E_TO = 482,
  /**
  * DL category B2E codes
  */
  DL_CLASS_CODE_B2E_NOTES = 483,
  /**
  * DL category G valid from
  */
  DL_CLASS_CODE_G_FROM = 484,
  /**
  * DL category G valid to
  */
  DL_CLASS_CODE_G_TO = 485,
  /**
  * DL category G codes
  */
  DL_CLASS_CODE_G_NOTES = 486,
  /**
  * DL category J valid from
  */
  DL_CLASS_CODE_J_FROM = 487,
  /**
  * DL category J valid to
  */
  DL_CLASS_CODE_J_TO = 488,
  /**
  * DL category J codes
  */
  DL_CLASS_CODE_J_NOTES = 489,
  /**
  * DL category LC valid from
  */
  DL_CLASS_CODE_LC_FROM = 490,
  /**
  * DL category LC valid to
  */
  DL_CLASS_CODE_LC_TO = 491,
  /**
  * DL category LC codes
  */
  DL_CLASS_CODE_LC_NOTES = 492,
  /**
  * Bank card number
  */
  BANK_CARD_NUMBER = 493,
  /**
  * Bank card validity
  */
  BANK_CARD_VALID_THRU = 494,
  /**
  * Tax number
  */
  TAX_NUMBER = 495,
  /**
  * Health insurance number
  */
  HEALTH_NUMBER = 496,
  /**
  * Grandfather&#39;s name
  */
  GRANDFATHER_NAME = 497,
  /**
  * Selectee indicator
  */
  SELECTEE_INDICATOR = 498,
  /**
  * Mother&#39;s surname
  */
  MOTHER_SURNAME = 499,
  /**
  * Mother&#39;s name
  */
  MOTHER_GIVEN_NAME = 500,
  /**
  * Father&#39;s surname
  */
  FATHER_SURNAME = 501,
  /**
  * Father&#39;s name
  */
  FATHER_GIVEN_NAME = 502,
  /**
  * Mother&#39;s date of birth
  */
  MOTHER_DATE_OF_BIRTH = 503,
  /**
  * Father&#39;s date of birth
  */
  FATHER_DATE_OF_BIRTH = 504,
  /**
  * Mother&#39;s personal number
  */
  MOTHER_PERSONAL_NUMBER = 505,
  /**
  * Father&#39;s personal number
  */
  FATHER_PERSONAL_NUMBER = 506,
  /**
  * Mother&#39;s place of birth
  */
  MOTHER_PLACE_OF_BIRTH = 507,
  /**
  * Father&#39;s place of birth
  */
  FATHER_PLACE_OF_BIRTH = 508,
  /**
  * Mother&#39;s country of birth
  */
  MOTHER_COUNTRY_OF_BIRTH = 509,
  /**
  * Father&#39;s country of birth
  */
  FATHER_COUNTRY_OF_BIRTH = 510,
  /**
  * Date of first renewal
  */
  DATE_FIRST_RENEWAL = 511,
  /**
  * Date of second renewal
  */
  DATE_SECOND_RENEWAL = 512,
  /**
  * Place of examination
  */
  PLACE_OF_EXAMINATION = 513,
  /**
  * Application number
  */
  APPLICATION_NUMBER = 514,
  /**
  * Voucher number
  */
  VOUCHER_NUMBER = 515,
  /**
  * Authorization number
  */
  AUTHORIZATION_NUMBER = 516,
  /**
  * Faculty
  */
  FACULTY = 517,
  /**
  * Form of education
  */
  FORM_OF_EDUCATION = 518,
  /**
  * DNI number
  */
  DNI_NUMBER = 519,
  /**
  * Retirement number
  */
  RETIREMENT_NUMBER = 520,
  /**
  * Professional id number
  */
  PROFESSIONAL_ID_NUMBER = 521,
  /**
  * Age at issue
  */
  AGE_AT_ISSUE = 522,
  /**
  * Years since issue
  */
  YEARS_SINCE_ISSUE = 523,
  /**
  * DL category BTP valid from
  */
  DL_CLASS_CODE_BTP_FROM = 524,
  /**
  * DL category BTP codes
  */
  DL_CLASS_CODE_BTP_NOTES = 525,
  /**
  * DL category BTP valid to
  */
  DL_CLASS_CODE_BTP_TO = 526,
  /**
  * DL category C3 valid from
  */
  DL_CLASS_CODE_C3_FROM = 527,
  /**
  * DL category C3 codes
  */
  DL_CLASS_CODE_C3_NOTES = 528,
  /**
  * DL category C3 valid to
  */
  DL_CLASS_CODE_C3_TO = 529,
  /**
  * DL category E valid from
  */
  DL_CLASS_CODE_E_FROM = 530,
  /**
  * DL category E codes
  */
  DL_CLASS_CODE_E_NOTES = 531,
  /**
  * DL category E valid to
  */
  DL_CLASS_CODE_E_TO = 532,
  /**
  * DL category F valid from
  */
  DL_CLASS_CODE_F_FROM = 533,
  /**
  * DL category F codes
  */
  DL_CLASS_CODE_F_NOTES = 534,
  /**
  * DL category F valid to
  */
  DL_CLASS_CODE_F_TO = 535,
  /**
  * DL category FA valid from
  */
  DL_CLASS_CODE_FA_FROM = 536,
  /**
  * DL category FA codes
  */
  DL_CLASS_CODE_FA_NOTES = 537,
  /**
  * DL category FA valid to
  */
  DL_CLASS_CODE_FA_TO = 538,
  /**
  * DL category FA1 valid from
  */
  DL_CLASS_CODE_FA1_FROM = 539,
  /**
  * DL category FA1 codes
  */
  DL_CLASS_CODE_FA1_NOTES = 540,
  /**
  * DL category FA1 valid to
  */
  DL_CLASS_CODE_FA1_TO = 541,
  /**
  * DL category FB valid from
  */
  DL_CLASS_CODE_FB_FROM = 542,
  /**
  * DL category FB codes
  */
  DL_CLASS_CODE_FB_NOTES = 543,
  /**
  * DL category FB valid to
  */
  DL_CLASS_CODE_FB_TO = 544,
  /**
  * DL category G1 valid from
  */
  DL_CLASS_CODE_G1_FROM = 545,
  /**
  * DL category G1 codes
  */
  DL_CLASS_CODE_G1_NOTES = 546,
  /**
  * DL category G1 valid to
  */
  DL_CLASS_CODE_G1_TO = 547,
  /**
  * DL category H valid from
  */
  DL_CLASS_CODE_H_FROM = 548,
  /**
  * DL category H codes
  */
  DL_CLASS_CODE_H_NOTES = 549,
  /**
  * DL category H valid to
  */
  DL_CLASS_CODE_H_TO = 550,
  /**
  * DL category I valid from
  */
  DL_CLASS_CODE_I_FROM = 551,
  /**
  * DL category I codes
  */
  DL_CLASS_CODE_I_NOTES = 552,
  /**
  * DL category I valid to
  */
  DL_CLASS_CODE_I_TO = 553,
  /**
  * DL category K valid from
  */
  DL_CLASS_CODE_K_FROM = 554,
  /**
  * DL category K codes
  */
  DL_CLASS_CODE_K_NOTES = 555,
  /**
  * DL category K valid to
  */
  DL_CLASS_CODE_K_TO = 556,
  /**
  * DL category LK valid from
  */
  DL_CLASS_CODE_LK_FROM = 557,
  /**
  * DL category LK codes
  */
  DL_CLASS_CODE_LK_NOTES = 558,
  /**
  * DL category LK valid to
  */
  DL_CLASS_CODE_LK_TO = 559,
  /**
  * DL category N valid from
  */
  DL_CLASS_CODE_N_FROM = 560,
  /**
  * DL category N codes
  */
  DL_CLASS_CODE_N_NOTES = 561,
  /**
  * DL category N valid to
  */
  DL_CLASS_CODE_N_TO = 562,
  /**
  * DL category S valid from
  */
  DL_CLASS_CODE_S_FROM = 563,
  /**
  * DL category S codes
  */
  DL_CLASS_CODE_S_NOTES = 564,
  /**
  * DL category S valid to
  */
  DL_CLASS_CODE_S_TO = 565,
  /**
  * DL category TB valid from
  */
  DL_CLASS_CODE_TB_FROM = 566,
  /**
  * DL category TB codes
  */
  DL_CLASS_CODE_TB_NOTES = 567,
  /**
  * DL category TB valid to
  */
  DL_CLASS_CODE_TB_TO = 568,
  /**
  * DL category TM valid from
  */
  DL_CLASS_CODE_TM_FROM = 569,
  /**
  * DL category TM codes
  */
  DL_CLASS_CODE_TM_NOTES = 570,
  /**
  * DL category TM valid to
  */
  DL_CLASS_CODE_TM_TO = 571,
  /**
  * DL category TR valid from
  */
  DL_CLASS_CODE_TR_FROM = 572,
  /**
  * DL category TR codes
  */
  DL_CLASS_CODE_TR_NOTES = 573,
  /**
  * DL category TR valid to
  */
  DL_CLASS_CODE_TR_TO = 574,
  /**
  * DL category TV valid from
  */
  DL_CLASS_CODE_TV_FROM = 575,
  /**
  * DL category TV codes
  */
  DL_CLASS_CODE_TV_NOTES = 576,
  /**
  * DL category TV valid to
  */
  DL_CLASS_CODE_TV_TO = 577,
  /**
  * DL category V valid from
  */
  DL_CLASS_CODE_V_FROM = 578,
  /**
  * DL category V codes
  */
  DL_CLASS_CODE_V_NOTES = 579,
  /**
  * DL category V valid to
  */
  DL_CLASS_CODE_V_TO = 580,
  /**
  * DL category W valid from
  */
  DL_CLASS_CODE_W_FROM = 581,
  /**
  * DL category W codes
  */
  DL_CLASS_CODE_W_NOTES = 582,
  /**
  * DL category W valid to
  */
  DL_CLASS_CODE_W_TO = 583,
  /**
  * URL
  */
  URL = 584,
  /**
  * Caliber
  */
  CALIBER = 585,
  /**
  * Model
  */
  MODEL = 586,
  /**
  * Make
  */
  MAKE = 587,
  /**
  * Number of cylinders
  */
  NUMBER_OF_CYLINDERS = 588,
  /**
  * Surname of husband after registration
  */
  SURNAME_OF_HUSBAND_AFTER_REGISTRATION = 589,
  /**
  * Surname of wife after registration
  */
  SURNAME_OF_WIFE_AFTER_REGISTRATION = 590,
  /**
  * Date of birth of wife
  */
  DATE_OF_BIRTH_OF_WIFE = 591,
  /**
  * Date of birth of husband
  */
  DATE_OF_BIRTH_OF_HUSBAND = 592,
  /**
  * Citizenship of first person
  */
  CITIZENSHIP_OF_FIRST_PERSON = 593,
  /**
  * Citizenship of second person
  */
  CITIZENSHIP_OF_SECOND_PERSON = 594,
  /**
  * CVV code
  */
  CVV = 595,
  /**
  * Date of insurance expiry
  */
  DATE_OF_INSURANCE_EXPIRY = 596,
  /**
  * Mortgage by
  */
  MORTGAGE_BY = 597,
  /**
  * Old document number
  */
  OLD_DOCUMENT_NUMBER = 598,
  /**
  * Old date of issue
  */
  OLD_DATE_OF_ISSUE = 599,
  /**
  * Old place of issue
  */
  OLD_PLACE_OF_ISSUE = 600,
  /**
  * DL category LR valid from
  */
  DL_CLASS_CODE_LR_FROM = 601,
  /**
  * DL category LR valid to
  */
  DL_CLASS_CODE_LR_TO = 602,
  /**
  * DL category LR codes
  */
  DL_CLASS_CODE_LR_NOTES = 603,
  /**
  * DL category MR valid from
  */
  DL_CLASS_CODE_MR_FROM = 604,
  /**
  * DL category MR valid to
  */
  DL_CLASS_CODE_MR_TO = 605,
  /**
  * DL category MR codes
  */
  DL_CLASS_CODE_MR_NOTES = 606,
  /**
  * DL category HR valid from
  */
  DL_CLASS_CODE_HR_FROM = 607,
  /**
  * DL category HR valid to
  */
  DL_CLASS_CODE_HR_TO = 608,
  /**
  * DL category HR codes
  */
  DL_CLASS_CODE_HR_NOTES = 609,
  /**
  * DL category HC valid from
  */
  DL_CLASS_CODE_HC_FROM = 610,
  /**
  * DL category HC valid to
  */
  DL_CLASS_CODE_HC_TO = 611,
  /**
  * DL category HC codes
  */
  DL_CLASS_CODE_HC_NOTES = 612,
  /**
  * DL category MC valid from
  */
  DL_CLASS_CODE_MC_FROM = 613,
  /**
  * DL category MC valid to
  */
  DL_CLASS_CODE_MC_TO = 614,
  /**
  * DL category MC codes
  */
  DL_CLASS_CODE_MC_NOTES = 615,
  /**
  * DL category RE valid from
  */
  DL_CLASS_CODE_RE_FROM = 616,
  /**
  * DL category RE valid to
  */
  DL_CLASS_CODE_RE_TO = 617,
  /**
  * DL category RE codes
  */
  DL_CLASS_CODE_RE_NOTES = 618,
  /**
  * DL category R valid from
  */
  DL_CLASS_CODE_R_FROM = 619,
  /**
  * DL category R valid to
  */
  DL_CLASS_CODE_R_TO = 620,
  /**
  * DL category R codes
  */
  DL_CLASS_CODE_R_NOTES = 621,
  /**
  * DL category CA valid from
  */
  DL_CLASS_CODE_CA_FROM = 622,
  /**
  * DL category CA valid to
  */
  DL_CLASS_CODE_CA_TO = 623,
  /**
  * DL category CA codes
  */
  DL_CLASS_CODE_CA_NOTES = 624,
  /**
  * Citizenship status
  */
  CITIZENSHIP_STATUS = 625,
  /**
  * Military service from
  */
  MILITARY_SERVICE_FROM = 626,
  /**
  * Military service to
  */
  MILITARY_SERVICE_TO = 627,
  /**
  * DL category NT valid from
  */
  DL_CLASS_CODE_NT_FROM = 628,
  /**
  * DL category NT valid to
  */
  DL_CLASS_CODE_NT_TO = 629,
  /**
  * DL category NT codes
  */
  DL_CLASS_CODE_NT_NOTES = 630,
  /**
  * DL category TN valid from
  */
  DL_CLASS_CODE_TN_FROM = 631,
  /**
  * DL category TN valid to
  */
  DL_CLASS_CODE_TN_TO = 632,
  /**
  * DL category TN codes
  */
  DL_CLASS_CODE_TN_NOTES = 633,
  /**
  * DL category D3 valid from
  */
  DL_CLASS_CODE_D3_FROM = 634,
  /**
  * DL category D3 valid to
  */
  DL_CLASS_CODE_D3_TO = 635,
  /**
  * DL category D3 codes
  */
  DL_CLASS_CODE_D3_NOTES = 636,
  /**
  * Alternative date of expiry
  */
  ALT_DATE_OF_EXPIRY = 637,
  /**
  * DL category CD valid from
  */
  DL_CLASS_CODE_CD_FROM = 638,
  /**
  * DL category CD valid to
  */
  DL_CLASS_CODE_CD_TO = 639,
  /**
  * DL category CD codes
  */
  DL_CLASS_CODE_CD_NOTES = 640,
  /**
  * Issuer identification number
  */
  ISSUER_IDENTIFICATION_NUMBER = 641,
  /**
  * Payment period from
  */
  PAYMENT_PERIOD_FROM = 642,
  /**
  * Payment period to
  */
  PAYMENT_PERIOD_TO = 643,
  /**
  * Vaccination certificate identifier
  */
  VACCINATION_CERTIFICATE_IDENTIFIER = 644,
  /**
  * First name
  */
  FIRST_NAME = 645,
  /**
  * Date of arrival
  */
  DATE_OF_ARRIVAL = 646,
  /**
  * Second name
  */
  SECOND_NAME = 647,
  /**
  * Third name
  */
  THIRD_NAME = 648,
  /**
  * Fourth name
  */
  FOURTH_NAME = 649,
  /**
  * Last name
  */
  LAST_NAME = 650,
  /**
  * DL category RM valid from
  */
  DL_CLASS_CODE_RM_FROM = 651,
  /**
  * DL category RM codes
  */
  DL_CLASS_CODE_RM_NOTES = 652,
  /**
  * DL category RM valid to
  */
  DL_CLASS_CODE_RM_TO = 653,
  /**
  * DL category PW valid from
  */
  DL_CLASS_CODE_PW_FROM = 654,
  /**
  * DL category PW codes
  */
  DL_CLASS_CODE_PW_NOTES = 655,
  /**
  * DL category PW valid to
  */
  DL_CLASS_CODE_PW_TO = 656,
  /**
  * DL category EB valid from
  */
  DL_CLASS_CODE_EB_FROM = 657,
  /**
  * DL category EB codes
  */
  DL_CLASS_CODE_EB_NOTES = 658,
  /**
  * DL category EB valid to
  */
  DL_CLASS_CODE_EB_TO = 659,
  /**
  * DL category EC valid from
  */
  DL_CLASS_CODE_EC_FROM = 660,
  /**
  * DL category EC codes
  */
  DL_CLASS_CODE_EC_NOTES = 661,
  /**
  * DL category EC valid to
  */
  DL_CLASS_CODE_EC_TO = 662,
  /**
  * DL category EC1 valid from
  */
  DL_CLASS_CODE_EC1_FROM = 663,
  /**
  * DL category EC1 codes
  */
  DL_CLASS_CODE_EC1_NOTES = 664,
  /**
  * DL category EC1 valid to
  */
  DL_CLASS_CODE_EC1_TO = 665,
  /**
  * Place of birth city
  */
  PLACE_OF_BIRTH_CITY = 666,
  /**
  * Year of birth
  */
  YEAR_OF_BIRTH = 667,
  /**
  * Year of expiry
  */
  YEAR_OF_EXPIRY = 668,
  /**
  * Grandfather&#39;s name (maternal)
  */
  GRANDFATHER_NAME_MATERNAL = 669,
  /**
  * First surname
  */
  FIRST_SURNAME = 670,
  /**
  * Month of birth
  */
  MONTH_OF_BIRTH = 671,
  /**
  * Floor number
  */
  ADDRESS_FLOOR_NUMBER = 672,
  /**
  * Entrance number
  */
  ADDRESS_ENTRANCE = 673,
  /**
  * Block number
  */
  ADDRESS_BLOCK_NUMBER = 674,
  /**
  * Street number
  */
  ADDRESS_STREET_NUMBER = 675,
  /**
  * Street type
  */
  ADDRESS_STREET_TYPE = 676,
  /**
  * City sector
  */
  ADDRESS_CITY_SECTOR = 677,
  /**
  * County type
  */
  ADDRESS_COUNTY_TYPE = 678,
  /**
  * City type
  */
  ADDRESS_CITY_TYPE = 679,
  /**
  * Building type
  */
  ADDRESS_BUILDING_TYPE = 680
}
