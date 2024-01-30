import { IsDefined, IsEnum, IsIn, IsInt, IsOptional, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eLights, eResultType } from '@/consts'
import { Default } from '@/decorators'
import { DocVisualExtendedInfo, iDocVisualExtendedInfo } from '@/models/common/doc-visual-extended-info'
import { aContainer } from '../../container.abstract'
import { ProcessResponse } from '@/models'


/**
* Result type of DocVisualExtendedInfoContainer
*/
export type tDocVisualExtendedInfoContainerResultType =
  eResultType.VISUAL_OCR_EXTENDED |
  eResultType.MRZ_OCR_EXTENDED |
  eResultType.BARCODES_TEXT_DATA |
  eResultType.MAGNETIC_STRIPE_TEXT_DATA

/**
* Result type of DocVisualExtendedInfoContainer
* @type {tDocVisualExtendedInfoContainerResultType[]}
*/
export const DocVisualExtendedInfoContainerResultTypes: tDocVisualExtendedInfoContainerResultType[] = [
  eResultType.VISUAL_OCR_EXTENDED,
  eResultType.MRZ_OCR_EXTENDED,
  eResultType.BARCODES_TEXT_DATA,
  eResultType.MAGNETIC_STRIPE_TEXT_DATA,
]

/**
* Container for iDocVisualExtendedInfo
*/
export interface iDocVisualExtendedInfoContainer extends aContainer {
  /**
  * Structure serves for storing text results of MRZ, document filling and bar-codes reading
  * @type {iDocVisualExtendedInfo|undefined}
  */
  DocVisualExtendedInfo?: iDocVisualExtendedInfo

  /**
  * Result type stored in this container
  * @type {tDocVisualExtendedInfoContainerResultType}
  */
  result_type: tDocVisualExtendedInfoContainerResultType
}

/**
* Container for DocVisualExtendedInfo
*/
export class DocVisualExtendedInfoContainer extends aContainer implements iDocVisualExtendedInfoContainer {
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
  * @type {tDocVisualExtendedInfoContainerResultType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn(DocVisualExtendedInfoContainerResultTypes)
  result_type: tDocVisualExtendedInfoContainerResultType

  /**
  * Structure serves for storing text results of MRZ, document filling and bar-codes reading
  * @type {DocVisualExtendedInfo|undefined}
  */
  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => DocVisualExtendedInfo)
  DocVisualExtendedInfo?: DocVisualExtendedInfo

  /**
  * Creates an instance of DocVisualExtendedInfoContainer from plain object
  *
  * @param {unknown} input - plain object
  * @returns {DocVisualExtendedInfoContainer}
  */
  static fromPlain = (input: unknown): DocVisualExtendedInfoContainer => plainToClass(DocVisualExtendedInfoContainer, input)

  /**
  * Get DocVisualExtendedInfoContainer from ProcessResponse
  * @param {ProcessResponse} input - ProcessResponse object
  * @returns {DocVisualExtendedInfoContainer[]}
  */
  static fromProcessResponse = (input: ProcessResponse): DocVisualExtendedInfoContainer[] => {
    const { ContainerList } = input

    return ContainerList.List.filter((container): container is DocVisualExtendedInfoContainer =>
      DocVisualExtendedInfoContainerResultTypes.includes(<tDocVisualExtendedInfoContainerResultType>container.result_type)
    )
  }

  /**
  * Check if the given instance of DocVisualExtendedInfoContainer is valid
  *
  * @param {DocVisualExtendedInfoContainer} instance - instance of DocVisualExtendedInfoContainer to be checked
  * @throws {DocReaderTypeError}
  * @returns {true | never}
  */
  static validate = (instance: DocVisualExtendedInfoContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('DocVisualExtendedInfoContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
