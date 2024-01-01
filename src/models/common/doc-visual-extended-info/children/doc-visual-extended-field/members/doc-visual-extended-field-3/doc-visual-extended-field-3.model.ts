import { IsArray, IsDefined, IsEnum, IsInt, IsOptional, IsString, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { LCID, VisualFieldType } from '@/consts'
import { IRectangleCoordinates, RectangleCoordinates } from '@/models/common/rectangle-coordinates'
import { IStringResultSDK, StringResultSDK } from '../../children'
import { DocVisualExtendedFieldAbstract } from '../../doc-visual-extended-field.abstract'


export interface IDocVisualExtendedField3 extends DocVisualExtendedFieldAbstract {
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
  * Field rectangular area coordinates on the image
  * @type {IRectangleCoordinates}
  */
  FieldRect: IRectangleCoordinates

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


export class DocVisualExtendedField3 extends DocVisualExtendedFieldAbstract implements IDocVisualExtendedField3 {
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
  * Field rectangular area coordinates on the image
  * @type {RectangleCoordinates}
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => RectangleCoordinates)
  FieldRect: RectangleCoordinates

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
  * Creates an instance of DocVisualExtendedField3 from plain object
  *
  * @param {unknown} input - plain object
  * @returns {DocVisualExtendedField3}
  */
  static fromPlain = (input: unknown): DocVisualExtendedField3 => plainToClass(DocVisualExtendedField3, input, { strategy: 'excludeAll' })
}
