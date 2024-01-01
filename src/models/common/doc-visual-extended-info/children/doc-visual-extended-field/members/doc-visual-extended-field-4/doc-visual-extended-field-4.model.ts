import { IsArray, IsDefined, IsEnum, IsInt, IsOptional, IsString, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { LCID, RfidDataGroupTypeTag, VisualFieldType } from '@/consts'
import { IStringResultSDK, StringResultSDK } from '../../children'
import { DocVisualExtendedFieldAbstract } from '../../doc-visual-extended-field.abstract'


export interface IDocVisualExtendedField4 extends DocVisualExtendedFieldAbstract {
  /**
  * Field logical type
  * @type {VisualFieldType}
  */
  wFieldType: VisualFieldType

  /**
  * ID of language-culture to differentiate one field of the same type from another
  * @type {LCID}
  */
  wLCID: LCID

    /**
  * Data group
  * @type {RfidDataGroupTypeTag}
  */
  RFID_OriginDG: RfidDataGroupTypeTag

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
  * @type {IStringResultSDK[]}
  */
  StringsResult: IStringResultSDK[]

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


export class DocVisualExtendedField4 extends DocVisualExtendedFieldAbstract implements IDocVisualExtendedField4 {
  /**
  * Field logical type
  * @type {VisualFieldType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(VisualFieldType)
  wFieldType: VisualFieldType

  /**
  * ID of language-culture to differentiate one field of the same type from another
  * @type {LCID}
  */
  @Expose()
  @IsDefined()
  @IsEnum(LCID)
  wLCID: LCID

  /**
  * Data group
  * @type {RfidDataGroupTypeTag}
  */
  @Expose()
  @IsDefined()
  @IsEnum(RfidDataGroupTypeTag)
  RFID_OriginDG: RfidDataGroupTypeTag

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
  * @type {IStringResultSDK[]}
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
  * Creates an instance of DocVisualExtendedField4 from plain object
  *
  * @param {unknown} input - plain object
  * @returns {DocVisualExtendedField4}
  */
  static fromPlain = (input: unknown): DocVisualExtendedField4 => plainToClass(DocVisualExtendedField4, input, { strategy: 'excludeAll' })
}
