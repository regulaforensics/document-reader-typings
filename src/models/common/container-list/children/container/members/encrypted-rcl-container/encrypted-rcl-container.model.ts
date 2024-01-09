import { IsDefined, IsInt, IsString, validateSync } from 'class-validator'
import { Expose, plainToClass } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eLights } from '@/consts'
import { Default } from '@/decorators'
import { aContainer } from '../../container.abstract'


/**
* Container for EncryptedRCL base64 string
*/
export interface iEncryptedRCLContainer extends aContainer {
  /**
  * EncryptedRCL base64 string
  * @type {string}
  */
  EncryptedRCL: string
}

/**
* Container for EncryptedRCL
*/
export class EncryptedRCLContainer extends aContainer implements iEncryptedRCLContainer {
  /**
  * Lighting scheme code for the given result (used only for images)
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(eLights.OFF)
  light: number

  /**
  * @internal
  * @type {number}
  */
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

  /**
  * @internal
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(0)
  buf_length: number

  /**
  * EncryptedRCL base64 string
  * @type {string}
  */
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
