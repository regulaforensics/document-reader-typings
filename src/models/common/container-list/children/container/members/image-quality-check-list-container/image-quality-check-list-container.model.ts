import { IsDefined, IsEnum, IsInt, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { Light } from '@/consts'
import { Default } from '@/decorators'
import { ContainerAbstract } from '../../container.abstract'
import { IImageQualityCheckList, ImageQualityCheckList } from './children'


export interface IImageQualityCheckListContainer extends ContainerAbstract {
  ImageQualityCheckList: IImageQualityCheckList
}

export class ImageQualityCheckListContainer extends ContainerAbstract implements IImageQualityCheckListContainer {
  /**
  * Lighting scheme code for the given result (used only for images)
  * @type {Light}
  */
  @Expose()
  @IsDefined()
  @IsEnum(Light)
  @Default(Light.OFF)
  light: Light

  /** @internal */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(0)
  list_idx: number

  /**
  * Page index (when working with multi-page document)
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(0)
  page_idx: number

  /** @internal */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(0)
  buf_length: number

  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => ImageQualityCheckList)
  ImageQualityCheckList: ImageQualityCheckList

  static fromPlain = (input: unknown) => plainToClass(ImageQualityCheckListContainer, input)

  static isValid = (instance: ImageQualityCheckListContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('ImageQualityCheckListContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
