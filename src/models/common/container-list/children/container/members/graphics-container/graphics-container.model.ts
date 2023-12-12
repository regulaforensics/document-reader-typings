import { IsInt, IsOptional, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '~src/distinct/errors'
import { ContainerAbstract } from '../../container.abstract'
import { GraphicFieldsList, IGraphicFieldsList } from './children'


export interface IGraphicsContainer extends ContainerAbstract {
  DocGraphicsInfo?: IGraphicFieldsList
}

export class GraphicsContainer extends ContainerAbstract implements IGraphicsContainer {
  @Expose()
  @IsOptional()
  @IsInt()
  buf_length?: number

  @Expose()
  @IsOptional()
  @IsInt()
  light?: number

  @Expose()
  @IsOptional()
  @IsInt()
  list_idx?: number

  @Expose()
  @IsOptional()
  @IsInt()
  page_idx?: number

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
