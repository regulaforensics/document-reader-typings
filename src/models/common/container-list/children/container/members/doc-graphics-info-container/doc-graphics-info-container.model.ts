import { IsDefined, IsEnum, IsInt, IsOptional, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { Light } from '@/consts'
import { Default } from '@/decorators'
import { ContainerAbstract } from '../../container.abstract'
import { DocGraphicsInfo, IDocGraphicsInfo } from './children'


export interface IDocGraphicsInfoContainer extends ContainerAbstract {
  DocGraphicsInfo?: IDocGraphicsInfo
}

export class DocGraphicsInfoContainer extends ContainerAbstract implements IDocGraphicsInfoContainer {
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
  @IsOptional()
  @ValidateNested()
  @Type(() => DocGraphicsInfo)
  DocGraphicsInfo?: DocGraphicsInfo

  static fromPlain = (input: unknown) => plainToClass(DocGraphicsInfoContainer, input)

  static isValid = (instance: DocGraphicsInfoContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('DocGraphicsInfoContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
