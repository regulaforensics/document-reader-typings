import { IsDefined, IsEnum, IsIn, ValidateNested, validateSync } from 'class-validator'
import { ImageQualityCheckListItem } from '@regulaforensics/document-reader-webclient'
import { Expose, instanceToPlain, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eResultType } from '@/consts'
import { aContainer } from '../../container.abstract'
import { iImageQualityCheckList, ImageQualityCheckList } from './children'
import { ProcessResponse } from '@/models'

/**
 * Result type of ImageQualityCheckListContainer
 */
export type tImageQualityCheckListContainerResultType = eResultType.IMAGE_QUALITY

/**
 * Result type of ImageQualityCheckListContainer
 * @type {tImageQualityCheckListContainerResultType[]}
 */
export const ImageQualityCheckListContainerResultTypes: tImageQualityCheckListContainerResultType[] = [
  eResultType.IMAGE_QUALITY,
]

/**
 * Container for iImageQualityCheckList
 */
export interface iImageQualityCheckListContainer extends aContainer, ImageQualityCheckListItem {
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
@Expose()
export class ImageQualityCheckListContainer extends aContainer implements iImageQualityCheckListContainer {
  /**
   * Used for storing input image quality check results list
   * @type {ImageQualityCheckList}
   */
  @IsDefined()
  @ValidateNested()
  @Type(() => ImageQualityCheckList)
  ImageQualityCheckList: ImageQualityCheckList

  /**
   * Result type stored in this container
   * @type {tImageQualityCheckListContainerResultType}
   */
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn(ImageQualityCheckListContainerResultTypes)
  result_type: tImageQualityCheckListContainerResultType

  /**
   * Creates an instance of ImageQualityCheckListContainer from plain object
   *
   * @param {unknown} input - plain object
   * @returns {ImageQualityCheckListContainer}
   */
  static fromPlain = (input: unknown): ImageQualityCheckListContainer =>
    plainToClass(ImageQualityCheckListContainer, input)

  /**
   * Get ImageQualityCheckListContainer from ProcessResponse
   * @param {ProcessResponse} input - ProcessResponse object
   * @param {boolean} asPlain - return as plain object
   * @returns {(ImageQualityCheckListContainer|iImageQualityCheckListContainer)[]}
   */
  static fromProcessResponse(input: ProcessResponse, asPlain: true): iImageQualityCheckListContainer[]
  static fromProcessResponse(input: ProcessResponse, asPlain?: false): ImageQualityCheckListContainer[]
  static fromProcessResponse(
    input: ProcessResponse,
    asPlain: boolean = false,
  ): (ImageQualityCheckListContainer | iImageQualityCheckListContainer)[] {
    try {
      const { ContainerList } = input

      const result = ContainerList.List.filter((container): container is ImageQualityCheckListContainer =>
        ImageQualityCheckListContainerResultTypes.includes(
          <tImageQualityCheckListContainerResultType>container.result_type,
        ),
      )

      if (asPlain) {
        return result.map(
          (container) => instanceToPlain(container, { exposeUnsetFields: false }) as iImageQualityCheckListContainer,
        )
      }

      return result
    } catch (error) {
      return []
    }
  }

  /**
   * Check if the given instance of ImageQualityCheckListContainer is valid
   *
   * @param {ImageQualityCheckListContainer} instance - instance of ImageQualityCheckListContainer to be checked
   * @throws {DocReaderTypeError}
   * @returns {true | never}
   */
  static validate = (instance: ImageQualityCheckListContainer): true | never => {
    const errors = validateSync(ImageQualityCheckListContainer.fromPlain(instance))

    if (errors.length) {
      throw new DocReaderTypeError(
        'ImageQualityCheckListContainer validation error: the data received does not match model structure!',
        errors,
      )
    }

    return true
  }
}
