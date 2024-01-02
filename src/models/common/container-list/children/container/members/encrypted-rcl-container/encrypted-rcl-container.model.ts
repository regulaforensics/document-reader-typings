import { IsDefined, IsInt, IsString, validateSync } from 'class-validator'
import { Expose, plainToClass } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { Lights } from '@/consts'
import { Default } from '@/decorators'
import { ContainerAbstract } from '../../container.abstract'


export interface IEncryptedRCLContainer extends ContainerAbstract {
  EncryptedRCL: string
}

export class EncryptedRCLContainer extends ContainerAbstract implements IEncryptedRCLContainer {
  /**
  * Lighting scheme code for the given result (used only for images)
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(Lights.OFF)
  light: number

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

  /**
  * Creates an instance of EncryptedRCLContainer from plain
  *
  * @param {unknown} input - plain object
  * @returns {EncryptedRCLContainer}
  */
  static fromPlain = (input: unknown): EncryptedRCLContainer => plainToClass(EncryptedRCLContainer, input)

  /**
  * Check if the given instance of EncryptedRCLContainer is valid
  *
  * @param {EncryptedRCLContainer} instance - instance to check
  * @throws {DocReaderTypeError}
  * @returns {true | never}
  */
  static isValid = (instance: EncryptedRCLContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('EncryptedRCLContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
