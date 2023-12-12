import { IsInt, IsOptional, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '~src/errors'
import { ContainerAbstract } from '../../container.abstract'
import { IListVerifiedFields, ListVerifiedFields } from './children'


export interface ILexicalAnalysisContainer extends ContainerAbstract {
  ListVerifiedFields?: IListVerifiedFields
}

export class LexicalAnalysisContainer extends ContainerAbstract implements ILexicalAnalysisContainer {
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
  @Type(() => ListVerifiedFields)
  ListVerifiedFields?: ListVerifiedFields

  static fromPlain = (input: unknown) => plainToClass(LexicalAnalysisContainer, input)

  static isValid = (instance: LexicalAnalysisContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('LexicalAnalysisContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
