import { IsDefined, IsEnum, IsInt, IsString, validateSync } from 'class-validator'
import { Expose, plainToClass } from 'class-transformer'

import { DocReaderTypeError } from 'errors'
import { Light } from 'consts'
import { Default } from 'decorators'
import { ContainerAbstract } from '../../container.abstract'


export interface IEncryptedRCLContainer extends ContainerAbstract {
  EncryptedRCL: string
}

export class EncryptedRCLContainer extends ContainerAbstract implements IEncryptedRCLContainer {
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
  @IsDefined()
  @IsString()
  EncryptedRCL: string

  static fromPlain = (input: unknown) => plainToClass(EncryptedRCLContainer, input)

  static isValid = (instance: EncryptedRCLContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('EncryptedRCLContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
