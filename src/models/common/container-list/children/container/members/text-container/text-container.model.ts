import { IsDefined, IsInt, IsOptional, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '~src/distinct/errors'
import { ContainerAbstract } from '../../container.abstract'
import { Text, IText } from './children'


export interface ITextContainer extends ContainerAbstract {
  Text: IText
}

export class TextContainer extends ContainerAbstract implements ITextContainer {
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
  @IsDefined()
  @ValidateNested()
  @Type(() => Text)
  Text: Text

  static fromPlain = (input: unknown) => plainToClass(TextContainer, input)

  static isValid = (instance: TextContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('TextContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
