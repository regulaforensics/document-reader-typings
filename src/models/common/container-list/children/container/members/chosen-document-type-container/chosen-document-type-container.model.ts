import { IsInt, IsOptional, ValidateNested, validateSync } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '~src/errors'
import { OneCandidate } from '~src/models/common/one-candidate'
import { ContainerAbstract } from '../../container.abstract'


export interface IChosenDocumentTypeContainer extends ContainerAbstract {
  OneCandidate?: OneCandidate
}

export class ChosenDocumentTypeContainer extends ContainerAbstract implements IChosenDocumentTypeContainer {
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
  @Type(() => OneCandidate)
  OneCandidate?: OneCandidate

  static fromPlain = (input: unknown) => plainToClass(ChosenDocumentTypeContainer, input)

  static isValid = (instance: ChosenDocumentTypeContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('ChosenDocumentTypeContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
