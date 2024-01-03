import { IsDefined, IsInt, IsString, validateSync } from 'class-validator'
import { Expose, plainToClass } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eLights } from '@/consts'
import { Default } from '@/decorators'
import { aContainer } from '../../container.abstract'


export interface iLicenseContainer extends aContainer {
  License: string
}

export class LicenseContainer extends aContainer implements iLicenseContainer {
  /**
  * Lighting scheme code for the given result (used only for images)
  * @type {number}
  * @memberof LicenseContainer
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(eLights.OFF)
  light: number

  /**
  * @internal
  * @type {number}
  * @memberof LicenseContainer
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(0)
  list_idx: number

  /**
  * Page index (when working with multi-page document)
  * @type {number}
  * @memberof LicenseContainer
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(0)
  page_idx: number

  /**
  * @internal
  * @type {number}
  * @memberof LicenseContainer
  */
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
