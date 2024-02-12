import { eVisualFieldType } from './visual-field-type.const';


/**
* Enumeration contains a set of constants specifying the type of
* logically parsed fields of document filling
* @enum {number}
*/
export enum eRfidVisualFieldType {
  /**
  * SBH security options
  */
  SBH_SECURITY_OPTIONS = eVisualFieldType.SBH_SECURITY_OPTIONS,

  /**
  * SBH integrity options
  */
  SBH_INTEGRITY_OPTIONS = eVisualFieldType.SBH_INTEGRITY_OPTIONS,

  /**
  * Date of creation
  */
  DATE_OF_CREATION = eVisualFieldType.DATE_OF_CREATION,

  /**
  * Validity period
  */
  VALIDITY_PERIOD = eVisualFieldType.VALIDITY_PERIOD,

  /**
  * Patron header version
  */
  PATRON_HEADER_VERSION = eVisualFieldType.PATRON_HEADER_VERSION,

  /**
  * BDB type
  */
  BDB_TYPE = eVisualFieldType.BDB_TYPE,

  /**
  * Biometric type
  */
  BIOMETRIC_TYPE = eVisualFieldType.BIOMETRIC_TYPE,

  /**
  * Biometric subtype
  */
  BIOMETRIC_SUBTYPE = eVisualFieldType.BIOMETRIC_SUBTYPE,

  /**
  * Biometric product ID
  */
  BIOMETRIC_PRODUCT_ID = eVisualFieldType.BIOMETRIC_PRODUCT_ID,

  /**
  * Biometric format owner
  */
  BIOMETRIC_FORMAT_OWNER = eVisualFieldType.BIOMETRIC_FORMAT_OWNER,

  /**
  * Biometric format type
  */
  BIOMETRIC_FORMAT_TYPE = eVisualFieldType.BIOMETRIC_FORMAT_TYPE,

  /**
  * Phone
  */
  PHONE = eVisualFieldType.PHONE,

  /**
  * Profession
  */
  PROFESSION = eVisualFieldType.PROFESSION,

  /**
  * Position
  */
  TITLE = eVisualFieldType.TITLE,

  /**
  * Personal data summary
  */
  PERSONAL_SUMMARY = eVisualFieldType.PERSONAL_SUMMARY,

  /**
  * Other valid ID
  */
  OTHER_VALID_ID = eVisualFieldType.OTHER_VALID_ID,

  /**
  * Custody info
  */
  CUSTODY_INFO = eVisualFieldType.CUSTODY_INFO,

  /**
  * Other name
  */
  OTHER_NAME = eVisualFieldType.OTHER_NAME,

  /**
  * Observations
  */
  OBSERVATIONS = eVisualFieldType.OBSERVATIONS,

  /**
  * Tax
  */
  TAX = eVisualFieldType.TAX,

  /**
  * Personalization date
  */
  DATE_OF_PERSONALIZATION = eVisualFieldType.DATE_OF_PERSONALIZATION,

  /**
  * Personalization SN
  */
  PERSONALIZATION_SN = eVisualFieldType.PERSONALIZATION_SN,

  /**
  * Other person name
  */
  OTHER_PERSON_NAME = eVisualFieldType.OTHER_PERSON_NAME,

  /**
  * Notify person: date of record
  */
  PERSON_TO_NOTIFY_DATE_OF_RECORD = eVisualFieldType.PERSON_TO_NOTIFY_DATE_OF_RECORD,

  /**
  * Notify person: name
  */
  PERSON_TO_NOTIFY_NAME = eVisualFieldType.PERSON_TO_NOTIFY_NAME,

  /**
  * Notify person: phone
  */
  PERSON_TO_NOTIFY_PHONE = eVisualFieldType.PERSON_TO_NOTIFY_PHONE,

  /**
  * Notify person: address
  */
  PERSON_TO_NOTIFY_ADDRESS = eVisualFieldType.PERSON_TO_NOTIFY_ADDRESS,

  /**
  * DS certificate issuer
  */
  DS_CERTIFICATE_ISSUER = eVisualFieldType.DS_CERTIFICATE_ISSUER,

  /**
  * DS certificate subject
  */
  DS_CERTIFICATE_SUBJECT = eVisualFieldType.DS_CERTIFICATE_SUBJECT,

  /**
  * DS certificate valid from
  */
  DS_CERTIFICATE_VALID_FROM = eVisualFieldType.DS_CERTIFICATE_VALID_FROM,

  /**
  * DS certificate valid to
  */
  DS_CERTIFICATE_VALID_TO = eVisualFieldType.DS_CERTIFICATE_VALID_TO,

  /**
  * Vehicle data from the DG1 data group
  */
  VRC_DATA_OBJECT_ENTRY = eVisualFieldType.VRC_DATA_OBJECT_ENTRY,

  /**
  * Type of approval number
  */
  TYPE_APPROVAL_NUMBER = eVisualFieldType.TYPE_APPROVAL_NUMBER,

  /**
  * Administrative number
  */
  ADMINISTRATIVE_NUMBER = eVisualFieldType.ADMINISTRATIVE_NUMBER,

  /**
  * Document discriminator
  */
  DOCUMENT_DISCRIMINATOR = eVisualFieldType.DOCUMENT_DISCRIMINATOR,

  /**
  * Data discriminator
  */
  DATA_DISCRIMINATOR = eVisualFieldType.DATA_DISCRIMINATOR,

  /**
  * ID number of ISO issuer
  */
  ISO_ISSUER_ID_NUMBER = eVisualFieldType.ISO_ISSUER_ID_NUMBER,
}
