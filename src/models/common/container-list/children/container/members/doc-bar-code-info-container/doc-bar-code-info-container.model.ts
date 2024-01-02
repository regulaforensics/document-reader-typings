import { IsDefined, IsEnum, IsIn, IsInt, IsOptional, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { Lights, ResultType } from '@/consts'
import { Default } from '@/decorators'
import { ContainerAbstract } from '../../container.abstract'
import { DocBarCodeInfo, IDocBarCodeInfo } from './children'


export interface IDocBarCodeInfoContainer extends ContainerAbstract {
  /**
  * Structure serves for storing and passing to the user application of results of bar-codes areas search on the
  * scanned document page and their reading in binary non-formatted code.
  */
  DocBarCodeInfo?: IDocBarCodeInfo
}

export class DocBarCodeInfoContainer extends ContainerAbstract implements IDocBarCodeInfoContainer {
  /**
  * Lighting scheme code for the given result (used only for images)
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(Lights.OFF)
  light: number

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

  /**
  * Result type stored in this container (one of ResultType identifiers)
  * @type {ResultType.BAR_CODES}
  */
  @Expose()
  @IsDefined()
  @IsEnum(ResultType)
  @IsIn([
    ResultType.BAR_CODES,
  ])
  result_type: ResultType.BAR_CODES

  /**
  * Structure serves for storing and passing to the user application of results of bar-codes areas search on the
  * scanned document page and their reading in binary non-formatted code.
  */
  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => DocBarCodeInfo)
  DocBarCodeInfo?: DocBarCodeInfo

  /**
  * Creates an instance of DocBarCodeInfoContainer from plain object
  *
  * @param {unknown} input - plain object
  * @returns {DocBarCodeInfoContainer}
  */
  static fromPlain = (input: unknown): DocBarCodeInfoContainer => plainToClass(DocBarCodeInfoContainer, input)

  /**
  * Check if the given instance is a valid DocBarCodeInfoContainer
  *
  * @param {DocBarCodeInfoContainer} instance - instance to check
  * @throws {DocReaderTypeError}
  * @returns {true | never}
  */
  static isValid = (instance: DocBarCodeInfoContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('DocBarCodeInfoContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
