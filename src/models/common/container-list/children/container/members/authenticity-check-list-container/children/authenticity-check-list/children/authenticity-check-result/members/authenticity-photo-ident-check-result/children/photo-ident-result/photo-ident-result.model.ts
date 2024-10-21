import { IsDefined, IsEnum, IsIn, IsOptional, ValidateNested, IsInt, IsArray } from 'class-validator'
import { Type } from 'class-transformer'

import { iRect, Rect } from '@/models/common/rect'
import { iImageData, ImageData } from '@/models/common/image-data'
import { eAuthenticity, eCheckDiagnose, eCheckResult, eLights } from '@/consts'
import { Default } from '@/decorators'
import { iRawImageContainerList, RawImageContainerList } from './children'


/**
* Serves for storing the result of invisible personal information embedded image visualization
*/
export interface iPhotoIdentResult {
  /**
  * Type of the performed check
  * @type {eAuthenticity.IPI | eAuthenticity.IR_PHOTO}
  */
  Type: eAuthenticity.IPI | eAuthenticity.IR_PHOTO

  /**
  * Checking result
  * @type {eCheckResult}
  */
  ElementResult: eCheckResult

  /**
  * Element with which errors are checked
  * @type {eCheckDiagnose}
  */
  ElementDiagnose: eCheckDiagnose

  /**
  * Light scheme
  * @type {eLights}
  */
  LightIndex: eLights

  /**
  * Field area’s coordinates
  * @type {iRect}
  */
  Area: iRect

  /**
  * Source image
  * @type {iImageData}
  */
  SourceImage: iImageData

  /**
  * Array of the output images
  * @type {iRawImageContainerList}
  */
  ResultImages: iRawImageContainerList

  /**
  * Count of the the text fields, which are encoded in the IPI image.
  * Reserved. Not used.
  * @internal
  */
  FieldTypesCount?: number

  /**
  * List of the the text fields, which are encoded in the IPI image. Reserved. Not used
  * @internal
  */
  FieldTypesList?: number[]

  /**
   * @type {number}
   */
  Step?: number

  /**
   * @type {number}
   */
  Angle?: number

  /**
  * @internal
  */
  Reserved1?: number

  /**
  * @internal
  */
  Reserved2?: number

  /**
  * @internal
  */
  Reserved3?: number
}

/**
* Serves for storing the result of invisible personal information embedded image visualization
*/
export class PhotoIdentResult implements iPhotoIdentResult {
  /**
  * Type of the performed check
  * @type {eAuthenticity.IPI | eAuthenticity.IR_PHOTO}
  */
  @IsDefined()
  @IsIn([eAuthenticity.IPI, eAuthenticity.IR_PHOTO])
  @IsEnum(eAuthenticity)
  Type: eAuthenticity.IPI | eAuthenticity.IR_PHOTO

  /**
  * Checking result
  * @type {eCheckResult}
  */
  @IsOptional()
  @IsEnum(eCheckResult)
  @Default(eCheckResult.WAS_NOT_DONE)
  ElementResult: eCheckResult

  /**
  * Element with which errors are checked
  * @type {eCheckDiagnose}
  */
  @IsDefined()
  @IsEnum(eCheckDiagnose)
  @Default(eCheckDiagnose.UNKNOWN)
  ElementDiagnose: eCheckDiagnose

  /**
  * Light scheme
  * @type {eLights}
  */
  @IsDefined()
  @IsEnum(eLights)
  @Default(eLights.OFF)
  LightIndex: eLights

  /**
  * Field area’s coordinates
  * @type {Rect}
  */
  @IsDefined()
  @ValidateNested()
  @Type(() => Rect)
  Area: Rect

  /**
  * Source image
  * @type {ImageData}
  */
  @IsDefined()
  @ValidateNested()
  @Type(() => ImageData)
  SourceImage: ImageData

  /**
  * Array of the output images
  * @type {RawImageContainerList}
  */
  @IsDefined()
  @ValidateNested()
  @Type(() => RawImageContainerList)
  ResultImages: RawImageContainerList

  /**
  * Count of the the text fields, which are encoded in the IPI image.
  * Reserved. Not used.
  * @internal
  */
  @IsOptional()
  @IsInt()
  FieldTypesCount?: number

  /**
  * List of the the text fields, which are encoded in the IPI image. Reserved. Not used
  * @internal
  */
  @IsOptional()
  @IsArray()
  FieldTypesList?: number[]

  /**
   * @type{number}
   */
  @IsOptional()
  @IsInt()
  Step?: number

  /**
   * @type{number}
   */
  @IsOptional()
  @IsInt()
  Angle?: number

  /**
  * @internal
  */
  @IsOptional()
  @IsInt()
  Reserved1?: number

  /**
  * @internal
  */
  @IsOptional()
  @IsInt()
  Reserved2?: number

  /**
  * @internal
  */
  @IsOptional()
  @IsInt()
  Reserved3?: number
}
