import { IsArray, IsDefined, IsEnum, IsInt, IsOptional, IsString, ValidateNested } from 'class-validator'
import { plainToClass, Type } from 'class-transformer'

import { eVisualFieldType } from '@/consts'
import { iRect, Rect } from '@/models/common/rect'
import { Default } from '@/decorators'
import { iStringResultSDK, StringResultSDK } from '../../children'
import { aDocVisualExtendedField } from '../../doc-visual-extended-field.abstract'


/**
* Structure and serves for storing information from one text data field.
* Variant with field logical type and field rectangular area coordinates on the image.
*/
export interface iDocVisualExtendedField1 extends aDocVisualExtendedField {
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
  * Field rectangular area coordinates on the image
  * @type {iRect|undefined}
  */
  FieldRect?: iRect

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
* Variant with field logical type and field rectangular area coordinates on the image.
*/
export class DocVisualExtendedField1 extends aDocVisualExtendedField implements iDocVisualExtendedField1 {
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
  * Field rectangular area coordinates on the image
  * @type {Rect}
  */
  @IsOptional()
  @ValidateNested()
  @Type(() => Rect)
  FieldRect?: Rect

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
  * Creates an instance of DocVisualExtendedField1 from plain object
  *
  * @param {unknown} input - plain object
  * @returns {DocVisualExtendedField1}
  */
  static fromPlain = (input: unknown): DocVisualExtendedField1 => plainToClass(DocVisualExtendedField1, input, { exposeUnsetFields: false })
}
