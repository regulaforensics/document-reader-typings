import { IsDefined, IsEnum, IsIn, IsOptional, ValidateNested, IsInt, IsArray } from 'class-validator'
import { PhotoIdentItem } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { Rect } from '@/models/common/rect'
import { ImageData } from '@/models/common/image-data'
import { eAuthenticity, eLights } from '@/consts'
import { RawImageContainerList } from './children'
import { aAuthenticityCheckResultItem } from '../../../../authenticity-check-result-item.abstract'

/**
 * Serves for storing the result of invisible personal information embedded image visualization
 */
export interface iPhotoIdentResult extends aAuthenticityCheckResultItem, PhotoIdentItem {
  /**
   * Type of the performed check
   * @type {eAuthenticity.IPI}
   */
  Type: eAuthenticity.IPI
}

/**
 * Serves for storing the result of invisible personal information embedded image visualization
 */
export class PhotoIdentResult extends aAuthenticityCheckResultItem implements iPhotoIdentResult {
  /**
   * Light scheme
   * @type {eLights}
   */
  @IsDefined()
  @IsEnum(eLights)
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
  @IsInt({ each: true })
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
  Reserved3?: number

  /**
   * Type of the performed check
   * @type {eAuthenticity.IPI}
   */
  @IsDefined()
  @IsIn([eAuthenticity.IPI])
  @IsEnum(eAuthenticity)
  Type: eAuthenticity.IPI
}
