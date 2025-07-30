import { IsArray, IsDefined, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { Images } from '@regulaforensics/document-reader-webclient'
import { Transform, Type } from 'class-transformer'

import { ImageField, ImageSource } from './children'

/**
 * Structure is used for representation of all graphic results
 */
export class ImagesResult implements Images {
  /**
   * Fields count
   * @type {number}
   */
  @IsOptional()
  @IsInt()
  @Transform(({ obj }) => obj.fieldList.length, { toClassOnly: true })
  fieldCount?: number

  /**
   * Available sources count
   * @type {number}
   */
  @IsOptional()
  @IsInt()
  @Transform(({ obj }) => obj.availableSourceList.length, { toClassOnly: true })
  availableSourceCount?: number

  /**
   * Available sources list
   * @type {ImageSource[]}
   */
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => ImageSource)
  @IsArray()
  availableSourceList: ImageSource[]

  /**
   * Fields list
   * @type {ImageField[]}
   */
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => ImageField)
  @IsArray()
  fieldList: ImageField[]
}

export type { ImagesResult as iImagesResult }
