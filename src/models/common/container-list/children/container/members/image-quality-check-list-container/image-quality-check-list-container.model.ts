import { IsDefined, IsEnum, IsIn, IsInt, ValidateNested, validateSync } from 'class-validator'
import { Expose, instanceToPlain, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eLights, eResultType } from '@/consts'
import { Default } from '@/decorators'
import { aContainer } from '../../container.abstract'
import { iImageQualityCheckList, ImageQualityCheckList } from './children'
import { ProcessResponse } from '@/models'


/**
* Result type of ImageQualityCheckListContainer
*/
export type tImageQualityCheckListContainerResultType = eResultType.INPUT_IMAGE_QUALITY

/**
* Result type of ImageQualityCheckListContainer
* @type {tImageQualityCheckListContainerResultType[]}
*/
export const ImageQualityCheckListContainerResultTypes: tImageQualityCheckListContainerResultType[] = [
  eResultType.INPUT_IMAGE_QUALITY,
]

/**
* Container for iImageQualityCheckList
*/
export interface iImageQualityCheckListContainer extends aContainer {
  /**
  * Used for storing input image quality check results list
  * @type {iImageQualityCheckList}
  */
  ImageQualityCheckList: iImageQualityCheckList

  /**
  * Result type stored in this container
  * @type {tImageQualityCheckListContainerResultType}
  */
  result_type: tImageQualityCheckListContainerResultType
}

/**
* Container for ImageQualityCheckList
*/
export class ImageQualityCheckListContainer extends aContainer implements iImageQualityCheckListContainer {
  /**
  * Lighting scheme code for the given result (used only for images)
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(eLights.OFF)
  light: number

  /**
  * @internal
  * @type {number}
  */
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

  /**
  * @internal
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(0)
  buf_length: number

  /**
  * Result type stored in this container
  * @type {tImageQualityCheckListContainerResultType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn(ImageQualityCheckListContainerResultTypes)
  result_type: tImageQualityCheckListContainerResultType

  /**
  * Used for storing input image quality check results list
  * @type {ImageQualityCheckList}
  */
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
  * Get ImageQualityCheckListContainer from ProcessResponse
  * @param {ProcessResponse} input - ProcessResponse object
  * @param {boolean} asPlain - return as plain object
  * @returns {(ImageQualityCheckListContainer|iImageQualityCheckListContainer)[]}
  */
  static fromProcessResponse(input: ProcessResponse, asPlain: true): iImageQualityCheckListContainer[];
  static fromProcessResponse(input: ProcessResponse, asPlain: false): ImageQualityCheckListContainer[];
  static fromProcessResponse(input: ProcessResponse, asPlain: boolean = false): (ImageQualityCheckListContainer|iImageQualityCheckListContainer)[] {
    const { ContainerList } = input

    const result = ContainerList.List.filter((container): container is ImageQualityCheckListContainer =>
      ImageQualityCheckListContainerResultTypes.includes(<tImageQualityCheckListContainerResultType>container.result_type)
    )

    if (asPlain) {
      return result.map((container) => instanceToPlain(container, { strategy: 'excludeAll' }) as iImageQualityCheckListContainer)
    }

    return result
  }

  /**
  * Check if the given instance of ImageQualityCheckListContainer is valid
  *
  * @param {ImageQualityCheckListContainer} instance - instance of ImageQualityCheckListContainer to be checked
  * @throws {DocReaderTypeError}
  * @returns {true | never}
  */
  static validate = (instance: ImageQualityCheckListContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('ImageQualityCheckListContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
