import { IsDefined, IsInt, IsOptional, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '~src/distinct/errors'
import { ContainerAbstract } from '../../container.abstract'
import { DocumentPosition, IDocumentPosition } from './children'


export interface IDocumentPositionContainer extends ContainerAbstract {
  DocumentPosition?: IDocumentPosition
}

export class DocumentPositionContainer extends ContainerAbstract implements IDocumentPositionContainer {
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
  @Type(() => DocumentPosition)
  DocumentPosition?: DocumentPosition

  static fromPlain = (input: unknown) => plainToClass(DocumentPositionContainer, input)

  static isValid = (instance: DocumentPositionContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('DocumentPositionContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
