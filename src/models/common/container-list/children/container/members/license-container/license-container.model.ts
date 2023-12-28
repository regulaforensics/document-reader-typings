import { IsDefined, IsEnum, IsInt, IsString, validateSync } from 'class-validator'
import { Expose, plainToClass } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { Light } from '@/consts'
import { Default } from '@/decorators'
import { ContainerAbstract } from '../../container.abstract'


export interface ILicenseContainer extends ContainerAbstract {
  License: string
}

export class LicenseContainer extends ContainerAbstract implements ILicenseContainer {
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
  License: string

  /**
  * Creates an instance of LicenseContainer from plain object
  *
  * @param {unknown} input - plain object
  * @returns {LicenseContainer}
  */
  static fromPlain = (input: unknown): LicenseContainer => plainToClass(LicenseContainer, input)

  /**
  * Check if the given instance of LicenseContainer is valid
  *
  * @param {LicenseContainer} instance - instance of LicenseContainer to be checked
  * @throws {DocReaderTypeError} - if the given instance of LicenseContainer is not valid
  * @returns {true | never} - true if the given instance of LicenseContainer is valid
  */
  static isValid = (instance: LicenseContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('LicenseContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
