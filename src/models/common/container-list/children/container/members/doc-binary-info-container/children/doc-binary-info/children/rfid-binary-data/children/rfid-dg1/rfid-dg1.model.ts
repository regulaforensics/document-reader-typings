import { IsDefined, IsEnum, IsInt, IsNumber, IsString } from 'class-validator'

import { eBarCodeModuleType, eDocFormat, eRfidDataGroupTypeTag } from '@/consts'
import { Default } from '@/decorators'


/**
* Structure used to store the contents of EF.DG1 informational data group of
* ePassport application – document MRZ data.
*/
export interface iRfidDG1 {
  /**
  * Type of informational data group
  * @type {eRfidDataGroupTypeTag}
  */
  Type: eRfidDataGroupTypeTag

  /**
  * Type of document (classification of document formats – by the ISO/IEC 7810)
  * @type {eDocFormat}
  */
  DocumentID: eDocFormat

  /**
  * Symbolic code of document type;
  * @type {string}
  */
  DocumentType: string

  /**
  * Symbolic code of document issuing state
  * @type {string}
  */
  State: string

  /**
  * DO’s name and surname
  * @type {string}
  */
  Holder: string

  /**
  * Document number
  * @type {string}
  */
  DocumentNumber: string

  /**
  * Check digit of document number
  * @type {number}
  */
  CheckDigitDocumentNumber: number

  /**
  * Symbolic code of DO’s nationality
  * @type {string}
  */
  Nationality: string

  /**
  * DO’s date of birth
  * @type {string}
  */
  Birthday: string

  /**
  * Check digit of DO’s date of birth
  * @type {number}
  */
  CheckDigitBirthday: number

  /**
  * DO’s sex
  * @type {string}
  */
  Sex: string

  /**
  * Term of validity of the document
  * @type {string}
  */
  ExpiryDate: string

  /**
  * Check digit of term of validity of the document
  * @type {number}
  */
  CheckDigitExpiryDate: number

  /**
  * DO’s personal number or other additional data;
  * @type {string}
  */
  OptionalData: string

  /**
  * Check digit of additional data
  * @type {number}
  */
  CheckDigitOptionalData: number

  /**
  * General check digit
  * @type {number}
  */
  CheckDigitComposite: number
}

/**
* Structure used to store the contents of EF.DG1 informational data group of
* ePassport application – document MRZ data.
*/
export class RfidDG1 implements iRfidDG1 {
  /**
  * Type of informational data group
  * @type {eRfidDataGroupTypeTag}
  */
  @IsDefined()
  @IsEnum(eRfidDataGroupTypeTag)
  Type: eRfidDataGroupTypeTag

  /**
  * Type of document (classification of document formats – by the ISO/IEC 7810)
  * @type {eDocFormat}
  */
  @IsDefined()
  @IsEnum(eDocFormat)
  @Default(eDocFormat.UNKNOWN)
  DocumentID: eDocFormat

  /**
  * Symbolic code of document type;
  * @type {string}
  */
  @IsDefined()
  @IsString()
  DocumentType: string

  /**
  * Symbolic code of document issuing state
  * @type {string}
  */
  @IsDefined()
  @IsString()
  State: string

  /**
  * DO’s name and surname
  * @type {string}
  */
  @IsDefined()
  @IsString()
  Holder: string

  /**
  * Document number
  * @type {string}
  */
  @IsDefined()
  @IsString()
  DocumentNumber: string

  /**
  * Check digit of document number
  * @type {number}
  */
  @IsDefined()
  @IsInt()
  CheckDigitDocumentNumber: number

  /**
  * Symbolic code of DO’s nationality
  * @type {string}
  */
  @IsDefined()
  @IsString()
  Nationality: string

  /**
  * DO’s date of birth
  * @type {string}
  */
  @IsDefined()
  @IsString()
  Birthday: string

  /**
  * Check digit of DO’s date of birth
  * @type {number}
  */
  @IsDefined()
  @IsInt()
  CheckDigitBirthday: number

  /**
  * DO’s sex
  * @type {string}
  */
  @IsDefined()
  @IsString()
  Sex: string

  /**
  * Term of validity of the document
  * @type {string}
  */
  @IsDefined()
  @IsString()
  ExpiryDate: string

  /**
  * Check digit of term of validity of the document
  * @type {number}
  */
  @IsDefined()
  @IsInt()
  CheckDigitExpiryDate: number

  /**
  * DO’s personal number or other additional data;
  * @type {string}
  */
  @IsDefined()
  @IsString()
  OptionalData: string

  /**
  * Check digit of additional data
  * @type {number}
  */
  @IsDefined()
  @IsInt()
  CheckDigitOptionalData: number

  /**
  * General check digit
  * @type {number}
  */
  @IsDefined()
  @IsInt()
  CheckDigitComposite: number
}
