import { IsArray, IsDefined, IsEnum, IsInt, IsOptional, IsString, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { eRfidDataGroupTypeTag, eVisualFieldType } from '@/consts'
import { iStringResultSDK, StringResultSDK } from '../../children'
import { aDocVisualExtendedField } from '../../doc-visual-extended-field.abstract'


export interface iDocVisualExtendedField2 extends aDocVisualExtendedField {
  /**
  * Field logical type
  * @type {eVisualFieldType}
  */
  FieldType: eVisualFieldType

  /**
  * Data group
  * @type {eRfidDataGroupTypeTag}
  */
  RFID_OriginDG: eRfidDataGroupTypeTag

  /**
  * @internal
  */
  RFID_OriginDGTag?: unknown

  /**
  * Record index of the text field source in the data group
  * @type {number}
  */
  RFID_OriginTagEntry: number

  /**
  * @internal
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
  */
  FieldMask?: unknown

  /**
  * @internal
  */
  Validity?: unknown

  /**
  * @internal
  */
  InComparison?: unknown

  /**
  * @internal
  */
  Reserved2?: unknown

  /**
  * @internal
  */
  Reserved3?: unknown
}


export class DocVisualExtendedField2 extends aDocVisualExtendedField implements iDocVisualExtendedField2 {
  /**
  * Field logical type
  * @type {eVisualFieldType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eVisualFieldType)
  FieldType: eVisualFieldType

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
  */
  @Expose()
  @IsOptional()
  FieldMask?: unknown

  /**
  * @internal
  */
  @Expose()
  @IsOptional()
  Validity?: unknown

  /**
  * @internal
  */
  @Expose()
  @IsOptional()
  InComparison?: unknown

  /**
  * @internal
  */
  @Expose()
  @IsOptional()
  Reserved2?: unknown

  /**
  * @internal
  */
  @Expose()
  @IsOptional()
  Reserved3?: unknown

  /**
  * Creates an instance of DocVisualExtendedField2 from plain object
  *
  * @param {unknown} input - plain object
  * @returns {DocVisualExtendedField2}
  */
  static fromPlain = (input: unknown): DocVisualExtendedField2 => plainToClass(DocVisualExtendedField2, input, { strategy: 'excludeAll' })
}
