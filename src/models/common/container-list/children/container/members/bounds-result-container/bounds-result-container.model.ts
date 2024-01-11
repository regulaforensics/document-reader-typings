import { IsDefined, IsEnum, IsIn, IsInt, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eLights, eResultType } from '@/consts'
import { Default } from '@/decorators'
import { BoundsResult, iBoundsResult } from '@/models/common/bounds-result'
import { aContainer } from '../../container.abstract'


/**
* Result type of BoundsResultContainer
*/
export type tBoundsResultContainerResultType = eResultType.DOCUMENT_POSITION | eResultType.MRZ_POSITION | eResultType.BARCODE_POSITION

/**
* Container for iBoundsResult
*/
export interface iBoundsResultContainer extends aContainer {
  /**
  * Document position
  * @type {iBoundsResult}
  */
  DocumentPosition: iBoundsResult

  /**
  * Result type stored in this container
  * @type {tBoundsResultContainerResultType}
  */
  result_type: tBoundsResultContainerResultType
}

/**
* Container for BoundsResult
*/
export class BoundsResultContainer extends aContainer implements iBoundsResultContainer {
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
  * @type {tBoundsResultContainerResultType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn([
    eResultType.DOCUMENT_POSITION,
    eResultType.MRZ_POSITION,
    eResultType.BARCODE_POSITION
  ])
  result_type: tBoundsResultContainerResultType

  /**
  * Document position
  * @type {BoundsResult}
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => BoundsResult)
  DocumentPosition: BoundsResult

  /**
  * Create new instance of BoundsResultContainer from plain object
  *
  * @param {unknown} input - plain object
  * @return {BoundsResultContainer}
  */
  static fromPlain = (input: unknown): BoundsResultContainer => plainToClass(BoundsResultContainer, input)

  /**
  * Check if the given instance of BoundsResultContainer is valid
  *
  * @param {BoundsResultContainer} instance - instance of BoundsResultContainer to validate
  * @throws {DocReaderTypeError} - if BoundsResultContainer is not valid
  * @return {true | never} - true if BoundsResultContainer is valid, never otherwise
  */
  static validate = (instance: BoundsResultContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('BoundsResultContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
