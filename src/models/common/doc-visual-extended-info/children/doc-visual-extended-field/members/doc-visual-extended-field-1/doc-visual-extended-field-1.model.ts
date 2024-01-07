import { IsArray, IsDefined, IsEnum, IsInt, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { eVisualFieldType } from '@/consts'
import { iRectangleCoordinates, RectangleCoordinates } from '@/models/common/rectangle-coordinates'
import { iStringResultSDK, StringResultSDK } from '../../children'
import { aDocVisualExtendedField } from '../../doc-visual-extended-field.abstract'


export interface iDocVisualExtendedField1 extends aDocVisualExtendedField {
  /**
  * Field logical type
  * @type {eVisualFieldType}
  */
  FieldType: eVisualFieldType

  /**
  * Field rectangular area coordinates on the image
  * @type {iRectangleCoordinates}
  */
  FieldRect: iRectangleCoordinates

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


export class DocVisualExtendedField1 extends aDocVisualExtendedField implements iDocVisualExtendedField1 {
  /**
  * Field logical type
  * @type {eVisualFieldType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eVisualFieldType)
  FieldType: eVisualFieldType

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
  * Creates an instance of DocVisualExtendedField1 from plain object
  *
  * @param {unknown} input - plain object
  * @returns {DocVisualExtendedField1}
  */
  static fromPlain = (input: unknown): DocVisualExtendedField1 => plainToClass(DocVisualExtendedField1, input, { strategy: 'excludeAll' })
}
