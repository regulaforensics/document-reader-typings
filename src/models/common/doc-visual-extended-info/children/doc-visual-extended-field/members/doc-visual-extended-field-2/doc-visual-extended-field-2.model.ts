import { IsArray, IsDefined, IsEnum, IsInt, IsOptional, IsString, ValidateNested } from 'class-validator'
import { plainToClass, Type } from 'class-transformer'

import { eRfidDataGroupTypeTag, eVisualFieldType } from '@/consts'
import { Default } from '@/decorators'
import { iStringResultSDK, StringResultSDK } from '../../children'
import { aDocVisualExtendedField } from '../../doc-visual-extended-field.abstract'


/**
* Structure and serves for storing information from one text data field.
* Variant with field logical type and RFID data.
*/
export interface iDocVisualExtendedField2 extends aDocVisualExtendedField {
  /**
  * @internal
  */
  FieldType: unknown

  /**
  * Field logical type
  * @type {eVisualFieldType}
  */
  wFieldType: eVisualFieldType

  /**
  * Data group
  * @type {eRfidDataGroupTypeTag}
  */
  RFID_OriginDG: eRfidDataGroupTypeTag

  /**
  * @internal
  * @type {unknown}
  */
  RFID_OriginDGTag?: unknown

  /**
  * Record index of the text field source in the data group
  * @type {number}
  */
  RFID_OriginTagEntry: number

  /**
  * @internal
  * @type {unknown}
  */
  RFID_OriginEntryView?: unknown

  /**
  * Field symbolic name (null-terminated string)
  * @type {string}
  */
  FieldName: string

  /**
  * Number of StringsResult array elements
  * @type {number}
  */
  StringsCount: number

  /**
  * Array of separate strings of multiline text field recognition results
  * @type {iStringResultSDK[]}
  */
  StringsResult: iStringResultSDK[]

  /**
  * Buf_Text text string length
  * @type {number}
  */
  Buf_Length: number

  /**
  * String containing text field data. Results of reading of multiline
  * field lines are separated by ‘^’ symbol
  * @type {string}
  */
  Buf_Text: string

  /**
  * @internal
  * @type {unknown}
  */
  FieldMask?: unknown

  /**
  * @internal
  * @type {unknown}
  */
  Validity?: unknown

  /**
  * @internal
  * @type {unknown}
  */
  InComparison?: unknown

  /**
  * @internal
  * @type {unknown}
  */
  Reserved2?: unknown

  /**
  * @internal
  * @type {unknown}
  */
  Reserved3?: unknown
}

/**
* Structure and serves for storing information from one text data field.
* Variant with field logical type and RFID data.
*/
export class DocVisualExtendedField2 extends aDocVisualExtendedField implements iDocVisualExtendedField2 {
  /**
  * @internal
  */
  FieldType: unknown

  /**
  * Field logical type
  * @type {eVisualFieldType}
  */
  @IsDefined()
  @IsEnum(eVisualFieldType)
  wFieldType: eVisualFieldType

  /**
  * Data group
  * @type {eRfidDataGroupTypeTag}
  */
  @IsDefined()
  @IsEnum(eRfidDataGroupTypeTag)
  RFID_OriginDG: eRfidDataGroupTypeTag

  /**
  * @internal
  * @type {unknown}
  */
  @IsOptional()
  RFID_OriginDGTag?: unknown

  /**
  * Record index of the text field source in the data group
  * @type {number}
  */
  @IsDefined()
  @IsInt()
  RFID_OriginTagEntry: number

  /**
  * @internal
  * @type {unknown}
  */
  @IsOptional()
  RFID_OriginEntryView: number

  /**
  * Field symbolic name (null-terminated string)
  * @type {string}
  */
  @IsDefined()
  @IsString()
  FieldName: string

  /**
  * Number of StringsResult array elements
  * @type {number}
  */
  @IsDefined()
  @IsInt()
  StringsCount: number

  /**
  * Array of separate strings of multiline text field recognition results
  * @type {StringResultSDK[]}
  */
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => StringResultSDK)
  @Default([])
  StringsResult: StringResultSDK[]

  /**
  * Buf_Text text string length
  * @type {number}
  */
  @IsDefined()
  @IsInt()
  Buf_Length: number

  /**
  * String containing text field data. Results of reading of multiline
  * field lines are separated by ‘^’ symbol
  * @type {string}
  */
  @IsDefined()
  @IsString()
  Buf_Text: string

  /**
  * @internal
  * @type {unknown}
  */
  @IsOptional()
  FieldMask?: unknown

  /**
  * @internal
  * @type {unknown}
  */
  @IsOptional()
  Validity?: unknown

  /**
  * @internal
  * @type {unknown}
  */
  @IsOptional()
  InComparison?: unknown

  /**
  * @internal
  * @type {unknown}
  */
  @IsOptional()
  Reserved2?: unknown

  /**
  * @internal
  * @type {unknown}
  */
  @IsOptional()
  Reserved3?: unknown

  /**
  * Creates an instance of DocVisualExtendedField2 from plain object
  *
  * @param {unknown} input - plain object
  * @returns {DocVisualExtendedField2}
  */
  static fromPlain = (input: unknown): DocVisualExtendedField2 => plainToClass(DocVisualExtendedField2, input, { exposeUnsetFields: false })
}
