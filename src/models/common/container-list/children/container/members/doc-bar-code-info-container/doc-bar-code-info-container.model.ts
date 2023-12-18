import { IsDefined, IsEnum, IsIn, IsInt, IsOptional, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from 'errors'
import { Light, ResultType } from 'consts'
import { Default } from 'decorators'
import { ContainerAbstract } from '../../container.abstract'
import { DocBarCodeInfoFieldsList, IDocBarCodeInfoFieldsList } from './children'


export interface IDocBarCodeInfoContainer extends ContainerAbstract {
  DocBarCodeInfo?: IDocBarCodeInfoFieldsList
}

export class DocBarCodeInfoContainer extends ContainerAbstract implements IDocBarCodeInfoContainer {
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

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => DocBarCodeInfoFieldsList)
  DocBarCodeInfo?: DocBarCodeInfoFieldsList

  static fromPlain = (input: unknown) => plainToClass(DocBarCodeInfoContainer, input)

  static isValid = (instance: DocBarCodeInfoContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('DocBarCodeInfoContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
