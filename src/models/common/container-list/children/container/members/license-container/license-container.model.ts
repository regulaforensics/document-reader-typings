import { IsBase64, IsDefined, IsEnum, IsIn, IsInt, IsString, validateSync } from 'class-validator'
import { Expose, instanceToPlain, plainToClass } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eLights, eResultType } from '@/consts'
import { Default } from '@/decorators'
import { aContainer } from '../../container.abstract'
import { ProcessResponse } from '@/models'


/**
* Result type of LicenseContainer
*/
export type tLicenseContainerResultType = eResultType.LICENSE

/**
* Result type of LicenseContainer
* @type {tLicenseContainerResultType[]}
*/
export const LicenseContainerResultTypes: tLicenseContainerResultType[] = [
  eResultType.LICENSE,
]

/**
* Container for License base64 string
*/
export interface iLicenseContainer extends aContainer {
  /**
  * License base64 encoded string
  * @type {string}
  */
  License: string

  /**
  * Result type stored in this container
  * @type {tLicenseContainerResultType}
  */
  result_type: tLicenseContainerResultType
}

/**
* Container for License
*/
export class LicenseContainer extends aContainer implements iLicenseContainer {
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
  * Result type stored in this container
  * @type {tLicenseContainerResultType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn(LicenseContainerResultTypes)
  result_type: tLicenseContainerResultType

  /**
  * License base64 encoded string
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  @IsBase64()
  License: string

  /**
  * Creates an instance of LicenseContainer from plain object
  *
  * @param {unknown} input - plain object
  * @returns {LicenseContainer}
  */
  static fromPlain = (input: unknown): LicenseContainer => plainToClass(LicenseContainer, input)

  /**
  * Get LicenseContainer from ProcessResponse
  * @param {ProcessResponse} input - ProcessResponse object
  * @param {boolean} asPlain - return as plain object
  * @returns {(LicenseContainer|iLicenseContainer)[]}
  */
  static fromProcessResponse(input: ProcessResponse, asPlain: true): iLicenseContainer[];
  static fromProcessResponse(input: ProcessResponse, asPlain?: false): LicenseContainer[];
  static fromProcessResponse(input: ProcessResponse, asPlain: boolean = false): (LicenseContainer|iLicenseContainer)[] {
    const { ContainerList } = input

    const result = ContainerList.List.filter((container): container is LicenseContainer =>
      LicenseContainerResultTypes.includes(<tLicenseContainerResultType>container.result_type)
    )

    if (asPlain) {
      return result.map((container) => instanceToPlain(container, { strategy: 'excludeAll' }) as iLicenseContainer)
    }

    return result
  }

  /**
  * Check if the given instance of LicenseContainer is valid
  *
  * @param {LicenseContainer} instance - instance of LicenseContainer to be checked
  * @throws {DocReaderTypeError} - if the given instance of LicenseContainer is not valid
  * @returns {true | never} - true if the given instance of LicenseContainer is valid
  */
  static validate = (instance: LicenseContainer): true | never => {
    const errors = validateSync(instance)

    if (errors.length) {
      throw new DocReaderTypeError('LicenseContainer validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
