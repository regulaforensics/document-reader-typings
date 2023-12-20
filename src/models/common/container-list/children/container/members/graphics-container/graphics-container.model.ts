import { IsDefined, IsEnum, IsInt, IsOptional, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { Light } from '@/consts'
import { Default } from '@/decorators'
import { ContainerAbstract } from '../../container.abstract'
import { GraphicFieldsList, IGraphicFieldsList } from './children'


export interface IGraphicsContainer extends ContainerAbstract {
  DocGraphicsInfo?: IGraphicFieldsList
}

export class GraphicsContainer extends ContainerAbstract implements IGraphicsContainer {
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
  @Type(() => GraphicFieldsList)
  DocGraphicsInfo?: GraphicFieldsList

  static fromPlain = (input: unknown) => plainToClass(GraphicsContainer, input)

  static isValid = (instance: GraphicsContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('GraphicsContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
