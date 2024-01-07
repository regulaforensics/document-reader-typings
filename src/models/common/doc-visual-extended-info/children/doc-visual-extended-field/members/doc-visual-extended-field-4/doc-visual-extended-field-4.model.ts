import { IsArray, IsDefined, IsEnum, IsInt, IsOptional, IsString, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { eLCID, eRfidDataGroupTypeTag, eVisualFieldType } from '@/consts'
import { iStringResultSDK, StringResultSDK } from '../../children'
import { aDocVisualExtendedField } from '../../doc-visual-extended-field.abstract'


export interface iDocVisualExtendedField4 extends aDocVisualExtendedField {
  /**
  * Field logical type
  * @type {eVisualFieldType}
  */
  wFieldType: eVisualFieldType

  /**
  * ID of language-culture to differentiate one field of the same type from another
  * @type {eLCID}
  */
  wLCID: eLCID

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


export class DocVisualExtendedField4 extends aDocVisualExtendedField implements iDocVisualExtendedField4 {
  /**
  * Field logical type
  * @type {eVisualFieldType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eVisualFieldType)
  wFieldType: eVisualFieldType

  /**
  * ID of language-culture to differentiate one field of the same type from another
  * @type {eLCID}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eLCID)
  wLCID: eLCID

  /**
  * Data group
  * @type {eRfidDataGroupTypeTag}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eRfidDataGroupTypeTag)
  RFID_OriginDG: eRfidDataGroupTypeTag

  /**
  * @internal
  * @type {unknown}
  */
  @Expose()
  @IsOptional()
  RFID_OriginDGTag?: unknown

  /**
  * Record index of the text field source in the data group
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  RFID_OriginTagEntry: number

  /**
  * @internal
  * @type {unknown}
  */
  @Expose()
  @IsOptional()
  RFID_OriginEntryView: number

  /**
  * Field symbolic name (null-terminated string)
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  FieldName: string

  /**
  * Number of StringsResult array elements
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  StringsCount: number

  /**
  * Array of separate strings of multiline text field recognition results
  * @type {iStringResultSDK[]}
  */
  @Expose()
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => StringResultSDK)
  StringsResult: StringResultSDK[]

  /**
  * Buf_Text text string length
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  Buf_Length: number

  /**
  * String containing text field data. Results of reading of multiline
  * field lines are separated by ‘^’ symbol
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  Buf_Text: string

  /**
  * @internal
  * @type {unknown}
  */
  @Expose()
  @IsOptional()
  FieldMask?: unknown

  /**
  * @internal
  * @type {unknown}
  */
  @Expose()
  @IsOptional()
  Validity?: unknown

  /**
  * @internal
  * @type {unknown}
  */
  @Expose()
  @IsOptional()
  InComparison?: unknown

  /**
  * @internal
  * @type {unknown}
  */
  @Expose()
  @IsOptional()
  Reserved2?: unknown

  /**
  * @internal
  * @type {unknown}
  */
  @Expose()
  @IsOptional()
  Reserved3?: unknown

  /**
  * Creates an instance of DocVisualExtendedField4 from plain object
  *
  * @param {unknown} input - plain object
  * @returns {DocVisualExtendedField4}
  */
  static fromPlain = (input: unknown): DocVisualExtendedField4 => plainToClass(DocVisualExtendedField4, input, { strategy: 'excludeAll' })
}
