import { IsDefined, IsInt, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eLights } from '@/consts'
import { Default } from '@/decorators'
import { aContainer } from '../../container.abstract'
import { iImageQualityCheckList, ImageQualityCheckList } from './children'


export interface iImageQualityCheckListContainer extends aContainer {
  ImageQualityCheckList: iImageQualityCheckList
}

export class ImageQualityCheckListContainer extends aContainer implements iImageQualityCheckListContainer {
  /**
  * Lighting scheme code for the given result (used only for images)
  * @type {number}
  * @memberof ImageQualityCheckListContainer
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(eLights.OFF)
  light: number

  /**
  * @internal
  * @type {number}
  * @memberof ImageQualityCheckListContainer
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(0)
  list_idx: number

  /**
  * Page index (when working with multi-page document)
  * @type {number}
  * @memberof ImageQualityCheckListContainer
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(0)
  page_idx: number

  /**
  * @internal
  * @type {number}
  * @memberof ImageQualityCheckListContainer
  */
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

  /**
  * Creates an instance of ImageQualityCheckListContainer from plain object
  *
  * @param {unknown} input - plain object
  * @returns {ImageQualityCheckListContainer}
  */
  static fromPlain = (input: unknown): ImageQualityCheckListContainer => plainToClass(ImageQualityCheckListContainer, input)

  /**
  * Check if the given instance of ImageQualityCheckListContainer is valid
  *
  * @param {ImageQualityCheckListContainer} instance - instance of ImageQualityCheckListContainer to be checked
  * @throws {DocReaderTypeError}
  * @returns {true | never}
  */
  static isValid = (instance: ImageQualityCheckListContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('ImageQualityCheckListContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
