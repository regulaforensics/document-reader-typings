import { IsDefined, IsEnum, IsString, validateSync, ValidationError } from 'class-validator'
import { Expose, plainToClass } from 'class-transformer'

import { eCheckResult, eLCID } from '@/consts'
import { AllowPrimitives } from '@/types'

/**
 * Single text field value with check result
 */
export interface iRTextFieldValue {
  /**
   * Value of the text field
   * @type {string}
   */
  value: string

  /**
   * Status of check
   * @type {eCheckResult}
   */
  status: eCheckResult

  /**
   * LCID
   * @type {eLCID}
   */
  lcid: eLCID
}

/**
 * Single text field value with check result
 */
@Expose()
export class RTextFieldValue implements iRTextFieldValue {
  /**
   * Value of the text field
   * @type {string}
   */
  @IsDefined()
  @IsString()
  value: string

  /**
   * Status of check
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  status: eCheckResult

  @IsDefined()
  @IsEnum(eLCID)
  lcid: eLCID

  /**
   * Create instance of RTextFieldValue from plain object
   * @param {AllowPrimitives<iRTextFieldValue>} input
   * @returns {RTextFieldValue}
   */
  static fromPlain = (input: AllowPrimitives<iRTextFieldValue>): RTextFieldValue => plainToClass(RTextFieldValue, input)

  /**
   * Check if input is valid
   * @param {RTextFieldValue} input
   * @returns {boolean}
   */
  static getValidationErrors = (input: RTextFieldValue): ValidationError[] => validateSync(input)

  /**
   * Check if input is valid
   * @param {RTextFieldValue | RTextFieldValue[]} input - Array of RTextFieldValue or single RTextFieldValue
   * @returns {boolean}
   */
  static isValid = (input: RTextFieldValue | RTextFieldValue[]): boolean => {
    if (Array.isArray(input)) {
      return input.every((i) => RTextFieldValue.getValidationErrors(i).length === 0)
    }

    return RTextFieldValue.getValidationErrors(input).length === 0
  }
}
