import { IsDefined, IsEnum, IsIn, IsInt, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { Lights, ResultType } from '@/consts'
import { Default } from '@/decorators'
import { ContainerAbstract } from '../../container.abstract'
import { IStatus, Status } from './children'


export interface IStatusContainer extends ContainerAbstract {
  Status: IStatus
}

export class StatusContainer extends ContainerAbstract implements IStatusContainer {
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
  * @type {ResultType.STATUS}
  */
  @Expose()
  @IsDefined()
  @IsEnum(ResultType)
  @IsIn([
    ResultType.STATUS,
  ])
  result_type: ResultType.STATUS

  /**
  * Status container content
  * @type {Status}
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => Status)
  Status: Status

  /**
  * Transform plain object to StatusContainer instance.
  * @param {unknown} input - plain object
  * @returns {StatusContainer}
  */
  static fromPlain = (input: unknown) => plainToClass(StatusContainer, input, { strategy: 'excludeAll' })

  /**
  * Validate instance of StatusContainer for conformance with the schema.
  * @param {StatusContainer} instance - instance of StatusContainer
  * @throws {DocReaderTypeError}
  * @returns {true} if object satisfies StatusContainer schema
  */
  static isValid = (instance: StatusContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('StatusContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
