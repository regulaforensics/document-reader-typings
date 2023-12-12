import { IsInt, IsOptional, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from 'errors'
import { ContainerAbstract } from '../../container.abstract'
import { DocVisualExtendedInfo, IDocVisualExtendedInfo } from 'models/common/doc-visual-extended-info'


export interface ITextDataContainer extends ContainerAbstract {
  DocVisualExtendedInfo?: IDocVisualExtendedInfo
}

export class TextDataContainer extends ContainerAbstract implements ITextDataContainer {
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
  @Type(() => DocVisualExtendedInfo)
  DocVisualExtendedInfo?: DocVisualExtendedInfo

  static fromPlain = (input: unknown) => plainToClass(TextDataContainer, input)

  static isValid = (instance: TextDataContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('TextDataContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
