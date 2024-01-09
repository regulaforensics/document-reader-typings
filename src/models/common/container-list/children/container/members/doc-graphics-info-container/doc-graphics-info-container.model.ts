import { IsDefined, IsInt, IsOptional, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eLights } from '@/consts'
import { Default } from '@/decorators'
import { aContainer } from '../../container.abstract'
import { DocGraphicsInfo, iDocGraphicsInfo } from './children'


/**
* Container for iDocGraphicsInfo
*/
export interface iDocGraphicsInfoContainer extends aContainer {
  /**
  * Model serves for storing graphic results of document filling area and bar-codes reading
  * @type {iDocGraphicsInfo|undefined}
  */
  DocGraphicsInfo?: iDocGraphicsInfo
}

/**
* Container for DocGraphicsInfo
*/
export class DocGraphicsInfoContainer extends aContainer implements iDocGraphicsInfoContainer {
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
  * Model serves for storing graphic results of document filling area and bar-codes reading
  * @type {DocGraphicsInfo|undefined}
  */
  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => DocGraphicsInfo)
  DocGraphicsInfo?: DocGraphicsInfo

  /**
  * Creates an instance of DocGraphicsInfoContainer from plain object
  *
  * @param {unknown} input - plain object
  * @returns {DocGraphicsInfoContainer}
  */
  static fromPlain = (input: unknown): DocGraphicsInfoContainer => plainToClass(DocGraphicsInfoContainer, input)

  /**
  * Check if the given instance is valid DocGraphicsInfoContainer
  *
  * @param {DocGraphicsInfoContainer} instance - instance to check
  * @throws {DocReaderTypeError}
  * @returns {true | never}
  */
  static isValid = (instance: DocGraphicsInfoContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('DocGraphicsInfoContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
